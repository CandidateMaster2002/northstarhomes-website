import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

// High-res project photos from src/assets/projects/
import imgVeda from '../assets/projects/veda.webp'
import imgGardenSuites from '../assets/projects/garden-suites.webp'
import imgEdenGardens from '../assets/projects/eden-gardens.webp'
import imgAmgPlaza from '../assets/projects/amg-plaza.webp'
import imgDistrict1 from '../assets/projects/district1.webp'
import imgAirport from '../assets/projects/airport-boulevard.webp'
import imgAllura from '../assets/projects/allura.webp'
import imgParkAve from '../assets/projects/park-avenue.webp'
import imgPalacio from '../assets/projects/sp-palacio.webp'
import imgSanctuary from '../assets/projects/sanctuary.webp'
import imgGoldenValley from '../assets/projects/golden-valley.webp'

// The exact key milestone years for Northstar Homes
const milestones = [
  {
    year: '2012',
    italicTitle: 'A Foundation Built on Trust',
    description: 'Northstar Homes was founded with a clear vision to develop communities with integrity, superior craftsmanship, and customer trust. Marking our inaugural step, Veda established our architectural standards.',
    image: imgVeda,
  },
  {
    year: '2013',
    italicTitle: 'Boutique Living Redefined',
    description: 'Expanding our footprint with Garden Suites — an exclusive boutique residential enclave setting new benchmarks for open-plan layouts, natural ventilation, and landscaped privacy.',
    image: imgGardenSuites,
  },
  {
    year: '2014',
    italicTitle: 'Expanding Coastal Horizons',
    description: 'Northstar broadened its horizons across Andhra Pradesh with Eden Gardens in Visakhapatnam, introducing curated gated community living to a discerning coastal audience.',
    image: imgEdenGardens,
  },
  {
    year: '2015',
    italicTitle: 'Design Innovation & Quality',
    description: 'Delivery of AMG Plaza commercial hub alongside national recognition — awarded "Best Brand in Design Innovation, Quality & Service" by Silicon India.',
    image: imgAmgPlaza,
  },
  {
    year: '2016',
    italicTitle: 'Triple Excellence Recognition',
    description: 'A landmark year delivering District 1 and the iconic Hillside ultra-luxury villa project. Honoured as Emerging Developer of the Year and Best in Ultra Luxury Villas.',
    image: imgDistrict1,
  },
  {
    year: '2017',
    italicTitle: 'Pinnacle of Villa Planning',
    description: 'Launch of Airport Boulevard near Hyderabad International Airport, acclaimed with prestigious Times Realty Icon awards for best concept and design distinction.',
    image: imgAirport,
  },
  {
    year: '2019',
    italicTitle: 'Modern Villa Architecture',
    description: 'Unveiling Allura, premier luxury villas featuring rare dual-road access, pushing the envelope in gated infrastructure and sustainable community spaces.',
    image: imgAllura,
  },
  {
    year: '2020',
    italicTitle: 'Nature-Centric Central Parks',
    description: 'Consolidating our footprint in Vizag with Park Avenue — a harmonious enclave designed around central greenery, Vaastu-led orientation, and comprehensive lifestyle amenities.',
    image: imgParkAve,
  },
  {
    year: '2022',
    italicTitle: 'Grandeur in Abids',
    description: 'Crafting SP Palacio — contemporary luxury apartments designed for breathable living, community spaces, and timeless urban elegance in the heart of Hyderabad.',
    image: imgPalacio,
  },
  {
    year: '2023',
    italicTitle: 'Nature-Led Villa Communities',
    description: 'Launching Sanctuary along the Srisailam Highway corridor, offering crafted villa plots set amidst nature, awarded Premium Residential Project of the Year.',
    image: imgSanctuary,
  },
  {
    year: '2024',
    italicTitle: 'The Next Era of Communities',
    description: 'Continuing the enduring legacy with Golden Valley, delivering master-planned open plots with contemporary infrastructure, broad avenues, and lasting value.',
    image: imgGoldenValley,
  },
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Smoothly ensure card stays completely visible when hovered/clicked
  const handleSelect = (idx) => {
    setHoveredIndex(idx);
    const card = cardRefs.current[idx];
    const container = containerRef.current;
    if (card && container) {
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // If card's right edge is clipped off the right
      if (cardRect.right > containerRect.right - 24) {
        container.scrollBy({
          left: cardRect.right - containerRect.right + 48,
          behavior: 'smooth'
        });
      } else if (cardRect.left < containerRect.left + 24) {
        container.scrollBy({
          left: cardRect.left - containerRect.left - 48,
          behavior: 'smooth'
        });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = hoveredIndex === null || hoveredIndex <= 0 ? milestones.length - 1 : hoveredIndex - 1;
    handleSelect(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = hoveredIndex === null || hoveredIndex >= milestones.length - 1 ? 0 : hoveredIndex + 1;
    handleSelect(nextIdx);
  };

  return (
    <section id="legacy" className="bg-white py-14 sm:py-20 overflow-hidden border-t border-line/60">
      
      {/* Eyebrow & Title */}
      <div className="text-center mb-6 sm:mb-10 px-4">
        <p className="text-[13px] sm:text-[14px] tracking-[0.28em] uppercase text-accent font-semibold font-nav mb-2">
          MILESTONES & HERITAGE
        </p>
        <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-body font-normal text-ink tracking-tight">
          A Decade of Building Trust.
        </h2>
      </div>

      {/* Quick Navigation Year Pills & Next/Prev Controls */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Year Pills Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          {milestones.map((m, idx) => {
            const isActive = hoveredIndex === idx;
            return (
              <button
                key={m.year}
                type="button"
                onClick={() => handleSelect(idx)}
                onMouseEnter={() => handleSelect(idx)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[13px] sm:text-[13.5px] font-mono tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-ink text-white font-semibold shadow-sm'
                    : 'bg-soft text-muted hover:text-ink hover:bg-line/60'
                }`}
              >
                {m.year}
              </button>
            );
          })}
        </div>

        {/* Prev / Next Glide Arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-line bg-white hover:bg-soft text-ink flex items-center justify-center transition-all shadow-sm cursor-pointer"
            aria-label="Previous milestone"
            title="Previous year"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-line bg-white hover:bg-soft text-ink flex items-center justify-center transition-all shadow-sm cursor-pointer"
            aria-label="Next milestone"
            title="Next year"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Interactive Accordion Strip ── */}
      <div 
        className="w-full px-2 sm:px-4 lg:px-6"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div 
          ref={containerRef}
          className="w-full h-[520px] sm:h-[580px] lg:h-[620px] flex items-stretch gap-1 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth pr-6 sm:pr-10 lg:pr-2"
        >
          {milestones.map((milestone, idx) => {
            const isHovered = hoveredIndex === idx;
            const hasAnyHover = hoveredIndex !== null;

            return (
              <div
                key={milestone.year}
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseEnter={() => handleSelect(idx)}
                onClick={() => handleSelect(idx)}
                style={{
                  flex: hasAnyHover 
                    ? (isHovered ? '5 1 0%' : '1 1 0%') 
                    : '1 1 0%',
                  transition: 'flex 0.65s cubic-bezier(0.25, 1, 0.5, 1), min-width 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
                className={`relative h-full rounded-[14px] sm:rounded-[20px] overflow-hidden cursor-pointer select-none ${
                  hasAnyHover
                    ? isHovered
                      ? 'min-w-[300px] sm:min-w-[420px] lg:min-w-[480px] xl:min-w-[540px] shadow-2xl z-20'
                      : 'min-w-[42px] sm:min-w-[54px] lg:min-w-[62px] xl:min-w-[70px] opacity-75 hover:opacity-90 z-10'
                    : 'min-w-[48px] sm:min-w-[64px] lg:min-w-[76px] xl:min-w-[88px] z-10'
                }`}
              >
                {/* Background Image - smooth zoom and un-grayscale on hover */}
                <img
                  src={milestone.image}
                  alt={milestone.year}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                    isHovered 
                      ? 'grayscale-0 scale-105 brightness-100' 
                      : 'grayscale brightness-90 contrast-105'
                  }`}
                />

                {/* Overlays */}
                {isHovered ? (
                  // Active Expanded Overlay: High-contrast vignette gradient for reading text
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                  </>
                ) : (
                  // Inactive / Default Ghost Overlay: Translucent soft warm wash
                  <div className="absolute inset-0 bg-[#D5CFC7]/55 hover:bg-[#D5CFC7]/35 transition-colors duration-300" />
                )}

                {/* Content Container */}
                <div className="relative z-10 w-full h-full flex flex-col justify-end p-5 sm:p-7 lg:p-10 text-white overflow-hidden">
                  
                  {isHovered ? (
                    // ── EXPANDED STATE ──
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
                      className="max-w-[520px]"
                    >
                      {/* Year — Italic Title */}
                      <h3 className="text-[26px] sm:text-[34px] lg:text-[40px] font-body font-normal leading-[1.18] mb-2.5 sm:mb-3 text-white !text-white tracking-tight break-words drop-shadow-md">
                        <span>{milestone.year}</span>
                        <span className="font-light mx-2 sm:mx-3 text-white/70">—</span>
                        <span className="font-normal text-white/95">{milestone.italicTitle}</span>
                      </h3>

                      {/* Description Paragraph */}
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white/90 !text-white/90 font-body font-normal leading-[1.65] line-clamp-4 sm:line-clamp-5 drop-shadow-sm">
                        {milestone.description}
                      </p>
                    </motion.div>
                  ) : (
                    // ── COLLAPSED / INITIAL GHOST STATE ──
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-[22px] sm:text-[30px] lg:text-[36px] font-body font-medium text-black/80 tracking-tight transition-transform duration-300">
                        {milestone.year}
                      </span>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
