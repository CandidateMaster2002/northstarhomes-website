const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'assets', 'AllLogosColorfulWEBP');
const destDir = path.join(__dirname, '..', 'src', 'assets', 'project-logos');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'Sanctuary.webp': 'sanctuary.webp',
  'Northstar_Distrcit 1.webp': 'district1.webp',
  'Northstar_Hillside.webp': 'hillside.webp',
  'Northstar_Veda.webp': 'veda.webp',
  'Northstar_Eden Gardens.webp': 'eden-gardens.webp',
  'Northstar_Leela.webp': 'leela.webp',
  'Northstar_Amgplaza.webp': 'amg-plaza.webp',
  'Northstar_Gardensuits.webp': 'garden-suites.webp',
  'Norhstar_Allura.webp': 'allura.webp',
  'Northstar_Palacio.webp': 'palacio.webp',
  'Northstar_Parkave.webp': 'park-avenue.webp',
  'Golden Valley Logo Final Approved.webp': 'golden-valley.webp',
  'Northsatr_Airport.webp': 'airport-boulevard.webp',
  'Northstar_Mangogrove.webp': 'mango-grove.webp'
};

for (const [srcFile, destFile] of Object.entries(mapping)) {
  const from = path.join(srcDir, srcFile);
  const to = path.join(destDir, destFile);
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, to);
    console.log(`Copied logo: ${srcFile} -> src/assets/project-logos/${destFile}`);
  }
}
