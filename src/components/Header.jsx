import React, { useState, useEffect } from 'react'
import logoImg from '../assets/Northstar-logo_webp_file-removebg-preview.webp'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
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
            onClick={() => setIsMobileMenuOpen(false)}
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
          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[959px]:w-full max-[959px]:justify-between max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3">
              Projects
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:-scale-y-100 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="min-[960px]:absolute min-[960px]:left-1/2 min-[960px]:-translate-x-1/2 min-[960px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[959px]:static max-[959px]:opacity-100 max-[959px]:visible max-[959px]:translate-y-0 max-[959px]:hidden group-hover:max-[959px]:block">
              <div className="w-[240px] max-[959px]:w-full bg-white min-[960px]:shadow-[0_16px_40px_rgba(7,41,74,0.12)] rounded-xl flex flex-col p-2 border min-[960px]:border-line border-transparent normal-case tracking-normal">
                <a 
                  href="#ongoing-projects" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="px-4 py-2.5 text-[14px] font-medium text-ink hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between"
                >
                  Ongoing Projects
                  <span className="text-[11px] text-accent font-semibold tracking-wider uppercase">Active</span>
                </a>
                <a 
                  href="#completed-projects" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="px-4 py-2.5 text-[14px] font-medium text-ink hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between"
                >
                  Completed Projects
                  <span className="text-[11px] text-muted tracking-wider uppercase">Delivered</span>
                </a>
                <a 
                  href="#coming-soon" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="px-4 py-2.5 text-[14px] font-medium text-ink/70 hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between"
                >
                  All Masterplans
                </a>
              </div>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[959px]:w-full max-[959px]:justify-between max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3">
              About
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:-scale-y-100 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="min-[960px]:absolute min-[960px]:left-1/2 min-[960px]:-translate-x-1/2 min-[960px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[959px]:static max-[959px]:opacity-100 max-[959px]:visible max-[959px]:translate-y-0 max-[959px]:hidden group-hover:max-[959px]:block">
              <div className="w-[220px] max-[959px]:w-full bg-white min-[960px]:shadow-[0_16px_40px_rgba(7,41,74,0.12)] rounded-xl flex flex-col p-2 border min-[960px]:border-line border-transparent normal-case tracking-normal">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink hover:text-accent hover:bg-soft rounded-lg transition-all">
                  Company Overview
                </a>
                <a href="#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink/80 hover:text-accent hover:bg-soft rounded-lg transition-all">
                  Leadership
                </a>
                <a href="#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink/80 hover:text-accent hover:bg-soft rounded-lg transition-all">
                  Advisors
                </a>
                <a href="#legacy" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink/80 hover:text-accent hover:bg-soft rounded-lg transition-all">
                  Awards & Honors
                </a>
                <a href="#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink/80 hover:text-accent hover:bg-soft rounded-lg transition-all border-t border-line mt-1 pt-2">
                  Careers at Northstar
                </a>
              </div>
            </div>
          </div>

          {/* Our Legacy (Timeline) */}
          <a 
            href="#legacy" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-2 hover:text-accent transition-colors max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3 whitespace-nowrap"
          >
            Our Legacy
          </a>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[959px]:w-full max-[959px]:justify-between max-[959px]:border-b max-[959px]:border-line max-[959px]:pb-3">
              Resources
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:-scale-y-100 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="min-[960px]:absolute min-[960px]:left-1/2 min-[960px]:-translate-x-1/2 min-[960px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[959px]:static max-[959px]:opacity-100 max-[959px]:visible max-[959px]:translate-y-0 max-[959px]:hidden group-hover:max-[959px]:block">
              <div className="w-[240px] max-[959px]:w-full bg-white min-[960px]:shadow-[0_16px_40px_rgba(7,41,74,0.12)] rounded-xl flex flex-col p-2 border min-[960px]:border-line border-transparent normal-case tracking-normal">
                {['Blogs & Insights', 'Photo Gallery', 'EMI Calculator', 'Home Loan Guide', 'NRI Investment Guide'].map(item => (
                  <a key={item} href="#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink/80 hover:text-accent hover:bg-soft rounded-lg transition-all">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile-Only CTA & Contact inside drawer */}
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

        {/* Right: Phone & Action CTA */}
        <div className="hidden min-[960px]:flex items-center justify-end gap-5 min-w-[150px] lg:min-w-[200px]">
          {/* Phone Link */}
          <a 
            href="tel:+918657553355" 
            className={`hidden xl:flex items-center gap-2 text-[13px] font-semibold tracking-wide transition-colors ${
              isScrolled 
                ? 'text-ink hover:text-accent' 
                : 'text-white hover:text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
            }`}
          >
            <svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 86575 53355
          </a>

          {/* Schedule Visit Button */}
          <a 
            href="https://wa.me/918657553355?text=Hello%20Northstar%20Homes%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit." 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[12px] tracking-[0.14em] uppercase font-semibold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap ${
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
    </header>
  )
}
