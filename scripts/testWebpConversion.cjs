const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

async function run() {
  const sharp = (await import('sharp')).default;
  const posts = JSON.parse(fs.readFileSync('src/data/blogPostsFull.json', 'utf-8'));

  const testPosts = posts.slice(0, 5);

  for (const p of testPosts) {
    const imgUrl = p.featured_image;
    console.log(`Downloading post ${p.id}: ${imgUrl}`);
    const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
    const tempFile = path.join('src/assets/blogs', `temp_${p.id}${ext}`);
    const webpFile = path.join('src/assets/blogs', `blog_${p.id}.webp`);

    await new Promise((resolve, reject) => {
      const client = imgUrl.startsWith('https') ? https : http;
      client.get(encodeURI(imgUrl), (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          client.get(encodeURI(res.headers.location), (res2) => {
            const stream = fs.createWriteStream(tempFile);
            res2.pipe(stream);
            stream.on('finish', resolve);
            stream.on('error', reject);
          });
        } else {
          const stream = fs.createWriteStream(tempFile);
          res.pipe(stream);
          stream.on('finish', resolve);
          stream.on('error', reject);
        }
      }).on('error', reject);
    });

    const origSize = fs.statSync(tempFile).size;
    const meta = await sharp(tempFile).metadata();

    // Convert full banner to WebP (max width 1200)
    await sharp(tempFile)
      .resize({ width: Math.min(1200, meta.width), fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpFile);

    const webpSize = fs.statSync(webpFile).size;
    fs.unlinkSync(tempFile);

    console.log(`Post ${p.id} (${meta.width}x${meta.height}): Original ${(origSize/1024).toFixed(1)} KB -> WebP ${(webpSize/1024).toFixed(1)} KB (-${((1 - webpSize/origSize)*100).toFixed(0)}%)`);
  }
}

run().catch(console.error);
