const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'assets', 'Projects Images Webp');
const destDir = path.join(__dirname, '..', 'src', 'assets', 'projects');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'Allura Copy of Copy of DSC07879 copy.webp': 'allura.webp',
  'sp palacio.webp': 'sp-palacio.webp',
  'Sanctury Copy of Copy of DSC03014.webp': 'sanctuary.webp',
  'park avenue WhatsApp Image 2026-06-15 at 5.02.19 PM.webp': 'park-avenue.webp',
  'golden valley.webp': 'golden-valley.webp',
  'district1 143L3314.webp': 'district1.webp',
  'airport West Villa Front view.webp': 'airport-boulevard.webp',
  'Hill 143L5444.webp': 'hillside.webp',
  'veda.webp': 'veda.webp',
  'eden garden Copy of EG Building View_2.jpg.webp': 'eden-gardens.webp',
  'leela ext-corner-front-view.webp': 'leela.webp',
  'AMG.webp': 'amg-plaza.webp',
  'garden suites GS_G_978x418-3.webp': 'garden-suites.webp'
};

for (const [srcFile, destFile] of Object.entries(mapping)) {
  const from = path.join(srcDir, srcFile);
  const to = path.join(destDir, destFile);
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, to);
    console.log(`Copied ${srcFile} -> src/assets/projects/${destFile} (${fs.statSync(to).size} bytes)`);
  } else {
    console.error(`File NOT found: ${from}`);
  }
}
