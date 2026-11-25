import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroVideo from '../assets/hero video eden compr.mp4';

// Rich architecture & community imagery for visual sections
import imgAllura from '../assets/projects/allura.webp';
import imgSpPalacio from '../assets/projects/sp-palacio.webp';
import imgSanctuary from '../assets/projects/sanctuary.webp';
import imgParkAvenue from '../assets/projects/park-avenue.webp';
import imgDistrict1 from '../assets/projects/district1.webp';
import imgEdenGardens from '../assets/projects/eden-gardens.webp';
import imgGardenSuites from '../assets/projects/garden-suites.webp';
import imgHillside from '../assets/projects/hillside.webp';
import imgHeaderside from '../assets/extracted_images/images/headerside.jpg';
import imgHouse from '../assets/extracted_images/images/house-img.jpeg';
import imgWeAlways from '../assets/extracted_images/images/we-always.jpg';

// Track record stats from client
const statsData = [
  { value: '14+', label: 'Years of Experience' },
  { value: '9', label: 'Completed Projects' },
  { value: '6', label: 'Ongoing Projects' },
  { value: '1', label: 'Upcoming Projects' },
  { value: '8+', label: 'Winning Awards' },
  { value: '550+', label: 'Happy Customers' },
  { value: '13L', label: 'Lakhs Sft Delivered' },
];

// Combined curated testimonials (All 13 authentic videos & written reviews) in checkerboard grid matching home page
const testimonialsGrid = [
  // ── ROW 1 ──
  {
    type: 'video',
    id: '1tioxCia_tg',
    homeowner: 'GARDEN SUITES HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'The planning, the amenities and the overall experience have been truly exceptional.',
    homeowner: 'PARK AVENUE HOMEOWNER'
  },
  {
    type: 'video',
    id: 'FKe_OYnkQdE',
    homeowner: 'DISTRICT 1 HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'A community that truly values its residents. It already feels like home.',
    homeowner: 'EDEN GARDEN HOMEOWNER'
  },

  // ── ROW 2 ──
  {
    type: 'quote',
    quote: 'The location, connectivity and everyday convenience make living here so easy.',
    homeowner: 'ALLURA HOMEOWNER'
  },
  {
    type: 'video',
    id: '5_WoLtNDpz4',
    homeowner: 'DISTRICT 1 HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'Excellent build quality and thoughtful design. Every detail feels so well considered.',
    homeowner: 'HILL SIDE HOMEOWNER'
  },
  {
    type: 'video',
    id: 'JZGHM_--MUo',
    homeowner: 'DISTRICT 1 HOMEOWNER',
    caption: 'Watch Testimonial'
  },

  // ── ROW 3 ──
  {
    type: 'video',
    id: 'VfGoMCO_7pY',
    homeowner: 'DISTRICT 1 HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'What we love most is the thoughtful mix of green spaces, recreation and a true sense of community.',
    homeowner: 'NORTHSTAR HOMEOWNER'
  },
  {
    type: 'video',
    id: 'cjoz_eESxWU',
    homeowner: 'HILLSIDE HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: "A lifestyle that's peaceful, well-connected and perfect for our family.",
    homeowner: 'PARK AVENUE HOMEOWNER'
  },

  // ── ROW 4 ──
  {
    type: 'quote',
    quote: 'From the first visit to handover, the entire journey was smooth, transparent and trustworthy.',
    homeowner: 'ALLURA HOMEOWNER'
  },
  {
    type: 'video',
    id: 'Hb1kTRisg1M',
    homeowner: 'HILLSIDE HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: "The amenities are a big plus — there's something for every member of the family.",
    homeowner: 'EDEN GARDEN HOMEOWNER'
  },
  {
    type: 'video',
    id: 'dbDrWb69YVw',
    homeowner: 'EDEN GARDEN HOMEOWNER',
    caption: 'Watch Testimonial'
  },

  // ── ROW 5 ──
  {
    type: 'video',
    id: '0EIa0DBWzhs',
    homeowner: 'PARK AVENUE HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'The serene environment and spacious design exceeded our expectations. Truly a peaceful sanctuary for our family.',
    homeowner: 'GARDEN SUITES HOMEOWNER'
  },
  {
    type: 'video',
    id: 'YTfDS-I4Aiw',
    homeowner: 'PARK AVENUE HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'From day one, the construction quality and attention to detail gave us complete peace of mind.',
    homeowner: 'DISTRICT 1 HOMEOWNER'
  },

  // ── ROW 6 ──
  {
    type: 'quote',
    quote: 'The privacy, open layouts and premium specifications in our villa are simply unmatched.',
    homeowner: 'ALLURA HOMEOWNER'
  },
  {
    type: 'video',
    id: '2AIT4t0M0kE',
    homeowner: 'ALLURA HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'The sprawling green surroundings and clubhouse facilities make every weekend feel like a luxury retreat.',
    homeowner: 'HILLSIDE HOMEOWNER'
  },
  {
    type: 'video',
    id: 'dUbepaBZnqw',
    homeowner: 'ALLURA HOMEOWNER',
    caption: 'Watch Testimonial'
  },

  // ── ROW 7 ──
  {
    type: 'video',
    id: 'bKjdmNlv8q4',
    homeowner: 'AIRPORT BOULEVARD HOMEOWNER',
    caption: 'Watch Testimonial'
  },
  {
    type: 'quote',
    quote: 'Strategically located with rapid appreciation and incredible architecture. Northstar delivered beyond promises.',
    homeowner: 'AIRPORT BOULEVARD HOMEOWNER'
  },
  {
    type: 'quote',
    quote: 'Northstar sets the benchmark in transparency, craftsmanship and lifelong community building.',
    homeowner: 'NORTHSTAR HOMEOWNER'
  },
  {
    type: 'quote',
    quote: 'A developer that genuinely listens to homeowners and delivers enduring value across every square foot.',
    homeowner: 'NORTHSTAR HOMEOWNER'
  }
];

// 12 FAQs verbatim from client
const faqsData = [
  {
    q: 'How long has Northstar Homes been in the real estate business?',
    a: 'Northstar Homes was founded in 2012 and has over 14 years of experience delivering premium residential and commercial developments.'
  },
  {
    q: 'What types of properties does Northstar develop?',
    a: 'We develop luxury villas, premium gated apartments, plotted communities, and commercial developments across Hyderabad and Visakhapatnam.'
  },
  {
    q: 'Where are Northstar projects located?',
    a: 'Our completed and ongoing projects are situated across high-growth corridors in Hyderabad (Banjara Hills, Financial District, Shamshabad, Gandipet, Srisailam Highway, Abids) and Visakhapatnam.'
  },
  {
    q: 'Are all Northstar projects approved by RERA?',
    a: 'Yes, every project developed by Northstar Homes is strictly compliant with state RERA guidelines and has all requisite statutory approvals.'
  },
  {
    q: 'What is the philosophy behind Northstar design?',
    a: 'Our architectural ethos is built on "Dream. Discover. Dwell." We prioritize natural ventilation, abundant daylight, Vaastu-led orientation, expansive greenery, and durable finishes.'
  },
  {
    q: 'Can NRIs purchase properties with Northstar Homes?',
    a: 'Yes, we have a dedicated NRI concierge service providing end-to-end documentation, power of attorney assistance, remote registration, and banking support.'
  },
  {
    q: 'Do you offer home loan assistance?',
    a: 'Yes, Northstar projects are pre-approved by leading nationalised and private banks including SBI, HDFC, ICICI, and Axis Bank.'
  },
  {
    q: 'How does Northstar ensure construction quality?',
    a: 'We use high-grade materials, advanced construction methods, and multi-tier quality checks across foundation, structural integrity, plumbing, and finishing.'
  },
  {
    q: 'What kind of amenities are standard in Northstar communities?',
    a: 'Our communities typically include fully equipped clubhouses, swimming pools, landscaped central parks, walking tracks, sports courts, and 24/7 multi-tier security.'
  },
  {
    q: 'Are there ongoing projects currently open for booking?',
    a: 'Yes, our flagship ongoing developments including Allura, SP Palacio, Sanctuary, Park Avenue, and Golden Valley are currently welcoming homebuyers.'
  },
  {
    q: 'How can I schedule a site visit?',
    a: 'You can book a site visit online through our Contact page or call our dedicated relationship team directly.'
  },
  {
    q: 'What post-handover support does Northstar offer?',
    a: 'We provide comprehensive handover assistance, facility management coordination, society formation support, and warranty period maintenance.'
  }
];

export default function AboutCompany() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#07294A]">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO CINEMA (Lodha / Sobha Inspired Full-Width Banner)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] lg:min-h-[640px] bg-[#07294A] text-white flex items-center overflow-hidden">
        {/* Ambient video background */}
        <div className="absolute inset-0 opacity-40">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#07294A] via-[#07294A]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07294A] via-transparent to-black/30 z-10" />

        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-24 relative z-20 w-full">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[12.5px] sm:text-[13.5px] tracking-[0.24em] uppercase font-nav font-semibold mb-8 text-[#C7DCED]">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">About Us</span>
            <span>/</span>
            <span className="text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">Company</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[820px]"
          >
            <span className="text-[13px] sm:text-[14px] tracking-[0.28em] uppercase text-[#3898E2] font-nav font-semibold mb-4 block">
              OUR STORY & PHILOSOPHY
            </span>
            <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-heading font-normal leading-[1.08] text-white tracking-tight mb-6">
              Building Trust. <br />
              <span className="font-normal text-[#E2EEF8]">Shaping Communities.</span>
            </h1>
            <p className="text-[16px] sm:text-[20px] font-body font-light text-[#C7DCED] leading-relaxed max-w-[680px]">
              At Northstar, we create spaces people believe in, belong to, and cherish for life.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: EDITORIAL INTRO WITH FULL-FRAME VISUAL (Lodha / Sobha)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8E6F2]" id="intro">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[13px] sm:text-[14px] tracking-[0.26em] uppercase text-[#0B6FB5] font-nav font-semibold block">
                COMPANY INTRODUCTION
              </span>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-[#07294A] leading-[1.14] tracking-tight">
                We Build Spaces Where Life Feels Truly at Home
              </h2>
              <div className="w-16 h-0.5 bg-[#0B6FB5]" />
              <p className="text-[17px] sm:text-[19px] font-heading font-normal text-[#07294A] leading-snug pt-2">
                At Northstar, every project begins with people — their dreams, their comfort, their lifestyle, and their future.
              </p>
              <p className="text-[15px] sm:text-[16px] font-body text-[#556475] leading-[1.8]">
                Established in 2012, Northstar Homes has grown into a trusted real estate developer across Hyderabad and Visakhapatnam, creating premium apartments, luxury villas, plotted communities, and commercial spaces.
              </p>
            </div>

            {/* Right Large Architectural Visual Frame */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden shadow-2xl border border-[#E5E0D8] group">
                <img
                  src={imgAllura}
                  alt="Northstar Architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#C7DCED] font-nav block mb-1">
                    Signature Development
                  </span>
                  <p className="text-[18px] sm:text-[20px] font-heading font-medium">
                    Allura Luxury Villa Community, Hyderabad
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 3 Split Visual Highlights (Sobha / Lodha style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 border border-[#E5E0D8]">
                <img
                  src={imgSpPalacio}
                  alt="SP Palacio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[18px] font-heading font-medium text-[#07294A] mb-1">
                High-Rise Sophistication
              </h3>
              <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                Contemporary high-rise apartments designed for breathable living in central city hubs.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 border border-[#E5E0D8]">
                <img
                  src={imgSanctuary}
                  alt="Sanctuary"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[18px] font-heading font-medium text-[#07294A] mb-1">
                Nature-Led Plotted Enclaves
              </h3>
              <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                Spacious plotted layouts amidst greenery, planned with enduring infrastructure and long-term appreciation.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 border border-[#E5E0D8]">
                <img
                  src={imgParkAvenue}
                  alt="Park Avenue"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[18px] font-heading font-medium text-[#07294A] mb-1">
                Coastal Community Living
              </h3>
              <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                Gated communities designed around central green parks and modern family recreation.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TRACK RECORD STATS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-bg border-b border-[#D8E6F2]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-[#0B6FB5] font-nav font-semibold mb-2 block">
              PROVEN TRACK RECORD
            </span>
            <h3 className="text-[28px] sm:text-[36px] font-heading font-normal text-[#07294A] leading-tight">
              A Legacy of Thoughtful Craftsmanship Across Hyderabad & Vizag
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-5">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-lg p-6 text-center border border-[#D8E6F2] hover:border-[#0B6FB5] hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-[32px] sm:text-[38px] lg:text-[42px] font-heading font-medium text-[#0B6FB5] group-hover:text-[#07294A] transition-colors leading-none block mb-2">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-nav font-medium text-[#556475] leading-snug block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CRAFTING TIMELESS ELEGANCE (Visual Showcase inspired by Lodha)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8E6F2]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Visual Mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img
                    src={imgHouse}
                    alt="Interior Luxury"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img
                    src={imgDistrict1}
                    alt="District 1 Facade"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img
                    src={imgHeaderside}
                    alt="Clubhouse Lounge"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img
                    src={imgHillside}
                    alt="Hillside Villa"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Narrative & Craftsmanship Ethos */}
            <div className="space-y-6">
              <span className="text-[13px] sm:text-[14px] tracking-[0.26em] uppercase text-[#0B6FB5] font-nav font-semibold block">
                CRAFTING TIMELESS ELEGANCE
              </span>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-[#07294A] leading-[1.14] tracking-tight">
                Meticulous Attention to Every Detail
              </h2>
              <div className="w-16 h-0.5 bg-[#0B6FB5]" />
              
              <p className="text-[16px] font-body text-[#556475] leading-[1.85]">
                Much like the great creators in luxury real estate, our dedication to quality is an ongoing journey. Every Northstar development brings together accomplished architects, skilled structural engineers, and premium construction materials to ensure your home stands the test of time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#0B6FB5] pl-4">
                  <h4 className="text-[16px] font-heading font-medium text-[#07294A] mb-1">
                    Vaastu-Led Planning
                  </h4>
                  <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                    Thoughtfully aligned orientations maximizing positive natural energy, wind currents, and sunlight.
                  </p>
                </div>

                <div className="border-l-2 border-[#0B6FB5] pl-4">
                  <h4 className="text-[16px] font-heading font-medium text-[#07294A] mb-1">
                    Dual-Road & Open Layouts
                  </h4>
                  <p className="text-[13px] text-[#556475] font-body leading-relaxed">
                    Rare architectural planning offering dual street access, private landscaped yards, and high privacy.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: OUR MISSION & VISION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-[#D8E6F2]" id="mission">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Mission Card */}
            <div className="p-10 sm:p-14 rounded-xl bg-[#EEF5FB] text-ink border border-line shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-accent font-nav font-semibold mb-3 block">
                  PURPOSE & COMMITMENT
                </span>
                <h3 className="text-[30px] sm:text-[38px] font-heading font-normal text-ink mb-5 leading-tight">
                  Our Mission
                </h3>
                <p className="text-[16px] sm:text-[17px] font-body font-light text-muted leading-[1.85]">
                  At Northstar Homes, we are committed to responsible property development. We believe in creating high-quality spaces, built with sound design principles and delivered on time. Our goal is to enhance how our customers experience life, whether at home, at work, or at leisure.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-line flex items-center justify-between text-[13px] text-muted font-nav">
                <span>Accountability • Craft • Timely Delivery</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-10 sm:p-14 rounded-xl bg-white border border-[#D8E6F2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-[#0B6FB5] font-nav font-semibold mb-3 block">
                  CORE GUIDING PRINCIPLES
                </span>
                <h3 className="text-[30px] sm:text-[38px] font-heading font-normal text-[#07294A] mb-5 leading-tight">
                  Our Vision
                </h3>
                <p className="text-[16px] sm:text-[17px] font-body font-normal text-[#556475] leading-[1.85]">
                  To be recognised across South India as the benchmark for uncompromised construction quality, sustainable plotted and villa community master planning, and enduring customer trust.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#D8E6F2] flex items-center justify-between text-[13px] text-[#0B6FB5] font-nav font-semibold">
                <span>Skilled Professionals Behind Every Project &rarr;</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: OUR PHILOSOPHY: DREAM. DISCOVER. DWELL. (With Visual Frames)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8E6F2]" id="philosophy">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">

          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-[#0B6FB5] font-nav font-semibold mb-3 block">
              ARCHITECTURAL ETHOS
            </span>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[50px] font-heading font-normal text-[#07294A] leading-tight mb-4">
              Our Philosophy: Dream. Discover. Dwell.
            </h2>
            <p className="text-[#556475] font-normal text-[15px] sm:text-[17px] leading-[1.8]">
              These three words define how we approach every project — from the first plot of land we evaluate to the day we hand over the keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 01: DREAM */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg border border-[#D8E6F2] overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={imgEdenGardens}
                  alt="Dream"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[#07294A] font-heading font-medium text-[12px] shadow-sm">
                  01 / DREAM
                </span>
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-heading font-medium text-[#07294A] group-hover:text-[#0B6FB5] transition-colors mb-3">
                    Dream
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-body text-[#556475] leading-[1.75]">
                    Every great home begins with listening. We invest deeply in understanding our customers' aspirations, the character of every neighbourhood, and the vision that the future demands of a great address.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 02: DISCOVER */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-lg border border-[#D8E6F2] overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={imgGardenSuites}
                  alt="Discover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[#07294A] font-heading font-medium text-[12px] shadow-sm">
                  02 / DISCOVER
                </span>
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-heading font-medium text-[#07294A] group-hover:text-[#0B6FB5] transition-colors mb-3">
                    Discover
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-body text-[#556475] leading-[1.75]">
                    We seek out prime locations with strong connectivity and long-term appreciation potential. We partner with accomplished architects and secure all approvals so buyers move forward with confidence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 03: DWELL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-lg border border-[#D8E6F2] overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={imgWeAlways}
                  alt="Dwell"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[#07294A] font-heading font-medium text-[12px] shadow-sm">
                  03 / DWELL
                </span>
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] font-heading font-medium text-[#07294A] group-hover:text-[#0B6FB5] transition-colors mb-3">
                    Dwell
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-body text-[#556475] leading-[1.75]">
                    We design spaces that elevate everyday living — spaces that are functional, beautiful, and built to the highest standards of craftsmanship.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: CUSTOMER TESTIMONIALS (Stories That Feel Like Home)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-line overflow-hidden" id="testimonials">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">

          {/* ── Section Header matching Home Page Testimonials ── */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
              <span className="w-8 sm:w-12 h-[1px] bg-[#C49A6C]/60" />
              <p className="text-[11px] sm:text-[12px] tracking-[0.28em] uppercase text-[#8C6D46] font-body font-semibold">
                OUR HOMEOWNERS
              </p>
              <span className="w-8 sm:w-12 h-[1px] bg-[#C49A6C]/60" />
            </div>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-body font-normal text-ink tracking-tight mb-4">
              Stories That Feel Like Home
            </h2>
            <div className="w-12 sm:w-16 h-[2px] bg-[#C49A6C] mx-auto" />
          </div>

          {/* ── 4-Column Grid: Alternating Video & Written Reviews matching Home Page ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {testimonialsGrid.map((item, idx) => {
              if (item.type === 'video') {
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedVideo(item)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-black/10 flex flex-col justify-end"
                  >
                    {/* YouTube Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                      alt={item.homeowner}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-colors" />

                    {/* Bottom Bar: Play Pill & Label */}
                    <div className="relative z-10 p-4 sm:p-5 flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-ink group-hover:scale-110 transition-all duration-300 shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5">
                          <path d="M5 3l14 9-14 9V3z" />
                        </svg>
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-body font-medium text-white/95 group-hover:text-white transition-colors">
                        {item.caption || 'Watch Testimonial'}
                      </span>
                    </div>
                  </div>
                );
              }

              // Written Quote Card
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-[#F7F3ED] border border-[#E8DFD3] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    {/* Elegant Golden Quote Mark */}
                    <span className="text-[36px] sm:text-[42px] font-serif text-[#C49A6C] leading-none mb-1 block select-none">
                      “
                    </span>
                    
                    {/* Quote Paragraph */}
                    <p className="text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#2C3E50] font-body font-normal">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* Homeowner Tag */}
                  <p className="text-[10px] sm:text-[10.5px] font-body font-bold tracking-[0.16em] uppercase text-[#6B7280] mt-6">
                    {item.homeowner}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: FAQS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]" id="faqs">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <span className="text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-[#0B6FB5] font-nav font-semibold mb-2 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-heading font-normal text-[#07294A] leading-tight mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-[15px] font-body text-[#556475]">
              Transparent answers regarding our legacy, planning standards, and buying process.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#D8E6F2] rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer bg-white hover:bg-white transition-colors"
                  >
                    <span className="text-[16px] sm:text-[17px] font-heading font-medium text-[#07294A] pr-4">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-[#D5CFC7] flex items-center justify-center shrink-0 text-[#07294A] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 text-[14px] sm:text-[15px] text-[#556475] font-body leading-[1.75] border-t border-[#F0EBE4] pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Testimonial Video Lightbox Modal ── */}
      <AnimatePresence>
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-[1000px] w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id || selectedVideo.embedId}?autoplay=1`}
                title={selectedVideo.homeowner || selectedVideo.title || "Homeowner Testimonial"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
