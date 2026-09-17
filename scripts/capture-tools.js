const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\GARV ANAND\\.gemini\\antigravity-ide\\brain\\6d6acb2c-0b2c-42db-91aa-cd7e7def0e1f';
const profileDir = path.join(artifactDir, 'scratch', 'chrome-profile-tools');

const shots = [
  { url: 'http://localhost:3000/tools?tab=goal', out: 'tools_01_goal_matcher.png', size: '1440,1100' },
  { url: 'http://localhost:3000/tools?tab=calories', out: 'tools_02_calories_macros.png', size: '1440,1100' },
  { url: 'http://localhost:3000/tools?tab=bmi', out: 'tools_03_bmi_perspective.png', size: '1440,1100' },
  { url: 'http://localhost:3000/tools?tab=hydration', out: 'tools_04_hydration.png', size: '1440,1100' },
  { url: 'http://localhost:3000/tools?tab=starter', out: 'tools_05_starter_guide.png', size: '1440,1100' },
  { url: 'http://localhost:3000/tools?tab=goal', out: 'tools_mobile_view.png', size: '390,950' }
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
  console.log('=== STARTING TOOLS SCREENSHOT CAPTURE ===');
  for (const s of shots) {
    console.log(`Warming up ${s.url}...`);
    const status = await warmUp(s.url);
    console.log(`Warmup status: ${status}`);

    const dest = path.join(artifactDir, s.out);
    const cmd = `"${chromePath}" --headless=new --disable-gpu --user-data-dir="${profileDir}" --window-size=${s.size} --screenshot="${dest}" "${s.url}"`;
    try {
      execSync(cmd, { stdio: 'pipe' });
      const exists = fs.existsSync(dest);
      const size = exists ? fs.statSync(dest).size : 0;
      console.log(`Captured ${s.out} -> Exists: ${exists}, Size: ${(size / 1024).toFixed(1)} KB`);
    } catch (err) {
      console.error(`Error capturing ${s.out}:`, err.message);
    }
  }
  console.log('=== ALL SCREENSHOTS CAPTURED ===');
}

run();
