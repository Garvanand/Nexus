const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\GARV ANAND\\.gemini\\antigravity-ide\\brain\\6d6acb2c-0b2c-42db-91aa-cd7e7def0e1f';
const profileDir = path.join(artifactDir, 'scratch', 'chrome-profile');

const shots = [
  { url: 'http://localhost:3000/locations/sector-85', out: 'locations_sector_85_full.png', size: '1440,3600' },
  { url: 'http://localhost:3000/locations/sector-86', out: 'locations_sector_86_full.png', size: '1440,3600' },
  { url: 'http://localhost:3000/locations/sector-86', out: 'locations_sector_86_mobile.png', size: '390,2400' }
];

function warmUp(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(res.statusCode));
    }).on('error', () => resolve(null));
  });
}

async function run() {
  for (const s of shots) {
    console.log(`Warming up ${s.url}...`);
    const status = await warmUp(s.url);
    console.log(`Warmup status: ${status}`);
    
    await new Promise(r => setTimeout(r, 1000));

    const dest = path.join(artifactDir, s.out);
    const cmd = `"${chromePath}" --headless=new --disable-gpu --user-data-dir="${profileDir}" --window-size=${s.size} --screenshot="${dest}" "${s.url}"`;
    try {
      execSync(cmd, { stdio: 'pipe' });
      console.log(s.out, 'created:', fs.existsSync(dest), 'bytes:', fs.existsSync(dest) ? fs.statSync(dest).size : 0);
    } catch (err) {
      console.error('Error capturing', s.url, err.message);
    }
  }
}

run();
