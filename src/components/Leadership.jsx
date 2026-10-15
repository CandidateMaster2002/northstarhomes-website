import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import laxmaImg from '../assets/leadership/laxma_reddy.jpg';
import narayanImg from '../assets/leadership/narayan_rao.jpg';
import uttamImg from '../assets/leadership/uttam_reddy.jpg';
import anilImg from '../assets/leadership/anil_kumar_reddy.jpg';

// Leadership Data strictly verbatim from client
const boardMembers = [
  {
    name: 'Mr. K. Laxma Reddy',
    role: 'Chairman',
    image: laxmaImg,
    bio: [
      'A visionary leader who guides Northstar with strong values and clear direction.',
      'He believes in building with trust, responsibility, and long-term purpose.',
      'His leadership gives Northstar a strong foundation of integrity and confidence.',
      'He continues to inspire the company to create developments that stand the test of time.'
    ]
  },
  {
    name: 'Mr. Narayan Rao Gali',
    role: 'Vice-Chairman',
    image: narayanImg,
    bio: [
      'Mr. G. Narayan Rao is a distinguished corporate leader, governance expert, and Board professional with over five decades of experience across public sector enterprises, listed companies, private organizations, and social institutions. With strong expertise in finance, strategy, legal compliance, corporate governance, and organizational transformation, he brings rare depth and maturity to Northstar’s leadership.',
      'A respected turnaround strategist, Mr. Rao successfully revived Artificial Limbs Manufacturing Corporation of India, a Government of India enterprise, transforming it from a closure-bound organization into a consistently profitable MINIRATNA company. His leadership earned him the Best Chief Executive Award from the then President of India, Shri Pranab Mukherjee.',
      'At Northstar Homes, Mr. Rao’s guidance strengthens the company’s commitment to responsible growth, financial discipline, transparency, and long-term value creation. His experience across sectors, institutions, and boards brings a strong governance perspective to the organization.',
      'Known for his integrity, vision, and people-focused leadership, Mr. Rao continues to inspire Northstar’s pursuit of excellence, trust, and sustainable development.'
    ]
  },
  {
    name: 'Mr. Uttam Reddy',
    role: 'Managing Director',
    image: uttamImg,
    bio: [
      'A dynamic leader who drives Northstar with energy, innovation, and execution.',
      'He focuses on creating modern spaces that match the needs of today’s customers.',
      'His approach brings together design, quality, transparency, and timely delivery.',
      'Under his leadership, Northstar continues to grow as a trusted real estate brand.'
    ]
  }
];

const businessAndPartners = [
  {
    section: 'Business Development Head',
    name: 'Mr. Saurabh Tyagi',
    role: 'Business Development Head',
    image: null,
    initials: 'ST',
    bio: [
      'Mr. Saurabh Tyagi is an IIT Roorkee graduate with over 20 years of experience in real estate consulting, project management, sales, strategy, and business development. He is also the Co-Founder and CEO of PropChk, where he focuses on bringing transparency and technology into real estate.',
      'At Northstar, he handles Business Development and supports growth through strategic partnerships, stronger sales direction, market planning, and improved marketing initiatives. His experience helps create better opportunities and strengthen Northstar’s brand presence.'
    ]
  },
  {
    section: 'Project Partners',
    name: 'Mr. Karumuru Anil Kumar Reddy',
    role: 'Project Partner',
    image: anilImg,
    initials: 'AK',
    bio: [
      'Mr. Karumuru Anil Kumar Reddy brings over 21 years of experience across retail, real estate, brand communication, and marketing strategy. Having worked with leading agencies and reputed real estate brands, he brings strong insight into customer expectations, brand positioning, and project execution. Associated with Northstar Homes since its inception in 2012, he has played an important role in the successful completion of multiple projects. His experience, market understanding, and long-standing commitment continue to add strong value to Northstar’s growth and project partnerships.'
    ]
  }
];

const teamMembers = [
  {
    name: 'Mr TSV Ramana',
    role: 'COS (Chief Of Staff)',
    initials: 'TR',
    bio: [
      'Capatain (IN) TSV Ramana (Retd.) is a former Indian Navy officer with 34 years of experience in the Navy. Post supernnuation from the Navy, he worked as the Executive Director, Board of Directors of a group of educational institutions. His areas of expertise include leadership under VUCA conditions, strategy, planning, leading large bodies of personnel, policy formulation, leading large & complex projects , training, mentoring and communication.'
    ]
  },
  {
    name: 'Mr. Sandeep Tumula',
    role: 'Senior Quantity Surveyor',
    initials: 'ST',
    bio: [
      'Mr. Sandeep Tumula brings over 14 years of experience in quantity surveying, cost management, tendering, contract administration, value engineering, and quality assurance across India and the UAE. A B.Tech Civil Engineering graduate and ISO 9001:2015 Certified QMS Auditor, he has contributed to commercial, hospitality, residential, industrial, villa, warehouse, landscaping, precast, and high-rise developments, including DAFZA, Grand Hyatt Exhibition Centre & VIP Hall, and Madar Villas Phase 2.',
      'At Northstar, his focus is on accurate, technology-driven cost control using BIM, Revit, ERP, AutoCAD, PlanSwift, and advanced estimation tools to support efficient, profitable, and timely project delivery.'
    ]
  },
  {
    name: 'Mr. Sripuram Harishwar Reddy',
    role: 'Manager – Liaisoning',
    initials: 'HR',
    bio: [
      'Mr. Sripuram Harishwar Reddy, a B.Tech CSE graduate, leads liaisoning and project permission coordination at Northstar. He has handled approvals for key projects including Allura, Hillside, District 1, Sanctuary, Airport Boulevard, Sanctuary Villa Plots, and SP Abids, supporting smooth project execution.'
    ]
  },
  {
    name: 'Mr. Kiran',
    role: 'Head – Procurement',
    initials: 'K',
    bio: [
      'Mr. Kiran has been an important part of Northstar’s procurement function, bringing over 12 years of experience in the construction and real estate industry. He manages the end-to-end procurement process, ensuring that the right materials reach the project teams on time and at the right value.',
      'Known for his practical approach, clear communication, and strong vendor relationships, Kiran places strong importance on the quality of every material procured. He works closely with suppliers, consultants, site teams, and management to make sure project requirements are met without compromising on standards. His focus on quality, transparency, cost efficiency, and dependable execution makes him a valuable member of the Northstar team.'
    ]
  },
  {
    name: 'Ms. Swathi Reddy B.',
    role: 'General Manager – Customer Relations',
    initials: 'SR',
    bio: [
      'Ms. Swathi Reddy B. brings over 17 years of experience in real estate customer relationship management, operations, documentation, registration, banking, legal coordination, and regulatory processes. At Northstar, she plays an important role in guiding customers from booking to handover, ensuring that every stage is handled with clarity, care, and timely support.',
      'Known for her approachable nature and solution-focused mindset, Swathi works closely with customers, financial institutions, legal advisors, landowners, project teams, and authorities to keep every process smooth and well-coordinated. Her calm communication, customer-first approach, and strong ownership make her a trusted point of contact for customers and a valuable part of Northstar’s service experience.'
    ]
  },
  {
    name: 'Mr. Subhash',
    role: 'Chief Architect',
    initials: 'S',
    bio: [
      'Mr. Subhash brings a thoughtful and human approach to design at Northstar. He believes architecture should create spaces that feel natural, comfortable, and meaningful for the people who live in them. His work focuses on light, ventilation, privacy, movement, landscape, and the finer details that make a home feel complete.',
      'His design thinking can be seen across Northstar’s projects — from Allura’s rare villa planning with two-road access, natural ventilation, contemporary landscape, and a fully loaded clubhouse, to Park Avenue’s central park, Vaastu-led planning, abundant ventilation, and community-focused amenities.',
      'Projects like Sanctuary reflect his sensitivity towards nature-led living, while SP Palacio shows his ability to create modern spaces that breathe, connect people, and bring a richer community experience.',
      'With a strong balance of creativity, practicality, and execution, Mr. Subhash continues to shape Northstar projects with design that feels elegant, purposeful, and lasting.'
    ]
  },
  {
    name: 'Mr. Srinath Reddy',
    role: 'AGM – Sales, Hyderabad Projects',
    initials: 'SN',
    bio: [
      'Mr. Srinath brings 16 years of real estate sales experience across Karnataka, Telangana, Andhra Pradesh, and Tamil Nadu. At Northstar, he takes care of sales for the Hyderabad projects, working closely with customers and guiding them with clarity, patience, and confidence. His market understanding and customer-focused approach make him a valuable part of the Northstar sales team.'
    ]
  }
];

export default function Leadership() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-screen bg-bg text-ink pt-28 lg:pt-36">

      {/* ─────────────────────────────────────────────────────────────
          HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[380px] lg:min-h-[440px] bg-[#07294A] text-white flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07294A] via-[#07294A]/90 to-[#07294A]/60 z-10" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 relative z-20 w-full">
          
          {/* Breadcrumb without Advisors */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-body font-semibold mb-6 text-[#8FA7BD]">
            <span className="text-[#4FA3E3]">About Us</span>
            <span>/</span>
            <a href="#about-company" className="hover:text-white transition-colors">Company</a>
            <span className="text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">Leadership</span>
            <a href="#legacy" className="hover:text-white transition-colors">Awards</a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[840px]"
          >
            <h1 className="text-[40px] sm:text-[54px] lg:text-[68px] font-heading font-normal leading-[1.08] text-white tracking-tight mb-4">
              Leadership
            </h1>

            {/* Client provided Drive link */}
            <div className="mt-4">
              <a
                href="https://drive.google.com/drive/folders/1_GMbNC27iR6edUrcFkveVlN5j6_8biY5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-[#8FA7BD] hover:text-white transition-colors font-body"
              >
                <span>Image File link: Northstar Company level creatives</span>
                <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: CHAIRMAN, VICE CHAIRMAN, MANAGING DIRECTOR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {boardMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-line flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Portrait Photo */}
                  <div className="relative aspect-[4/4.5] bg-[#07294A] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] tracking-[0.2em] uppercase text-[#4FA3E3] font-body font-semibold block mb-1">
                        {member.role}
                      </span>
                      <h2 className="text-[24px] sm:text-[26px] font-heading font-normal leading-tight">
                        {member.name}
                      </h2>
                    </div>
                  </div>

                  {/* Bio paragraphs verbatim */}
                  <div className="p-6 sm:p-7 space-y-3.5 text-[14px] sm:text-[15px] font-body font-light text-muted leading-relaxed">
                    {member.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: BUSINESS DEVELOPMENT HEAD & PROJECT PARTNERS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-soft border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {businessAndPartners.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-line p-7 sm:p-9 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-line">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-line shadow-sm"
                    />
                  ) : (
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-deep text-white flex items-center justify-center font-heading text-[26px] border border-line">
                      {member.initials}
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-body font-semibold block mb-1">
                      {member.section}
                    </span>
                    <h3 className="text-[24px] sm:text-[28px] font-heading font-normal text-ink leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[13px] tracking-[0.14em] uppercase text-muted font-body mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="pt-6 space-y-4 text-[14px] sm:text-[15px] font-body font-light text-muted leading-relaxed">
                  {member.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: TEAM
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          
          <div className="mb-14">
            <h2 className="text-[32px] sm:text-[44px] font-heading font-normal text-ink leading-tight">
              Team
            </h2>
            <div className="w-14 h-0.5 bg-accent mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-line p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-line">
                    <div>
                      <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-accent font-body block mb-1">
                        {member.role}
                      </span>
                      <h3 className="text-[21px] sm:text-[23px] font-heading font-normal text-ink leading-snug">
                        {member.name}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-soft text-ink font-heading text-[15px] flex items-center justify-center shrink-0 border border-line">
                      {member.initials}
                    </div>
                  </div>

                  <div className="pt-5 space-y-3 text-[14px] font-body font-light text-muted leading-relaxed">
                    {member.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
