import React from 'react'
import logoImg from '../assets/Northstar-logo_webp_file-removebg-preview.webp'
import { siteConfig } from '../siteConfig'

export default function Footer() {
  return (
    <footer id="careers" className="bg-bg border-t border-line pt-16 lg:pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
        
        {/* Top Tier: Editorial Brand Statement & Concierge Touchpoints */}
        <div className="pb-14 border-b border-line flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-[640px]">
            <p className="text-[12px] tracking-[0.24em] uppercase text-accent font-heading font-bold mb-2">
              Northstar Homes
            </p>
            <h3 className="text-[26px] sm:text-[32px] lg:text-[38px] font-heading font-normal text-ink leading-[1.18]">
              Crafting sustainable luxury villas, plotted communities, and architectural landmarks.
            </h3>
          </div>

          {/* Quick Concierge Touchpoints */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a 
              href="tel:+918657553355"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-soft border border-line text-ink hover:border-accent hover:text-accent hover:bg-white text-[13px] font-body font-medium tracking-wide transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 86575 53355
            </a>
            <a 
              href="mailto:support@northstarhomes.in"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-soft border border-line text-ink hover:border-accent hover:text-accent hover:bg-white text-[13px] font-body font-medium tracking-wide transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@northstarhomes.in
            </a>
          </div>
        </div>

        {/* Main 4-Column Architectural Navigation Grid */}
        <div className="py-14 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Column 1: Brand Anchor (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#top" className="inline-block mb-6">
                <img src={logoImg} alt="Northstar Homes Logo" className="h-12 w-auto object-contain" />
              </a>
              <p className="text-[14px] leading-[1.8] text-muted font-body font-light mb-8 max-w-[320px]">
                Over a decade of uncompromised engineering, masterplanned communities, and enduring trust across Hyderabad and Visakhapatnam.
              </p>
            </div>

            {/* Monochromatic Brand Blue Social Buttons */}
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-body font-medium mb-3">
                Connect With Us
              </p>
              <div className="flex gap-2.5 items-center">
                {/* Facebook */}
                <a 
                  href={siteConfig.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-soft border border-line text-accent hover:bg-accent hover:text-white hover:border-accent flex items-center justify-center transition-all duration-300 shadow-sm" 
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href={siteConfig.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-soft border border-line text-accent hover:bg-accent hover:text-white hover:border-accent flex items-center justify-center transition-all duration-300 shadow-sm" 
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a 
                  href={siteConfig.socials.x} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-soft border border-line text-accent hover:bg-accent hover:text-white hover:border-accent flex items-center justify-center transition-all duration-300 shadow-sm" 
                  aria-label="X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href={siteConfig.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-soft border border-line text-accent hover:bg-accent hover:text-white hover:border-accent flex items-center justify-center transition-all duration-300 shadow-sm" 
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Projects (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] tracking-[0.24em] uppercase text-ink font-body font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              Developments
            </h4>
            <ul className="list-none p-0 m-0 space-y-3.5">
              {[
                { name: 'Allura', href: '#ongoing-projects' },
                { name: 'SP Palacio', href: '#ongoing-projects' },
                { name: 'Sanctuary', href: '#ongoing-projects' },
                { name: 'Park Avenue', href: '#ongoing-projects' },
                { name: 'Golden Valley', href: '#ongoing-projects' },
                { name: 'Eden Gardens', href: '#completed-projects' },
                { name: 'District 1', href: '#completed-projects' },
              ].map((proj) => (
                <li key={proj.name}>
                  <a 
                    href={proj.href} 
                    className="text-[14px] font-body font-light text-muted hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    Northstar {proj.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (2.5 cols -> lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] tracking-[0.24em] uppercase text-ink font-body font-semibold mb-6">
              Company
            </h4>
            <ul className="list-none p-0 m-0 space-y-3.5">
              {[
                { name: 'About Northstar', href: '#about' },
                { name: 'Leadership', href: '#coming-soon' },
                { name: 'Advisors', href: '#coming-soon' },
                { name: 'Awards & Honors', href: '#legacy' },
                { name: 'Our Legacy', href: '#legacy' },
                { name: 'Careers', href: '#coming-soon' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[14px] font-body font-light text-muted hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Advisory (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] tracking-[0.24em] uppercase text-ink font-body font-semibold mb-6">
              Resources & Desk
            </h4>
            <ul className="list-none p-0 m-0 space-y-3.5">
              {[
                { name: 'Download Brochures', href: '#coming-soon' },
                { name: 'EMI Calculator', href: '#coming-soon' },
                { name: 'Home Loan Guide', href: '#coming-soon' },
                { name: 'NRI Advisory Desk', href: '#coming-soon' },
                { name: 'Blog & Market Insights', href: '#coming-soon' },
                { name: 'Frequently Asked Questions', href: '#coming-soon' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[14px] font-body font-light text-muted hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Statutory Bar */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-muted font-body font-light">
          <p>© 2026 Northstar Homes. All rights reserved.</p>
          
          <p className="text-center md:text-left">
            RERA & DTCP Certified Developments · Telangana, India
          </p>

          <div className="flex gap-6 items-center pr-14 md:pr-0">
            <a href="#coming-soon" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#coming-soon" className="hover:text-accent transition-colors">Terms of Use</a>
            <a href="#coming-soon" className="hover:text-accent transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
