export default function LifestyleSpotlight() {
  const amenities = [
    'Pocket Parks',
    'Walking & Cycling Tracks',
    'Clubhouse & Pool',
    'Butterfly Garden',
    'Yoga Deck',
    'Party Lawn',
  ]

  return (
    <section className="bg-deep text-deep-ink py-16 max-[880px]:py-10">
      <div className="max-w-[1280px] mx-auto px-10 flex flex-wrap gap-[72px] items-center max-[880px]:px-6 max-[880px]:gap-10">
        <div className="flex-1 min-w-0 basis-[380px]">
          <p className="text-accent2d text-[12px] tracking-[0.3em] uppercase mb-5">
            Life at Northstar
          </p>
          <h2 className="text-[clamp(32px,3.6vw,48px)] leading-[1.14] mb-7 font-heading">
            Where nature becomes a way of life.
          </h2>
          <p className="text-[18px] leading-[1.8] opacity-[0.86] mb-10">
            Tree-lined avenues, intimate pocket parks and thoughtfully layered
            greens shape everyday life. Walk among fragrant gardens, flowering
            trees and landscapes designed to bring nature closer.
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-y-[18px] gap-x-8 list-none p-0 mb-11">
            {amenities.map((amenity) => (
              <li
                key={amenity}
                className="border-b border-white/[0.18] pb-3.5 text-base"
              >
                {amenity}
              </li>
            ))}
          </ul>
          <a
            href="#projects"
            className="inline-flex items-center justify-center border border-current min-h-12 px-8 py-4 text-[13px] tracking-[0.16em] uppercase"
          >
            See All Amenities
          </a>
        </div>

        <div className="flex-1 min-w-0 basis-[380px]">
          <div className="grid grid-cols-2 gap-5">
            <div className="ph col-span-2 h-[300px]">
              <span>Landscape avenue</span>
            </div>
            <div className="ph h-[220px]">
              <span>Clubhouse</span>
            </div>
            <div className="ph h-[220px]">
              <span>Pocket park</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
