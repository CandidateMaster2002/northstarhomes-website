import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExploreExperience({ project }) {
  const [activeTab, setActiveTab] = useState('photos');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamic project-specific photo slides — exclusively uses this project's own media
  const photoSlides = [
    {
      title: `${project.name} · Architectural Elevation`,
      caption: project.headerTitle || project.tagline || 'Distinctive architectural presence crafted with enduring design values',
      image: project.heroImage
    },
    {
      title: `${project.shortName || project.name} · Living Spaces & Layouts`,
      caption: project.specs?.find(s => s.label.toLowerCase().includes('type') || s.label.toLowerCase().includes('size') || s.label.toLowerCase().includes('home'))?.value 
        ? `${project.specs?.find(s => s.label.toLowerCase().includes('type') || s.label.toLowerCase().includes('size') || s.label.toLowerCase().includes('home'))?.value} planned for light, airflow and privacy`
        : 'Spacious volumes planned for maximum daylight, natural ventilation and acoustic privacy',
      image: project.heroImage
    },
    {
      title: `${project.shortName || project.name} · Curated Amenities`,
      caption: project.amenitiesHeader?.title || 'Wellness, leisure, and community spaces crafted for everyday living',
      image: project.heroImage
    },
    {
      title: `${project.shortName || project.name} · Strategic Setting`,
      caption: project.location || project.city || 'Strategically located in a premier and well-connected neighbourhood',
      image: project.heroImage
    }
  ];

  // Dynamic tab definitions based on project data
  const baseTabs = [
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
      id: 'masterplan',
      label: 'Master Plan',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: 'floorplan',
      label: project.type?.toLowerCase().includes('plot') ? 'Plot Plans' : project.type?.toLowerCase().includes('villa') ? 'Villa Plans' : 'Floor Plans',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
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
        
        {/* Title & Intro in Northstar Brand Palette */}
        <div className="mb-8 sm:mb-10 text-left">
          <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-2">
            Explore the Experience
          </p>
          <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-body font-normal text-[#07294A] leading-[1.12] tracking-tight">
            Step Into {project.name || project.shortName}
          </h2>
          <p className="text-muted text-[15px] sm:text-[16px] font-body font-light leading-relaxed mt-4 max-w-4xl">
            {project.experience?.shortLine || `Explore ${project.name} through plans, visual perspectives, curated lifestyle amenities, and project documentation.`}
          </p>
        </div>

        {/* Filter Pills Navigation Bar */}
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {baseTabs.map((tab) => {
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
                    : 'bg-white text-[#07294A] border border-line hover:border-[#785D4A] hover:text-[#785D4A] hover:bg-[#EEF5FB] font-medium shadow-sm'
                }`}
              >
                <span className={isActive ? 'text-[#4FA3E3]' : 'text-[#785D4A]'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Media Viewer Area */}
      <div className="relative w-full overflow-hidden">
        
        {/* 1. PHOTOS TAB: Peek Carousel */}
        {activeTab === 'photos' && (
          <div>
            <div className="relative flex items-center justify-center w-full">
              
              {/* Left Peek Sliver */}
              <div 
                onClick={handlePrev}
                className="w-[4.5vw] sm:w-[5vw] lg:w-[5.2vw] aspect-[16/9] shrink-0 rounded-r-2xl sm:rounded-r-3xl overflow-hidden cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300 shadow-md relative group select-none border-y border-r border-line"
                title="Previous photo"
              >
                <img 
                  src={photoSlides[prevSlideIndex]?.image} 
                  alt=""
                  className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#07294A]/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Gap between left peek and center card */}
              <div className="w-2.5 sm:w-3.5 lg:w-4 shrink-0" />

              {/* Center Main Slide */}
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
                      src={photoSlides[currentSlide]?.image} 
                      alt={photoSlides[currentSlide]?.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Left / Right Navigators */}
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

              {/* Right Peek Sliver */}
              <div 
                onClick={handleNext}
                className="w-[4.5vw] sm:w-[5vw] lg:w-[5.2vw] aspect-[16/9] shrink-0 rounded-l-2xl sm:rounded-l-3xl overflow-hidden cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300 shadow-md relative group select-none border-y border-l border-line"
                title="Next photo"
              >
                <img 
                  src={photoSlides[nextSlideIndex]?.image} 
                  alt=""
                  className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#07294A]/10 group-hover:bg-transparent transition-colors" />
              </div>

            </div>

            {/* Slide Caption & Counter Bar */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mt-5 sm:mt-6 flex flex-col sm:row items-start sm:items-center justify-between gap-3 text-left">
              <div>
                <h4 className="text-[16px] sm:text-[18px] font-body font-normal text-[#07294A]">
                  {photoSlides[currentSlide]?.title}
                </h4>
                <p className="text-[13px] text-muted font-body font-light">
                  {photoSlides[currentSlide]?.caption}
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
            {project.heroVideo ? (
              <video
                src={project.heroVideo}
                poster={project.heroImage}
                controls
                autoPlay={false}
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="absolute inset-0 z-0">
                  <img src={project.heroImage} alt="" className="w-full h-full object-cover filter brightness-[0.35]" />
                </div>
                <div className="relative z-10 max-w-xl flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white mb-5">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[#4FA3E3] mb-2 font-body">
                    Cinematic Walkthrough
                  </span>
                  <h3 className="text-[26px] sm:text-[34px] font-body font-normal text-white mb-3">
                    Experience {project.name}
                  </h3>
                  <p className="text-[14px] text-white/80 font-light leading-relaxed mb-6">
                    {project.walkthroughVideoLink 
                      ? `Access the official walkthrough video and cinematic perspectives of ${project.shortName || project.name}.`
                      : `Video walkthrough and site footage for ${project.shortName || project.name} are available upon request.`}
                  </p>
                  {project.walkthroughVideoLink ? (
                    <a
                      href={project.walkthroughVideoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3 rounded-full bg-[#785D4A] hover:bg-[#634C3C] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-lg transition-all inline-flex items-center gap-2"
                    >
                      <span>Watch Walkthrough Video</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href="#enquire"
                      className="px-7 py-3 rounded-full bg-[#785D4A] hover:bg-[#634C3C] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-lg transition-all"
                    >
                      Request Video Walkthrough
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. MASTER PLAN TAB */}
        {activeTab === 'masterplan' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-line p-6 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#EEF5FB] border border-[#785D4A]/20 flex items-center justify-center text-[#785D4A] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-accent mb-2 font-body">
              Community Architecture
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-body font-normal text-[#07294A] mb-3">
              {project.name} Master Plan
            </h3>
            <p className="text-[14px] text-muted font-light max-w-xl leading-relaxed mb-6">
              {project.specs?.find(s => s.label.toLowerCase().includes('area') || s.label.toLowerCase().includes('extent'))?.value 
                ? `Comprehensive site layout for ${project.shortName || project.name} across ${project.specs?.find(s => s.label.toLowerCase().includes('area') || s.label.toLowerCase().includes('extent'))?.value}, detailing vehicular and pedestrian movement, tower orientation, and open green spaces.`
                : `Comprehensive layout and architectural blueprint detailing spatial allocations, entry boulevards, internal zoning, and amenity orientation.`}
            </p>
            {project.masterPlanLink ? (
              <a
                href={project.masterPlanLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-[#785D4A] hover:bg-[#634C3C] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>View Official Master Plan</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <a
                href="#enquire"
                className="px-7 py-3 rounded-full bg-[#785D4A] hover:bg-[#634C3C] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
              >
                Request Master Plan Document
              </a>
            )}
          </div>
        )}

        {/* 4. FLOOR PLANS / UNIT PLANS TAB */}
        {activeTab === 'floorplan' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-line p-6 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#785D4A]/10 border border-[#785D4A]/25 flex items-center justify-center text-[#785D4A] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-accent mb-2 font-body">
              Architectural Layouts
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-body font-normal text-[#07294A] mb-3">
              {project.shortName || project.name} Unit & Floor Plans
            </h3>
            <p className="text-[14px] text-muted font-light max-w-xl leading-relaxed mb-6">
              {project.specs?.find(s => s.label.toLowerCase().includes('type') || s.label.toLowerCase().includes('size') || s.label.toLowerCase().includes('home'))?.value
                ? `Detailed configurations covering ${project.specs?.find(s => s.label.toLowerCase().includes('type') || s.label.toLowerCase().includes('size') || s.label.toLowerCase().includes('home'))?.value}, featuring precise room dimensions, carpet area, and balcony orientations.`
                : 'Proportioned floor plans designed for natural lighting, privacy, and functional efficiency.'}
            </p>
            {project.floorPlanLink || project.unitPlanLink ? (
              <a
                href={project.floorPlanLink || project.unitPlanLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-[#785D4A] hover:bg-[#634C3C] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>View High-Resolution Floor Plans</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <a
                href="#enquire"
                className="px-7 py-3 rounded-full bg-[#785D4A] hover:bg-[#634C3C] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
              >
                Request Detailed Floor Plans
              </a>
            )}
          </div>
        )}

        {/* 5. BROCHURE TAB */}
        {activeTab === 'brochure' && (
          <div className="w-[86vw] sm:w-[87vw] lg:w-[88vw] max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-line p-6 sm:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#785D4A]/10 border border-[#785D4A]/25 flex items-center justify-center text-[#785D4A] mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-accent mb-2 font-body">
              Official Documentation
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-body font-normal text-[#07294A] mb-3">
              {project.name} Project Brochure
            </h3>
            <p className="text-[14px] text-muted font-light max-w-xl leading-relaxed mb-6">
              Download the official documentation featuring layout schematics, architecture notes, specifications, amenities, and location advantages.
            </p>
            {project.brochureUrl && project.brochureUrl !== '#' ? (
              <a
                href={project.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-[#785D4A] hover:bg-[#634C3C] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Download Official Brochure</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ) : (
              <a
                href="#enquire"
                className="px-7 py-3 rounded-full bg-[#785D4A] hover:bg-[#634C3C] text-white text-[12px] tracking-[0.16em] uppercase font-semibold shadow-md transition-all"
              >
                Request Official Brochure via Email
              </a>
            )}
          </div>
        )}

      </div>

      {/* Slide Navigation Indicators (Bottom Dots) */}
      {activeTab === 'photos' && (
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {photoSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx 
                  ? 'w-7 bg-[#07294A]' 
                  : 'w-2 bg-[#CBD5E1] hover:bg-[#785D4A]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

    </section>
  );
}
