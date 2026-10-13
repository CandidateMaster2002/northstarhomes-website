import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail({ projectId = 'sanctuary' }) {
  const project = projectsData[projectId] || projectsData['sanctuary'];
  const [activeTab, setActiveTab] = useState('photos');
  const [activeAmenityCategory, setActiveAmenityCategory] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-bg text-ink font-body">

      {/* ── SECTION 1: HERO & BREADCRUMB ── */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-end bg-[#07294A] text-white overflow-hidden pt-28 pb-16 lg:pb-24">
        {/* Background Image / Render */}
        <div className="absolute inset-0 z-0">
          {project.heroImage ? (
            <img 
              src={project.heroImage} 
              alt={project.fullName} 
              className="w-full h-full object-cover object-center brightness-75 scale-105 transition-transform duration-1000 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#07294A] to-[#041628]" />
          )}
          {/* Editorial Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07294A] via-[#07294A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07294A]/90 via-[#07294A]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 lg:px-10">
          
          {/* Breadcrumb Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-white/70 mb-6 font-medium"
          >
            <a href="#top" className="hover:text-accent transition-colors">Home</a>
            <span className="opacity-40">/</span>
            <a href="#ongoing-projects" className="hover:text-accent transition-colors">Projects</a>
            <span className="opacity-40">/</span>
            <span className="text-white font-semibold">{project.name}</span>
          </motion.div>

          <div className="max-w-[780px]">
            {/* Status & Type Chips */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
              className="text-[18px] sm:text-[22px] lg:text-[24px] font-heading font-light text-white/90 leading-relaxed mb-8 max-w-[620px]"
            >
              {project.tagline}
            </motion.p>

            {/* Location Line */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center gap-2 text-[13px] sm:text-[14px] text-white/80 font-light mb-10"
            >
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{project.location}</span>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a 
                href="#enquire" 
                className="inline-flex items-center justify-center min-h-12 px-8 py-3.5 text-[12px] tracking-[0.18em] uppercase font-semibold bg-accent text-white rounded-lg shadow-lg hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Schedule Site Visit
              </a>

              {project.brochureUrl && (
                <a 
                  href={project.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 min-h-12 px-7 py-3.5 text-[12px] tracking-[0.18em] uppercase font-medium border border-white/50 text-white rounded-lg backdrop-blur-sm hover:bg-white hover:text-ink hover:border-white transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Brochure
                </a>
              )}
            </motion.div>

          </div>

        </div>
      </section>


      {/* ── SECTION 2: PROJECT IDENTITY SPECS BAR ── */}
      <section className="bg-bg border-b border-line py-8 lg:py-10 shadow-sm relative z-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {project.specs.map((spec, i) => (
              <div key={i} className="flex flex-col border-l border-line pl-4 first:border-l-0 first:pl-0">
                <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted font-body mb-1">
                  {spec.label}
                </span>
                <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-heading font-medium text-ink leading-tight">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 3: ARCHITECTURAL NARRATIVE & HIGHLIGHTS ── */}
      <section className="py-20 lg:py-28 bg-soft border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
            <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
              Architectural Vision
            </p>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[50px] font-heading font-normal text-ink leading-[1.14]">
              Planned Around Your Family, Designed for Generations.
            </h2>
          </div>

          {/* Editorial Grid of Narrative Pillars */}
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

                  <p className="text-[15px] sm:text-[16px] text-muted font-body font-light leading-[1.8]">
                    {item.description}
                  </p>
                </div>

                <div className="w-12 h-[2px] bg-accent/30 mt-8 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ── SECTION 4: LIFESTYLE FEATURES & AMENITIES ── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-line" id="amenities">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12 lg:mb-16">
            <div>
              <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
                Lifestyle & Wellness
              </p>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight">
                Curated Features & Amenities
              </h2>
            </div>
            <p className="text-muted font-light text-[14px] sm:text-[15px] max-w-[420px]">
              Planned to make outdoor living, active wellness, and community warmth an effortless part of daily life.
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


      {/* ── SECTION 5: EXPLORE THE EXPERIENCE (TABS) ── */}
      <section className="py-20 lg:py-28 bg-soft border-b border-line" id="experience">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
              Explore the Project
            </p>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-heading font-normal text-ink leading-tight mb-4">
              {project.experience.headline}
            </h2>
            <p className="text-muted font-light text-[15px] leading-relaxed">
              {project.experience.subtitle}
            </p>
          </div>

          {/* Switcher Navigation */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-10">
            {project.experience.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-[12px] tracking-[0.18em] uppercase font-body rounded-lg transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-accent text-white font-semibold shadow-md'
                    : 'bg-white text-muted hover:text-ink border border-line'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Tab Visual Frame */}
          <div className="bg-bg rounded-2xl border border-line p-6 lg:p-10 shadow-lg min-h-[420px] flex flex-col justify-center items-center text-center">
            {activeTab === 'photos' && (
              <div className="w-full">
                <div className="aspect-[16/9] max-h-[500px] w-full rounded-xl overflow-hidden mb-6 relative">
                  <img 
                    src={project.heroImage} 
                    alt="Sanctuary Landscape" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-ink/80 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-md">
                    Landscape Avenue & Greenery
                  </div>
                </div>
                <p className="text-muted text-[14px] font-light">
                  Capturing the pristine landscape avenues, pocket parks, and open greenery at Sanctuary.
                </p>
              </div>
            )}

            {activeTab === 'masterplan' && (
              <div className="w-full py-12 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-soft border border-line flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">14-Acre Master Layout</h4>
                <p className="text-muted text-[15px] font-light max-w-[500px] mb-6">
                  Carefully planned across 14 Acres 11 Guntas with dedicated 40ft main avenues, 30ft internal lanes, pocket parks, and 63 landmark addresses.
                </p>
                <a 
                  href="#enquire" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent transition-colors"
                >
                  Request Masterplan PDF
                </a>
              </div>
            )}

            {activeTab === 'villas' && (
              <div className="w-full py-12 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-soft border border-line flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">Crafted Villa Floor Plans</h4>
                <p className="text-muted text-[15px] font-light max-w-[500px] mb-6">
                  Double-height living rooms, private terraces, garden sit-outs, and flexible floor layouts designed to match individual aspirations.
                </p>
                <a 
                  href="#enquire" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink text-white text-[12px] tracking-widest uppercase font-medium hover:bg-accent transition-colors"
                >
                  Enquire About Villa Options
                </a>
              </div>
            )}

            {activeTab === 'brochure' && (
              <div className="w-full py-12 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-[26px] font-heading font-normal text-ink mb-3">Comprehensive Project Brochure</h4>
                <p className="text-muted text-[15px] font-light max-w-[500px] mb-8">
                  Download the complete high-resolution documentation including site layout, amenities map, technical specifications, and connectivity guide.
                </p>
                {project.brochureUrl ? (
                  <a 
                    href={project.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-white text-[12px] tracking-widest uppercase font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                  >
                    Download Sanctuary Brochure (PDF)
                  </a>
                ) : (
                  <a 
                    href="#enquire"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-white text-[12px] tracking-widest uppercase font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                  >
                    Request Brochure
                  </a>
                )}
              </div>
            )}
          </div>

        </div>
      </section>


      {/* ── SECTION 6: LOCATION & CONNECTIVITY ── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-line" id="location">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Address Card & Map Frame */}
            <div className="lg:col-span-5">
              <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
                Neighbourhood
              </p>
              <h2 className="text-[34px] sm:text-[42px] font-heading font-normal text-ink leading-tight mb-6">
                Connected Yet Unhurried.
              </h2>
              
              <div className="p-6 rounded-2xl bg-soft border border-line mb-8">
                <h4 className="text-[12px] tracking-widest uppercase text-muted font-body mb-2 font-medium">
                  Project Address
                </h4>
                <p className="text-[16px] sm:text-[17px] font-heading text-ink leading-relaxed">
                  {project.locationDetails.address}
                </p>
              </div>

              {/* Map Preview Frame */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-line bg-soft relative flex items-center justify-center text-center p-6 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mb-3 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-heading text-[18px] text-ink mb-1">Near Tukkuguda & Srisailam Highway</p>
                  <p className="text-[13px] text-muted font-body font-light mb-4">Minutes from Hyderabad Airport & ORR Exit 14</p>
                  <a 
                    href="https://maps.google.com/?q=Mohabbatnagar+Tukkuguda+Hyderabad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] tracking-widest uppercase font-semibold text-accent hover:text-ink transition-colors border-b border-accent pb-0.5"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Key Connectivity Table */}
            <div className="lg:col-span-7">
              <h3 className="text-[24px] font-heading font-normal text-ink mb-6 pb-4 border-b border-line flex items-center justify-between">
                <span>Key Destinations & Commute Times</span>
                <span className="text-[12px] tracking-widest uppercase text-muted font-body font-normal">Approx.</span>
              </h3>

              <div className="divide-y divide-line">
                {project.locationDetails.landmarks.map((landmark, idx) => (
                  <div key={idx} className="py-4 flex items-center justify-between hover:bg-soft/60 px-3 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent/60" />
                      <span className="text-[15px] sm:text-[16px] font-body text-ink font-normal">
                        {landmark.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-right">
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

          </div>

        </div>
      </section>


      {/* ── SECTION 7: ENQUIRY & SCHEDULE VISIT FORM ── */}
      <section className="py-20 lg:py-28 bg-[#07294A] text-white relative overflow-hidden" id="enquire">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Contact Narrative */}
            <div className="lg:col-span-5">
              <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-[#4FA3E3] font-heading font-bold mb-3">
                Experience Sanctuary
              </p>
              <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-heading font-normal leading-[1.12] mb-6">
                Request a Private Walkthrough.
              </h2>
              <p className="text-[16px] text-white/80 font-body font-light leading-[1.8] mb-10 max-w-[440px]">
                Connect with our senior advisory team to arrange a personalized site visit, review master layouts, or explore plot and villa allocations.
              </p>

              {/* Direct Touchpoints */}
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

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white text-ink p-8 sm:p-10 rounded-2xl shadow-2xl border border-line">
                <h3 className="text-[26px] font-heading font-normal text-ink mb-2">
                  Request Information & Visit
                </h3>
                <p className="text-[14px] text-muted font-body font-light mb-8">
                  Fill in your details below and our team will get in touch shortly.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-[#EEF5FB] border border-accent/30 rounded-xl text-center">
                    <svg className="w-12 h-12 text-accent mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-[20px] font-heading text-ink mb-1">Thank You!</h4>
                    <p className="text-[14px] text-muted font-body">
                      Your request for <strong>{project.fullName}</strong> has been received. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                        Your Full Name *
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                          Phone Number *
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

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                        Preferred Site Visit Date
                      </label>
                      <input 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-line bg-soft text-ink text-[15px] focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-muted mb-2">
                        Message / Specific Queries
                      </label>
                      <textarea 
                        rows="3"
                        placeholder="I would like to inquire about plot dimensions / villa pricing..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-line bg-soft text-ink text-[15px] focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 rounded-lg bg-accent text-white font-semibold text-[13px] tracking-[0.18em] uppercase hover:bg-accent/90 transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
                    >
                      Submit Request for {project.name}
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
