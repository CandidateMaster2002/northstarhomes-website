import React, { useState, useEffect } from 'react'
import logoImg from '../assets/Northstar-logo_webp_file-removebg-preview.webp'
import { siteConfig } from '../siteConfig'

// Hierarchy data for Projects Dropdown
const hydProjects = {
  ongoing: [
    { name: 'Allura', href: '#project/allura' },
    { name: 'SP Palacio', href: '#project/sp-palacio' },
    { name: 'Sanctuary', href: '#project/sanctuary' }
  ],
  completed: [
    { name: 'District 1', href: '#project/district-1' },
    { name: 'Airport Boulevard', href: '#project/airport-boulevard' },
    { name: 'Hillside', href: '#project/hillside' },
    { name: 'Veda', href: '#project/veda' },
    { name: 'Leela', href: '#project/leela' },
    { name: 'AMG Plaza', href: '#project/amg-plaza' },
    { name: 'Garden Suites', href: '#project/garden-suites' }
  ]
};

const vizagProjects = {
  ongoing: [
    { name: 'Park Avenue', href: '#project/park-avenue' },
    { name: 'Golden Valley', href: '#project/golden-valley' }
  ],
  completed: [
    { name: 'Eden Gardens', href: '#project/eden-gardens' }
  ]
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSuperNav, setShowSuperNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCity, setActiveCity] = useState(null); // 'hyd' | 'vizag' | null
  const [showCompletedHyd, setShowCompletedHyd] = useState(false);
  const [showCompletedVizag, setShowCompletedVizag] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      // Hero video is 100vh. Hide super navbar while viewing hero video; reveal once scrolled past it (~60vh)
      const heroThreshold = window.innerHeight * 0.65;
      setShowSuperNav(scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetHash) => {
    setIsMobileMenuOpen(false);
    setActiveCity(null);
    setShowCompletedHyd(false);
    setShowCompletedVizag(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (targetHash && window.location.hash === targetHash) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      
      {/* ── Thin Super Navbar: Social Media, Direct Line & Email (Hidden on Hero video) ── */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden border-b ${
          showSuperNav
            ? 'max-h-12 opacity-100 bg-[#07294A] text-white border-white/10 py-2' 
            : 'max-h-0 opacity-0 border-transparent py-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 flex items-center justify-between text-[11px] font-body tracking-[0.06em]">
          
          {/* Left: Direct Line & Concierge Email */}
          <div className="flex items-center gap-5 sm:gap-7">
            <a 
              href="tel:+918657553355" 
              className="flex items-center gap-2 hover:text-[#4FA3E3] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#3898E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">+91 86575 53355</span>
            </a>

            <a 
              href="mailto:support@northstarhomes.in" 
              className="hidden sm:flex items-center gap-2 hover:text-[#4FA3E3] transition-colors text-white/80"
            >
              <svg className="w-3.5 h-3.5 text-[#3898E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>support@northstarhomes.in</span>
            </a>
          </div>

          {/* Right: Official Social Media Channels */}
          <div className="flex items-center gap-3.5">
            <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.16em] text-white/50 mr-1 font-body">
              Official:
            </span>
            {/* Facebook */}
            <a 
              href={siteConfig.socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white transition-colors" 
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a 
              href={siteConfig.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white transition-colors" 
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a 
              href={siteConfig.socials.x} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white transition-colors" 
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a 
              href={siteConfig.socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white transition-colors" 
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div 
        className={`transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-line shadow-sm py-3.5' 
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center min-w-[150px] lg:min-w-[200px]">
            <a
              href="#top"
              aria-label="Northstar Homes, home"
              className="flex items-center transition-transform hover:scale-[1.02] z-50"
              onClick={(e) => handleNavClick(e, '#top')}
            >
              <img 
                src={logoImg} 
                alt="Northstar Homes Logo" 
                className={`h-11 sm:h-12 w-auto object-contain transition-all duration-500 ${
                  isScrolled || isMobileMenuOpen ? '' : 'drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]'
                }`} 
              />
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <nav
            aria-label="Primary"
            className={`
              ${isMobileMenuOpen 
                ? 'fixed inset-0 bg-white z-40 flex flex-col pt-[96px] pb-10 px-8 gap-6 overflow-y-auto h-[100dvh]' 
                : 'hidden min-[960px]:flex items-center justify-center'} 
              gap-6 lg:gap-8 text-[12px] lg:text-[13px] tracking-[0.16em] uppercase transition-colors duration-500
              ${isScrolled || isMobileMenuOpen ? 'text-ink font-semibold' : 'text-white font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'}
            `}
          >
            {/* 1. About Dropdown */}
            <div className="relative group">
              <button 
                type="button"
                className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[959px]:w-full max-[959px]:justify-between max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3"
              >
                About
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:-scale-y-100 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="min-[960px]:absolute min-[960px]:left-1/2 min-[960px]:-translate-x-1/2 min-[960px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[959px]:static max-[959px]:opacity-100 max-[959px]:visible max-[959px]:translate-y-0 max-[959px]:hidden group-hover:max-[959px]:block">
                <div className="w-[200px] max-[959px]:w-full bg-[#1c1a18]/95 backdrop-blur-xl rounded-[20px] p-2 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] normal-case tracking-normal flex flex-col text-white">
                  <a 
                    href="#about-company" 
                    onClick={(e) => handleNavClick(e, '#about-company')} 
                    className="px-4 py-2.5 text-[15px] font-heading font-medium text-white/90 hover:text-white hover:bg-white/[0.08] rounded-[10px] transition-all block cursor-pointer border-b border-white/[0.08]"
                  >
                    Company
                  </a>
                  <a 
                    href="#leadership" 
                    onClick={(e) => handleNavClick(e, '#leadership')} 
                    className="px-4 py-2.5 text-[15px] font-heading font-medium text-white/90 hover:text-white hover:bg-white/[0.08] rounded-[10px] transition-all block cursor-pointer border-b border-white/[0.08]"
                  >
                    Leadership
                  </a>
                  <a 
                    href="#legacy" 
                    onClick={(e) => handleNavClick(e, '#legacy')} 
                    className="px-4 py-2.5 text-[15px] font-heading font-medium text-white/90 hover:text-white hover:bg-white/[0.08] rounded-[10px] transition-all block cursor-pointer"
                  >
                    Awards
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Projects Dropdown */}
            <div 
              className="relative group"
              onMouseLeave={() => {
                setActiveCity(null);
                setShowCompletedHyd(false);
                setShowCompletedVizag(false);
              }}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[959px]:w-full max-[959px]:justify-between max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3"
              >
                Projects
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:-scale-y-100 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Desktop & Mobile Dropdown Menu matching uploaded mockups */}
              <div className="min-[960px]:absolute min-[960px]:left-1/2 min-[960px]:-translate-x-1/2 min-[960px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[959px]:static max-[959px]:opacity-100 max-[959px]:visible max-[959px]:translate-y-0 max-[959px]:hidden group-hover:max-[959px]:block">
                <div className="w-[280px] max-[959px]:w-full bg-[#1c1a18]/95 backdrop-blur-xl rounded-[22px] p-2.5 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] normal-case tracking-normal flex flex-col text-white">

                  {/* ── HYDERABAD SECTION ── */}
                  <div 
                    onMouseEnter={() => setActiveCity('hyd')}
                    className="flex flex-col"
                  >
                    {/* Hyderabad City Pill / Button */}
                    <button
                      type="button"
                      onClick={() => setActiveCity(activeCity === 'hyd' ? null : 'hyd')}
                      className={`w-full px-5 py-3 rounded-[18px] flex items-center justify-between font-heading font-bold text-[17px] transition-all duration-200 cursor-pointer ${
                        activeCity === 'hyd'
                          ? 'bg-[#8e786b] text-white shadow-sm'
                          : 'text-white/95 hover:bg-white/[0.08]'
                      }`}
                    >
                      <span>Hyderabad</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${activeCity === 'hyd' ? 'rotate-180 text-white' : 'text-white/80'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Hyderabad Ongoing & Completed Projects */}
                    {activeCity === 'hyd' && (
                      <div className="pt-2 pb-1 flex flex-col">
                        {/* Ongoing Projects list */}
                        {hydProjects.ongoing.map((proj) => (
                          <a
                            key={proj.name}
                            href={proj.href}
                            onClick={(e) => handleNavClick(e, proj.href)}
                            className="px-5 py-2.5 text-[15px] font-body font-medium text-white/95 hover:text-white hover:translate-x-1 transition-all block cursor-pointer"
                          >
                            {proj.name}
                          </a>
                        ))}

                        {/* Completed Projects Button / Trigger (Opens ON CLICK) */}
                        <div className="mt-1 flex flex-col">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowCompletedHyd(prev => !prev);
                            }}
                            className="w-full px-5 py-2.5 rounded-xl flex items-center justify-between text-[15px] font-heading font-bold text-white hover:bg-white/[0.08] transition-all cursor-pointer"
                          >
                            <span>Completed Projects</span>
                            <svg 
                              className={`w-4 h-4 transition-transform duration-200 ${showCompletedHyd ? 'rotate-180 text-white' : 'text-white/80'}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {/* Completed Projects List */}
                          {showCompletedHyd && (
                            <div className="pl-7 pr-3 py-1 flex flex-col space-y-1">
                              {hydProjects.completed.map((proj) => (
                                <a
                                  key={proj.name}
                                  href={proj.href}
                                  onClick={(e) => handleNavClick(e, proj.href)}
                                  className="py-1.5 text-[14px] font-body font-normal text-white/80 hover:text-white hover:translate-x-1 transition-all block cursor-pointer"
                                >
                                  {proj.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Subtle divider when neither is open */}
                  {!activeCity && <div className="h-[1px] bg-white/10 my-1 mx-2" />}

                  {/* ── VIZAG SECTION ── */}
                  <div 
                    onMouseEnter={() => setActiveCity('vizag')}
                    className="flex flex-col mt-1"
                  >
                    {/* Vizag City Pill / Button */}
                    <button
                      type="button"
                      onClick={() => setActiveCity(activeCity === 'vizag' ? null : 'vizag')}
                      className={`w-full px-5 py-3 rounded-[18px] flex items-center justify-between font-heading font-bold text-[17px] transition-all duration-200 cursor-pointer ${
                        activeCity === 'vizag'
                          ? 'bg-[#8e786b] text-white shadow-sm'
                          : activeCity === 'hyd'
                            ? 'bg-[#8e786b]/70 hover:bg-[#8e786b] text-white'
                            : 'text-white/95 hover:bg-white/[0.08]'
                      }`}
                    >
                      <span>Vizag</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${activeCity === 'vizag' ? 'rotate-180 text-white' : 'text-white/80'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Vizag Ongoing & Completed Projects */}
                    {activeCity === 'vizag' && (
                      <div className="pt-2 pb-1 flex flex-col">
                        {/* Ongoing Projects list */}
                        {vizagProjects.ongoing.map((proj) => (
                          <a
                            key={proj.name}
                            href={proj.href}
                            onClick={(e) => handleNavClick(e, proj.href)}
                            className="px-5 py-2.5 text-[15px] font-body font-medium text-white/95 hover:text-white hover:translate-x-1 transition-all block cursor-pointer"
                          >
                            {proj.name}
                          </a>
                        ))}

                        {/* Completed Projects Button / Trigger (Opens ON CLICK) */}
                        <div className="mt-1 flex flex-col">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowCompletedVizag(prev => !prev);
                            }}
                            className="w-full px-5 py-2.5 rounded-xl flex items-center justify-between text-[15px] font-heading font-bold text-white hover:bg-white/[0.08] transition-all cursor-pointer"
                          >
                            <span>Completed Projects</span>
                            <svg 
                              className={`w-4 h-4 transition-transform duration-200 ${showCompletedVizag ? 'rotate-180 text-white' : 'text-white/80'}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {/* Completed Projects List */}
                          {showCompletedVizag && (
                            <div className="pl-7 pr-3 py-1 flex flex-col space-y-1">
                              {vizagProjects.completed.map((proj) => (
                                <a
                                  key={proj.name}
                                  href={proj.href}
                                  onClick={(e) => handleNavClick(e, proj.href)}
                                  className="py-1.5 text-[14px] font-body font-normal text-white/80 hover:text-white hover:translate-x-1 transition-all block cursor-pointer"
                                >
                                  {proj.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>

            {/* 3. Resources Dropdown (exact items from screenshot) */}
            <div className="relative group">
              <button 
                type="button"
                className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[959px]:w-full max-[959px]:justify-between max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3"
              >
                Resources
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:-scale-y-100 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="min-[960px]:absolute min-[960px]:left-1/2 min-[960px]:-translate-x-1/2 min-[960px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[959px]:static max-[959px]:opacity-100 max-[959px]:visible max-[959px]:translate-y-0 max-[959px]:hidden group-hover:max-[959px]:block">
                <div className="w-[230px] max-[959px]:w-full bg-[#1c1a18]/95 backdrop-blur-xl rounded-[20px] p-2 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] normal-case tracking-normal flex flex-col text-white">
                  {[
                    { label: 'Blogs', href: '#blogs' },
                    { label: 'Gallery', href: '#coming-soon' },
                    { label: 'EMI Calculator', href: '#emi-calculator' },
                    { label: 'Home Loan Guide', href: '#home-loan-guide' },
                    { label: 'NRI Guide', href: '#nri-guide' }
                  ].map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)} 
                      className="px-4 py-2.5 text-[15px] sm:text-[16px] font-heading font-medium text-white/90 hover:text-white hover:bg-white/[0.08] rounded-[10px] transition-all block cursor-pointer border-b border-white/[0.08] last:border-b-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Career */}
            <a 
              href="#careers" 
              onClick={(e) => handleNavClick(e, '#careers')} 
              className="py-2 hover:text-accent transition-colors max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3 whitespace-nowrap"
            >
              Career
            </a>

            {/* 5. Contact Us Dropdown (Exact 4 options from screenshot) */}
            <div className="relative group">
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')} 
                className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[959px]:w-full max-[959px]:justify-between max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3 whitespace-nowrap"
              >
                Contact Us
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:-scale-y-100 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="min-[960px]:absolute min-[960px]:right-0 min-[960px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[959px]:static max-[959px]:opacity-100 max-[959px]:visible max-[959px]:translate-y-0 max-[959px]:hidden group-hover:max-[959px]:block">
                <div className="w-[280px] max-[959px]:w-full bg-[#1c1a18]/95 backdrop-blur-xl rounded-[20px] p-2 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] normal-case tracking-normal flex flex-col text-white">
                  {[
                    { label: 'General Enquiry', href: '#contact' },
                    { label: 'Channel Partner', href: '#contact/channel-partner' },
                    { label: 'Land Owner/Joint Development', href: '#contact/land-owner' },
                    { label: 'Vendor / Contractor Enquiry', href: '#contact/vendor' }
                  ].map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)} 
                      className="px-4 py-2.5 text-[15px] sm:text-[16px] font-heading font-medium text-white/90 hover:text-white hover:bg-white/[0.08] rounded-[10px] transition-all block cursor-pointer border-b border-white/[0.08] last:border-b-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Drawer Contact Details */}
            <div className="min-[960px]:hidden mt-6 flex flex-col gap-4 pt-6 border-t border-line normal-case tracking-normal">
              <a 
                href="tel:+918657553355" 
                className="flex items-center gap-3 text-ink font-semibold text-[15px] p-3 rounded-xl bg-soft hover:bg-line transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +91 86575 53355
              </a>
              <a 
                href="mailto:support@northstarhomes.in" 
                className="flex items-center gap-3 text-ink font-medium text-[14px] p-3 rounded-xl bg-soft hover:bg-line transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                support@northstarhomes.in
              </a>
              <a 
                href="https://wa.me/918657553355?text=Hello%20Northstar%20Homes%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit." 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-full text-center bg-btn-bg text-btn-ink py-3.5 rounded-xl font-semibold text-[13px] tracking-[0.14em] uppercase shadow-md active:scale-[0.99] transition-transform"
              >
                Schedule a Visit
              </a>
            </div>
          </nav>

          {/* Right: Action CTA (Phone removed from here as it now lives in the super navbar) */}
          <div className="hidden min-[960px]:flex items-center justify-end min-w-[150px] lg:min-w-[200px]">
            <a 
              href="https://wa.me/918657553355?text=Hello%20Northstar%20Homes%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[12px] tracking-[0.14em] uppercase font-semibold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap ${
                isScrolled
                  ? 'bg-btn-bg text-btn-ink hover:bg-ink hover:shadow-md'
                  : 'bg-white text-ink hover:bg-white/90 hover:shadow-[0_4px_16px_rgba(255,255,255,0.4)]'
              }`}
            >
              Schedule Visit
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className={`min-[960px]:hidden p-2 z-50 transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-ink' : 'text-white drop-shadow-md'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`} />
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`} />
            </div>
          </button>

        </div>
      </div>
    </header>
  )
}
