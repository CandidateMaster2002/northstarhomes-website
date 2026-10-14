import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail({ projectId = 'sanctuary' }) {
  const project = projectsData[projectId] || projectsData['sanctuary'];
  
  // Interactive States
  const [activeExperienceTab, setActiveExperienceTab] = useState('photos');
  const [activeAmenityCategory, setActiveAmenityCategory] = useState(0);
  const [selectedQualityPoint, setSelectedQualityPoint] = useState(
    project.qualityInfrastructure?.points ? project.qualityInfrastructure.points[0] : null
  );
  const [activeProgressTab, setActiveProgressTab] = useState('Drone Photos');

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
          SECTION 1: HERO & PROJECT DETAILS
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-end bg-[#07294A] text-white overflow-hidden pt-28 pb-16 lg:pb-24">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          {project.heroImage ? (
            <img 
              src={project.heroImage} 
              alt={project.name} 
              className="w-full h-full object-cover object-center brightness-75 scale-105 transition-transform duration-1000 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#07294A] to-[#041628]" />
          )}
          {/* Subtle Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07294A] via-[#07294A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07294A]/90 via-[#07294A]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 lg:px-10">
          
          {/* Breadcrumb Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-white/70 mb-5 font-medium"
          >
            <a href="#top" className="hover:text-accent transition-colors">Home</a>
            <span className="opacity-40">/</span>
            <a href="#ongoing-projects" className="hover:text-accent transition-colors">Projects</a>
            <span className="opacity-40">/</span>
            <span className="text-white font-semibold">{project.shortName || project.name}</span>
          </motion.div>

          <div className="max-w-[820px]">
            {/* Header Eyebrow */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[12px] sm:text-[13px] tracking-[0.26em] uppercase text-[#4FA3E3] font-heading font-bold mb-3"
            >
              {project.eyebrow || 'A Life Crafted Closer to Nature'}
            </motion.p>

            {/* Status & Type Chips */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 mb-4"
            >
              <span className="bg-accent text-white text-[11px] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm">
                {project.statusBadge || project.status}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-[11px] font-medium tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                {project.type}
              </span>
              <span className="text-white/80 text-[12px] tracking-wider uppercase font-light">
                {project.city}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[44px] sm:text-[58px] lg:text-[76px] font-heading font-normal leading-[1.04] text-white mb-4 tracking-tight"
            >
              {project.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[18px] sm:text-[22px] lg:text-[24px] font-heading font-light text-white/90 leading-relaxed mb-6 max-w-[640px]"
            >
              {project.tagline}
            </motion.p>

            {/* Location Line */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center gap-2 text-[13px] sm:text-[14px] text-white/80 font-light mb-8"
            >
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{project.location}</span>
            </motion.div>

            {/* Quick Actions (Site Visit, Brochure, Walkthrough Video) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <a 
                href="#enquire" 
                className="inline-flex items-center justify-center min-h-12 px-7 py-3 text-[12px] tracking-[0.18em] uppercase font-semibold bg-accent text-white rounded-lg shadow-lg hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Schedule Site Visit
              </a>

              {project.brochureUrl && (
                <a 
                  href={project.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 text-[12px] tracking-[0.18em] uppercase font-medium border border-white/50 text-white rounded-lg backdrop-blur-sm hover:bg-white hover:text-ink hover:border-white transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Brochure
                </a>
              )}

              {project.walkthroughVideoLink && (
                <a 
                  href={project.walkthroughVideoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 text-[12px] tracking-[0.18em] uppercase font-medium bg-white/10 border border-white/20 text-white rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-[#4FA3E3]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Walkthrough
                </a>
              )}
            </motion.div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: PROJECT IDENTITY BAR (Full Specs Strip)
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-bg border-b border-line py-8 lg:py-10 shadow-sm relative z-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-4">
            {project.specs.map((spec, i) => (
              <div key={i} className="flex flex-col border-l border-line pl-4 first:border-l-0 first:pl-0">
                <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted font-body mb-1">
                  {spec.label}
                </span>
                <span className="text-[15px] sm:text-[16px] lg:text-[17px] font-heading font-medium text-ink leading-tight">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ARCHITECTURAL NARRATIVE (4 Editorial Pillars)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-soft border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-[720px] mx-auto mb-16 lg:mb-20">
            <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
              Architectural Vision
            </p>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[50px] font-heading font-normal text-ink leading-[1.14]">
              Where Nature Becomes a Way of Life.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {project.narrative.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="bg-bg p-8 lg:p-12 rounded-2xl border border-line shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-accent font-body border-b border-accent/40 pb-1">
                      {item.tag}
                    </span>
                    <span className="text-[20px] font-heading text-ink/20 group-hover:text-accent/60 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-[26px] sm:text-[30px] font-heading font-normal text-ink leading-snug mb-4 group-hover:text-accent transition-colors duration-300">
                    {item.headline}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] text-muted font-body font-light leading-[1.85]">
                    {item.description}
                  </p>
                </div>

                <div className="w-12 h-[2px] bg-accent/30 mt-8 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: LIFESTYLE FEATURES & AMENITIES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-line" id="amenities">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12 lg:mb-16">
            <div>
              <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
                {project.amenitiesHeader?.eyebrow || 'Lifestyle Features & Amenities'}
              </p>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight">
                {project.amenitiesHeader?.title || 'A Lifestyle Shaped by Greenery, Wellness and Community'}
              </h2>
            </div>
            <p className="text-muted font-light text-[14px] sm:text-[15px] max-w-[460px] leading-relaxed">
              {project.amenitiesHeader?.description}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-line">
            {project.amenityCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveAmenityCategory(idx)}
                className={`px-5 py-2.5 rounded-full text-[12px] tracking-[0.14em] uppercase font-body transition-all duration-300 cursor-pointer ${
                  activeAmenityCategory === idx
                    ? 'bg-ink text-white font-medium shadow-md'
                    : 'bg-soft text-muted hover:text-ink hover:bg-line/60 font-light'
                }`}
              >
                {cat.title} ({cat.items.length})
              </button>
            ))}
          </div>

          {/* Active Category Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {project.amenityCategories[activeAmenityCategory].items.map((amenity, idx) => (
              <motion.div
                key={`${activeAmenityCategory}-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-soft border border-line hover:border-accent/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[15px] sm:text-[16px] font-body text-ink font-normal group-hover:text-accent transition-colors">
                  {amenity}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


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

            {activeExperienceTab === '360' && (
              <div className="w-full py-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-soft border border-line flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">360° Panoramic View</h4>
                <p className="text-muted text-[15px] font-light max-w-[500px] mb-8">
                  Take an interactive 360-degree aerial and ground-level tour of the Sanctuary development layout.
                </p>
                <a 
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent transition-colors"
                >
                  Request 360° Virtual Tour
                </a>
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
                  <a href="#enquire" className="px-8 py-4 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent">
                    Request Master Plan PDF
                  </a>
                )}
              </div>
            )}

            {activeExperienceTab === 'plotplan' && (
              <div className="w-full py-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-soft border border-line flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">Plot Dimension Options</h4>
                <p className="text-muted text-[15px] font-light max-w-[500px] mb-8">
                  Plot options from 343 to 500 Sq. Yds. for villas, and 600 to 1,000 Sq. Yds. for custom luxury estates.
                </p>
                <a 
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent transition-colors"
                >
                  Inquire About Plot Availability
                </a>
              </div>
            )}

            {activeExperienceTab === 'villaplan' && (
              <div className="w-full py-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-soft border border-line flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">Crafted Villa Floor Plans</h4>
                <p className="text-muted text-[15px] font-light max-w-[500px] mb-8">
                  Double-height living spaces, private terraces, garden sit-outs, and flexible configurations tailored to your family.
                </p>
                <a 
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent transition-colors"
                >
                  Request Villa Layout Book
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
          SECTION 6: BUILT WITH QUALITY (Interactive Infrastructure Explorer)
      ───────────────────────────────────────────────────────────── */}
      {project.qualityInfrastructure && (
        <section className="py-20 lg:py-28 bg-bg border-b border-line" id="infrastructure">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            
            <div className="text-center max-w-[760px] mx-auto mb-14 lg:mb-18">
              <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
                {project.qualityInfrastructure.eyebrow}
              </p>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight mb-4">
                {project.qualityInfrastructure.title}
              </h2>
              <p className="text-muted font-light text-[15px] leading-relaxed">
                {project.qualityInfrastructure.subtitle}
              </p>
            </div>

            {/* Interactive Grid of 16 Infrastructure Points */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: 16 Clickable Icon Pills */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.qualityInfrastructure.points.map((pt) => {
                  const isSelected = selectedQualityPoint?.id === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setSelectedQualityPoint(pt)}
                      className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                        isSelected 
                          ? 'bg-[#07294A] text-white border-[#07294A] shadow-md' 
                          : 'bg-soft text-ink border-line hover:border-accent hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-bold ${
                          isSelected ? 'bg-accent text-white' : 'bg-white text-accent border border-line group-hover:bg-accent group-hover:text-white'
                        }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className={`text-[14px] font-medium leading-tight ${isSelected ? 'text-white' : 'text-ink'}`}>
                            {pt.label}
                          </p>
                          <span className={`text-[10px] tracking-wider uppercase ${isSelected ? 'text-[#4FA3E3]' : 'text-muted'}`}>
                            {pt.category}
                          </span>
                        </div>
                      </div>

                      <span className={`text-sm ${isSelected ? 'text-[#4FA3E3]' : 'text-muted/40 group-hover:text-accent'}`}>
                        &rarr;
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Detailed Master Inspection Card */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#07294A] to-[#0D3B66] text-white shadow-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

                  <span className="inline-block text-[10px] tracking-[0.24em] uppercase text-[#4FA3E3] font-semibold mb-2">
                    Infrastructure Spotlight
                  </span>
                  
                  <h3 className="text-[28px] font-heading font-normal text-white mb-2 leading-tight">
                    {selectedQualityPoint?.label}
                  </h3>

                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] uppercase tracking-wider mb-6 font-medium">
                    Category: {selectedQualityPoint?.category}
                  </div>

                  <p className="text-[15px] sm:text-[16px] text-white/80 font-body font-light leading-[1.8] mb-8">
                    {selectedQualityPoint?.detail}
                  </p>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[12px] text-white/60">
                      Standard: Pre-handover certified
                    </span>
                    <a 
                      href="#enquire" 
                      className="text-[12px] tracking-wider uppercase font-semibold text-accent hover:text-white transition-colors flex items-center gap-1"
                    >
                      Enquire &rarr;
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}


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

            {/* Media Selector Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
              {project.constructionProgress.mediaTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProgressTab(tab)}
                  className={`px-5 py-2.5 rounded-lg text-[12px] tracking-[0.16em] uppercase font-body transition-all duration-300 cursor-pointer ${
                    activeProgressTab === tab
                      ? 'bg-ink text-white font-semibold shadow-md'
                      : 'bg-white text-muted hover:text-ink border border-line'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Milestone Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {project.constructionProgress.milestones.map((ms, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-bg border border-line shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {ms.status}
                    </span>
                    <span className="text-[12px] font-heading text-muted/40">0{idx + 1}</span>
                  </div>
                  <h4 className="text-[18px] font-heading font-medium text-ink mb-2">
                    {ms.label}
                  </h4>
                  <p className="text-[14px] text-muted font-body font-light leading-relaxed">
                    {ms.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Drone Progress Visual Anchor */}
            <div className="p-8 rounded-2xl bg-white border border-line flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-[20px] font-heading font-medium text-ink mb-1">
                  Access Raw Drone & Site Photography
                </h4>
                <p className="text-[14px] text-muted font-light">
                  Follow regular progress updates from our on-ground project management team.
                </p>
              </div>
              {project.projectLink && (
                <a 
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-[12px] tracking-widest uppercase font-semibold hover:bg-accent/90 transition-colors flex-shrink-0"
                >
                  View Site Progress Files &rarr;
                </a>
              )}
            </div>

          </div>
        </section>
      )}


      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: AROUND THE NEIGHBOURHOOD
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-line" id="neighbourhood">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
              {project.neighbourhood?.eyebrow || 'Connectivity'}
            </p>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight mb-4">
              {project.neighbourhood?.title || 'Around the Neighbourhood'}
            </h2>
            <p className="text-muted font-light text-[15px] leading-relaxed">
              {project.neighbourhood?.subtitle}
            </p>
          </div>

          {/* Commute Distances Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-[1000px] mx-auto">
            {project.neighbourhood?.landmarks.map((landmark, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-soft border border-line hover:border-accent/40 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="text-[15px] sm:text-[16px] font-body text-ink font-normal">
                    {landmark.name}
                  </span>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[13px] font-body text-muted font-light">
                    {landmark.distance}
                  </span>
                  <span className="text-[13px] font-semibold font-body text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                    {landmark.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: PROJECT LOCATION (Split Layout: Map + Address)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-soft border-b border-line" id="location">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
              {project.locationDetails?.eyebrow || 'Project Location'}
            </p>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight">
              {project.locationDetails?.title || 'A Nature-Led Address on Srisailam Highway'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Side: Embedded Google Map / Visual Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-line shadow-md min-h-[420px] bg-bg relative">
              <iframe 
                title="Sanctuary Location Map"
                src={project.locationDetails?.embedMapUrl || "https://maps.google.com/maps?q=17.1587666,78.4787074&hl=en&z=14&output=embed"}
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Right Side: Exact Survey Numbers & Postal Address */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-bg border border-line shadow-md">
              <div>
                <span className="text-[11px] tracking-widest uppercase text-accent font-semibold mb-2 block font-body">
                  Official Site Address
                </span>
                <h3 className="text-[26px] font-heading font-normal text-ink mb-4">
                  {project.locationDetails?.addressTitle || project.fullName}
                </h3>

                <div className="space-y-1.5 text-[15px] sm:text-[16px] text-muted font-body font-light leading-relaxed mb-8">
                  {project.locationDetails?.addressLines?.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-soft border border-line mb-8">
                  <div className="flex items-center gap-3 text-ink text-[14px]">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Strategic growth corridor near RGIA & ORR Exit 14</span>
                  </div>
                </div>
              </div>

              {/* Get Directions CTA */}
              <a 
                href={project.locationDetails?.googleMapLink || "https://maps.google.com/maps?q=17.1587666,78.4787074"}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-accent text-white font-semibold text-[13px] tracking-widest uppercase hover:bg-accent/90 transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
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
