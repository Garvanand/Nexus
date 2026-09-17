async function test() {
  const res = await fetch('http://127.0.0.1:9222/json/list');
  const list = await res.json();
  if (!list || list.length === 0) {
    console.log('No Chrome target found');
    return;
  }
  const ws = new WebSocket(list[0].webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  
  let id = 1;
  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    const handler = (e) => {
      const d = JSON.parse(e.data);
      if (d.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(d.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const w = document.querySelector(".nav__mobile-btn-whatsapp");
      const b1 = document.querySelector(".nav__mobile-branch-btn");
      const spanW = w ? w.querySelector("span") : null;
      return JSON.stringify({
        wRect: w ? w.getBoundingClientRect() : null,
        spanWRect: spanW ? spanW.getBoundingClientRect() : null,
        spanWText: spanW ? spanW.textContent : null,
        spanWVisible: spanW ? (spanW.offsetWidth > 0 && spanW.offsetHeight > 0) : null,
        b1Rect: b1 ? b1.getBoundingClientRect() : null,
        b1Text: b1 ? b1.textContent : null,
        b1Style: b1 ? {
          color: getComputedStyle(b1).color,
          bg: getComputedStyle(b1).backgroundColor,
          font: getComputedStyle(b1).font,
          opacity: getComputedStyle(b1).opacity,
          visibility: getComputedStyle(b1).visibility
        } : null
      }, null, 2);
    })()`
  });

  console.log(evalRes.result.value);
  ws.close();
}

test().catch(console.error);
