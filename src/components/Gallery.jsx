const galleryItems = [
  'Master plan',
  'Clubhouse view',
  'Green corridor',
  'Pocket park',
  'Entrance arch',
  'Site progress',
]

export default function Gallery() {
  return (
    <section aria-label="Gallery" className="py-16 max-[880px]:py-10">
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6">
        <div className="flex flex-wrap gap-6 items-end justify-between mb-12">
          <div>
            <p className="text-accent2 text-xs tracking-[0.3em] uppercase mb-5">
              Explore the Experience
            </p>
            <h2 className="font-heading text-[clamp(32px,3.4vw,46px)] leading-[1.15]">
              Step into your Sanctuary
            </h2>
          </div>
          <a
            href="#projects"
            className="text-[13px] tracking-[0.14em] uppercase border-b border-accent pb-[5px]"
          >
            Open Gallery
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="ph h-[240px]"
              role="img"
              aria-label={item}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
