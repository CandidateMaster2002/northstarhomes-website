import React, { useState } from 'react';

// Combined curated testimonials (videos & written reviews) matching the reference layout
const testimonialsGrid = [
  // ── ROW 1 ──
  {
    type: 'video',
    id: 'dbDrWb69YVw',
    homeowner: 'PARK AVENUE HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'The planning, the amenities and the overall experience have been truly exceptional.',
    homeowner: 'PARK AVENUE HOMEOWNER'
  },
  {
    type: 'video',
    id: '5_WoLtNDpz4',
    homeowner: 'EDEN GARDEN HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'A community that truly values its residents. It already feels like home.',
    homeowner: 'EDEN GARDEN HOMEOWNER'
  },

  // ── ROW 2 ──
  {
    type: 'quote',
    quote: 'The location, connectivity and everyday convenience make living here so easy.',
    homeowner: 'ALLURA HOMEOWNER'
  },
  {
    type: 'video',
    id: 'vKmZBlkrj_0',
    homeowner: 'ALLURA HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'Excellent build quality and thoughtful design. Every detail feels so well considered.',
    homeowner: 'HILL SIDE HOMEOWNER'
  },
  {
    type: 'video',
    id: 'FKe_OYnkQdE',
    homeowner: 'HILL SIDE HOMEOWNER',
    caption: 'Watch Testimonial'
  },

  // ── ROW 3 ──
  {
    type: 'video',
    id: 'UISa8o4F6JI',
    homeowner: 'NORTHSTAR HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'What we love most is the thoughtful mix of green spaces, recreation and a true sense of community.',
    homeowner: 'NORTHSTAR HOMEOWNER'
  },
  {
    type: 'video',
    id: '9Q7ii8I5bC8',
    homeowner: 'PARK AVENUE HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: "A lifestyle that's peaceful, well-connected and perfect for our family.",
    homeowner: 'PARK AVENUE HOMEOWNER'
  },

  // ── ROW 4 ──
  {
    type: 'quote',
    quote: 'From the first visit to handover, the entire journey was smooth, transparent and trustworthy.',
    homeowner: 'ALLURA HOMEOWNER'
  },
  {
    type: 'video',
    id: 'UZBNu3Rx2RQ',
    homeowner: 'EDEN GARDEN HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: "The amenities are a big plus — there's something for every member of the family.",
    homeowner: 'EDEN GARDEN HOMEOWNER'
  },
  {
    type: 'video',
    id: '1tioxCia_tg',
    homeowner: 'GARDEN SUITES HOMEOWNER',
    caption: 'Watch Testimonial'
  }
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="testimonials" className="bg-bg py-20 lg:py-28 border-t border-line overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* ── Section Header matching mockup ── */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <span className="w-8 sm:w-12 h-[1px] bg-[#C49A6C]/60" />
            <p className="text-[11px] sm:text-[12px] tracking-[0.28em] uppercase text-[#8C6D46] font-body font-semibold">
              OUR HOMEOWNERS
            </p>
            <span className="w-8 sm:w-12 h-[1px] bg-[#C49A6C]/60" />
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-body font-normal text-ink tracking-tight mb-4">
            Stories That Feel Like Home
          </h2>
          <div className="w-12 sm:w-16 h-[2px] bg-[#C49A6C] mx-auto" />
        </div>

        {/* ── 4-Column Grid: Alternating Video & Written Reviews ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonialsGrid.map((item, idx) => {
            if (item.type === 'video') {
              return (
                <div
                  key={idx}
                  onClick={() => setActiveVideo(item.id)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-black/10 flex flex-col justify-end"
                >
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                    alt={item.homeowner}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-colors" />

                  {/* Bottom Bar: Play Pill & Label */}
                  <div className="relative z-10 p-4 sm:p-5 flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-ink group-hover:scale-110 transition-all duration-300 shadow-md">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-body font-medium text-white/95 group-hover:text-white transition-colors">
                      {item.caption || 'Watch Testimonial'}
                    </span>
                  </div>
                </div>
              );
            }

            // Written Quote Card
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-[#F7F3ED] border border-[#E8DFD3] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  {/* Elegant Golden Quote Mark */}
                  <span className="text-[36px] sm:text-[42px] font-serif text-[#C49A6C] leading-none mb-1 block select-none">
                    “
                  </span>
                  
                  {/* Quote Paragraph */}
                  <p className="text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#2C3E50] font-body font-normal">
                    “{item.quote}”
                  </p>
                </div>

                {/* Homeowner Tag */}
                <p className="text-[10px] sm:text-[10.5px] font-body font-bold tracking-[0.16em] uppercase text-[#6B7280] mt-6">
                  {item.homeowner}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* ── Video Modal Popup ── */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-[1000px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
