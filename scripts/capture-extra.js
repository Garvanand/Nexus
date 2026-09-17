const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\GARV ANAND\\.gemini\\antigravity-ide\\brain\\6d6acb2c-0b2c-42db-91aa-cd7e7def0e1f';
const profileDir = path.join(artifactDir, 'scratch', 'chrome-profile');

const extraShots = [
  { url: 'http://localhost:3000/training', out: 'next_training_quiz.png', size: '1440,2200' },
  { url: 'http://localhost:3000/join', out: 'next_join_desktop.png', size: '1440,1100' }
];

for (const s of extraShots) {
  const dest = path.join(artifactDir, s.out);
  const cmd = `"${chromePath}" --headless=new --disable-gpu --user-data-dir="${profileDir}" --window-size=${s.size} --screenshot="${dest}" "${s.url}"`;
  execSync(cmd, { stdio: 'pipe' });
  console.log(s.out, 'created:', fs.existsSync(dest), 'bytes:', fs.existsSync(dest) ? fs.statSync(dest).size : 0);
}
