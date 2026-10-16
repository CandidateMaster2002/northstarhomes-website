import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import AmenitiesOptionD from './AmenitiesOptionD';

export default function ProjectDetail({ projectId = 'sanctuary' }) {
  const project = projectsData[projectId] || projectsData['sanctuary'];
  
  // Interactive States
  const [activeExperienceTab, setActiveExperienceTab] = useState('photos');
  const [isMuted, setIsMuted] = useState(true);
  const [activeProgressTab, setActiveProgressTab] = useState('Photos');
  const [currentProgressSlide, setCurrentProgressSlide] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    option: 'Plotted Development (343 – 1,000 Sq. Yds.)',
    plotSize: '343 – 500 Sq. Yds. (Villa Plot)',
    date: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top on load/change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <div className="bg-bg text-ink font-body">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO CINEMATIC VIDEO (Pure Video)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh] bg-[#07294A] overflow-hidden">
        {/* Background Visual / Walkthrough Video */}
        <div className="absolute inset-0 z-0">
          {project.heroVideo ? (
            <video 
              src={project.heroVideo} 
              poster={project.heroImage}
              autoPlay 
              loop 
              muted={isMuted} 
              playsInline 
              className="w-full h-full object-cover object-center"
            />
          ) : project.heroImage ? (
            <img 
              src={project.heroImage} 
              alt={project.name} 
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-[#07294A]" />
          )}
        </div>

        {/* Floating Sound Toggle */}
        {project.heroVideo && (
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute right-6 sm:right-10 bottom-6 sm:bottom-8 z-20 flex items-center gap-2 bg-black/50 hover:bg-black/75 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-white/20 transition-all cursor-pointer shadow-lg"
          >
            {isMuted ? (
              <>
                <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <span>Sound Off</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-[#4FA3E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span>Sound On</span>
              </>
            )}
          </button>
        )}
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: PROJECT IDENTITY, TAGLINE & SPECS (Merged)
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-bg border-b border-line py-12 lg:py-16 relative z-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2.5 text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-muted mb-6 font-medium">
            <a href="#top" className="hover:text-accent transition-colors">Home</a>
            <span className="opacity-40">/</span>
            <a href="#ongoing-projects" className="hover:text-accent transition-colors">Projects</a>
            <span className="opacity-40">/</span>
            <span className="text-ink font-semibold">{project.shortName || project.name}</span>
          </div>

          {/* Project Identity & Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[12px] sm:text-[14px] tracking-[0.24em] uppercase text-accent font-heading font-bold">
              {project.name}
            </span>
            <span className="text-muted/40 hidden sm:inline">•</span>
            <span className="bg-accent text-white text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full shadow-sm">
              {project.statusBadge || project.status}
            </span>
          </div>

          {/* Tagline / Main Title */}
          <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-heading font-normal leading-[1.15] text-ink mb-10 max-w-4xl tracking-tight">
            {project.headerTitle || project.tagline || project.name}
          </h1>

          {/* Architectural Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 border-t border-line/90 pt-8 sm:pt-10">
            {project.specs.map((spec, i) => (
              <div 
                key={i} 
                className="flex flex-col group hover:border-accent transition-colors duration-300"
              >
                <span className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-accent font-body font-semibold mb-2">
                  {spec.label}
                </span>
                <span className="text-[20px] sm:text-[24px] lg:text-[26px] font-heading font-normal text-ink leading-snug group-hover:text-accent transition-colors duration-300">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ARCHITECTURAL & LIFESTYLE NARRATIVE (Lodha-Style Alternating Layout)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-bg border-b border-line overflow-hidden" id="narrative">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="space-y-24 sm:space-y-28 lg:space-y-36">
            {project.narrative.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const paragraphs = item.paragraphs || (item.description ? [item.description] : []);

              return (
                <div 
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center"
                >
                  {/* Text Column */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`order-2 lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}
                  >
                    {/* Headline — Lodha Style Serif Heading */}
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-heading font-normal text-ink leading-[1.18] tracking-tight mb-5">
                      {item.headline}
                    </h2>

                    {/* Content Paragraphs */}
                    <div className="space-y-4 text-[15px] sm:text-[16px] text-muted font-body font-light leading-[1.85] max-w-[480px]">
                      {paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* Image Column — Pure Clean Lodha Style Visual Frame */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className={`order-1 lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="relative rounded-sm sm:rounded-md overflow-hidden bg-[#F4F8FA] border border-line/50 shadow-[0_12px_40px_rgba(7,41,74,0.06)] group">
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                        <img 
                          src={item.image || project.heroImage} 
                          alt={item.headline}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: LIFESTYLE FEATURES & AMENITIES
      ───────────────────────────────────────────────────────────── */}
      {/* Amenities Section: Finalized Option D */}
      <AmenitiesOptionD project={project} />


      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: EXPLORE THE EXPERIENCE (Visual-First Tabs)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-soft border-b border-line" id="experience">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
              {project.experience.eyebrow}
            </p>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight mb-4">
              {project.experience.headline}
            </h2>
            <p className="text-muted font-light text-[15px] leading-relaxed">
              {project.experience.shortLine}
            </p>
          </div>

          {/* Visual-First Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {project.experience.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveExperienceTab(tab.id)}
                className={`px-5 py-2.5 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-body rounded-lg transition-all duration-300 cursor-pointer ${
                  activeExperienceTab === tab.id
                    ? 'bg-accent text-white font-semibold shadow-md'
                    : 'bg-white text-muted hover:text-ink border border-line'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display Frame */}
          <div className="bg-bg rounded-2xl border border-line p-6 lg:p-10 shadow-lg min-h-[460px] flex flex-col justify-center items-center text-center relative overflow-hidden">
            
            {activeExperienceTab === 'photos' && (
              <div className="w-full">
                <div className="aspect-[16/9] max-h-[520px] w-full rounded-xl overflow-hidden mb-6 relative group">
                  <img 
                    src={project.heroImage} 
                    alt="Sanctuary Landscape" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-ink/80 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-md">
                    Landscape Avenues & Living Greens
                  </div>
                </div>
                {project.projectLink && (
                  <a 
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] tracking-widest uppercase font-semibold text-accent hover:text-ink transition-colors border-b border-accent pb-0.5"
                  >
                    View Complete Photography Drive Folder &rarr;
                  </a>
                )}
              </div>
            )}

            {activeExperienceTab === 'videos' && (
              <div className="w-full py-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">Cinematic Walkthrough</h4>
                <p className="text-muted text-[15px] font-light max-w-[500px] mb-8">
                  Experience the open spaces, tree-lined avenues, and community scale through drone videography and walkthrough films.
                </p>
                {project.walkthroughVideoLink && (
                  <a 
                    href={project.walkthroughVideoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-white text-[12px] tracking-widest uppercase font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                  >
                    Open Walkthrough Video Folder
                  </a>
                )}
              </div>
            )}

            {activeExperienceTab === 'masterplan' && (
              <div className="w-full py-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-soft border border-line flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">14-Acre Master Layout</h4>
                <p className="text-muted text-[15px] font-light max-w-[520px] mb-8">
                  Full 14 Acres 11 Guntas layout encompassing 63 plot addresses, 40ft avenues, central clubhouse, and pocket parks.
                </p>
                {project.masterPlanLink ? (
                  <a 
                    href={project.masterPlanLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-white text-[12px] tracking-widest uppercase font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                  >
                    View High-Resolution Master Plan
                  </a>
                ) : (
                  <a href="#enquire" className="px-8 py-4 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent transition-colors shadow-md">
                    Request Master Plan PDF
                  </a>
                )}
              </div>
            )}

            {activeExperienceTab === 'floorplan' && (
              <div className="w-full py-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-soft border border-line flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">Architectural Floor Plans</h4>
                <p className="text-muted text-[15px] font-light max-w-[520px] mb-8">
                  Carefully proportioned layouts featuring double-height living spaces, private terraces, garden sit-outs, and flexible configurations tailored to your family.
                </p>
                <a 
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent transition-colors shadow-md"
                >
                  Request Architectural Floor Plans
                </a>
              </div>
            )}

            {activeExperienceTab === 'unitplan' && (
              <div className="w-full py-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-soft border border-line flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">Unit Plan & Plot Dimensions</h4>
                <p className="text-muted text-[15px] font-light max-w-[520px] mb-8">
                  Dimensional plot options and demarcations from 343 to 500 Sq. Yds. for villa plots, and 600 to 1,000 Sq. Yds. for custom luxury estate plots.
                </p>
                <a 
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent transition-colors shadow-md"
                >
                  Inquire About Plot Availability
                </a>
              </div>
            )}

            {activeExperienceTab === 'brochure' && (
              <div className="w-full py-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">Comprehensive Project Brochure</h4>
                <p className="text-muted text-[15px] font-light max-w-[500px] mb-8">
                  Download the complete high-resolution documentation with master plans, specifications, infrastructure details, and connectivity guide.
                </p>
                {project.brochureUrl && (
                  <a 
                    href={project.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-white text-[12px] tracking-widest uppercase font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                  >
                    Open Official Sanctuary Brochure
                  </a>
                )}
              </div>
            )}

          </div>

        </div>
      </section>





      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: CONSTRUCTION PROGRESS
      ───────────────────────────────────────────────────────────── */}
      {project.constructionProgress && (
        <section className="py-20 lg:py-28 bg-soft border-b border-line" id="construction">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            
            <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
              <div>
                <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
                  {project.constructionProgress.eyebrow}
                </p>
                <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight">
                  {project.constructionProgress.title}
                </h2>
              </div>
              <p className="text-muted font-light text-[15px] max-w-[460px] leading-relaxed">
                {project.constructionProgress.subtitle}
              </p>
            </div>

            {/* Media Selector Tabs: Photos & Videos */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-line shadow-sm">
                {(project.constructionProgress.mediaTabs || ['Photos', 'Videos']).map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveProgressTab(tab);
                      setCurrentProgressSlide(0);
                    }}
                    className={`px-6 py-2 rounded-lg text-[12px] tracking-[0.16em] uppercase font-body font-medium transition-all duration-300 cursor-pointer ${
                      activeProgressTab === tab
                        ? 'bg-accent text-white font-semibold shadow-sm'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Slide Counter and Navigation for Desktop */}
              {(() => {
                const items = activeProgressTab === 'Videos'
                  ? (project.constructionProgress.videos || [])
                  : (project.constructionProgress.photos || []);
                if (!items.length) return null;
                return (
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-mono tracking-wider text-muted font-medium">
                      {String(currentProgressSlide + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setCurrentProgressSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1))}
                        aria-label="Previous slide"
                        className="w-10 h-10 rounded-full border border-line bg-white hover:bg-soft text-ink flex items-center justify-center transition-colors cursor-pointer shadow-sm hover:border-accent"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentProgressSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1))}
                        aria-label="Next slide"
                        className="w-10 h-10 rounded-full border border-line bg-white hover:bg-soft text-ink flex items-center justify-center transition-colors cursor-pointer shadow-sm hover:border-accent"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Split Media Viewer with Right-side Scroller */}
            {(() => {
              const items = activeProgressTab === 'Videos'
                ? (project.constructionProgress.videos || [])
                : (project.constructionProgress.photos || []);
              if (!items.length) return null;
              const activeItem = items[currentProgressSlide] || items[0];

              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left Section: Featured Large Active Viewer */}
                  <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-line bg-[#041628]">
                      {activeProgressTab === 'Photos' ? (
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                          <img
                            src={activeItem.image}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />

                          {/* Subtle arrow navigation overlay on image */}
                          <div className="absolute bottom-4 right-4 flex items-center gap-2">
                            <button
                              onClick={() => setCurrentProgressSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1))}
                              aria-label="Previous photo"
                              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <span className="text-[12px] font-mono tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
                              {String(currentProgressSlide + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                            </span>
                            <button
                              onClick={() => setCurrentProgressSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1))}
                              aria-label="Next photo"
                              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3 sm:p-4 bg-[#041628]">
                          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-2xl bg-black">
                            <video
                              key={activeItem.video + activeItem.id}
                              src={activeItem.video}
                              poster={activeItem.poster}
                              controls
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Section: Scrollable Thumbnails */}
                  <div className="lg:col-span-5 xl:col-span-4 flex flex-col rounded-2xl bg-white border border-line shadow-sm p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-line">
                      <span className="text-[12px] tracking-[0.16em] uppercase font-semibold text-ink font-heading">
                        {activeProgressTab === 'Photos' ? 'All Photos' : 'All Videos'}
                      </span>
                      <span className="text-[12px] font-mono text-muted">
                        {items.length} {activeProgressTab === 'Photos' ? 'Photos' : 'Videos'}
                      </span>
                    </div>

                    {/* Smooth Scroller for Thumbnails */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 overflow-y-auto max-h-[460px] sm:max-h-[500px] pr-1.5 thin-scrollbar">
                      {items.map((item, idx) => {
                        const isSelected = currentProgressSlide === idx;
                        const thumb = item.image || item.poster;

                        return (
                          <button
                            key={item.id || idx}
                            onClick={() => setCurrentProgressSlide(idx)}
                            className={`relative aspect-[16/10] w-full rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                              isSelected
                                ? 'border-accent ring-2 ring-accent/30 shadow-md scale-[0.99]'
                                : 'border-line hover:border-accent/60 opacity-80 hover:opacity-100'
                            }`}
                          >
                            {thumb && (
                              <img
                                src={thumb}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            )}
                            {activeProgressTab === 'Videos' && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="w-9 h-9 rounded-full bg-white/90 text-accent flex items-center justify-center shadow-lg">
                                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            )}
                            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[11px] font-mono">
                              {String(idx + 1).padStart(2, '0')}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              );
            })()}

          </div>
        </section>
      )}


      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: LOCATION & NEIGHBOURHOOD (Merged Layout)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-soft border-b border-line relative" id="location">
        {/* Anchor for neighbourhood link */}
        <div id="neighbourhood" className="absolute -top-24" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-14">
            <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
              {project.neighbourhood?.eyebrow || 'Connectivity & Location'}
            </p>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight mb-4">
              {project.neighbourhood?.title || 'Around the Neighbourhood'}
            </h2>
            {project.neighbourhood?.subtitle && (
              <p className="text-muted font-light text-[15px] sm:text-[16px] leading-relaxed">
                {project.neighbourhood.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-line bg-white shadow-sm">
            
            {/* Left Column: Address + Key Transport */}
            <div className="lg:col-span-6 xl:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-line bg-white">
              <div>
                {/* Address Section */}
                <div className="mb-8">
                  <h3 className="text-[26px] sm:text-[30px] font-heading font-medium text-ink mb-3">
                    Address
                  </h3>
                  <p className="text-muted text-[15px] sm:text-[16px] font-body font-light leading-relaxed max-w-lg">
                    {project.id === 'sanctuary'
                      ? 'Mohabbatnagar, Near Tukkuguda, Srisailam Highway, Hyderabad'
                      : (project.locationDetails?.addressLines?.join(', ') || project.location)}
                  </p>
                  {project.locationDetails?.addressLines && project.id === 'sanctuary' && (
                    <p className="text-muted/70 text-[13px] font-body font-light mt-2 leading-relaxed">
                      {project.locationDetails.addressLines.join(' ')}
                    </p>
                  )}
                </div>

                {/* Subtle Divider */}
                <div className="border-t border-line/80 my-8 sm:my-10" />

                {/* Key Transport / Connectivity */}
                <div>
                  <h3 className="text-[24px] sm:text-[28px] font-heading font-medium text-ink mb-6 sm:mb-8">
                    Key transport
                  </h3>

                  {/* 2-Column Landmarks Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-5">
                    {project.neighbourhood?.landmarks?.map((landmark, idx) => {
                      const displayName = landmark.name.includes('(')
                        ? landmark.name.split(' (')[0]
                        : landmark.name;

                      return (
                        <div key={idx} className="flex items-baseline justify-between gap-3">
                          <span className="text-[14px] sm:text-[15px] font-body text-ink font-normal">
                            {displayName}
                          </span>
                          <span className="text-[13px] sm:text-[14px] font-body text-muted font-light whitespace-nowrap">
                            {landmark.distance} / {landmark.time}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Get Directions Link */}
              {project.locationDetails?.googleMapLink && (
                <div className="mt-10 pt-6 border-t border-line/60">
                  <a
                    href={project.locationDetails.googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase font-semibold text-accent hover:text-ink transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Embedded Google Map with "Open in Maps" Overlay */}
            <div className="lg:col-span-6 xl:col-span-5 relative min-h-[440px] sm:min-h-[500px] lg:min-h-full bg-soft">
              {/* Floating "Open in Maps" Overlay Button */}
              {project.locationDetails?.googleMapLink && (
                <a
                  href={project.locationDetails.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/95 hover:bg-white text-ink text-[12px] font-semibold tracking-wide shadow-md border border-line backdrop-blur-sm transition-all hover:shadow-lg"
                >
                  <span className="text-accent">Open in Maps</span>
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              <iframe
                title={`${project.name} Location Map`}
                src={project.locationDetails?.embedMapUrl || "https://maps.google.com/maps?q=17.1587666,78.4787074&hl=en&z=14&output=embed"}
                className="w-full h-full min-h-[440px] sm:min-h-[500px] lg:min-h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: START YOUR ENQUIRY
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#07294A] text-white relative overflow-hidden" id="enquire">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Client Narrative & Quick CTAs */}
            <div className="lg:col-span-5">
              <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-[#4FA3E3] font-heading font-bold mb-3">
                {project.enquiry?.eyebrow || 'Start Your Enquiry'}
              </p>
              <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-heading font-normal leading-[1.12] mb-6">
                {project.enquiry?.title || 'Find Your Own Sanctuary'}
              </h2>
              <p className="text-[16px] text-white/80 font-body font-light leading-[1.8] mb-10 max-w-[460px]">
                {project.enquiry?.subtitle}
              </p>

              {/* Action Buttons: Call Us, Download Brochure, Schedule Site Visit */}
              <div className="space-y-4">
                <a 
                  href="tel:+918657553355" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wider uppercase text-white/60">Direct Enquiry Line</p>
                    <p className="text-[16px] font-medium text-white">+91 86575 53355</p>
                  </div>
                </a>

                {project.brochureUrl && (
                  <a 
                    href={project.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-wider uppercase text-white/60">Project Brochure</p>
                      <p className="text-[16px] font-medium text-white">Download Sanctuary Brochure</p>
                    </div>
                  </a>
                )}

                <a 
                  href="https://wa.me/918657553355" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.53 1.771.82 2.791.82 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm3.374 8.212c-.143.404-.716.741-1.004.786-.289.045-.668.064-1.921-.456-1.571-.652-2.581-2.252-2.66-2.357-.079-.105-.638-.85-.638-1.622s.404-1.15.548-1.306c.143-.156.312-.195.416-.195.104 0 .208.002.299.006.096.005.226-.037.351.267.13.315.442 1.08.481 1.159.039.078.065.17.013.273-.052.104-.078.17-.156.26-.078.092-.164.205-.234.275-.078.078-.16.162-.069.318.091.156.404.668.867 1.08 1.144 1.019 1.488.75 1.701.536.213-.213.456-.56.638-.806.182-.247.364-.207.608-.117.244.091 1.547.729 1.812.861.265.132.442.197.507.307.065.111.065.642-.078 1.046z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wider uppercase text-white/60">WhatsApp Concierge</p>
                    <p className="text-[16px] font-medium text-white">Chat with Team</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Detailed Client-Specified Form */}
            <div className="lg:col-span-7">
              <div className="bg-white text-ink p-8 sm:p-10 rounded-2xl shadow-2xl border border-line">
                <h3 className="text-[26px] font-heading font-normal text-ink mb-2">
                  Find Your Plot or Villa
                </h3>
                <p className="text-[14px] text-muted font-body font-light mb-8">
                  Please share your requirements and our team will get in touch with availability and pricing.
                </p>

                {formSubmitted ? (
                  <div className="p-8 bg-[#EEF5FB] border border-accent/30 rounded-xl text-center">
                    <svg className="w-12 h-12 text-accent mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-[22px] font-heading text-ink mb-1">Enquiry Received</h4>
                    <p className="text-[14px] text-muted font-body">
                      Thank you for your interest in <strong>{project.name}</strong>. Our senior advisors will contact you shortly with the master layout and pricing details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-line bg-soft text-ink text-[15px] focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    {/* Mobile & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                          Mobile Number *
                        </label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-line bg-soft text-ink text-[15px] focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-line bg-soft text-ink text-[15px] focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    {/* Preferred Option: Plot / Villa / Both */}
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                        Preferred Option *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {project.enquiry?.options?.map((opt, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setFormData({...formData, option: opt})}
                            className={`p-3 text-[12px] rounded-lg border text-center transition-all cursor-pointer font-medium ${
                              formData.option === opt 
                                ? 'bg-ink text-white border-ink shadow-sm' 
                                : 'bg-soft text-muted border-line hover:border-accent'
                            }`}
                          >
                            {opt.split(' ')[0]} {opt.split(' ')[1] || ''}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Preferred Plot Size & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                          Preferred Plot Size
                        </label>
                        <select
                          value={formData.plotSize}
                          onChange={(e) => setFormData({...formData, plotSize: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-line bg-soft text-ink text-[14px] focus:outline-none focus:border-accent transition-colors cursor-pointer"
                        >
                          {project.enquiry?.plotSizes?.map((sz, i) => (
                            <option key={i} value={sz}>{sz}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                          Preferred Site Visit Date
                        </label>
                        <input 
                          type="date" 
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-line bg-soft text-ink text-[14px] focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                        Message
                      </label>
                      <textarea 
                        rows="3"
                        placeholder="Share any specific requirements or questions regarding pricing or site visit..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-line bg-soft text-ink text-[14px] focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button 
                      type="submit" 
                      className="w-full py-4 rounded-lg bg-accent text-white font-semibold text-[13px] tracking-[0.18em] uppercase hover:bg-accent/90 transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
                    >
                      Enquire Now
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
