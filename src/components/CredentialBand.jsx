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
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    className: "w-12 h-12 lg:w-14 lg:h-14 text-accent transition-all duration-500 group-hover:scale-110 group-hover:text-ink",
  };

  switch (id) {
    case 'years':
      // 14+ Years: Bespoke 8-point North Star & Heritage Compass Crest
      return (
        <svg {...props} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="20" strokeWidth="0.75" strokeDasharray="1.5 2.5" className="opacity-40" />
          <path d="M24 5L27 19L41 22L27 25L24 39L21 25L7 22L21 19Z" strokeWidth="1.1" />
          <path d="M14 14L18 18M34 14L30 18M14 30L18 26M34 30L30 26" strokeWidth="0.8" className="opacity-60" />
          <circle cx="24" cy="22" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'customers':
      // 600+ Customers: Luxury Villa Residence Facade
      return (
        <svg {...props} strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 23L24 8L41 23" strokeWidth="1.15" />
          <path d="M11 19.5V39H37V19.5" strokeWidth="1" />
          <path d="M32 15V10H36V18" strokeWidth="0.9" />
          <rect x="20" y="27" width="8" height="12" strokeWidth="0.9" />
          <line x1="24" y1="27" x2="24" y2="39" strokeWidth="0.75" />
          <rect x="14" y="24" width="4" height="5" strokeWidth="0.85" />
          <rect x="30" y="24" width="4" height="5" strokeWidth="0.85" />
          <line x1="5" y1="39" x2="43" y2="39" strokeWidth="1" />
        </svg>
      );
    case 'awards':
      // 8 Awards: Classical Aristocratic Laurel Wreath & Crest Star
      return (
        <svg {...props} strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 38C15 38 10 31 10 23C10 15 15 8 24 6" strokeWidth="0.9" />
          <path d="M24 38C33 38 38 31 38 23C38 15 33 8 24 6" strokeWidth="0.9" />
          <path d="M11 18C8 17 8 14 11 14C14 14 13 17 11 18Z" strokeWidth="0.85" />
          <path d="M12 26C9 26 9 23 12 23C15 23 14 26 12 26Z" strokeWidth="0.85" />
          <path d="M37 18C40 17 40 14 37 14C34 14 35 17 37 18Z" strokeWidth="0.85" />
          <path d="M36 26C39 26 39 23 36 23C33 23 34 26 36 26Z" strokeWidth="0.85" />
          <path d="M24 15L25.3 19.2L29.5 19.6L26.3 22.4L27.2 26.5L24 24.3L20.8 26.5L21.7 22.4L18.5 19.6L22.7 19.2Z" strokeWidth="0.95" />
          <path d="M20 38L17 43M28 38L31 43" strokeWidth="0.9" />
          <circle cx="24" cy="38" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'completed':
      // 10 Completed: Classical Architectural Portico & Heritage Columns
      return (
        <svg {...props} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 14L24 6L42 14H6Z" strokeWidth="1.1" />
          <line x1="8" y1="17" x2="40" y2="17" strokeWidth="0.9" />
          <line x1="12" y1="17" x2="12" y2="37" strokeWidth="1.1" />
          <line x1="19" y1="17" x2="19" y2="37" strokeWidth="0.9" />
          <line x1="29" y1="17" x2="29" y2="37" strokeWidth="0.9" />
          <line x1="36" y1="17" x2="36" y2="37" strokeWidth="1.1" />
          <path d="M19 28C19 24.5 21.2 22 24 22C26.8 22 29 24.5 29 28V37H19V28Z" strokeWidth="0.85" />
          <line x1="6" y1="37" x2="42" y2="37" strokeWidth="1" />
          <line x1="4" y1="40" x2="44" y2="40" strokeWidth="1.1" />
        </svg>
      );
    case 'area':
      // 1.3 mn Sq Ft: Masterplan Blueprint Quadrants & Precision Coordinates
      return (
        <svg {...props} strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="30" height="30" strokeWidth="1" />
          <line x1="9" y1="24" x2="39" y2="24" strokeWidth="0.75" strokeDasharray="2 2" className="opacity-60" />
          <line x1="24" y1="9" x2="24" y2="39" strokeWidth="0.75" strokeDasharray="2 2" className="opacity-60" />
          <path d="M5 9H9V5M43 9H39V5M5 39H9V43M43 39H39V43" strokeWidth="0.95" />
          <circle cx="24" cy="24" r="4.5" strokeWidth="0.9" />
          <circle cx="24" cy="24" r="1.5" fill="currentColor" />
          <path d="M24 15V17M24 31V33M15 24H17M31 24H33" strokeWidth="0.75" />
        </svg>
      );
    case 'ongoing':
      // 6 Ongoing: Rising Masterplan Community with Elevation Horizon
      return (
        <svg {...props} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 25L17 16L28 25V39H6V25Z" strokeWidth="1.1" />
          <rect x="13" y="30" width="8" height="9" strokeWidth="0.85" />
          <path d="M25 19L35 11L42 17V36H28" strokeWidth="1" />
          <path d="M35 5V8M29 8L31 10M41 8L39 10" strokeWidth="0.85" className="opacity-60" />
          <line x1="3" y1="39" x2="45" y2="39" strokeWidth="1.15" />
          <line x1="17" y1="39" x2="17" y2="42" strokeWidth="0.8" />
          <line x1="35" y1="39" x2="35" y2="42" strokeWidth="0.8" />
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
        <div className="text-center mb-16 lg:mb-20">
          <p className="mb-2 text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-heading font-bold">
            Northstar Credentials
          </p>
          <h2 className="text-[26px] lg:text-[36px] font-heading font-normal text-ink mb-6">
            The Premier Luxury Property Developer in Hyderabad
          </h2>
          <a href="#about" className="inline-block text-[12px] tracking-[0.2em] uppercase font-body font-medium text-ink border-b border-ink/40 pb-1 hover:text-accent hover:border-accent transition-colors">
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
              <h3 className="text-[44px] lg:text-[54px] font-heading font-normal text-ink leading-none mb-2">
                <AnimatedCounter value={stat.value} />
              </h3>
              <p className="text-[13px] tracking-[0.14em] uppercase text-muted font-body font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
