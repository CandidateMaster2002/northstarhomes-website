import React from 'react'
import { motion } from 'framer-motion'
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
              <p className="mb-2 text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold">
                Quality Assurance
              </p>
              <h2 className="text-[36px] lg:text-[54px] leading-[1.12] font-heading font-normal text-ink mb-6">
                Not just built. <br/>
                <span className="italic font-heading font-normal text-accent">Inspected.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-[16px] lg:text-[17px] leading-[1.85] font-body font-light text-muted mb-10">
                Before handover, our projects undergo comprehensive <strong className="text-ink font-normal">PropChk</strong> quality inspections to ensure workmanship, finishes, and functionality meet the exact standards our customers deserve.
              </p>
            </ScrollReveal>

            {/* Quality Checkpoints — Sequential 3-Step Scroll Reveal */}
            <div className="flex flex-col">
              {checkpoints.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30, x: -12 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ 
                    duration: 0.75, 
                    delay: idx * 0.28, // Sequential delay: 0s, 0.28s, 0.56s
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="flex items-start gap-6 group border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0"
                >
                  {/* Step Numeral (01, 02, 03) */}
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.28 + 0.1 }}
                    className="text-[22px] font-heading font-normal text-accent/50 lg:group-hover:text-accent transition-colors duration-500 pt-0.5"
                  >
                    0{idx + 1}
                  </motion.div>
                  <div>
                    <p className="text-[22px] font-heading font-normal text-ink leading-tight mb-1.5 lg:group-hover:text-accent transition-colors duration-300">
                      {item.text}
                    </p>
                    <p className="text-[15px] font-body font-light text-muted leading-relaxed">
                      {item.subtext}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Clean Architectural Image Frame */}
          <div className="flex-1 min-w-0 basis-[480px] w-full mt-6 lg:mt-0">
            <ScrollReveal delay={0.4}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_24px_50px_rgba(7,41,74,0.12)] border border-line bg-bg group">
                <img 
                  src={propchkImg} 
                  alt="PropChk Quality Inspection" 
                  className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105" 
                />
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  )
}
