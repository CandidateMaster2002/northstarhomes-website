import React from 'react';
import blogPosts from '../data/blogPostsFull.json';

export default function Journal() {
  const latestArticles = blogPosts.slice(0, 3);

  return (
    <section id="resources" className="py-20 max-[880px]:py-12 bg-white border-t border-line">
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6">
        
        <div className="flex flex-wrap gap-6 items-end justify-between mb-12">
          <div>
            <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-accent block mb-2 font-body">
              Publications & Insights
            </span>
            <h2 className="font-heading text-[clamp(32px,3.4vw,46px)] leading-[1.15] text-ink font-normal">
              Journal &amp; Resources
            </h2>
          </div>
          <a
            href="#blogs"
            className="text-[13px] tracking-[0.14em] uppercase border-b border-accent pb-[5px] font-semibold text-ink hover:text-accent transition-colors"
          >
            All 59 Articles →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-[#F9FBFC] rounded-2xl border border-line overflow-hidden hover:shadow-md transition-all flex flex-col group"
            >
              <a 
                href={`#blog/${article.slug}`}
                className="block aspect-[16/5.2] overflow-hidden bg-white border-b border-line flex items-center justify-center px-2 py-1"
              >
                <img
                  src={article.featured_image}
                  alt={article.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/hero-image-watermark-removed.webp';
                  }}
                />
              </a>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-2 font-body font-semibold">
                    {article.date}
                  </p>
                  <h3 className="font-heading text-[20px] leading-[1.3] mb-3 text-ink font-normal group-hover:text-accent transition-colors line-clamp-2">
                    <a href={`#blog/${article.slug}`}>
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed line-clamp-3 font-body mb-5">
                    {article.excerpt}
                  </p>
                </div>

                <a
                  href={`#blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.14em] font-semibold text-accent hover:text-ink transition-colors font-body mt-auto pt-4 border-t border-line/60"
                  aria-label={`Read: ${article.title}`}
                >
                  <span>Read Article</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
