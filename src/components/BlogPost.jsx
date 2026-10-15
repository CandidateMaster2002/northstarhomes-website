import React, { useEffect, useMemo } from 'react';
import blogPosts from '../data/blogPostsFull.json';

export default function BlogPost({ slug }) {
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
          COMPACT ARTICLE HEADER & BREADCRUMBS
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#07294A] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-[920px] mx-auto px-6 sm:px-10 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-body font-semibold text-[#8FA7BD] mb-5">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
            <span>/</span>
            <span className="text-white truncate max-w-[280px] sm:max-w-[420px]">
              {post.title}
            </span>
          </div>

          {/* Date stamp */}
          <div className="text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-body font-medium text-[#4FA3E3] mb-3">
            {post.date}
          </div>

          {/* Article Title */}
          <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-heading font-normal text-white leading-[1.2] mb-6">
            {post.title}
          </h1>

          {/* Quick Back to Blogs Link */}
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
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ARTICLE BODY: ONE PHOTO IN STARTING, THEN CLEAN ORGANISED CONTENT
      ───────────────────────────────────────────────────────────── */}
      <article className="max-w-[920px] mx-auto px-6 sm:px-10 py-12 lg:py-16">
        
        {/* ONE PHOTO IN STARTING */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-line bg-[#F4F7F9] shadow-sm">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-auto object-cover block"
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/hero-image-watermark-removed.webp';
            }}
          />
        </div>

        {/* ORGANISED CONTENT: PARAGRAPHS & DIFFERENT HEADINGS */}
        <div
          className="blog-prose font-body text-[#1A2E44] text-[16px] sm:text-[17px] leading-[1.85] space-y-6 [&_h2]:font-heading [&_h2]:text-[26px] [&_h2]:sm:text-[32px] [&_h2]:font-normal [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-[1.25] [&_h2]:border-b [&_h2]:border-line [&_h2]:pb-3 [&_h3]:font-heading [&_h3]:text-[21px] [&_h3]:sm:text-[24px] [&_h3]:font-normal [&_h3]:text-ink [&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:leading-[1.3] [&_h4]:font-heading [&_h4]:text-[18px] [&_h4]:sm:text-[20px] [&_h4]:text-ink [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:mb-5 [&_p]:text-muted [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2 [&_li]:text-muted [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:text-ink [&_blockquote]:my-6 [&_a]:text-accent [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-ink [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ───────────────────────────────────────────────────────────
            NEXT / PREVIOUS POST NAVIGATION
        ─────────────────────────────────────────────────────────── */}
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
