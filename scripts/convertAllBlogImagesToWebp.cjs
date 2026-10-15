const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

async function downloadAndConvertAll() {
  const sharp = (await import('sharp')).default;
  const postsPath = path.join(__dirname, '..', 'src', 'data', 'blogPostsFull.json');
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));
  const outDir = path.join(__dirname, '..', 'public', 'blog-images');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log(`Starting WebP conversion for ${posts.length} blog images...`);

  let totalOrigBytes = 0;
  let totalWebpBytes = 0;

  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const imgUrl = p.featured_image;
    const filename = `blog-${p.id}.webp`;
    const webpPath = path.join(outDir, filename);
    const publicUrl = `/blog-images/${filename}`;

    try {
      const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
      const tempPath = path.join(outDir, `temp-${p.id}${ext}`);

      // Download original
      await new Promise((resolve, reject) => {
        const client = imgUrl.startsWith('https') ? https : http;
        client.get(encodeURI(imgUrl), (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            client.get(encodeURI(res.headers.location), (res2) => {
              const stream = fs.createWriteStream(tempPath);
              res2.pipe(stream);
              stream.on('finish', resolve);
              stream.on('error', reject);
            });
          } else if (res.statusCode === 200) {
            const stream = fs.createWriteStream(tempPath);
            res.pipe(stream);
            stream.on('finish', resolve);
            stream.on('error', reject);
          } else {
            reject(new Error(`Status ${res.statusCode} for ${imgUrl}`));
          }
        }).on('error', reject);
      });

      const origSize = fs.statSync(tempPath).size;
      totalOrigBytes += origSize;

      const meta = await sharp(tempPath).metadata();

      // Convert to WebP, max width 1280
      await sharp(tempPath)
        .resize({ width: Math.min(1280, meta.width), fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      totalWebpBytes += webpSize;

      fs.unlinkSync(tempPath);

      // Update post image to local optimized webp URL
      p.featured_image = publicUrl;

      console.log(`[${i + 1}/${posts.length}] Post ${p.id}: ${(origSize / 1024).toFixed(0)}KB -> ${(webpSize / 1024).toFixed(0)}KB WebP (-${((1 - webpSize / origSize) * 100).toFixed(0)}%)`);
    } catch (err) {
      console.error(`Failed to process post ${p.id} (${imgUrl}):`, err.message);
      // Fallback
      p.featured_image = p.featured_image || '/assets/hero-image-watermark-removed.webp';
    }
  }

  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2), 'utf-8');

  console.log('\n--- Conversion Summary ---');
  console.log(`Original total size: ${(totalOrigBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`WebP total size:     ${(totalWebpBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total data saved:    ${((1 - totalWebpBytes / totalOrigBytes) * 100).toFixed(1)}% reduction!`);
}

downloadAndConvertAll().catch(console.error);
