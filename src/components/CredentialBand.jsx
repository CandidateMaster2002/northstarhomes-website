import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { siteConfig } from '../siteConfig'
import statsBg from '../assets/stats-bg.png'

function parseValue(val) {
  const strVal = String(val);
  const numMatch = strVal.match(/[\d\.]+/);
  if (!numMatch) return { num: NaN, prefix: strVal, suffix: '', isFloat: false };
  
  const numStr = numMatch[0];
  const num = parseFloat(numStr);
  const isFloat = numStr.includes('.');
  
  const splitIdx = strVal.indexOf(numStr);
  const prefix = strVal.substring(0, splitIdx);
  const suffix = strVal.substring(splitIdx + numStr.length);
  
  return { num, prefix, suffix, isFloat };
}

function AnimatedCounter({ value }) {
  const { num, prefix, suffix, isFloat } = parseValue(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  
  const rounded = useTransform(count, (latest) => {
    return isFloat ? latest.toFixed(1) : Math.floor(latest);
  });

  useEffect(() => {
    if (isInView && !isNaN(num)) {
      const controls = animate(count, num, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, num, count]);

  if (isNaN(num)) return <span ref={ref}>{value}</span>;
  
  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function CredentialBand() {
  // Select the 4 most impactful stats for the editorial layout
  const selectedStats = siteConfig.stats.filter(s => 
    ['years', 'area', 'completed', 'customers'].includes(s.id)
  );

  return (
    <section className="bg-bg py-[80px] lg:py-[160px] overflow-hidden border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        
        {/* Floating Title (Desktop) */}
        <div className="lg:absolute lg:top-10 lg:left-10 z-20 max-w-[320px] mb-12 lg:mb-0 text-center lg:text-left mx-auto">
          <div className="w-[1px] h-12 bg-accent mx-auto lg:mx-0 mb-6 hidden lg:block" />
          <h2 className="text-[40px] lg:text-[56px] leading-[1.05] font-heading text-ink mb-4">
            Our Legacy, <br/> Measured.
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto lg:hidden mb-6 mt-6" />
        </div>

        {/* The Editorial Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 relative">
          
          {/* Subtle Background Swoosh */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[120%] h-[120%] z-0 pointer-events-none hidden lg:block">
            <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent/10 opacity-70">
              <path d="M-100,500 C200,500 300,100 500,100 C700,100 800,400 1100,400" stroke="currentColor" strokeWidth="1" />
              <path d="M-100,400 C200,400 300,200 500,200 C700,200 800,500 1100,500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Left Stats (Desktop) */}
          <div className="w-full lg:w-[25%] flex flex-row lg:flex-col justify-center gap-8 lg:gap-[160px] z-10 mt-0 lg:mt-[100px] order-2 lg:order-1">
            {selectedStats.slice(0, 2).map((stat, idx) => (
              <div key={stat.id} className={`text-center flex flex-col items-center ${idx === 1 ? 'lg:-mr-12' : 'lg:ml-8'}`}>
                <p className="font-heading text-[48px] lg:text-[64px] text-ink leading-none mb-2">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-[13px] tracking-[0.15em] uppercase text-muted font-medium max-w-[140px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-[50%] flex justify-center z-10 order-1 lg:order-2">
            <div className="relative w-full max-w-[540px] aspect-[4/5] lg:aspect-[3/4] rounded-t-[100px] lg:rounded-t-[200px] rounded-b-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(7,41,74,0.2)] border-8 border-white group">
              <img 
                src={statsBg} 
                alt="Northstar Homes Legacy" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Stats (Desktop) */}
          <div className="w-full lg:w-[25%] flex flex-row lg:flex-col justify-center gap-8 lg:gap-[160px] z-10 mt-0 lg:mt-[100px] order-3">
            {selectedStats.slice(2, 4).map((stat, idx) => (
              <div key={stat.id} className={`text-center flex flex-col items-center ${idx === 0 ? 'lg:-ml-12' : 'lg:mr-8'}`}>
                <p className="font-heading text-[48px] lg:text-[64px] text-ink leading-none mb-2">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-[13px] tracking-[0.15em] uppercase text-muted font-medium max-w-[140px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
