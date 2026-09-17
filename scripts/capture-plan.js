const { execSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\GARV ANAND\\.gemini\\antigravity-ide\\brain\\6d6acb2c-0b2c-42db-91aa-cd7e7def0e1f';
const profileDir = path.join(artifactDir, 'scratch', 'chrome-profile');

const dest = path.join(artifactDir, 'plan_your_visit_card.png');
// We can use a window size that covers the bottom of the page
const cmd = `"${chromePath}" --headless=new --disable-gpu --user-data-dir="${profileDir}" --window-size=1440,4200 --screenshot="${dest}" "http://localhost:3000/locations/sector-85"`;

try {
  execSync(cmd, { stdio: 'pipe' });
  console.log('plan_your_visit_card.png captured');
} catch (e) {
  console.error(e.message);
}
