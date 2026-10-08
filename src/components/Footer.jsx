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

          <p className="mb-2 text-muted">
            <a href="tel:+918657553355" className="hover:opacity-70 transition-opacity">
              +91 86575 53355
            </a>
          </p>
          <p className="mb-6 text-muted">
            <a href="mailto:support@northstarhomes.in" className="hover:opacity-70 transition-opacity">
              support@northstarhomes.in
            </a>
          </p>

          <div className="flex gap-4 items-center">
            {/* Facebook */}
            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#1877F2" d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z"/>
                <path fill="#FFF" d="M16.47 15.58l.53-3.5h-3.32v-2.27c0-.96.47-1.89 1.96-1.89h1.5V4.95s-1.36-.24-2.67-.24c-2.73 0-4.54 1.68-4.54 4.7v2.73H7.08v3.5h3.04V24c.61.1 1.25.1 1.88.1s1.26-.01 1.88-.1v-8.42h2.59z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <defs>
                  <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="25%" stopColor="#e6683c"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="75%" stopColor="#cc2366"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="5" fill="url(#ig)"/>
                <path fill="#fff" d="M12 5.84c2.01 0 2.25.01 3.04.04.73.03 1.13.16 1.4.26.35.14.6.31.87.58.26.27.44.52.58.87.1.27.23.67.26 1.4.04.79.05 1.03.05 3.01s-.01 2.22-.05 3.01c-.03.73-.16 1.13-.26 1.4-.14.35-.31.6-.58.87-.27.26-.52.44-.87.58-.27.1-.67.23-1.4.26-.79.04-1.03.05-3.01.05s-2.22-.01-3.01-.05c-.73-.03-1.13-.16-1.4-.26-.35-.14-.6-.31-.87-.58-.26-.27-.44-.52-.58-.87-.1-.27-.23-.67-.26-1.4-.04-.79-.05-1.03-.05-3.01s.01-2.22.05-3.01c.03-.73.16-1.13.26-1.4.14-.35.31-.6.58-.87.27-.26.52-.44.87-.58.27-.1.67-.23 1.4-.26.79-.04 1.03-.05 3.01-.05m0-2.14c-2.04 0-2.3.01-3.1.05-.8.03-1.35.16-1.83.35-.49.19-.9.45-1.32.87-.41.42-.67.83-.87 1.32-.19.48-.32 1.03-.35 1.83-.04.8-.05 1.06-.05 3.1s.01 2.3.05 3.1c.03.8.16 1.35.35 1.83.19.49.45.9.87 1.32.42.41.83.67 1.32.87.48.19 1.03.32 1.83.35.8.04 1.06.05 3.1.05s2.3-.01 3.1-.05c.8-.03 1.35-.16 1.83-.35.49-.19.9-.45 1.32-.87.41-.42.67-.83.87-1.32.19-.48.32-1.03.35-1.83.04-.8.05-1.06.05-3.1s-.01-2.3-.05-3.1c-.03-.8-.16-1.35-.35-1.83-.19-.49-.45-.9-.87-1.32-.42-.41-.83-.67-1.32-.87-.48-.19-1.03-.32-1.83-.35-.8-.04-1.06-.05-3.1-.05zM12 8.16a3.84 3.84 0 1 0 0 7.68 3.84 3.84 0 0 0 0-7.68m0 5.54a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4m2.5-4.8a1.14 1.14 0 1 1-2.28 0 1.14 1.14 0 0 1 2.28 0"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1">
                <path fill="#000" d="M13.68 10.4L22.9 0h-2.18L13.06 8.68 6.94 0H0l9.64 13.56L0 24h2.18l8.07-9.08L16.66 24h6.94l-9.92-13.6zM2.8 1.54h3.36l15.02 21.05h-3.36L2.8 1.54z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="28" height="28" className="ml-1">
                <path fill="#FF0000" d="M23.5 6.18a3 3 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3 3 0 0 0 .5 6.18C0 8.06 0 12 0 12s0 3.94.5 5.82a3 3 0 0 0 2.12 2.13c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3 3 0 0 0 2.12-2.13C24 15.94 24 12 24 12s0-3.94-.5-5.82z"/>
                <path fill="#FFF" d="M9.54 15.57l6.76-3.57-6.76-3.57v7.14z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="text-[12px] tracking-[0.24em] uppercase text-accent2 font-normal mb-[22px]">
            Company
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3.5 text-base text-muted">
              <a href="#about" className="hover:opacity-70 transition-opacity">About Us</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#about" className="hover:opacity-70 transition-opacity">Leadership</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#about" className="hover:opacity-70 transition-opacity">Advisors</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#about" className="hover:opacity-70 transition-opacity">Awards</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#careers" className="hover:opacity-70 transition-opacity">Careers</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Projects */}
        <div>
          <h4 className="text-[12px] tracking-[0.24em] uppercase text-accent2 font-normal mb-[22px]">
            Projects
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3.5 text-base text-muted">
              <a href="#projects" className="hover:opacity-70 transition-opacity">Allura</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#projects" className="hover:opacity-70 transition-opacity">SP Palacio</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#projects" className="hover:opacity-70 transition-opacity">Sanctuary</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#projects" className="hover:opacity-70 transition-opacity">Park Avenue</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#projects" className="hover:opacity-70 transition-opacity">Golden Valley</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h4 className="text-[12px] tracking-[0.24em] uppercase text-accent2 font-normal mb-[22px]">
            Quick Links
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-3.5 text-base text-muted">
              <a href="#resources" className="hover:opacity-70 transition-opacity">FAQs</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#resources" className="hover:opacity-70 transition-opacity">Blog</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#resources" className="hover:opacity-70 transition-opacity">Brochures</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
              <a href="#contact" className="hover:opacity-70 transition-opacity">Contact Us</a>
            </li>
            <li className="mb-3.5 text-base text-muted">
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
