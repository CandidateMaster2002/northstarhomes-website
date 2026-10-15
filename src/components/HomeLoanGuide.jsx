import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Clean image placeholder without any invented text
function ImagePlaceholder({ label = "Image Placeholder", height = "h-[280px] sm:h-[360px]" }) {
  return (
    <div className={`w-full ${height} rounded-2xl bg-gradient-to-br from-[#07294A]/10 via-[#0B6FB5]/5 to-transparent border border-line relative overflow-hidden flex flex-col items-center justify-center p-6 text-center group`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#07294A_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-line flex items-center justify-center mb-2.5 text-accent group-hover:scale-105 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <span className="text-[11px] tracking-[0.22em] uppercase font-body font-semibold text-accent relative z-10">
        [ {label} ]
      </span>
    </div>
  );
}

export default function HomeLoanGuide() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeDocTab, setActiveDocTab] = useState('salaried');
  const [checklist, setChecklist] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const toggleChecklist = (index) => {
    setChecklist(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Strictly verbatim items from user prompt
  const smartBudgetFactors = [
    'Your monthly income',
    'Existing EMIs or financial commitments',
    'Down payment readiness',
    'Comfortable monthly EMI',
    'Loan tenure',
    'Interest rate type',
    'Registration and stamp duty charges',
    'Interior and furnishing expenses',
    'Emergency savings after purchase'
  ];

  const emiFactors = [
    'Loan amount',
    'Interest rate',
    'Loan tenure'
  ];

  const eligibilityFactors = [
    { title: 'Income', text: 'Higher and stable income can improve eligibility.' },
    { title: 'Credit Score', text: 'A strong repayment history may help in smoother loan approval.' },
    { title: 'Existing Loans', text: 'Current EMIs reduce repayment capacity.' },
    { title: 'Age', text: 'Younger borrowers may get longer repayment tenure.' },
    { title: 'Employment Type', text: 'Salaried and self-employed applicants may have different documentation requirements.' },
    { title: 'Co-applicant', text: 'Adding an eligible co-applicant may improve loan eligibility.' },
    { title: 'Property Value', text: 'The bank also evaluates the property before final approval.' }
  ];

  const loanProcessSteps = [
    { step: '1', title: 'Check Your Budget', text: 'Start by understanding your income, savings, down payment capacity and comfortable EMI range.' },
    { step: '2', title: 'Explore the Property', text: 'Shortlist the right home based on location, project type, lifestyle needs, amenities and long-term value.' },
    { step: '3', title: 'Use the EMI Calculator', text: 'Estimate your monthly EMI based on loan amount, tenure and expected interest rate.' },
    { step: '4', title: 'Submit Loan Application', text: 'Apply to the bank or financial institution with your personal, income and property-related documents.' },
    { step: '5', title: 'Document Verification', text: 'The lender verifies your identity, income, employment, bank statements, credit history and repayment capacity.' },
    { step: '6', title: 'Loan Sanction', text: 'Once the lender is satisfied with your eligibility, a sanction letter is issued with approved loan amount, tenure, interest rate and other key terms.' },
    { step: '7', title: 'Legal and Technical Verification', text: 'The bank reviews the property documents, project approvals and technical valuation before releasing funds.' },
    { step: '8', title: 'Agreement and Final Documentation', text: 'After completing the necessary agreements and formalities, the lender prepares the loan for disbursement.' },
    { step: '9', title: 'Loan Disbursement', text: 'The loan amount is released as per the payment schedule, project stage and bank policy.' },
    { step: '10', title: 'Registration and Handover', text: 'Once payments and documentation are completed, the buyer proceeds towards registration and eventual handover as per project timelines.' }
  ];

  const salariedDocs = [
    'PAN Card',
    'Aadhaar Card / Passport / Voter ID / Driving Licence',
    'Address proof',
    'Recent salary slips',
    'Form 16',
    'Income Tax Returns, if required',
    'Bank statements',
    'Employment proof',
    'Passport-size photographs'
  ];

  const selfEmployedDocs = [
    'PAN Card',
    'Aadhaar Card / Passport / Voter ID / Driving Licence',
    'Address proof',
    'Business registration proof',
    'Income Tax Returns',
    'Profit & Loss statement',
    'Balance sheet',
    'Bank statements',
    'GST details, if applicable',
    'Passport-size photographs'
  ];

  const propertyDocs = [
    'Booking form',
    'Cost sheet',
    'Agreement of Sale',
    'Payment schedule',
    'Project approval documents',
    'RERA details',
    'Approved building plans',
    'Builder NOC, if required by lender'
  ];

  const sanctionItems = [
    'Approved loan amount',
    'Loan tenure',
    'Applicable interest rate',
    'EMI amount',
    'Processing charges',
    'Validity period of the sanction',
    'Terms and conditions',
    'Required documents before disbursement'
  ];

  const additionalCosts = [
    'Down payment',
    'Stamp duty',
    'Registration charges',
    'GST, if applicable',
    'Loan processing fee',
    'Legal verification charges',
    'Technical valuation charges',
    'Home loan insurance, if opted',
    'Maintenance deposit',
    'Corpus fund',
    'Interior and furnishing cost',
    'Utility connection charges'
  ];

  const commonMistakes = [
    { num: '1', title: 'Looking Only at EMI', text: 'A lower EMI may look attractive, but a longer tenure can increase total interest payable.' },
    { num: '2', title: 'Ignoring Additional Costs', text: 'Registration, taxes, interiors and other charges should be included in your total budget.' },
    { num: '3', title: 'Taking Maximum Loan Eligibility', text: 'Just because you are eligible for a higher loan does not mean you should take the full amount.' },
    { num: '4', title: 'Not Checking Credit Score', text: 'A low credit score may delay approval or affect loan terms.' },
    { num: '5', title: 'Delaying Documents', text: 'Incomplete documents can slow down the loan process.' },
    { num: '6', title: 'Not Reading the Sanction Letter', text: 'Always review the loan amount, tenure, rate, processing fee, reset clause and prepayment conditions.' },
    { num: '7', title: 'Not Comparing Lenders', text: 'Compare service quality, processing speed, interest type, charges and repayment flexibility before finalising.' }
  ];

  const northstarAssistance = [
    'Project cost sheet support',
    'Payment schedule clarity',
    'Required project documentation support',
    'Coordination with banking partners, where applicable',
    'Guidance for loan-related paperwork',
    'Support during agreement and registration stages',
    'Clear communication throughout the buying journey'
  ];

  const checklistItems = [
    'Checked your monthly EMI comfort',
    'Calculated the total cost of purchase',
    'Arranged down payment funds',
    'Reviewed your credit score',
    'Kept income documents ready',
    'Compared available loan options',
    'Understood fixed and floating rate differences',
    'Reviewed processing charges and other fees',
    'Understood the sanction letter terms',
    'Planned registration and interior costs'
  ];

  const glossaryItems = [
    { term: 'EMI', text: 'The monthly amount paid to repay the home loan.' },
    { term: 'Principal', text: 'The actual loan amount borrowed from the lender.' },
    { term: 'Interest', text: 'The cost charged by the lender on the borrowed amount.' },
    { term: 'Tenure', text: 'The total repayment period of the loan.' },
    { term: 'Down Payment', text: 'The buyer’s own contribution paid upfront towards the property.' },
    { term: 'Sanction Letter', text: 'A document confirming that the loan has been approved, subject to terms and verification.' },
    { term: 'Disbursement', text: 'The release of the approved loan amount by the lender.' },
    { term: 'Floating Rate', text: 'An interest rate that may change based on market-linked benchmarks.' },
    { term: 'Fixed Rate', text: 'An interest rate that remains more stable for a defined period.' },
    { term: 'Prepayment', text: 'Paying part of the loan amount before the scheduled tenure.' },
    { term: 'Foreclosure', text: 'Closing the complete loan before the original tenure ends.' }
  ];

  const faqItems = [
    {
      q: 'How much home loan can I get?',
      a: 'Your loan eligibility depends on your income, age, credit score, existing EMIs, repayment capacity and the lender’s policy.'
    },
    {
      q: 'Can I apply for a home loan with a co-applicant?',
      a: 'Yes. A co-applicant may help improve eligibility if they have a stable income and good credit profile.'
    },
    {
      q: 'What is the minimum down payment required?',
      a: 'The down payment depends on the property value, loan amount and lender policy. Buyers should also keep funds ready for registration, taxes and other charges.'
    },
    {
      q: 'Is EMI Calculator result final?',
      a: 'No. EMI Calculator results are only estimates. Final EMI depends on the lender’s approved loan amount, interest rate and tenure.'
    },
    {
      q: 'What is the difference between sanction and disbursement?',
      a: 'Sanction means the bank has approved the loan in principle. Disbursement means the approved loan amount is released after completing documentation, legal checks and property verification.'
    },
    {
      q: 'Can I prepay my home loan?',
      a: 'Most lenders allow prepayment, but terms may vary depending on the loan type and bank policy.'
    },
    {
      q: 'What happens if interest rates change?',
      a: 'For floating rate loans, the EMI or tenure may change depending on the lender’s reset terms and applicable benchmark movements.'
    },
    {
      q: 'Does Northstar help with home loan documentation?',
      a: 'Yes. Northstar assists buyers with project-related documents, payment schedule clarity and coordination support wherever applicable.'
    }
  ];

  return (
    <main className="min-h-screen bg-bg text-ink">

      {/* ─────────────────────────────────────────────────────────────
          HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#07294A] text-white pt-24 pb-8 sm:pt-28 sm:pb-10 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-body font-semibold text-[#8FA7BD] mb-3">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#8FA7BD]">Resources</span>
            <span>/</span>
            <span className="text-white font-medium">Home Loan Guide</span>
          </div>

          <div className="max-w-[880px]">
            <span className="text-[12px] tracking-[0.26em] uppercase font-body font-semibold text-[#4FA3E3] block mb-2">
              Home Loan Guide
            </span>
            <h1 className="text-[30px] sm:text-[44px] lg:text-[52px] font-heading font-normal text-white leading-[1.12] mb-4">
              Plan Your Home Purchase with Clarity and Confidence
            </h1>
            <p className="text-[15px] sm:text-[17px] font-body font-light text-[#C7DCED] leading-relaxed mb-4">
              Buying a home is one of life’s most meaningful decisions. It is not only about choosing the right property, but also about planning your finances wisely, understanding your loan eligibility, preparing the right documents and selecting an EMI that supports your lifestyle comfortably.
            </p>
            <p className="text-[15px] sm:text-[17px] font-body font-light text-[#C7DCED] leading-relaxed">
              At Northstar, we believe the home-buying journey should feel clear, guided and stress-free. This Home Loan Guide is designed to help you understand the basics of home loans, EMI planning, documentation and the step-by-step process before you move closer to your dream home.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: How Much Home Can You Comfortably Afford?
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-4 leading-tight">
                Start with the Right Question: How Much Home Can You Comfortably Afford?
              </h2>
              <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-6">
                Before applying for a home loan, it is important to understand your real budget. Many buyers look only at the property price, but a well-planned purchase also includes registration charges, taxes if applicable, maintenance deposits, interiors, loan processing charges and other related expenses.
              </p>
              
              <h3 className="text-[15px] font-semibold text-ink mb-4">
                A smart home-buying budget should consider:
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 list-none p-0 m-0">
                {smartBudgetFactors.map((factor, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-soft border border-line">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-[14px] text-ink font-medium leading-snug">
                      {factor}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buyer Tip Callout */}
              <div className="p-5 rounded-xl bg-[#EEF5FB] border border-[#0B6FB5]/20">
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-accent block mb-1">
                  Buyer Tip
                </span>
                <p className="text-[14px] text-ink font-medium leading-relaxed">
                  Choose a home loan that fits your life, not just your maximum eligibility. A comfortable EMI helps you enjoy your home without financial pressure.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImagePlaceholder label="Image Placeholder" height="h-[380px]" />
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Calculate Your EMI Before You Decide
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImagePlaceholder label="Image Placeholder" height="h-[360px]" />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-4 leading-tight">
                Calculate Your EMI Before You Decide
              </h2>
              <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-6">
                Your EMI, or Equated Monthly Instalment, is the fixed amount you repay every month towards your home loan. It usually depends on three main factors:
              </p>

              <ul className="space-y-2.5 mb-6 list-none p-0 m-0">
                {emiFactors.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-line">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-[15px] font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[15px] text-muted leading-relaxed mb-6">
                A longer tenure can reduce your monthly EMI, but it may increase the total interest paid over time. A shorter tenure may increase the EMI, but can reduce the total repayment burden.
              </p>

              {/* Use Our EMI Calculator Card */}
              <div className="p-6 rounded-2xl bg-[#07294A] text-white flex flex-col sm:flex-row items-center justify-between gap-5">
                <div>
                  <h3 className="text-[18px] font-heading font-normal text-white mb-1">
                    Use Our EMI Calculator
                  </h3>
                  <p className="text-[13px] text-[#C7DCED] max-w-[420px]">
                    Before selecting a unit or applying for a loan, use the EMI Calculator to estimate your monthly repayment and plan your budget better.
                  </p>
                </div>
                <a
                  href="#emi-calculator"
                  className="px-6 py-3 rounded-full bg-btn-bg text-btn-ink text-[12px] tracking-[0.14em] uppercase font-semibold whitespace-nowrap hover:bg-white hover:text-ink transition-all shadow"
                >
                  Calculate Your EMI
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: What Is Home Loan Eligibility?
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          
          <div className="max-w-[800px] mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-4 leading-tight">
              What Is Home Loan Eligibility?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-6">
              Home loan eligibility is the amount a bank or financial institution may be willing to lend based on your financial profile. It is usually calculated after reviewing your income, repayment capacity, age, credit score, employment stability and existing financial obligations.
            </p>
            <h3 className="text-[16px] font-semibold text-ink">
              Key Factors That Affect Home Loan Eligibility
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eligibilityFactors.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#F9FBFC] border border-line">
                <span className="text-[15px] font-semibold text-ink block mb-1">
                  {item.title}:
                </span>
                <p className="text-[14px] text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Step-by-Step Home Loan Process
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[760px] mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-2 leading-tight">
              Step-by-Step Home Loan Process
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              A home loan journey becomes easier when you understand the process in advance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {loanProcessSteps.map((step) => (
              <div key={step.step} className="p-5 rounded-xl bg-white border border-line shadow-sm flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-[#07294A] text-white flex-shrink-0 flex items-center justify-center font-mono font-semibold text-xs mt-0.5">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink mb-1">
                    {step.step}. {step.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ImagePlaceholder label="Image Placeholder" height="h-[240px]" />

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Documents Required for Home Loan
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[780px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-2 leading-tight">
              Documents Required for Home Loan
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Documentation may vary depending on the bank, borrower profile and property type. However, most lenders generally ask for the following documents.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'salaried', label: 'For Salaried Applicants' },
              { id: 'self-employed', label: 'For Self-Employed Applicants' },
              { id: 'property', label: 'Property-Related Documents' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveDocTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[12px] sm:text-[13px] tracking-[0.14em] uppercase font-semibold font-body transition-all cursor-pointer ${
                  activeDocTab === tab.id
                    ? 'bg-[#07294A] text-white shadow'
                    : 'bg-soft text-muted hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FBFC] border border-line">
            {activeDocTab === 'salaried' && (
              <div>
                <h3 className="text-[18px] font-heading font-medium text-ink mb-4">
                  For Salaried Applicants
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
                  {salariedDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-line">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-[13px] text-ink font-medium">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeDocTab === 'self-employed' && (
              <div>
                <h3 className="text-[18px] font-heading font-medium text-ink mb-4">
                  For Self-Employed Applicants
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
                  {selfEmployedDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-line">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-[13px] text-ink font-medium">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeDocTab === 'property' && (
              <div>
                <h3 className="text-[18px] font-heading font-medium text-ink mb-4">
                  Property-Related Documents
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
                  {propertyDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-line">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-[13px] text-ink font-medium">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Understanding the Sanction Letter
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-4 leading-tight">
                Understanding the Sanction Letter
              </h2>
              <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-6">
                A sanction letter is an official communication from the lender confirming that your loan has been approved, subject to certain terms and conditions.
              </p>

              <h3 className="text-[15px] font-semibold text-ink mb-4">
                It generally includes:
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 list-none p-0 m-0">
                {sanctionItems.map((item, idx) => (
                  <li key={idx} className="p-3 bg-white rounded-xl border border-line flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-[13px] text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Important Alert */}
              <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-[12px] uppercase font-bold text-amber-800 block mb-1">
                  Important
                </span>
                <p className="text-[13px] sm:text-[14px] text-amber-950 leading-relaxed">
                  A sanction letter does not always mean immediate disbursement. The final loan release usually happens after property verification, legal checks, technical appraisal and completion of required agreements.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImagePlaceholder label="Image Placeholder" height="h-[360px]" />
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Fixed Rate vs Floating Rate Home Loan
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[780px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Fixed Rate vs Floating Rate Home Loan
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Home loans usually come with fixed or floating interest rate options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Fixed Rate */}
            <div className="p-6 rounded-2xl bg-[#F9FBFC] border border-line">
              <h3 className="text-[20px] font-heading font-normal text-ink mb-3">
                Fixed Interest Rate
              </h3>
              <p className="text-[15px] text-muted leading-relaxed">
                The interest rate remains more predictable for a defined period. This can help buyers who prefer stability in repayment planning.
              </p>
            </div>

            {/* Floating Rate */}
            <div className="p-6 rounded-2xl bg-[#F9FBFC] border border-line">
              <h3 className="text-[20px] font-heading font-normal text-ink mb-3">
                Floating Interest Rate
              </h3>
              <p className="text-[15px] text-muted leading-relaxed">
                The interest rate may change based on market conditions and benchmark rate movements. In this case, the EMI or loan tenure may change over time.
              </p>
            </div>

          </div>

          {/* Buyer Tip */}
          <div className="p-5 rounded-xl bg-soft border border-line">
            <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-accent block mb-1">
              Buyer Tip
            </span>
            <p className="text-[14px] text-ink font-medium leading-relaxed">
              Do not choose a loan only because the starting rate looks attractive. Understand the long-term repayment impact, reset conditions, prepayment rules and total interest payable.
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Costs to Consider Beyond EMI
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[780px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Costs to Consider Beyond EMI
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-4">
              A home loan is an important part of your purchase plan, but it is not the only cost. Buyers should also plan for additional expenses.
            </p>
            <h3 className="text-[15px] font-semibold text-ink">
              Common Additional Costs
            </h3>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-8 list-none p-0 m-0">
            {additionalCosts.map((cost, idx) => (
              <li key={idx} className="p-3.5 rounded-xl bg-white border border-line shadow-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-[13px] font-medium text-ink">{cost}</span>
              </li>
            ))}
          </ul>

          <p className="text-[14px] text-muted leading-relaxed">
            Planning these costs in advance helps avoid last-minute financial pressure.
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Common Home Loan Mistakes to Avoid
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[780px] mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Common Home Loan Mistakes to Avoid
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              A well-informed buyer can make better decisions. Here are some common mistakes to avoid:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commonMistakes.map(item => (
              <div key={item.num} className="p-5 rounded-xl bg-[#F9FBFC] border border-line">
                <h3 className="text-[15px] font-semibold text-ink mb-2">
                  {item.num}. {item.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: How Northstar Supports Your Home Loan Journey
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#07294A] text-white border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-[28px] sm:text-[40px] font-heading font-normal text-white mb-4 leading-tight">
                How Northstar Supports Your Home Loan Journey
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#C7DCED] font-light leading-relaxed mb-6">
                At Northstar, we understand that buying a home is a major decision, and every buyer deserves proper guidance. Our team helps customers move through the home loan process with clarity and confidence.
              </p>

              <h3 className="text-[14px] tracking-[0.16em] uppercase font-semibold text-white mb-4">
                Northstar Assistance Includes
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 list-none p-0 m-0">
                {northstarAssistance.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.06] border border-white/10">
                    <span className="text-[#4FA3E3] font-bold">✓</span>
                    <span className="text-[13px] text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[14px] text-[#9CB5CB] leading-relaxed mb-6">
                Whether you are buying your first home, upgrading your lifestyle or investing for the future, our team is here to make the process simpler and more transparent.
              </p>

              <a
                href="#contact"
                className="inline-block px-8 py-3.5 rounded-full bg-white text-ink text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-white/90 transition-all shadow-md"
              >
                Speak to Our Home Loan Assistance Team
              </a>
            </div>

            <div className="lg:col-span-5">
              <ImagePlaceholder label="Image Placeholder" height="h-[380px]" />
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Smart Home Loan Checklist
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[780px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Smart Home Loan Checklist
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Before applying for a home loan, make sure you have:
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[960px] list-none p-0 m-0">
            {checklistItems.map((item, idx) => {
              const isChecked = !!checklist[idx];
              return (
                <li
                  key={idx}
                  onClick={() => toggleChecklist(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-sm'
                      : 'bg-[#F9FBFC] border-line text-ink hover:border-accent/40'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs font-bold transition-all ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-muted/40 bg-white'
                  }`}>
                    {isChecked ? '✓' : ''}
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-medium leading-snug">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Home Loan Glossary
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[780px] mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Home Loan Glossary
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryItems.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-line shadow-sm">
                <h3 className="text-[16px] font-semibold text-ink mb-1.5 font-heading">
                  {item.term}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed font-body">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Frequently Asked Questions
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[780px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-[880px] space-y-3">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-line rounded-xl overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-body font-semibold text-[15px] sm:text-[16px] text-ink hover:text-accent transition-colors cursor-pointer"
                  >
                    <span>{idx + 1}. {faq.q}</span>
                    <span className="text-xl font-light text-muted flex-shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-[14px] text-muted leading-relaxed border-t border-line/60 pt-3">
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

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Begin Your Home-Buying Journey with Confidence
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#07294A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-[1040px] mx-auto px-6 sm:px-10 text-center relative z-10">
          <h2 className="text-[30px] sm:text-[44px] font-heading font-normal text-white mb-4 leading-tight max-w-[820px] mx-auto">
            Begin Your Home-Buying Journey with Confidence
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#C7DCED] font-light max-w-[680px] mx-auto mb-6 leading-relaxed">
            A well-planned home loan helps you make a confident decision today and enjoy financial peace tomorrow. With the right property, the right guidance and the right repayment plan, your dream home becomes a more comfortable and achievable reality.
          </p>
          <p className="text-[14px] text-white/80 font-medium mb-10">
            At Northstar, we are committed to helping you move forward with clarity, trust and confidence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-btn-bg text-btn-ink text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-white hover:text-ink transition-all shadow-md cursor-pointer"
            >
              Talk to Our Sales Team
            </a>
            <a
              href="#emi-calculator"
              className="px-8 py-3.5 rounded-full bg-white text-ink text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-white/90 transition-all shadow-md cursor-pointer"
            >
              Calculate EMI
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="px-8 py-3.5 rounded-full border border-white/30 text-white text-[12px] tracking-[0.16em] uppercase font-semibold hover:bg-white/10 transition-all cursor-pointer"
            >
              Download Home Loan Checklist
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Disclaimer
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 bg-soft border-t border-line text-[12px] text-muted leading-relaxed">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          <p className="font-semibold text-ink uppercase tracking-wider mb-1">
            Disclaimer
          </p>
          <p>
            This guide is for general information only. Home loan approval, eligibility, interest rate, documentation, charges and disbursement are subject to the policies of individual banks or financial institutions. Buyers are advised to consult their bank, financial advisor or legal advisor before making a purchase decision.
          </p>
        </div>
      </section>

    </main>
  );
}
