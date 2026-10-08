const articles = [
  {
    category: 'Buying Guide',
    title: '[Article title — what to check before buying a plot in Telangana]',
  },
  {
    category: 'Construction Update',
    title: '[Article title — latest site progress at Sanctuary]',
  },
  {
    category: 'Neighbourhood',
    title: '[Article title — living along the Srisailam Highway corridor]',
  },
]

export default function Journal() {
  return (
    <section id="resources" className="py-16 max-[880px]:py-10">
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6">
        <div className="flex flex-wrap gap-6 items-end justify-between mb-12">
          <h2 className="font-heading text-[clamp(32px,3.4vw,46px)] leading-[1.15]">
            Journal &amp; Resources
          </h2>
          <a
            href="#resources"
            className="text-[13px] tracking-[0.14em] uppercase border-b border-accent pb-[5px]"
          >
            All Articles
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
          {articles.map((article) => (
            <article key={article.category}>
              <div
                className="ph h-[220px] mb-6"
                role="img"
                aria-label={article.category}
              />
              <p className="text-[12px] tracking-[0.18em] uppercase text-muted mb-3">
                {article.category}
              </p>
              <h3 className="font-heading text-[25px] leading-[1.3] mb-3.5">
                {article.title}
              </h3>
              <a
                href="#resources"
                className="text-[13px] tracking-[0.14em] uppercase border-b border-accent pb-[5px]"
                aria-label={`Read: ${article.title}`}
              >
                Read
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
