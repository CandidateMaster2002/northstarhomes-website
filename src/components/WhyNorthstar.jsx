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
    <section className="bg-bg py-[72px] lg:py-[120px] overflow-hidden" id="quality">
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

            {/* Quality Checkpoints — Sequential 3-Step Numbered Scroll Reveal */}
            <div className="flex flex-col relative">
              {checkpoints.map((item, idx) => {
                const stepDelay = idx * 0.45;

                return (
                  <div key={idx} className="relative py-6 first:pt-0 last:pb-0">
                    {/* Animated Divider Line drawing smoothly from left to right */}
                    {idx > 0 && (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ 
                          duration: 0.65, 
                          delay: stepDelay, 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        style={{ originX: 0 }}
                        className="absolute top-0 left-0 right-0 h-[1px] bg-line"
                      />
                    )}

                    <motion.div 
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ 
                        duration: 0.75, 
                        delay: stepDelay, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="flex items-start gap-6 group"
                    >
                      {/* Step Numeral (01, 02, 03) — Prominent Spring Pop Animation */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5, y: 8 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ 
                          duration: 0.55, 
                          delay: stepDelay + 0.1, 
                          ease: [0.34, 1.56, 0.64, 1] 
                        }}
                        className="text-[24px] font-heading font-medium text-accent pt-0.5 w-10 flex-shrink-0 transition-transform duration-300 lg:group-hover:scale-110"
                      >
                        0{idx + 1}
                      </motion.div>

                      {/* Content: Title & Subtext Glide In */}
                      <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ 
                          duration: 0.65, 
                          delay: stepDelay + 0.18, 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        className="flex-1"
                      >
                        <p className="text-[22px] font-heading font-normal text-ink leading-tight mb-1.5 lg:group-hover:text-accent transition-colors duration-300">
                          {item.text}
                        </p>
                        <p className="text-[15px] font-body font-light text-muted leading-relaxed">
                          {item.subtext}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Clean Architectural Image Frame */}
          <div className="flex-1 min-w-0 basis-[460px] w-full mt-6 lg:mt-0">
            <ScrollReveal delay={0.4}>
              <div className="aspect-[5/4] rounded-2xl overflow-hidden shadow-[0_24px_50px_rgba(7,41,74,0.12)] border border-line bg-bg group">
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
