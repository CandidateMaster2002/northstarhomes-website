import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { siteConfig } from '../siteConfig'

// 5 SVG icons from src/assets/credentials
import iconHourglass from '../assets/credentials/hourglass.svg'
import iconCustomers from '../assets/credentials/customers.svg'
import iconBuilding from '../assets/credentials/building.svg'
import iconArea from '../assets/credentials/area.svg'
import iconBuilding2 from '../assets/credentials/building2.svg'

const iconMap = {
  years: iconHourglass,
  customers: iconCustomers,
  completed: iconBuilding,
  area: iconArea,
  ongoing: iconBuilding2,
}

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
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const count = useMotionValue(0);
  
  const rounded = useTransform(count, (latest) => {
    return isFloat ? latest.toFixed(1) : Math.floor(latest);
  });

  useEffect(() => {
    if (isInView && !isNaN(num)) {
      const controls = animate(count, num, { duration: 2.2, ease: "easeOut" });
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
  const topRowStats = siteConfig.stats.slice(0, 3);
  const bottomRowStats = siteConfig.stats.slice(3, 5);

  return (
    <section className="bg-bg py-20 lg:py-28 border-y border-line" id="credentials">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Eyebrow Header directly styled after DAMAC */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex flex-col items-center">
            <span className="text-[12px] sm:text-[13px] tracking-[0.26em] uppercase font-body font-medium text-ink pb-2 border-b-2 border-accent">
              DISCOVER NORTHSTAR
            </span>
          </div>
        </div>

        {/* Top Row: Exactly 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 max-w-[1100px] mx-auto text-center">
          {topRowStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center group">
              <div className="h-16 flex items-center justify-center mb-5 lg:mb-6">
                <img 
                  src={iconMap[stat.id]} 
                  alt="" 
                  className="h-12 w-12 lg:h-14 lg:w-14 object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[34px] sm:text-[40px] lg:text-[46px] font-body font-semibold text-ink leading-tight tracking-tight mb-2 sm:mb-2.5">
                <AnimatedCounter value={stat.figure || stat.value} />
              </h3>
              <p className="text-[13px] sm:text-[14px] text-muted font-body font-light leading-relaxed max-w-[240px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row: Exactly 2 items, horizontally centered beneath Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 max-w-[760px] mx-auto mt-14 sm:mt-16 lg:mt-20 text-center">
          {bottomRowStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center group">
              <div className="h-16 flex items-center justify-center mb-5 lg:mb-6">
                <img 
                  src={iconMap[stat.id]} 
                  alt="" 
                  className="h-12 w-12 lg:h-14 lg:w-14 object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[34px] sm:text-[40px] lg:text-[46px] font-body font-semibold text-ink leading-tight tracking-tight mb-2 sm:mb-2.5">
                <AnimatedCounter value={stat.figure || stat.value} />
              </h3>
              <p className="text-[13px] sm:text-[14px] text-muted font-body font-light leading-relaxed max-w-[240px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
