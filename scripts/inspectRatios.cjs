const fs = require('fs');
const path = require('path');

async function inspect() {
  const sharp = (await import('sharp')).default;
  const posts = JSON.parse(fs.readFileSync('src/data/blogPostsFull.json', 'utf-8'));

  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const file = path.join('public', p.featured_image.replace(/^\//, ''));
    if (fs.existsSync(file)) {
      const meta = await sharp(file).metadata();
      const ratio = (meta.width / meta.height).toFixed(2);
      if (i < 15 || ratio < 2.5) {
        console.log(`[${i+1}] ID ${p.id}: ${meta.width}x${meta.height} (ratio: ${ratio}) - ${p.title.slice(0, 35)}`);
      }
    }
  }
}

inspect();
