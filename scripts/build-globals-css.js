const fs = require('fs');
const path = require('path');

const cssFiles = [
  'css/design-system.css',
  'css/sections.css',
  'css/experience.css',
  'css/facilities.css',
  'css/social-proof.css',
  'css/lead-flow.css',
  'css/instagram-feed.css',
  'css/training.css',
  'css/classes.css',
  'css/whatsapp-cta.css',
  'css/tools.css'
];

let combined = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');\n\n";

for (const relPath of cssFiles) {
  const fullPath = path.join(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/@import\s+url\([^)]+\);?/g, '');
    combined += `/* === ${relPath} === */\n` + content + '\n\n';
  }
}

const targetDir = path.join(__dirname, '..', 'src', 'app');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetFile = path.join(targetDir, 'globals.css');
fs.writeFileSync(targetFile, combined, 'utf8');
console.log('src/app/globals.css created successfully. Bytes:', fs.statSync(targetFile).size);
