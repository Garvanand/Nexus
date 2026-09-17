const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\GARV ANAND\\.gemini\\antigravity-ide\\brain\\6d6acb2c-0b2c-42db-91aa-cd7e7def0e1f';
const profileDir = path.join(artifactDir, 'scratch', 'chrome-profile');

const shots = [
  { url: 'http://localhost:3000/', out: 'next_home_desktop.png', size: '1440,900' },
  { url: 'http://localhost:3000/training', out: 'next_training_desktop.png', size: '1440,900' },
  { url: 'http://localhost:3000/classes', out: 'next_classes_desktop.png', size: '1440,900' },
  { url: 'http://localhost:3000/loc/sector-85', out: 'next_branch_sector85.png', size: '1440,900' },
  { url: 'http://localhost:3000/', out: 'next_mobile_home.png', size: '390,844' }
];

for (const s of shots) {
  const dest = path.join(artifactDir, s.out);
  const cmd = `"${chromePath}" --headless=new --disable-gpu --user-data-dir="${profileDir}" --window-size=${s.size} --screenshot="${dest}" "${s.url}"`;
  try {
    execSync(cmd, { stdio: 'pipe', timeout: 15000 });
    console.log(s.out, 'created:', fs.existsSync(dest), 'bytes:', fs.existsSync(dest) ? fs.statSync(dest).size : 0);
  } catch (err) {
    console.error(s.out, 'error:', err.message);
  }
}
