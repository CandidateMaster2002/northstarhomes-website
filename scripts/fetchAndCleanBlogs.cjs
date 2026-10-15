const https = require('https');
const fs = require('fs');
const path = require('path');

function decodeEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#038;/g, '&')
    .replace(/&#39;/g, "'");
}

function removeEmojis(str) {
  if (!str) return '';
  const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{200D}]/gu;
  return str.replace(emojiRegex, '');
}

function wrapLooseText(html) {
  const blocks = html.split(/(<\/?(?:h[1-6]|ul|ol|li|blockquote|p)[^>]*>)/i);
  let inBlock = false;
  let result = [];
  for (let i = 0; i < blocks.length; i++) {
    const chunk = blocks[i];
    if (/^<(h[1-6]|ul|ol|li|blockquote|p)/i.test(chunk)) {
      inBlock = true;
      result.push(chunk);
    } else if (/^<\/(h[1-6]|ul|ol|li|blockquote|p)/i.test(chunk)) {
      inBlock = false;
      result.push(chunk);
    } else if (!inBlock) {
      const trimmed = chunk.trim();
      if (trimmed) {
        result.push(`<p>${trimmed}</p>`);
      }
    } else {
      result.push(chunk);
    }
  }
  return result.join('\n\n');
}

function cleanHtmlContent(rawHtml) {
  if (!rawHtml) return '';

  let html = rawHtml;

  // 1. Remove comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  // 2. Remove tables completely (user requirement: no table)
  html = html.replace(/<table[\s\S]*?<\/table>/gi, '');

  // 3. Remove all embedded images, figures, SVGs, audio, video, iframes inside content
  // (user requirement: one photo in starting then content written organised in para diff types of heading nothing else)
  html = html.replace(/<figure[\s\S]*?<\/figure>/gi, '');
  html = html.replace(/<img[^>]*>/gi, '');
  html = html.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  html = html.replace(/<video[\s\S]*?<\/video>/gi, '');
  html = html.replace(/<audio[\s\S]*?<\/audio>/gi, '');
  html = html.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');

  // 4. Strip scripts and styles
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');

  // 5. Unwrap buttons inside accordion/headings
  html = html.replace(/<button[^>]*>([\s\S]*?)<\/button>/gi, '$1');

  // 6. Strip all <div> and <span> tags
  html = html.replace(/<\/?div[^>]*>/gi, '');
  html = html.replace(/<\/?span[^>]*>/gi, '');

  // 7. Strip all attributes from tags except href from <a>
  html = html.replace(/<([a-z0-9]+)(?:\s+[^>]*?)>/gi, (match, tag) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag === 'a') {
      const hrefMatch = match.match(/href=(["'])(.*?)\1/i);
      if (hrefMatch && hrefMatch[2]) {
        return `<a href="${hrefMatch[2]}" target="_blank" rel="noopener noreferrer">`;
      }
      return '<a>';
    }
    return `<${lowerTag}>`;
  });

  // 8. Wrap any loose text in <p>
  html = wrapLooseText(html);

  // 9. Remove emojis
  html = removeEmojis(html);

  // 10. Decode HTML entities
  html = decodeEntities(html);

  // 11. Remove empty tags (paragraphs, headings)
  for (let i = 0; i < 4; i++) {
    html = html.replace(/<p>\s*(&nbsp;|\s)*<\/p>/gi, '');
    html = html.replace(/<h[1-6]>\s*(&nbsp;|\s)*<\/h[1-6]>/gi, '');
    html = html.replace(/<b>\s*<\/b>/gi, '');
    html = html.replace(/<strong>\s*<\/strong>/gi, '');
    html = html.replace(/<a>\s*<\/a>/gi, '');
  }

  // 12. Clean up extra whitespace inside headings and paragraphs
  html = html.replace(/<h([1-6])>\s*([\s\S]*?)\s*<\/h\1>/gi, (m, level, content) => {
    const trimmed = content.replace(/\s+/g, ' ').trim();
    return `<h${level}>${trimmed}</h${level}>`;
  });

  html = html.replace(/<p>\s*([\s\S]*?)\s*<\/p>/gi, (m, content) => {
    const trimmed = content.trim();
    return trimmed ? `<p>${trimmed}</p>` : '';
  });

  // 13. Trim excess newlines
  html = html.replace(/\n\s*\n\s*\n+/g, '\n\n').trim();

  return html;
}

function extractFirstImage(content) {
  if (!content) return null;
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

https.get('https://northstarhomes.in/blog/wp-json/wp/v2/posts?per_page=100&_embed=true', (res) => {
  let raw = '';
  res.on('data', chunk => raw += chunk);
  res.on('end', () => {
    try {
      const posts = JSON.parse(raw);
      console.log(`Fetched ${posts.length} posts from WordPress API`);

      const processed = posts.map((p, index) => {
        const title = decodeEntities(removeEmojis(p.title?.rendered || 'Untitled')).trim();
        const featured_media = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        const inlineImage = extractFirstImage(p.content?.rendered);
        const image = featured_media || inlineImage || 'https://northstarhomes.in/blog/wp-content/uploads/2026/03/gallery-2.avif';

        const cleanedContent = cleanHtmlContent(p.content?.rendered || '');

        // Generate excerpt from cleaned content without HTML tags
        const plainText = cleanedContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        const excerpt = plainText.slice(0, 180) + (plainText.length > 180 ? '...' : '');

        // Format date: e.g. "March 13, 2026"
        let formattedDate = '';
        if (p.date) {
          try {
            const d = new Date(p.date);
            formattedDate = d.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
          } catch (e) {
            formattedDate = p.date.split('T')[0];
          }
        }

        return {
          id: p.id,
          slug: p.slug,
          index: index + 1,
          title,
          date: formattedDate,
          rawDate: p.date,
          featured_image: image,
          excerpt,
          content: cleanedContent
        };
      });

      const outPath = path.join(__dirname, '..', 'src', 'data', 'blogPostsFull.json');
      fs.writeFileSync(outPath, JSON.stringify(processed, null, 2), 'utf-8');
      console.log(`Successfully saved ${processed.length} cleaned blog posts to ${outPath}`);
    } catch (e) {
      console.error('Error processing posts:', e);
    }
  });
}).on('error', err => {
  console.error('Network error fetching posts:', err);
});
