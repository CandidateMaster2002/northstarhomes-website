import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { siteConfig } from '../siteConfig'

// SVG icons from src/assets/credentials
import iconHourglass from '../assets/credentials/hourglass.svg'
import iconCustomers from '../assets/credentials/customers.svg'
import iconAwards from '../assets/credentials/award.svg'
import iconBuilding from '../assets/credentials/building.svg'
import iconArea from '../assets/credentials/area.svg'
import iconBuilding2 from '../assets/credentials/building2.svg'

const iconMap = {
  years: iconHourglass,
  customers: iconCustomers,
  awards: iconAwards,
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
  const stats = siteConfig.stats;

  return (
    <section className="bg-bg py-8 lg:py-10 border-y border-line" id="credentials">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Single Row layout across all standard screens (scrollable on tiny mobile screens) */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex items-center min-w-[960px] lg:min-w-0 w-full divide-x divide-line/70">
            
            {/* 1. Left Label: A Legacy of Trust */}
            <div className="shrink-0 pr-6 sm:pr-8 lg:pr-10 flex flex-col justify-center">
              <span className="text-[15px] sm:text-[17px] font-heading font-medium text-ink whitespace-nowrap tracking-tight">
                A Legacy of Trust
              </span>
              <div className="w-12 h-[2.5px] bg-accent mt-2 rounded-full" />
            </div>

            {/* 2. All 6 Stats in a single line side-by-side */}
            <div className="flex-1 grid grid-cols-6 divide-x divide-line/70">
              {stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="flex flex-col items-center text-center px-3 sm:px-4 py-2 group"
                >
                  {/* Icon */}
                  <div className="h-9 sm:h-10 flex items-center justify-center mb-2">
                    <img 
                      src={iconMap[stat.id]} 
                      alt="" 
                      className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Animated Number */}
                  <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-heading font-medium text-ink leading-tight tracking-tight mb-1">
                    <AnimatedCounter value={stat.value} />
                  </h3>

                  {/* Metric Label */}
                  <p className="text-[10px] sm:text-[11px] text-muted font-body font-normal tracking-wide leading-snug line-clamp-2 max-w-[120px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
