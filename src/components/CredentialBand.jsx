import React from 'react'
import { motion } from 'framer-motion'

export default function CredentialBand() {
  const stats = [
    {
      id: 'years',
      title: 'Est. 2012',
      sub: 'In Hyderabad, India',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 36V12l20 24V12" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'customers',
      title: '600+',
      sub: 'Homes delivered*',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 22l18-14 18 14M10 19v21h28V19" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 40V26h8v14" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'area',
      title: '1.3+ M SQFT',
      sub: 'Delivered in Hyderabad*',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="6" width="12" height="36" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round"/>
          <rect x="10" y="18" width="8" height="24" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round"/>
          <rect x="30" y="24" width="8" height="18" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round"/>
          <line x1="18" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="0.75" />
          <line x1="18" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="0.75" />
          <line x1="18" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      )
    },
    {
      id: 'completed',
      title: '10',
      sub: 'Completed projects',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="28" height="28" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round"/>
          <path d="M10 18c8 4 12-4 28 0M10 26c8 4 12-4 28 0M10 34c8 4 12-4 28 0" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'ongoing',
      title: '6',
      sub: 'Master communities',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6l10 8v16h-20V14l10-8z" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round"/>
          <path d="M14 20l-8 6v14h12M34 20l8 6v14H30" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-bg py-[100px] lg:py-[140px] border-b border-line">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-[20px] lg:text-[28px] tracking-[0.15em] lg:tracking-[0.25em] font-body font-light text-ink uppercase mb-6">
            The Premier Luxury Property Developer in Hyderabad
          </h2>
          <a href="#about" className="inline-block text-[11px] lg:text-[12px] tracking-[0.2em] uppercase font-bold text-ink border-b-2 border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
            Discover Northstar
          </a>
        </div>

        {/* Top Row - 3 Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10 mb-16 lg:mb-24">
          {stats.slice(0, 3).map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center group">
              <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] mb-6 text-[#C8A97E] transition-transform duration-500 group-hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="text-[32px] lg:text-[38px] font-heading text-ink mb-1">
                {stat.title}
              </h3>
              <p className="text-[13px] lg:text-[14px] text-ink/70">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] mx-auto gap-y-16 gap-x-10">
          {stats.slice(3, 5).map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center group">
              <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] mb-6 text-[#C8A97E] transition-transform duration-500 group-hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="text-[32px] lg:text-[38px] font-heading text-ink mb-1">
                {stat.title}
              </h3>
              <p className="text-[13px] lg:text-[14px] text-ink/70">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
