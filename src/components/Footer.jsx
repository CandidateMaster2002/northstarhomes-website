import React from 'react'
import logoImg from '../assets/Northstar-logo_webp_file-removebg-preview.webp'
import { siteConfig } from '../siteConfig'

// Developments directory data
const addressesData = [
  { name: 'Sanctuary', location: 'Plots & Villas · Tukkuguda', href: '#ongoing-projects' },
  { name: 'SP Palacio', location: 'Luxury Villas · South Hyderabad', href: '#ongoing-projects' },
  { name: 'Allura', location: 'Gated Community · South Hyderabad', href: '#ongoing-projects' },
  { name: 'Park Avenue', location: 'Premium Residences · Vizag', href: '#ongoing-projects' },
  { name: 'Golden Valley', location: 'Plotted Community · Vizag', href: '#ongoing-projects' },
  { name: 'Eden Gardens', location: 'Completed Community · Vizag', href: '#completed-projects' },
];

// Company directory data
const companyData = [
  { no: '01', name: 'Company', href: '#about-company' },
  { no: '02', name: 'Our Legacy', href: '#legacy' },
  { no: '03', name: 'Leadership', href: '#leadership' },
  { no: '04', name: 'Awards', href: '#legacy' },
  { no: '05', name: 'Quality Assurance', href: '#coming-soon' },
  { no: '06', name: 'Careers', href: '#careers' },
  { no: '07', name: 'Contact Us', href: '#contact' },
];

// Advisory links
const advisoryData = [
  { name: 'Blogs & Articles', href: '#blogs' },
  { name: 'Download Masterplans & Brochures', href: '#coming-soon' },
  { name: 'EMI Calculator', href: '#emi-calculator' },
  { name: 'Home Loan Guide', href: '#home-loan-guide' },
  { name: 'NRI Guide', href: '#nri-guide' },
  { name: 'Customer Video Testimonials', href: '#testimonials' },
  { name: 'Frequently Asked Questions', href: '#coming-soon' },
];

export default function Footer() {
  const handleFooterLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <footer className="bg-[#07294A] text-[#E9F2FA] border-t border-white/10 pt-20 lg:pt-28 pb-12 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10">

        {/* Rich 4-Column Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 lg:pb-20">
          
          {/* Column 1: Brand Anchor & Direct Concierge (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <a href="#top" onClick={handleFooterLinkClick} className="inline-block mb-6 transition-transform hover:scale-[1.02]">
                <img 
                  src={logoImg} 
                  alt="Northstar Homes Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]" 
                />
              </a>
              <p className="text-[14px] leading-[1.85] font-body font-light mb-8 max-w-[340px] text-[#8FA7BD]">
                Crafting sustainable luxury villas, plotted developments, and gated communities shaped with uncompromised engineering across South Hyderabad and Visakhapatnam.
              </p>

              {/* Direct Concierge Contact Micro-Cards */}
              <div className="space-y-3 mb-8">
                <a 
                  href="tel:+918657553355" 
                  className="flex items-center gap-3.5 p-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm bg-white/10 text-[#4FA3E3] group-hover:bg-[#0B6FB5] group-hover:text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.16em] font-medium font-body text-[#8FA7BD]">Direct Line</span>
                    <span className="block text-[14px] font-medium transition-colors font-body text-white group-hover:text-[#4FA3E3]">+91 86575 53355</span>
                  </div>
                </a>

                <a 
                  href="mailto:support@northstarhomes.in" 
                  className="flex items-center gap-3.5 p-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm bg-white/10 text-[#4FA3E3] group-hover:bg-[#0B6FB5] group-hover:text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.16em] font-medium font-body text-[#8FA7BD]">Email Concierge</span>
                    <span className="block text-[14px] font-medium transition-colors font-body text-white group-hover:text-[#4FA3E3]">support@northstarhomes.in</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Monochromatic Social Buttons */}
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase font-body font-semibold mb-3 text-[#8FA7BD]">
                Official Channels
              </p>
              <div className="flex gap-2.5 items-center">
                {/* Facebook */}
                <a 
                  href={siteConfig.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.06] text-[#9CB5CB] hover:bg-[#0B6FB5] hover:text-white hover:border-[#0B6FB5] flex items-center justify-center transition-all duration-300" 
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
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.06] text-[#9CB5CB] hover:bg-[#0B6FB5] hover:text-white hover:border-[#0B6FB5] flex items-center justify-center transition-all duration-300" 
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
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.06] text-[#9CB5CB] hover:bg-[#0B6FB5] hover:text-white hover:border-[#0B6FB5] flex items-center justify-center transition-all duration-300" 
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
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.06] text-[#9CB5CB] hover:bg-[#0B6FB5] hover:text-white hover:border-[#0B6FB5] flex items-center justify-center transition-all duration-300" 
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Developments Directory with Location Subtitles (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] tracking-[0.24em] uppercase font-body font-semibold mb-2 text-white">
              Our Addresses
            </h4>
            <div className="w-6 h-[1.5px] bg-[#3898E2] mb-6" />

            <div className="space-y-3.5">
              {addressesData.map((proj) => (
                <a 
                  key={proj.name}
                  href={proj.href} 
                  onClick={handleFooterLinkClick}
                  className="group block p-2 -mx-2 rounded-lg transition-all duration-300 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium font-body transition-all duration-300 text-white group-hover:text-[#4FA3E3] group-hover:translate-x-1">
                      Northstar {proj.name}
                    </span>
                    <span className="text-[11px] text-[#4FA3E3] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                  </div>
                  <span className="text-[11px] font-body font-light block mt-0.5 text-[#8FA7BD]">
                    {proj.location}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: The Company with Numbered Indexing (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] tracking-[0.24em] uppercase font-body font-semibold mb-2 text-white">
              The Company
            </h4>
            <div className="w-6 h-[1.5px] bg-[#3898E2] mb-6" />

            <ul className="list-none p-0 m-0 space-y-3">
              {companyData.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={handleFooterLinkClick}
                    className="group flex items-center gap-2.5 text-[14px] font-body font-light transition-colors py-0.5 text-[#9CB5CB] hover:text-white"
                  >
                    <span className="text-[11px] font-mono transition-colors text-[#3898E2]">
                      {item.no}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Client Advisory Desk & Visit Booking Card (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[12px] tracking-[0.24em] uppercase font-body font-semibold mb-2 text-white">
                Client Advisory
              </h4>
              <div className="w-6 h-[1.5px] bg-[#3898E2] mb-6" />

              <ul className="list-none p-0 m-0 space-y-3">
                {advisoryData.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      onClick={handleFooterLinkClick}
                      className="text-[13px] font-body font-light block py-0.5 hover:translate-x-1 transition-all duration-300 text-[#9CB5CB] hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Tour Concierge Card */}
            <div className="mt-8 p-4 rounded-2xl border border-white/15 bg-white/[0.05] transition-all">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 font-body text-[#4FA3E3]">
                Experience in Person
              </p>
              <p className="text-[12px] font-light leading-relaxed mb-3.5 font-body text-[#8FA7BD]">
                Arrange a walkthrough of our plots, villas, and masterplans.
              </p>
              <a 
                href="https://wa.me/918657553355?text=Hello%20Northstar%20Homes%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-[11px] font-semibold tracking-[0.14em] uppercase transition-all shadow-sm bg-[#0B6FB5] text-white hover:bg-white hover:text-[#07294A]"
              >
                Schedule Site Visit &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Statutory Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] font-body font-light text-[#8FA7BD]">
          <p>© 2026 Northstar Homes. All rights reserved.</p>
          
          <p className="text-center md:text-left">
            RERA & DTCP Certified Developments · Telangana, India
          </p>

          <div className="flex gap-6 items-center pr-14 md:pr-0">
            <a href="#coming-soon" className="hover:text-[#4FA3E3] transition-colors">Privacy Policy</a>
            <a href="#coming-soon" className="hover:text-[#4FA3E3] transition-colors">Terms of Use</a>
            <a href="#coming-soon" className="hover:text-[#4FA3E3] transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
