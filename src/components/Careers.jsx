import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Openings list across Northstar departments
const openingsData = [
  {
    id: 'eng-01',
    title: 'Senior Project Engineer (Civil)',
    dept: 'Engineering',
    location: 'Project Sites, Hyderabad',
    experience: '5–10 Years',
    type: 'Full-Time',
    description: 'Lead on-site construction execution, quality inspections, and contractor coordination for luxury plotted and villa developments.'
  },
  {
    id: 'des-01',
    title: 'Architectural Design Manager',
    dept: 'Design',
    location: 'Corporate Office, Hyderabad',
    experience: '5–8 Years',
    type: 'Full-Time',
    description: 'Coordinate master planning, villa floor plan customization, landscape integration, and statutory architectural deliverables.'
  },
  {
    id: 'qs-01',
    title: 'Quantity Surveying & Billing Lead',
    dept: 'QS',
    location: 'Corporate Office, Hyderabad',
    experience: '4–7 Years',
    type: 'Full-Time',
    description: 'Manage BOQs, cost estimation, contract billing, variation analysis, and site measurement verifications.'
  },
  {
    id: 'proc-01',
    title: 'Procurement & Contracts Specialist',
    dept: 'Procurement',
    location: 'Corporate Office, Hyderabad',
    experience: '3–6 Years',
    type: 'Full-Time',
    description: 'Source premium construction materials, negotiate vendor contracts, and ensure on-time delivery across active sites.'
  },
  {
    id: 'sal-01',
    title: 'Senior Sales Manager — Luxury Communities',
    dept: 'Sales',
    location: 'Experience Centers, Hyderabad',
    experience: '5–10 Years',
    type: 'Full-Time',
    description: 'Manage high-net-worth client relationships, master plan walkthroughs, and end-to-end sales transactions.'
  },
  {
    id: 'crm-01',
    title: 'Customer Relations & Handover Executive',
    dept: 'CRM',
    location: 'Corporate Office, Hyderabad',
    experience: '2–5 Years',
    type: 'Full-Time',
    description: 'Guide home owners through construction milestones, documentation, payment schedules, and final key handovers.'
  },
  {
    id: 'mkt-01',
    title: 'Brand Marketing & Digital Growth Lead',
    dept: 'Marketing',
    location: 'Corporate Office, Hyderabad',
    experience: '3–6 Years',
    type: 'Full-Time',
    description: 'Drive high-impact brand campaigns, digital lead generation, PR, and experiential marketing activations.'
  },
  {
    id: 'leg-01',
    title: 'Legal & Statutory Liaisoning Officer',
    dept: 'Legal & Liaisoning',
    location: 'Corporate Office, Hyderabad',
    experience: '4–8 Years',
    type: 'Full-Time',
    description: 'Manage RERA compliances, title due diligence, HMDA / DTCP approvals, and registration procedures.'
  },
  {
    id: 'acc-01',
    title: 'Accounts & Financial Controller',
    dept: 'Accounts & Finance',
    location: 'Corporate Office, Hyderabad',
    experience: '5–10 Years',
    type: 'Full-Time',
    description: 'Oversee corporate finance, project cash flows, statutory audits, tax planning, and banking liaison.'
  },
  {
    id: 'hr-01',
    title: 'HR & Talent Acquisition Executive',
    dept: 'Admin/HR',
    location: 'Corporate Office, Hyderabad',
    experience: '2–5 Years',
    type: 'Full-Time',
    description: 'Manage recruitment lifecycles across engineering and corporate functions, employee engagement, and office administration.'
  }
];

const departmentOptions = [
  'Design',
  'QS',
  'Procurement',
  'Engineering',
  'Sales',
  'CRM',
  'Marketing',
  'Admin/HR',
  'Legal & Liaisoning',
  'Accounts & Finance',
  'Other'
];

const experienceOptions = [
  'Fresher',
  '1–3 Years',
  '3–5 Years',
  '5–10 Years',
  '10+ Years'
];

export default function Careers() {
  const [activeDeptFilter, setActiveDeptFilter] = useState('All');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    currentLocation: '',
    positionAppliedFor: '',
    department: 'Engineering',
    totalExperience: '3–5 Years',
    currentCompany: '',
    currentCtc: '',
    expectedCtc: '',
    noticePeriod: '30 Days',
    message: '',
    consent: false
  });

  // Filter openings
  const filteredOpenings = activeDeptFilter === 'All'
    ? openingsData
    : openingsData.filter(item => item.dept === activeDeptFilter);

  const handleApplyClick = (position, dept) => {
    setFormData(prev => ({
      ...prev,
      positionAppliedFor: position,
      department: dept || prev.department
    }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please check the consent box to proceed with your application.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-bg text-ink pt-28 lg:pt-36">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO & CULTURE NARRATIVE
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 bg-[#07294A] text-[#E9F2FA] overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0B6FB5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#27702F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          
          {/* Eyebrow & Headline */}
          <div className="max-w-[800px] mb-12 lg:mb-16">
            <span className="text-[12px] sm:text-[13px] tracking-[0.28em] uppercase text-[#4FA3E3] font-body font-semibold mb-4 block">
              People & Culture · Northstar Homes
            </span>
            <h1 className="text-[42px] sm:text-[56px] lg:text-[68px] font-heading font-normal leading-[1.08] text-white tracking-tight mb-8">
              Careers
            </h1>
            <p className="text-[20px] sm:text-[24px] font-heading font-light text-[#C7DCED] leading-snug">
              At Northstar, we believe that great spaces are built by great people.
            </p>
          </div>

          {/* Editorial Narrative Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-8 border-t border-white/15">
            <div className="space-y-6 text-[16px] sm:text-[17px] font-body font-light text-[#C7DCED] leading-[1.85]">
              <p>
                Our work brings together planning, design, engineering, construction, sales, marketing, customer service, legal & liaisoning, accounts & finance, procurement, and many other teams who share one common goal — to create developments that people are proud to call home.
              </p>
              <p>
                We look for people who are passionate, responsible, and ready to grow with us. Whether you are an experienced professional or a young talent starting your journey, Northstar offers an environment where your ideas, skills, and commitment can make a real difference.
              </p>
            </div>

            <div className="space-y-6 text-[16px] sm:text-[17px] font-body font-light text-[#C7DCED] leading-[1.85]">
              <p>
                At Northstar, every contribution matters. From the first idea to the final handover, our people help create homes, communities, and experiences that stay close to people’s hearts.
              </p>
              <p className="font-normal text-white">
                If you believe in quality, teamwork, and purposeful work, we would be happy to hear from you.
              </p>

              {/* CTA jump buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#apply-form"
                  className="inline-flex items-center justify-center min-h-12 px-7 py-3 text-[12px] tracking-[0.18em] uppercase font-semibold bg-[#0B6FB5] text-white rounded-lg shadow-lg hover:bg-[#0B6FB5]/90 transition-all duration-300"
                >
                  Direct Application
                </a>
                <a
                  href="#openings"
                  className="inline-flex items-center justify-center min-h-12 px-7 py-3 text-[12px] tracking-[0.18em] uppercase font-medium border border-white/30 text-white rounded-lg hover:bg-white hover:text-[#07294A] transition-all duration-300"
                >
                  Explore Current Openings
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: APPLICATION FORM (Direct Application / Career Form) (Career Form for Interested Candidate)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-bg border-b border-line" id="apply-form" ref={formRef}>
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">

          {/* Form Header */}
          <div className="text-center max-w-[700px] mx-auto mb-14 lg:mb-18">
            <span className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-2 block">
              Career Form for Interested Candidate
            </span>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-ink leading-tight mb-4">
              Career Application Form
            </h2>
            <p className="text-muted font-light text-[15px] sm:text-[16px] leading-relaxed">
              Please fill in your details below. Our Talent Acquisition team will carefully review your profile and connect with you.
            </p>
          </div>

          {/* Success Banner */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 lg:p-14 bg-[#E8F5E9] rounded-2xl border border-[#A5D6A7] text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#2E7D32] text-white flex items-center justify-center mx-auto mb-5 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[28px] font-heading text-ink mb-3 font-normal">
                Application Received!
              </h3>
              <p className="text-muted max-w-[500px] mx-auto mb-8 font-light text-[15px] leading-relaxed">
                Thank you for applying to Northstar Homes. Your resume and application have been submitted to our recruitment team. If your profile aligns with our requirements, our HR team will reach out to you shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    mobileNumber: '',
                    emailAddress: '',
                    currentLocation: '',
                    positionAppliedFor: '',
                    department: 'Engineering',
                    totalExperience: '3–5 Years',
                    currentCompany: '',
                    currentCtc: '',
                    expectedCtc: '',
                    noticePeriod: '30 Days',
                    message: '',
                    consent: false
                  });
                  setSelectedFile(null);
                }}
                className="px-8 py-3 rounded-lg bg-ink text-white text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-accent transition-colors"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-line p-8 sm:p-12 shadow-sm space-y-12">

              {/* ── Sub-group 1: Personal Details ── */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-line">
                  <span className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[12px] font-bold">
                    01
                  </span>
                  <h3 className="text-[20px] font-heading text-ink font-normal">
                    Personal Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul.sharma@example.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Current Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hyderabad / Visakhapatnam / Bangalore"
                      value={formData.currentLocation}
                      onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>


              {/* ── Sub-group 2: Job Details ── */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-line">
                  <span className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[12px] font-bold">
                    02
                  </span>
                  <h3 className="text-[20px] font-heading text-ink font-normal">
                    Job Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Position Applied For *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senior Project Engineer"
                      value={formData.positionAppliedFor}
                      onChange={(e) => setFormData({ ...formData, positionAppliedFor: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Department *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors cursor-pointer"
                    >
                      {departmentOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Total Experience *
                    </label>
                    <select
                      value={formData.totalExperience}
                      onChange={(e) => setFormData({ ...formData, totalExperience: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors cursor-pointer"
                    >
                      {experienceOptions.map((exp, i) => (
                        <option key={i} value={exp}>{exp}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Current / Previous Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ABC Real Estate / XYZ Infra"
                      value={formData.currentCompany}
                      onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Current CTC (LPA)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹ 8.5 LPA"
                      value={formData.currentCtc}
                      onChange={(e) => setFormData({ ...formData, currentCtc: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Expected CTC (LPA)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹ 11.0 LPA"
                      value={formData.expectedCtc}
                      onChange={(e) => setFormData({ ...formData, expectedCtc: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                      Notice Period
                    </label>
                    <select
                      value={formData.noticePeriod}
                      onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Immediate">Immediate Joiner</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days">30 Days</option>
                      <option value="60 Days">60 Days</option>
                      <option value="90 Days">90 Days</option>
                    </select>
                  </div>
                </div>
              </div>


              {/* ── Sub-group 3: Resume Upload ── */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-line">
                  <span className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[12px] font-bold">
                    03
                  </span>
                  <h3 className="text-[20px] font-heading text-ink font-normal">
                    Resume Upload
                  </h3>
                </div>

                <div className="border-2 border-dashed border-line hover:border-accent/60 rounded-xl p-8 text-center transition-colors bg-[#F8FAFC]">
                  <input
                    type="file"
                    id="resume-file"
                    accept=".pdf,.doc,.docx"
                    required={!selectedFile}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="resume-file" className="cursor-pointer flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>

                    {selectedFile ? (
                      <div>
                        <span className="text-[15px] font-medium text-ink block mb-1">
                          {selectedFile.name}
                        </span>
                        <span className="text-[12px] text-accent font-semibold">
                          Click to choose a different file
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-[15px] font-medium text-ink block mb-1">
                          Upload Resume / CV *
                        </span>
                        <span className="text-[13px] text-muted block mb-2 font-light">
                          Drag and drop here, or browse files
                        </span>
                        <span className="inline-block px-3 py-1 bg-white border border-line rounded-md text-[11px] tracking-wider uppercase text-muted">
                          Accepted formats: PDF, DOC, DOCX
                        </span>
                      </div>
                    )}
                  </label>
                </div>
              </div>


              {/* ── Sub-group 4: Message ── */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-line">
                  <span className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[12px] font-bold">
                    04
                  </span>
                  <h3 className="text-[20px] font-heading text-ink font-normal">
                    Why Northstar?
                  </h3>
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase font-body font-semibold text-ink/80 mb-2">
                    Tell us briefly why you would like to join Northstar
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share a brief note on what inspires you about our communities and how your expertise can contribute to our vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-line text-ink text-[15px] focus:outline-none focus:border-accent focus:bg-white transition-colors resize-y"
                  />
                </div>
              </div>


              {/* ── Sub-group 5: Consent & Submit ── */}
              <div className="pt-4 border-t border-line space-y-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-accent focus:ring-accent border-line"
                  />
                  <span className="text-[13px] sm:text-[14px] text-ink/80 font-body font-light leading-relaxed">
                    I agree to share my details with Northstar Homes for recruitment purposes.
                  </span>
                </label>

                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center min-h-13 px-10 py-4 text-[13px] tracking-[0.2em] uppercase font-semibold bg-[#0B6FB5] text-white rounded-lg shadow-lg hover:bg-[#07294A] transition-colors duration-300 cursor-pointer"
                  >
                    Submit Application &rarr;
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: CURRENT OPENINGS (Explore Current Openings)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#EEF5FB] border-b border-line" id="openings">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Section Header */}
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12 lg:mb-16">
            <div>
              <span className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-2 block">
                Opportunities to Grow
              </span>
              <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-ink leading-tight">
                Our Openings
              </h2>
            </div>
            <p className="text-muted font-light text-[15px] sm:text-[16px] max-w-[460px] leading-relaxed">
              Explore current openings and take the next step in your career with Northstar.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10 pb-4 border-b border-line/80">
            <button
              onClick={() => setActiveDeptFilter('All')}
              className={`px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-body transition-all duration-300 cursor-pointer ${
                activeDeptFilter === 'All'
                  ? 'bg-ink text-white font-medium shadow-md'
                  : 'bg-white text-muted hover:text-ink hover:bg-line/40 font-light border border-line'
              }`}
            >
              All Openings ({openingsData.length})
            </button>
            {departmentOptions.slice(0, 8).map((dept, idx) => {
              const count = openingsData.filter(item => item.dept === dept).length;
              if (count === 0) return null;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDeptFilter(dept)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-body transition-all duration-300 cursor-pointer ${
                    activeDeptFilter === dept
                      ? 'bg-ink text-white font-medium shadow-md'
                      : 'bg-white text-muted hover:text-ink hover:bg-line/40 font-light border border-line'
                  }`}
                >
                  {dept} ({count})
                </button>
              );
            })}
          </div>

          {/* Openings List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-line p-7 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-accent bg-accent/8 px-3 py-1 rounded-full">
                      {job.dept}
                    </span>
                    <span className="text-[12px] font-body text-muted/80">
                      {job.type}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-[22px] sm:text-[24px] font-heading font-normal text-ink group-hover:text-accent transition-colors leading-snug mb-3">
                    {job.title}
                  </h3>

                  {/* Job Meta Badges */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[13px] text-muted font-body mb-5">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-accent/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-accent/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.experience}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-[14px] sm:text-[15px] font-body text-muted leading-relaxed mb-6 font-light">
                    {job.description}
                  </p>
                </div>

                {/* Apply Button */}
                <div className="pt-4 border-t border-line/60 flex items-center justify-between">
                  <span className="text-[12px] uppercase tracking-wider text-muted font-light">
                    Role ID: {job.id.toUpperCase()}
                  </span>
                  <button
                    onClick={() => handleApplyClick(job.title, job.dept)}
                    className="inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase font-semibold text-accent group-hover:text-ink transition-colors cursor-pointer"
                  >
                    Apply for this Role &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Unlisted Position Callout */}
          <div className="mt-12 p-8 rounded-2xl bg-white border border-line flex flex-wrap items-center justify-between gap-6 shadow-sm">
            <div>
              <h4 className="text-[20px] font-heading font-normal text-ink mb-1">
                Don't see an exact match for your profile?
              </h4>
              <p className="text-muted text-[14px] font-light">
                We are always excited to connect with exceptional professionals. Send a direct application using our career form above.
              </p>
            </div>
            <button
              onClick={() => handleApplyClick('General Application — Unlisted Role', 'Other')}
              className="px-6 py-3 rounded-lg bg-ink text-white text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-accent transition-colors"
            >
              Submit General Application
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}
