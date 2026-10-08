import React, { useState, useEffect } from 'react'
import logoImg from '../assets/Northstar-logo_webp_file-removebg-preview.webp'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white border-b border-line shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6 flex flex-wrap items-center">
        <a
          href="#top"
          aria-label="Northstar Homes, home"
          className="flex items-center mr-16 transition-transform hover:scale-[1.02]"
        >
          <img 
            src={logoImg} 
            alt="Northstar Homes Logo" 
            className={`h-12 w-auto object-contain transition-all duration-500 ${isScrolled ? '' : 'drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]'}`} 
          />
        </a>

        <nav
          aria-label="Primary"
          className={`flex flex-wrap gap-[32px] text-[13px] tracking-[0.15em] uppercase max-[880px]:gap-[18px] max-[880px]:text-[12px] max-[880px]:w-full transition-all duration-500 mr-auto ${
            isScrolled ? 'text-ink font-medium' : 'text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
          }`}
        >
          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer">
              About
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-scale-y-100 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="w-[220px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-xl flex flex-col p-2 border border-black/5 normal-case tracking-normal">
                {['Company', 'Advisors', 'Leadership', 'Awards'].map(item => (
                  <a key={item} href="#coming-soon" className="px-4 py-2.5 text-[14px] font-medium text-ink/70 hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between group/link">
                    {item}
                    <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-accent">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#projects" className="py-2 hover:text-accent transition-colors">Projects</a>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer">
              Resources
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-scale-y-100 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="w-[240px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-xl flex flex-col p-2 border border-black/5 normal-case tracking-normal">
                {['Blogs', 'Gallery', 'EMI Calculator', 'Home Loan Guide', 'NRI Guide'].map(item => (
                  <a key={item} href="#coming-soon" className="px-4 py-2.5 text-[14px] font-medium text-ink/70 hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between group/link">
                    {item}
                    <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-accent">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#coming-soon" className="py-2 hover:text-accent transition-colors">Career</a>

          {/* Contact Us Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 uppercase outline-none py-2 hover:text-accent transition-colors cursor-pointer">
              Contact Us
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-scale-y-100 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="w-[300px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-xl flex flex-col p-2 border border-black/5 normal-case tracking-normal">
                {['General Enquiry', 'Channel Partner', 'Land Owner / Joint Development', 'Vendor / Contractor Enquiry'].map(item => (
                  <a key={item} href="#coming-soon" className="px-4 py-2.5 text-[14px] font-medium text-ink/70 hover:text-accent hover:bg-soft rounded-lg transition-all flex items-center justify-between group/link">
                    {item}
                    <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-accent">→</span>
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
