import React from 'react'
import propchkImg from '../assets/propchk before building.webp'

export default function WhyNorthstar() {
  const checkpoints = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: 'Built with care',
      subtext: 'Rigorous supervision and quality materials.'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round"/>
        </svg>
      ),
      text: 'Checked with precision',
      subtext: 'Multi-point structural and finish inspections.'
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: 'Delivered with confidence',
      subtext: 'Handed over only when perfectly ready.'
    },
  ];

  return (
    <section className="bg-bg py-12 max-[880px]:py-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6">
        <div className="flex flex-wrap items-center gap-10 max-[880px]:gap-10">
          
          {/* Left — Text Content */}
          <div className="flex-1 min-w-0 basis-[480px]">
            {/* Minimal Eyebrow */}
            <p className="text-[12px] tracking-[0.3em] uppercase text-accent font-bold mb-6">
              Quality Assurance
            </p>

            {/* Elegant Headline */}
            <h2 className="text-[40px] lg:text-[54px] leading-[1.1] font-heading text-ink mb-8">
              At Northstar,<br />
              <span className="text-ink/60">every home is built</span><br />
              with care.
            </h2>

            {/* Description */}
            <p className="text-[18px] leading-[1.8] text-ink/70 mb-14 max-w-[50ch]">
              Before handover, our projects undergo comprehensive <strong>PropChk</strong> quality inspections to ensure workmanship, finishes, and functionality meet the exact standards our customers deserve.
            </p>

            {/* Quality Checkpoints - Upgraded */}
            <div className="flex flex-col gap-8">
              {checkpoints.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-5 group"
                >
                  <div className="w-[52px] h-[52px] rounded-2xl bg-soft flex items-center justify-center text-accent shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white shadow-sm transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <p className="text-[19px] font-heading text-ink leading-tight mb-1">
                      {item.text}
                    </p>
                    <p className="text-[14px] text-muted">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image with Offset Frame */}
          <div className="flex-1 min-w-0 basis-[460px] max-[880px]:w-full px-4">
            <div className="relative">
              {/* Offset Decorative Background */}
              <div className="absolute -inset-6 bg-soft rounded-[32px] -z-10 translate-x-6 translate-y-6 max-[880px]:translate-x-3 max-[880px]:translate-y-3"></div>
              
              {/* Main Image */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4]">
                <img 
                  src={propchkImg} 
                  alt="PropChk Quality Inspection" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
