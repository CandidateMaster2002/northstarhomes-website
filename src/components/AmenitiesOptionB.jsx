import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Category icons
const categoryIcons = {
  0: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-4 7-8 11z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11V7m0 0c-1.5 0-3 1-3 3m3-3c1.5 0 3 1 3 3" />
    </svg>
  ),
  1: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  2: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  3: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
    </svg>
  ),
  4: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

export default function AmenitiesOptionB({ project }) {
  const [openIdx, setOpenIdx] = useState(0);

  if (!project?.amenityCategories) return null;

  return (
    <section className="py-20 lg:py-32 bg-bg border-b border-line" id="amenities-option-b">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Option Label */}
        <div className="mb-6 inline-block bg-accent text-white text-[11px] tracking-[0.2em] uppercase font-semibold px-4 py-1.5 rounded-full">
          Option B — Accordion Panels
        </div>

        {/* Section Header */}
        <div className="max-w-[680px] mb-14 lg:mb-18">
          <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight mb-5">
            {project.amenitiesHeader?.title || 'A Lifestyle Shaped by Greenery, Wellness and Community'}
          </h2>
          <p className="text-muted font-light text-[15px] sm:text-[16px] leading-[1.85] max-w-[560px]">
            {project.amenitiesHeader?.description}
          </p>
        </div>

        {/* Accordion Panels */}
        <div className="border-t border-line">
          {project.amenityCategories.map((cat, catIdx) => {
            const isOpen = openIdx === catIdx;

            return (
              <div key={catIdx} className="border-b border-line">
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : catIdx)}
                  className="w-full flex items-center justify-between gap-4 py-6 sm:py-7 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? 'bg-accent text-white' : 'bg-accent/8 text-accent group-hover:bg-accent/15'
                    }`}>
                      {categoryIcons[catIdx] || categoryIcons[0]}
                    </div>
                    <h3 className={`text-[20px] sm:text-[24px] font-heading font-normal leading-tight transition-colors duration-300 ${
                      isOpen ? 'text-ink' : 'text-ink/70 group-hover:text-ink'
                    }`}>
                      {cat.title}
                    </h3>
                    <span className={`text-[12px] tracking-[0.14em] uppercase font-body font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                      isOpen ? 'bg-accent/10 text-accent' : 'bg-soft text-muted'
                    }`}>
                      {cat.items.length} features
                    </span>
                  </div>

                  {/* Chevron */}
                  <div className={`w-8 h-8 rounded-full border border-line flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-ink border-ink rotate-180' : 'bg-white group-hover:border-ink/40'
                  }`}>
                    <svg className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-ink/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-14 sm:pl-14">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3.5">
                          {cat.items.map((amenity, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.03 }}
                              className="flex items-center gap-3 py-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span className="text-[15px] text-ink/80 font-body font-light">
                                {amenity}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
