const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\GARV ANAND\\.gemini\\antigravity-ide\\brain\\6d6acb2c-0b2c-42db-91aa-cd7e7def0e1f';
const profileDir = path.join(artifactDir, 'scratch', 'chrome-profile-join-steps');

async function sendCDP(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = Math.floor(Math.random() * 1000000);
    const msg = JSON.stringify({ id, method, params });
    const handler = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === id) {
        ws.removeEventListener('message', handler);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(msg);
  });
}

async function run() {
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--disable-gpu',
    '--window-size=1440,1100',
    `--user-data-dir=${profileDir}`,
    'http://localhost:3000/join'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const res = await fetch('http://127.0.0.1:9224/json/list');
      const list = await res.json();
      if (list && list.length > 0) {
        wsUrl = list[0].webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  if (!wsUrl) {
    proc.kill();
    throw new Error('Could not connect to Chrome CDP');
  }

  const ws = new WebSocket(wsUrl);
  await new Promise(r => ws.addEventListener('open', r));
  await sendCDP(ws, 'Page.enable');
  await sendCDP(ws, 'Runtime.enable');

  await new Promise(r => setTimeout(r, 1500));

  // Click Next to Step 2
  await sendCDP(ws, 'Runtime.evaluate', {
    expression: `
      const nextBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Next: Training Interest'));
      if (nextBtn) nextBtn.click();
    `
  });
  await new Promise(r => setTimeout(r, 500));
  let res = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'join_step2.png'), Buffer.from(res.data, 'base64'));
  console.log('Captured step 2');

  // Click Next to Step 3
  await sendCDP(ws, 'Runtime.evaluate', {
    expression: `
      const nextBtn2 = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Next: Your Details'));
      if (nextBtn2) nextBtn2.click();
    `
  });
  await new Promise(r => setTimeout(r, 500));
  res = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(artifactDir, 'join_step3.png'), Buffer.from(res.data, 'base64'));
  console.log('Captured step 3');

  ws.close();
  proc.kill();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
