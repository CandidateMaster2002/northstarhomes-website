import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 4 distinct contact configurations strictly verbatim from client
const contactConfigs = {
  general: {
    id: 'general',
    hash: '#contact',
    label: 'General Enquiry',
    headline: 'General Enquiry',
    description:
      'Looking for more information about Northstar, our projects, availability, pricing, or site visits? Share your details with us, and our team will guide you with the right information and help you take the next step with confidence.',
    fields: [
      { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
      { id: 'mobile', label: 'Mobile', type: 'tel', placeholder: 'Enter mobile number', required: true },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter email address', required: true },
      { id: 'remarks', label: 'Remarks', type: 'textarea', placeholder: 'Enter your remarks...', required: true }
    ]
  },
  'channel-partner': {
    id: 'channel-partner',
    hash: '#contact/channel-partner',
    label: 'Channel Partner',
    headline: 'Channel Partner Registration',
    description:
      'Partner with Northstar and bring premium real estate opportunities to your clients. Whether you are an independent broker, property consultant, or channel network agent, connect with us to explore project updates, inventory details, and collaboration opportunities.',
    fields: [
      { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
      { id: 'mobile', label: 'Mobile', type: 'tel', placeholder: 'Enter mobile number', required: true },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter email address', required: true },
      { id: 'rera', label: 'RERA Reg No.', type: 'text', placeholder: 'Enter RERA registration number', required: true },
      { id: 'remarks', label: 'Remark', type: 'textarea', placeholder: 'Enter your remark...', required: true }
    ]
  },
  'land-owner': {
    id: 'land-owner',
    hash: '#contact/land-owner',
    label: 'Land Owner/Joint Development',
    headline: 'Land Owner / Joint Development',
    description:
      'Northstar welcomes landowners and joint development partners who wish to transform valuable land into well-planned, high-quality real estate projects. With a strong focus on trust, transparency, design, execution, and long-term value creation, we work towards building developments that benefit both landowners and future communities. Submit your details, and our Business Development team will contact you to review the opportunity and take the discussion forward.',
    fields: [
      { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
      { id: 'mobile', label: 'Mobile', type: 'tel', placeholder: 'Enter mobile number', required: true },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter email address', required: true },
      { id: 'location', label: 'Location', type: 'text', placeholder: 'Enter location of land / property', required: true },
      { id: 'remarks', label: 'Remark', type: 'textarea', placeholder: 'Enter your remark...', required: true }
    ]
  },
  vendor: {
    id: 'vendor',
    hash: '#contact/vendor',
    label: 'Vendor / Contractor Enquiry',
    headline: 'Vendor / Contractor Enquiry',
    description:
      'Northstar welcomes trusted vendors, contractors, consultants, and service partners who share our commitment to quality, timely execution, safety, and professional standards. If your services align with our project requirements, submit your details and our concerned team will review your profile and connect with you for suitable opportunities.',
    fields: [
      { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
      { id: 'mobile', label: 'Mobile', type: 'tel', placeholder: 'Enter mobile number', required: true },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter email address', required: true },
      { id: 'remarks', label: 'Remark', type: 'textarea', placeholder: 'Enter your remark...', required: true }
    ]
  }
};

export default function ContactUs({ type = 'general' }) {
  const config = contactConfigs[type] || contactConfigs.general;
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setIsSubmitted(false);
    setFormData({});
  }, [type]);

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({});
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-ink">

      {/* ─────────────────────────────────────────────────────────────
          COMPACT SLIM HEADER (Eliminates excessive thickness; form visible immediately)
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#07294A] text-white pt-24 pb-5 sm:pt-28 sm:pb-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-body font-semibold text-[#8FA7BD] mb-1.5">
              <a href="#top" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <span>/</span>
              <span className="text-white font-medium">{config.label}</span>
            </div>
            <h1 className="text-[26px] sm:text-[34px] lg:text-[40px] font-heading font-normal text-white leading-tight">
              {config.headline}
            </h1>
          </div>

          <div className="text-[12px] sm:text-[13px] font-body text-[#C7DCED] flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Direct: <a href="tel:+918657553355" className="text-white font-medium hover:underline">+91 86575 53355</a></span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>Email: <a href="mailto:support@northstarhomes.in" className="text-white font-medium hover:underline">support@northstarhomes.in</a></span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FORM SECTION (Immediately visible right on load without scrolling)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-7 sm:py-10">
        <div className="max-w-[840px] mx-auto px-6 sm:px-8">

          {/* Form Card */}
          <div className="bg-white border border-line shadow-sm rounded-2xl overflow-hidden p-6 sm:p-10">
            
            {/* Description strip */}
            <div className="border-l-3 border-[#0B6FB5] pl-4 sm:pl-5 mb-8">
              <p className="text-[14px] sm:text-[15px] font-body text-muted leading-relaxed">
                {config.description}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-5 border border-emerald-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[26px] font-heading font-normal text-ink mb-2">
                    Thank You
                  </h3>
                  <p className="text-[15px] font-body font-light text-muted max-w-[480px] mx-auto mb-6 leading-relaxed">
                    Your details for <strong>{config.label}</strong> have been submitted. Our team will review and get in touch with you.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-7 py-3 bg-deep text-white text-[12px] tracking-[0.16em] uppercase font-semibold font-body hover:bg-accent transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {config.fields.filter(f => f.type !== 'textarea').map(field => (
                      <div 
                        key={field.id} 
                        className={config.fields.filter(f => f.type !== 'textarea').length % 2 !== 0 && (field.id === 'location' || field.id === 'rera') ? 'md:col-span-2' : ''}
                      >
                        <label className="block text-[12px] tracking-[0.16em] uppercase font-body font-semibold text-ink mb-2">
                          {field.label} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.id] || ''}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          className="w-full px-4 py-3 bg-[#EEF5FB]/40 border border-line rounded-lg text-ink font-body text-[15px] placeholder:text-muted/60 focus:outline-none focus:border-accent focus:bg-white transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Textarea fields (Remarks / Remark) */}
                  {config.fields.filter(f => f.type === 'textarea').map(field => (
                    <div key={field.id}>
                      <label className="block text-[12px] tracking-[0.16em] uppercase font-body font-semibold text-ink mb-2">
                        {field.label} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full px-4 py-3 bg-[#EEF5FB]/40 border border-line rounded-lg text-ink font-body text-[15px] placeholder:text-muted/60 focus:outline-none focus:border-accent focus:bg-white transition-all resize-y"
                      />
                    </div>
                  ))}

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-btn-bg text-btn-ink hover:bg-ink text-[13px] tracking-[0.16em] uppercase font-semibold font-body transition-all duration-300 shadow cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Details'}
                    </button>
                    <span className="text-[12px] text-muted font-body">
                      We respect your privacy. Details are kept strictly confidential.
                    </span>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

          {/* Quick Concierge Info Strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-line">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted block mb-1">Corporate Office</span>
              <p className="text-[13px] font-medium text-ink">Road No. 36, Jubilee Hills, Hyderabad</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-line">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted block mb-1">Direct Line</span>
              <a href="tel:+918657553355" className="text-[13px] font-medium text-accent hover:underline">+91 86575 53355</a>
            </div>
            <div className="p-4 rounded-xl bg-white border border-line">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted block mb-1">Email Concierge</span>
              <a href="mailto:support@northstarhomes.in" className="text-[13px] font-medium text-accent hover:underline">support@northstarhomes.in</a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
