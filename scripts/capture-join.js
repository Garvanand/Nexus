const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\GARV ANAND\\.gemini\\antigravity-ide\\brain\\6d6acb2c-0b2c-42db-91aa-cd7e7def0e1f';
const profileDir = path.join(artifactDir, 'scratch', 'chrome-profile-join-all');

const shots = [
  { url: 'http://localhost:3000/join?step=1', out: 'join_step1_branch.png', size: '1440,1100' },
  { url: 'http://localhost:3000/join?step=2', out: 'join_step2_interest.png', size: '1440,1100' },
  { url: 'http://localhost:3000/join?step=3', out: 'join_step3_details.png', size: '1440,1100' },
  { url: 'http://localhost:3000/join?step=1', out: 'join_mobile.png', size: '390,950' }
];

for (const s of shots) {
  const dest = path.join(artifactDir, s.out);
  const cmd = `"${chromePath}" --headless=new --disable-gpu --user-data-dir="${profileDir}" --window-size=${s.size} --screenshot="${dest}" "${s.url}"`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Captured ${s.out}:`, fs.existsSync(dest), fs.existsSync(dest) ? fs.statSync(dest).size : 0);
  } catch (err) {
    console.error(`Error ${s.out}:`, err.message);
  }
}
