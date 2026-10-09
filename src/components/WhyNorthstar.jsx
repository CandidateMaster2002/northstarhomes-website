import React from 'react'
import propchkImg from '../assets/propchk before building.webp'
import ScrollReveal from './ScrollReveal'

export default function WhyNorthstar() {
  const checkpoints = [
    {
      text: 'Built with care',
      subtext: 'Rigorous supervision and quality materials.'
    },
    {
      text: 'Checked with precision',
      subtext: 'Multi-point structural and finish inspections.'
    },
    {
      text: 'Delivered with confidence',
      subtext: 'Handed over only when perfectly ready.'
    },
  ];

  return (
    <section className="bg-bg py-[72px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        <div className="flex flex-wrap items-center gap-10 lg:gap-[72px]">
          
          {/* Left - Content */}
          <div className="flex-1 min-w-0 basis-[460px]">
            <ScrollReveal>
              <h2 className="text-[32px] lg:text-[46px] leading-[1.15] font-heading text-ink mb-6">
                Not just built. <br/>
                <span className="italic text-accent">Inspected.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-[16px] leading-[1.8] text-muted mb-10">
                Before handover, our projects undergo comprehensive <strong className="text-ink font-medium">PropChk</strong> quality inspections to ensure workmanship, finishes, and functionality meet the exact standards our customers deserve.
              </p>
            </ScrollReveal>

            {/* Quality Checkpoints - Editorial Luxury Styling */}
            <div className="flex flex-col">
              {checkpoints.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-6 group border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <div className="text-[18px] tracking-[0.1em] font-heading font-bold text-accent/40 lg:group-hover:text-accent transition-colors duration-500 pt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <p className="text-[20px] font-heading text-ink leading-tight mb-2">
                      {item.text}
                    </p>
                    <p className="text-[15px] text-muted leading-relaxed">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image with Offset Frame */}
          <div className="flex-1 min-w-0 basis-[460px] w-full mt-6 lg:mt-0">
            <ScrollReveal delay={0.4}>
              <div className="relative">
                {/* Decorative Offset Background */}
                <div className="absolute -inset-4 lg:-inset-6 bg-soft rounded-2xl translate-x-3 translate-y-3 lg:translate-x-6 lg:translate-y-6 z-0" />
                
                {/* Image Container */}
                <div className="relative z-10 aspect-[5/4] rounded-2xl overflow-hidden shadow-lg border border-line bg-bg">
                  <img 
                    src={propchkImg} 
                    alt="PropChk Quality Inspection" 
                    className="w-full h-full object-cover transition-transform duration-700 lg:hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  )
}
