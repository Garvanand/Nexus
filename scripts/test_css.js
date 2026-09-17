const http = require('http');

async function test() {
  const res = await fetch('http://localhost:3000');
  const html = await res.text();
  const cssMatches = [...html.matchAll(/href="([^"]+\.css[^"]*)"/g)];
  console.log('Found CSS links:', cssMatches.map(m => m[1]));

  for (const match of cssMatches) {
    const url = 'http://localhost:3000' + match[1];
    const cssRes = await fetch(url);
    console.log(url, 'Status:', cssRes.status, 'Type:', cssRes.headers.get('content-type'));
    const body = await cssRes.text();
    console.log('Body length:', body.length, 'Is CSS?:', body.startsWith('@') || body.startsWith(':') || body.includes('--nexus'));
    if (!body.includes('--nexus')) {
      console.log('Sample body:', body.slice(0, 200));
    }
  }
}

test().catch(console.error);
