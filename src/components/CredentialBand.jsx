import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { siteConfig } from '../siteConfig'

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
  return (
    <section className="bg-bg py-[80px] lg:py-[130px] border-y border-line">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="mb-2.5 text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold">
            Northstar Credentials
          </p>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[44px] font-heading font-normal text-ink mb-6">
            The Premier Luxury Property Developer in Hyderabad
          </h2>
          <a 
            href="#about" 
            className="inline-block text-[12px] tracking-[0.2em] uppercase font-body font-medium text-ink border-b border-ink/30 pb-1 hover:text-accent hover:border-accent transition-all duration-300"
          >
            Discover Northstar
          </a>
        </div>

        {/* Pure Editorial 3-Column Grid (No Clutter, Pure Typography) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-14 sm:gap-y-16 lg:gap-y-24 gap-x-6 sm:gap-x-12 max-w-[1100px] mx-auto">
          {siteConfig.stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center group">
              <h3 className="text-[52px] sm:text-[64px] lg:text-[76px] font-heading font-normal text-ink leading-none mb-3 transition-transform duration-500 lg:group-hover:-translate-y-1">
                <AnimatedCounter value={stat.value} />
              </h3>
              <div className="w-8 h-[1px] bg-accent/40 mb-3.5 transition-all duration-500 lg:group-hover:w-14 lg:group-hover:bg-accent" />
              <p className="text-[11px] sm:text-[12px] lg:text-[13px] tracking-[0.22em] uppercase text-muted font-body font-light max-w-[200px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
