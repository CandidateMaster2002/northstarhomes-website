import React, { useState, useEffect } from 'react'
import logoImg from '../assets/Northstar-logo_webp_file-removebg-preview.webp'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
          ? 'bg-white border-b border-line shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#top"
          aria-label="Northstar Homes, home"
          className="flex items-center transition-transform hover:scale-[1.02] z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src={logoImg} 
            alt="Northstar Homes Logo" 
            className={`h-12 w-auto object-contain transition-all duration-500 ${isScrolled || isMobileMenuOpen ? '' : 'drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]'}`} 
          />
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className={`min-[881px]:hidden ml-auto p-2 z-50 transition-colors ${
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

        {/* Desktop Navigation + Mobile Overlay */}
        <nav
          aria-label="Primary"
          className={`
            ${isMobileMenuOpen 
              ? 'fixed inset-0 bg-white z-40 flex flex-col pt-[100px] px-8 gap-8 overflow-y-auto h-[100dvh]' 
              : 'hidden min-[881px]:flex min-[881px]:items-center'} 
            gap-[32px] text-[13px] tracking-[0.15em] uppercase transition-all duration-500 mr-auto
            ${isScrolled || isMobileMenuOpen ? 'text-ink font-medium' : 'text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'}
          `}
        >
          {/* About */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[880px]:w-full max-[880px]:justify-between max-[880px]:border-b max-[880px]:border-line max-[880px]:pb-4">
              About
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-scale-y-100 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="min-[881px]:absolute min-[881px]:left-0 min-[881px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[880px]:static max-[880px]:opacity-100 max-[880px]:visible max-[880px]:translate-y-0 max-[880px]:hidden group-hover:max-[880px]:block">
              <div className="w-[220px] max-[880px]:w-full bg-white min-[881px]:shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-xl flex flex-col p-2 border min-[881px]:border-black/5 border-transparent normal-case tracking-normal">
                {['Company', 'Advisors', 'Leadership', 'Awards'].map(item => (
                  <a key={item} href="#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink/70 hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between group/link">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-accent transition-colors max-[880px]:border-b max-[880px]:border-line max-[880px]:pb-4">Projects</a>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[880px]:w-full max-[880px]:justify-between max-[880px]:border-b max-[880px]:border-line max-[880px]:pb-4">
              Resources
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-scale-y-100 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="min-[881px]:absolute min-[881px]:left-0 min-[881px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[880px]:static max-[880px]:opacity-100 max-[880px]:visible max-[880px]:translate-y-0 max-[880px]:hidden group-hover:max-[880px]:block">
              <div className="w-[240px] max-[880px]:w-full bg-white min-[881px]:shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-xl flex flex-col p-2 border min-[881px]:border-black/5 border-transparent normal-case tracking-normal">
                {['Blogs', 'Gallery', 'EMI Calculator', 'Home Loan Guide', 'NRI Guide'].map(item => (
                  <a key={item} href="#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink/70 hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between group/link">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-accent transition-colors max-[880px]:border-b max-[880px]:border-line max-[880px]:pb-4">Career</a>

          {/* Contact Us Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer max-[880px]:w-full max-[880px]:justify-between max-[880px]:border-b max-[880px]:border-line max-[880px]:pb-4">
              Contact Us
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-scale-y-100 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="min-[881px]:absolute min-[881px]:right-0 min-[881px]:top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 max-[880px]:static max-[880px]:opacity-100 max-[880px]:visible max-[880px]:translate-y-0 max-[880px]:hidden group-hover:max-[880px]:block">
              <div className="w-[300px] max-[880px]:w-full bg-white min-[881px]:shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-xl flex flex-col p-2 border min-[881px]:border-black/5 border-transparent normal-case tracking-normal">
                {['General Enquiry', 'Channel Partner', 'Land Owner / Joint Development', 'Vendor / Contractor Enquiry'].map(item => (
                  <a key={item} href="#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-[14px] font-medium text-ink/70 hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between group/link">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Conditional Phone Number */}
        <div 
          className={`flex items-center transition-all duration-500 max-[880px]:hidden ${
            isScrolled ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'
          }`}
        >
          <a 
            href="tel:+918657553355" 
            className="flex items-center gap-2 text-ink font-bold text-[14px] hover:text-accent transition-colors tracking-wide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 86575 53355
          </a>
        </div>
      </div>
    </header>
  )
}
