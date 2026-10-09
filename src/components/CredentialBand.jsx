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

const StatIcon = ({ id }) => {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.25",
    className: "w-12 h-12 lg:w-14 lg:h-14 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:text-accent2",
  };

  switch (id) {
    case 'years':
      return (
        <svg {...props}>
          <path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>
        </svg>
      );
    case 'customers':
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    case 'awards':
      return (
        <svg {...props}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7c0 6 6 7.5 6 7.5s6-1.5 6-7.5Z"/>
        </svg>
      );
    case 'completed':
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
        </svg>
      );
    case 'area':
      return (
        <svg {...props}>
          <path d="M21.3 15.3l-7.1-7.1a2 2 0 0 0-2.82 0l-7.1 7.1a2 2 0 0 0 0 2.82l7.1 7.1a2 2 0 0 0 2.82 0l7.1-7.1a2 2 0 0 0 0-2.82z"/><path d="M14.2 11.8l-2.4-2.4"/><path d="M11.8 14.2l-2.4-2.4"/><path d="M9.4 16.6l-2.4-2.4"/>
        </svg>
      );
    case 'ongoing':
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function CredentialBand() {
  return (
    <section className="bg-bg py-[80px] lg:py-[120px] border-y border-line">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-[20px] lg:text-[28px] tracking-[0.15em] lg:tracking-[0.25em] font-body font-light text-ink uppercase mb-6">
            The Premier Luxury Property Developer in Hyderabad
          </h2>
          <a href="#about" className="inline-block text-[11px] lg:text-[12px] tracking-[0.2em] uppercase font-bold text-ink border-b-2 border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
            Discover Northstar
          </a>
        </div>

        {/* Minimalist 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 max-w-[1100px] mx-auto">
          {siteConfig.stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center group">
              <div className="mb-6">
                <StatIcon id={stat.id} />
              </div>
              <h3 className="text-[38px] lg:text-[46px] font-heading text-ink leading-none mb-3">
                <AnimatedCounter value={stat.value} />
              </h3>
              <p className="text-[13px] tracking-[0.1em] uppercase text-muted font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
