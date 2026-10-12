import React from 'react'
import logoImg from '../assets/Northstar-logo_webp_file-removebg-preview.webp'
import { siteConfig } from '../siteConfig'

export default function Footer() {
  return (
    <footer id="careers" className="bg-bg border-t border-line">
      {/* Footer Grid */}
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-14 pt-[88px] pb-10">
        {/* Column 1: Brand & Contact */}
        <div>
          <div className="flex items-center mb-6">
            <img src={logoImg} alt="Northstar Homes Logo" className="h-12 w-auto object-contain" />
          </div>

          <p className="mb-2 text-muted font-body font-light">
            <a href="tel:+918657553355" className="hover:text-accent transition-colors">
              +91 86575 53355
            </a>
          </p>
          <p className="mb-6 text-muted font-body font-light">
            <a href="mailto:support@northstarhomes.in" className="hover:text-accent transition-colors">
              support@northstarhomes.in
            </a>
          </p>

          <div className="flex gap-4 items-center">
            {/* Facebook */}
            <a 
              href={siteConfig.socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-ink hover:-translate-y-0.5 transition-all duration-300" 
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a 
              href={siteConfig.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-ink hover:-translate-y-0.5 transition-all duration-300" 
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a 
              href={siteConfig.socials.x} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-ink hover:-translate-y-0.5 transition-all duration-300" 
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href={siteConfig.socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-ink hover:-translate-y-0.5 transition-all duration-300" 
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="text-[14px] tracking-[0.22em] uppercase text-accent font-heading font-bold mb-[22px]">
            Company
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#about" className="hover:opacity-70 transition-opacity">About Us</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#about" className="hover:opacity-70 transition-opacity">Leadership</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#about" className="hover:opacity-70 transition-opacity">Advisors</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#about" className="hover:opacity-70 transition-opacity">Awards</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#careers" className="hover:opacity-70 transition-opacity">Careers</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Projects */}
        <div>
          <h4 className="text-[14px] tracking-[0.22em] uppercase text-accent font-heading font-bold mb-[22px]">
            Projects
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#ongoing-projects" className="hover:opacity-70 transition-opacity">Allura</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#ongoing-projects" className="hover:opacity-70 transition-opacity">SP Palacio</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#ongoing-projects" className="hover:opacity-70 transition-opacity">Sanctuary</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#ongoing-projects" className="hover:opacity-70 transition-opacity">Park Avenue</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#ongoing-projects" className="hover:opacity-70 transition-opacity">Golden Valley</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h4 className="text-[14px] tracking-[0.22em] uppercase text-accent font-heading font-bold mb-[22px]">
            Quick Links
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#resources" className="hover:opacity-70 transition-opacity">FAQs</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#resources" className="hover:opacity-70 transition-opacity">Blog</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#resources" className="hover:opacity-70 transition-opacity">Brochures</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#contact" className="hover:opacity-70 transition-opacity">Contact Us</a>
            </li>
            <li className="mb-3.5 text-base text-muted font-body font-light">
              <a href="#top" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6 flex flex-wrap gap-4 justify-between text-[13px] text-muted border-t border-line py-7 pb-14">
        <p>© 2026 Northstar Homes. All rights reserved.</p>
        <p>RERA / DTCP No. [TO BE SUPPLIED]</p>
      </div>
    </footer>
  )
}
