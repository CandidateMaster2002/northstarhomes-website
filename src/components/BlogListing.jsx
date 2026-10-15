import React, { useState, useEffect, useMemo } from 'react';
import blogPosts from '../data/blogPostsFull.json';

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

  // Filter posts by search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return blogPosts;
    const q = searchQuery.toLowerCase();
    return blogPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-ink">
      
      {/* ─────────────────────────────────────────────────────────────
          HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#07294A] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
          
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-body font-semibold text-[#8FA7BD] mb-3">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#8FA7BD]">Resources</span>
            <span>/</span>
            <span className="text-white font-medium">Blogs</span>
          </div>

          <div className="max-w-[820px]">
            <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-heading font-normal text-white leading-[1.14] mb-4">
              Real Estate Insights & Architectural Perspectives
            </h1>
            <p className="text-[15px] sm:text-[17px] font-body font-light text-[#C7DCED] leading-relaxed mb-8">
              Explore thoughtful perspectives on residential developments, investment trends, locality guides, and architectural designs across Hyderabad and Visakhapatnam.
            </p>

            {/* Clean Search Input */}
            <div className="relative max-w-[480px]">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search across all 59 articles..."
                className="w-full px-5 py-3.5 pl-12 rounded-full bg-white text-ink text-[14px] font-body shadow-md border-0 focus:outline-none focus:ring-2 focus:ring-[#4FA3E3]"
              />
              <svg
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink text-xs font-semibold uppercase tracking-wider"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          BLOG POSTS GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 max-w-[1240px] mx-auto px-6 sm:px-10">
        
        {/* Count Summary */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
          <p className="text-[13px] tracking-[0.1em] uppercase font-body font-semibold text-muted">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
          </p>
          <p className="text-[13px] text-muted font-body">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* 59 Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* One Starting Thumbnail Photo (Full banner preserved, zero text clipping) */}
                <a
                  href={`#blog/${post.slug}`}
                  className="block relative overflow-hidden aspect-[16/5.2] bg-white border-b border-line flex items-center justify-center px-2 py-1"
                >
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/hero-image-watermark-removed.webp';
                    }}
                  />
                </a>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-muted mb-2 font-body">
                      {post.date}
                    </div>

                    <h2 className="text-[19px] font-heading font-normal text-ink leading-[1.3] mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      <a href={`#blog/${post.slug}`}>
                        {post.title}
                      </a>
                    </h2>

                    <p className="text-[14px] text-muted leading-relaxed line-clamp-3 font-body mb-5">
                      {post.excerpt}
                    </p>
                  </div>

                  <a
                    href={`#blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.14em] font-semibold text-accent hover:text-ink transition-colors font-body mt-auto pt-4 border-t border-line/60"
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
        ) : (
          <div className="py-20 text-center bg-white rounded-2xl border border-line">
            <h3 className="text-xl font-heading text-ink mb-2">No articles found</h3>
            <p className="text-muted text-sm mb-5">Try searching with different keywords.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
              className="px-6 py-2.5 rounded-full bg-btn-bg text-btn-ink text-xs uppercase tracking-wider font-semibold hover:bg-ink transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* ───────────────────────────────────────────────────────────
            PAGINATION CONTROLS
        ─────────────────────────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-line flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 rounded-lg border border-line bg-white text-xs font-semibold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-soft transition-colors"
            >
              Previous
            </button>

            <div className="flex items-center gap-1.5 px-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setCurrentPage(num)}
                  className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all ${
                    currentPage === num
                      ? 'bg-[#07294A] text-white shadow'
                      : 'bg-white border border-line text-ink hover:bg-soft'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-4 py-2 rounded-lg border border-line bg-white text-xs font-semibold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-soft transition-colors"
            >
              Next
            </button>
          </div>
        )}

      </section>

    </main>
  );
}
