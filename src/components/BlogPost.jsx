import React, { useState, useEffect, useMemo } from 'react';
import blogPosts from '../data/blogPostsFull.json';

export default function BlogPost({ slug }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [slug]);

  // Find post by slug or index
  const { post, prevPost, nextPost } = useMemo(() => {
    const index = blogPosts.findIndex(
      (p) => p.slug === slug || String(p.id) === String(slug)
    );
    if (index === -1) {
      return { post: blogPosts[0], prevPost: null, nextPost: blogPosts[1] || null };
    }
    return {
      post: blogPosts[index],
      prevPost: index > 0 ? blogPosts[index - 1] : null,
      nextPost: index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
    };
  }, [slug]);

  // Compute estimated reading time
  const readTime = useMemo(() => {
    if (!post?.content) return '4 min read';
    const text = post.content.replace(/<[^>]+>/g, '');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} min read`;
  }, [post]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-[#F9FBFC] pt-32 pb-20 px-6 text-center">
        <h1 className="text-3xl font-heading text-ink mb-4">Post Not Found</h1>
        <p className="text-muted mb-8">The requested blog article could not be found.</p>
        <a
          href="#blogs"
          className="inline-block px-8 py-3 bg-[#0B6FB5] text-white text-sm uppercase tracking-wider font-semibold rounded-full hover:bg-[#07294A] transition-colors"
        >
          View All Blogs
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-ink">

      {/* ─────────────────────────────────────────────────────────────
          TOP NAVIGATION BAR (Breadcrumbs & Back button above hero image)
          pt-24 sm:pt-28 lg:pt-32 ensures clear separation below the fixed Header (no overlap/coinciding).
      ───────────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="bg-[#07294A] border-b border-white/10 text-white pt-24 sm:pt-28 lg:pt-30 pb-4 sm:pb-5">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-body font-semibold text-[#8FA7BD]">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <span className="opacity-60">/</span>
            <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
            <span className="opacity-60">/</span>
            <span className="text-white truncate max-w-[200px] sm:max-w-[420px]">
              {post.title}
            </span>
          </div>

          <a
            href="#blogs"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] font-semibold text-[#C7DCED] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </a>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          CINEMATIC HERO FEATURED IMAGE
          - Clean, 100% uncovered from above
          - object-top ensures logos/headers at top of image are never cropped
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#07294A] border-b border-line overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-auto max-h-[560px] object-cover object-top block"
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/hero-image-watermark-removed.webp';
            }}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ARTICLE CONTAINER: TITLE & METADATA IN PLACE OF THE IMAGE
      ───────────────────────────────────────────────────────────── */}
      <article className="max-w-[920px] mx-auto px-6 sm:px-10 py-12 lg:py-16">
        
        {/* ARTICLE HEADER (IN PLACE OF THE IMAGE) */}
        <header className="mb-12 pb-8 border-b border-line">
          
          {/* Category Chip & Read Time */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] tracking-[0.22em] uppercase font-body font-bold text-accent bg-[#EEF5FB] px-3.5 py-1 rounded-full border border-[#D8E6F2]">
              Real Estate & Architecture
            </span>
            <span className="text-muted text-[13px] font-body flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime}
            </span>
          </div>

          {/* Stately Article Title */}
          <h1 className="text-[30px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-[1.18] mb-6">
            {post.title}
          </h1>

          {/* Author Attribution, Published Date & Share Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#07294A] text-white flex items-center justify-center font-heading text-[16px] font-bold">
                N
              </div>
              <div>
                <span className="text-[13px] sm:text-[14px] font-body font-semibold text-ink block">
                  Northstar Homes Editorial
                </span>
                <span className="text-[12px] font-body text-muted block">
                  Published on {post.date}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F8FAFC] border border-line text-[12px] tracking-[0.12em] uppercase font-semibold text-ink hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {copied ? 'Copied Link!' : 'Share Article'}
            </button>
          </div>

        </header>

        {/* Prose Content */}
        <div
          className="blog-prose font-body text-[#1A2E44] text-[16px] sm:text-[17px] leading-[1.85] space-y-6 [&_h2]:font-heading [&_h2]:text-[26px] [&_h2]:sm:text-[32px] [&_h2]:font-normal [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-[1.25] [&_h2]:border-b [&_h2]:border-line [&_h2]:pb-3 [&_h3]:font-heading [&_h3]:text-[21px] [&_h3]:sm:text-[24px] [&_h3]:font-normal [&_h3]:text-ink [&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:leading-[1.3] [&_h4]:font-heading [&_h4]:text-[18px] [&_h4]:sm:text-[20px] [&_h4]:text-ink [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:mb-5 [&_p]:text-muted [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2 [&_li]:text-muted [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:text-ink [&_blockquote]:my-6 [&_a]:text-accent [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-ink [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Next / Previous Post Navigation */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-stretch gap-6">
          {prevPost ? (
            <a
              href={`#blog/${prevPost.slug}`}
              className="flex-1 p-5 rounded-xl border border-line bg-[#F9FBFC] hover:border-accent hover:bg-white transition-all group"
            >
              <span className="block text-[11px] tracking-[0.16em] uppercase font-semibold text-muted mb-1 group-hover:text-accent">
                ← Previous Article
              </span>
              <span className="text-[15px] font-heading font-medium text-ink line-clamp-2">
                {prevPost.title}
              </span>
            </a>
          ) : <div className="flex-1" />}

          {nextPost && (
            <a
              href={`#blog/${nextPost.slug}`}
              className="flex-1 p-5 rounded-xl border border-line bg-[#F9FBFC] hover:border-accent hover:bg-white transition-all text-right group"
            >
              <span className="block text-[11px] tracking-[0.16em] uppercase font-semibold text-muted mb-1 group-hover:text-accent">
                Next Article →
              </span>
              <span className="text-[15px] font-heading font-medium text-ink line-clamp-2">
                {nextPost.title}
              </span>
            </a>
          )}
        </div>

      </article>

    </main>
  );
}
