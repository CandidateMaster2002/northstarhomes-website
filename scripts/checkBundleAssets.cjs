const fs = require('fs');
const files = fs.readdirSync('dist/assets').filter(f => f.startsWith('index-') && f.endsWith('.js'));
if (files.length > 0) {
  const content = fs.readFileSync('dist/assets/' + files[0], 'utf-8');
  const matches = content.match(/\/assets\/[^"'\s)]+\.webp/g);
  console.log('Sample webp assets in bundle:');
  console.log([...new Set(matches)].slice(0, 15));
}
