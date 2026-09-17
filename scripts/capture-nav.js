const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\GARV ANAND\\.gemini\\antigravity-ide\\brain\\6d6acb2c-0b2c-42db-91aa-cd7e7def0e1f';

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

async function runSession(windowSize, isMobile, runFn) {
  const profileDir = path.join(artifactDir, 'scratch', `chrome-profile-${isMobile ? 'mob' : 'desk'}`);
  const proc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    `--window-size=${windowSize}`,
    `--user-data-dir=${profileDir}`,
    'http://localhost:3000'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const res = await fetch('http://127.0.0.1:9222/json/list');
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
  await new Promise(resolve => ws.addEventListener('open', resolve));
  await sendCDP(ws, 'Page.enable');
  await sendCDP(ws, 'Runtime.enable');

  await runFn(ws);

  ws.close();
  proc.kill();
  // Wait for port release
  await new Promise(r => setTimeout(r, 1000));
}

async function main() {
  // 1. Desktop Session (1440x900)
  console.log('=== DESKTOP SESSION (1440x900) ===');
  await runSession('1440,900', false, async (ws) => {
    await new Promise(r => setTimeout(r, 1500));

    // A. Transparent Hero Nav
    console.log('Capturing Desktop Hero (Transparent)...');
    let shot = await sendCDP(ws, 'Page.captureScreenshot', {
      captureBeyondViewport: false
    });
    fs.writeFileSync(path.join(artifactDir, 'nav_desktop_hero_transparent.png'), Buffer.from(shot.data, 'base64'));

    // B. Scroll down 400px to trigger dense sticky nav
    console.log('Scrolling down to trigger dense sticky nav...');
    await sendCDP(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0, 450);' });
    await new Promise(r => setTimeout(r, 600));

    let shotScrolled = await sendCDP(ws, 'Page.captureScreenshot', {
      captureBeyondViewport: false
    });
    fs.writeFileSync(path.join(artifactDir, 'nav_desktop_scrolled_dense.png'), Buffer.from(shotScrolled.data, 'base64'));
    console.log('Desktop shots captured.');
  });

  // 2. Mobile Session (390x844)
  console.log('=== MOBILE SESSION (390x844) ===');
  await runSession('390,844', true, async (ws) => {
    await new Promise(r => setTimeout(r, 1500));

    // A. Mobile Header with persistent CTA & Hamburger
    console.log('Capturing Mobile Header...');
    let shotHeader = await sendCDP(ws, 'Page.captureScreenshot', {
      captureBeyondViewport: false
    });
    fs.writeFileSync(path.join(artifactDir, 'nav_mobile_header.png'), Buffer.from(shotHeader.data, 'base64'));

    // B. Click Hamburger button to open full-screen menu
    console.log('Clicking Hamburger to open Fullscreen Menu...');
    await sendCDP(ws, 'Runtime.evaluate', {
      expression: 'document.getElementById("mobile-menu-btn").click();'
    });
    await new Promise(r => setTimeout(r, 500));

    let shotMenu = await sendCDP(ws, 'Page.captureScreenshot', {
      captureBeyondViewport: false
    });
    fs.writeFileSync(path.join(artifactDir, 'nav_mobile_menu_open.png'), Buffer.from(shotMenu.data, 'base64'));
    console.log('Mobile shots captured.');
  });

  console.log('All navigation screenshots captured successfully!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
