import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imgSanctuary from '../assets/projects/sanctuary.webp';
import imgHillside from '../assets/projects/hillside.webp';
import imgEdenGardens from '../assets/projects/eden-gardens.webp';
import imgAirportBoulevard from '../assets/projects/airport-boulevard.webp';
import imgGardenSuites from '../assets/projects/garden-suites.webp';
import imgAllura from '../assets/projects/allura.webp';
import imgSpPalacio from '../assets/projects/sp-palacio.webp';
import imgDistrict1 from '../assets/projects/district1.webp';
import heroVideoPlaceholder from '../assets/hero video eden compr.mp4';

export default function ExploreExperience({ project }) {
  const [activeTab, setActiveTab] = useState('photos');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default project photo collection
  const photoSlides = project.id === 'sp-palacio' ? [
    {
      title: 'Architectural Façade & Art Deco Symmetry',
      caption: 'SP Palacio iconic residential tower elevation on JN Road, Abids',
      image: project.heroImage || imgSpPalacio
    },
    {
      title: 'Double-Height Grand Entrance Lobby',
      caption: 'Curated concierge reception and opulent marble finishes',
      image: imgGardenSuites
    },
    {
      title: 'Rooftop Infinity Swimming Pool',
      caption: 'Temperature-controlled leisure deck overlooking central Hyderabad',
      image: imgEdenGardens
    },
    {
      title: 'Expansive 3 & 4 BHK Living Volumes',
      caption: 'Double-glazed floor-to-ceiling glass and panoramic cityscape views',
      image: imgAllura
    },
    {
      title: 'Landscaped Rooftop Terraces',
      caption: 'Private serene sit-outs and evening sky lounge',
      image: imgDistrict1
    }
  ] : [
    {
      title: 'Paved Main Boulevard & Tree-Lined Avenues',
      caption: 'Cobbled stone avenues with street lighting and layered plantation at Sanctuary',
      image: project.heroImage || imgSanctuary
    },
    {
      title: 'Layered Green Corridors & Pocket Parks',
      caption: 'Fragrant flowering trees and intimate shaded walking trails',
      image: imgHillside
    },
    {
      title: 'Clubhouse Amenities & Swimming Pool',
      caption: 'Wellness suites, gym, indoor games and poolside relaxation decks',
      image: imgEdenGardens
    },
    {
      title: 'Villa Architecture & Plotted Enclaves',
      caption: 'Generous 343 to 1,000 Sq. Yds. villa plot layout and community scale',
      image: imgAirportBoulevard
    },
    {
      title: 'Landscape Walkways & Shaded Gardens',
      caption: 'Pedestrian-first avenues designed for leisurely strolls and children cycling',
      image: imgGardenSuites
    },
    {
      title: '14-Acre Master Layout Bird’s Eye View',
      caption: 'Exclusive 63 addresses nestled in South Hyderabad’s green belt',
      image: imgAllura
    }
  ];

  // Tab Definitions matching the layout with Northstar brand styling
  const tabs = [
    {
      id: 'photos',
      label: 'Photos',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'videos',
      label: 'Videos',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )
    },
    {
      id: '360',
      label: '360° View',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 'masterplan',
      label: 'Master Plans',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: 'plotplans',
      label: 'Plot Plans',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      id: 'villaplans',
      label: 'Villa Plans',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'brochure',
      label: 'Brochure',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  // Carousel navigation
  const totalSlides = photoSlides.length;
  const prevSlideIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  const nextSlideIndex = (currentSlide + 1) % totalSlides;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#EEF5FB] border-b border-line overflow-hidden" id="experience">
      <div className="max-w-[1620px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ── Title & Intro in Northstar Brand Palette ── */}
        <div className="mb-8 sm:mb-10 text-left">
          <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
            Explore the Experience
          </p>
          <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-heading font-medium text-[#07294A] leading-[1.12] tracking-tight">
            Step Into Your {project.shortName || 'Sanctuary'}
          </h2>
          <p className="text-muted text-[15px] sm:text-[16px] font-body font-light leading-relaxed mt-4 max-w-4xl">
            Explore {project.shortName || 'Sanctuary'} through master plans, landscape visuals, clubhouse views, green corridors, pocket parks and immersive project experiences.
          </p>
        </div>

        {/* ── Filter Pills Navigation Bar in Northstar Brand Colors ── */}
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentSlide(0);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[12.5px] sm:text-[13px] tracking-wide transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#07294A] text-white shadow-md font-semibold border border-[#07294A]'
                    : 'bg-white text-[#07294A] border border-line hover:border-[#0B6FB5] hover:text-[#0B6FB5] hover:bg-[#EEF5FB] font-medium shadow-sm'
                }`}
              >
                <span className={isActive ? 'text-[#4FA3E3]' : 'text-[#0B6FB5]'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* ── Full-Bleed Peek Carousel Track (Matching Screenshot: Dominant Hero Center + Subtle Side Peeks) ── */}
      <div className="relative w-full overflow-hidden">
        
        {/* 1. PHOTOS TAB: Peek Carousel */}
        {activeTab === 'photos' && (
          <div>
            <div className="relative flex items-center justify-center w-full">
              
              {/* Left Peek Sliver (Tiny curved slice, ~4.5vw to 5.5vw) */}
              <div 
                onClick={handlePrev}
                className="w-[4.5vw] sm:w-[5vw] lg:w-[5.2vw] aspect-[16/9] shrink-0 rounded-r-2xl sm:rounded-r-3xl overflow-hidden cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300 shadow-md relative group select-none border-y border-r border-line"
                title="Previous photo"
              >
                <img 
                  src={photoSlides[prevSlideIndex].image} 
                  alt=""
                  className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#07294A]/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Gap between left peek and center card */}
              <div className="w-2.5 sm:w-3.5 lg:w-4 shrink-0" />

              {/* Center Main Slide (Dominant ~88vw of viewport) */}
              <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] aspect-[16/9] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative z-20 bg-white border border-line">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.995 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.995 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative group"
                  >
                    <img 
                      src={photoSlides[currentSlide].image} 
                      alt={photoSlides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />

                    {/* Left / Right Click Navigators over center card */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-[#07294A] flex items-center justify-center shadow-xl transition-all cursor-pointer backdrop-blur-sm group-hover:scale-105 border border-line"
                      aria-label="Previous slide"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-[#07294A] flex items-center justify-center shadow-xl transition-all cursor-pointer backdrop-blur-sm group-hover:scale-105 border border-line"
                      aria-label="Next slide"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Gap between center card and right peek */}
              <div className="w-2.5 sm:w-3.5 lg:w-4 shrink-0" />

              {/* Right Peek Sliver (Tiny curved slice, ~4.5vw to 5.5vw) */}
              <div 
                onClick={handleNext}
                className="w-[4.5vw] sm:w-[5vw] lg:w-[5.2vw] aspect-[16/9] shrink-0 rounded-l-2xl sm:rounded-l-3xl overflow-hidden cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300 shadow-md relative group select-none border-y border-l border-line"
                title="Next photo"
              >
                <img 
                  src={photoSlides[nextSlideIndex].image} 
                  alt=""
                  className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#07294A]/10 group-hover:bg-transparent transition-colors" />
              </div>

            </div>

            {/* Slide Caption & Counter Bar Cleanly Underneath */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mt-5 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div>
                <h4 className="text-[16px] sm:text-[18px] font-heading font-medium text-[#07294A]">
                  {photoSlides[currentSlide].title}
                </h4>
                <p className="text-[13px] text-muted font-body font-light">
                  {photoSlides[currentSlide].caption}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[12px] font-mono text-muted tracking-wider">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. VIDEOS TAB */}
        {activeTab === 'videos' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-[#07294A] border border-line">
            <video
              src={project.heroVideo || heroVideoPlaceholder}
              poster={project.heroImage || imgSanctuary}
              controls
              autoPlay={false}
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 3. 360° VIEW TAB */}
        {activeTab === '360' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-[#07294A] flex flex-col items-center justify-center p-6 text-center text-white border border-line">
            <div className="absolute inset-0 z-0 opacity-30">
              <img src={project.heroImage || imgSanctuary} alt="" className="w-full h-full object-cover filter blur-sm scale-105" />
              <div className="absolute inset-0 bg-[#07294A]/70" />
            </div>
            
            <div className="relative z-10 max-w-lg flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#4FA3E3] mb-5 animate-pulse">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[#4FA3E3] mb-2 font-heading">
                Virtual Experience
              </span>
              <h3 className="text-[24px] sm:text-[32px] font-heading font-medium text-white mb-3">
                360° Interactive Panoramic Tour
              </h3>
              <p className="text-[13px] sm:text-[14px] text-white/80 font-light leading-relaxed mb-6">
                Step inside Sanctuary and explore high-definition 360-degree aerial perspectives, streetscapes, pocket parks, and central avenues.
              </p>
              <a
                href={project.walkthroughVideoLink || project.projectLink || '#enquire'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-white text-[#07294A] hover:bg-[#EEF5FB] text-[12px] tracking-[0.16em] uppercase font-semibold shadow-lg transition-all"
              >
                Launch 360° Walkthrough
              </a>
            </div>
          </div>
        )}

        {/* 4. MASTER PLANS TAB */}
        {activeTab === 'masterplan' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-line p-6 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#EEF5FB] border border-[#0B6FB5]/20 flex items-center justify-center text-[#0B6FB5] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-accent mb-2 font-heading">
              14-Acre Master Layout
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-heading font-medium text-[#07294A] mb-3">
              Master Plan & Community Architecture
            </h3>
            <p className="text-[14px] text-muted font-light max-w-xl leading-relaxed mb-6">
              Complete layout detailing 63 plot and villa allocations, 40-foot main boulevard, 30-foot internal avenues, clubhouse zoning, and contiguous park corridors.
            </p>
            {project.masterPlanLink ? (
              <a
                href={project.masterPlanLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-[#07294A] hover:bg-[#0B6FB5] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
              >
                View High-Resolution Master Plan &rarr;
              </a>
            ) : (
              <a
                href="#enquire"
                className="px-7 py-3 rounded-full bg-[#07294A] hover:bg-[#0B6FB5] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
              >
                Request Master Plan PDF
              </a>
            )}
          </div>
        )}

        {/* 5. PLOT PLANS TAB */}
        {activeTab === 'plotplans' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-line p-6 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#EEF5FB] border border-[#0B6FB5]/20 flex items-center justify-center text-[#0B6FB5] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-accent mb-2 font-heading">
              Plot Demarcations
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-heading font-medium text-[#07294A] mb-3">
              Dimensional Plot Configurations
            </h3>
            <p className="text-[14px] text-muted font-light max-w-xl leading-relaxed mb-6">
              Choice of 343 to 500 Sq. Yds. villa plots and 600 to 1,000 Sq. Yds. custom estate parcels, designed with optimal frontage and Vastu-compliant orientations.
            </p>
            <a
              href="#enquire"
              className="px-7 py-3 rounded-full bg-[#07294A] hover:bg-[#0B6FB5] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
            >
              Inquire About Plot Availability
            </a>
          </div>
        )}

        {/* 6. VILLA PLANS TAB */}
        {activeTab === 'villaplans' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-line p-6 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#EEF5FB] border border-[#0B6FB5]/20 flex items-center justify-center text-[#0B6FB5] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-accent mb-2 font-heading">
              Bespoke Architecture
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-heading font-medium text-[#07294A] mb-3">
              Crafted Villa Floor Plans
            </h3>
            <p className="text-[14px] text-muted font-light max-w-xl leading-relaxed mb-6">
              Carefully proportioned architectural designs featuring double-height living spaces, private terraces, courtyard sit-outs, and customizable layouts.
            </p>
            <a
              href="#enquire"
              className="px-7 py-3 rounded-full bg-[#07294A] hover:bg-[#0B6FB5] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
            >
              Request Architectural Villa Layouts
            </a>
          </div>
        )}

        {/* 7. BROCHURE TAB */}
        {activeTab === 'brochure' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-line p-6 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#EEF5FB] border border-[#0B6FB5]/20 flex items-center justify-center text-[#0B6FB5] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-accent mb-2 font-heading">
              Official Documentation
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-heading font-medium text-[#07294A] mb-3">
              Comprehensive Project Brochure
            </h3>
            <p className="text-[14px] text-muted font-light max-w-xl leading-relaxed mb-6">
              Download the complete high-resolution PDF featuring layout specifications, infrastructure schematics, clubhouse features, and location map.
            </p>
            {project.brochureUrl ? (
              <a
                href={project.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-[#07294A] hover:bg-[#0B6FB5] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
              >
                Download Official Brochure (PDF) &rarr;
              </a>
            ) : (
              <a
                href="#enquire"
                className="px-7 py-3 rounded-full bg-[#07294A] hover:bg-[#0B6FB5] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
              >
                Request Official Brochure via Email
              </a>
            )}
          </div>
        )}

      </div>

      {/* ── Slide Navigation Indicators (Bottom Dots) ── */}
      {activeTab === 'photos' && (
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {photoSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx 
                  ? 'w-7 bg-[#07294A]' 
                  : 'w-2 bg-[#CBD5E1] hover:bg-[#0B6FB5]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

    </section>
  );
}
