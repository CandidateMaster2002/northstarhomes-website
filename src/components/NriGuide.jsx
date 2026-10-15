import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function NriGuide() {
  const [openFaq, setOpenFaq] = useState(null);
  const [checkedList, setCheckedList] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const toggleCheck = (index) => {
    setCheckedList(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const allowedProperties = [
    'Apartments',
    'Villas',
    'Independent houses',
    'Residential plots, where legally permitted',
    'Shops',
    'Office spaces',
    'Commercial properties'
  ];

  const notAllowedProperties = [
    'Agricultural land',
    'Plantation property',
    'Farmhouses'
  ];

  const requiredDocuments = [
    'Valid passport',
    'Visa or residence permit',
    'OCI card, if applicable',
    'PAN Card',
    'Passport-size photographs',
    'Overseas address proof',
    'Indian address proof, if available',
    'NRE / NRO / FCNR bank account details',
    'Power of Attorney, if someone in India is representing you',
    'Income documents, if applying for a home loan'
  ];

  const paymentModes = [
    'NRE account',
    'NRO account',
    'FCNR account',
    'Direct inward remittance from your overseas bank account'
  ];

  const loanApprovalFactors = [
    'Income',
    'Age',
    'Country of residence',
    'Employment profile',
    'Credit history',
    'Repayment capacity',
    'Property documents',
    'Bank eligibility rules'
  ];

  const poaHelpsWith = [
    'Agreement signing',
    'Bank formalities',
    'Registration process',
    'Documentation',
    'Possession-related work'
  ];

  const repatriationRequirements = [
    'Sale proceeds to be credited to an eligible bank account',
    'Applicable taxes to be paid',
    'Bank and CA documentation',
    'Compliance with RBI/FEMA guidelines'
  ];

  const northstarAssistance = [
    'Project consultation',
    'Virtual meetings',
    'Video walkthroughs',
    'Project brochures and floor plans',
    'Unit availability details',
    'Price and payment schedule explanation',
    'Documentation guidance',
    'Home loan coordination support',
    'Agreement and registration coordination',
    'Power of Attorney guidance',
    'Construction updates',
    'Site visit coordination for family members',
    'Handover and possession support'
  ];

  const buyingProcessSteps = [
    {
      step: '1',
      title: 'Share Your Requirement',
      text: 'Tell us what you are looking for — apartment, villa, location, budget, purpose, and preferred city.'
    },
    {
      step: '2',
      title: 'Project Consultation',
      text: 'Our team will explain suitable projects, pricing, availability, floor plans, amenities, and location advantages.'
    },
    {
      step: '3',
      title: 'Virtual Walkthrough',
      text: 'You can explore the project through brochures, images, videos, floor plans, and virtual meetings.'
    },
    {
      step: '4',
      title: 'Select Your Unit',
      text: 'Choose your preferred home based on size, floor, facing, view, budget, and availability.'
    },
    {
      step: '5',
      title: 'Submit Documents',
      text: 'Our team will guide you with the required documents for booking and agreement.'
    },
    {
      step: '6',
      title: 'Complete Booking',
      text: 'Make the booking payment through approved banking channels and receive official confirmation.'
    },
    {
      step: '7',
      title: 'Agreement and Registration',
      text: 'Complete the agreement and registration process. If you are abroad, a valid Power of Attorney may be used where applicable.'
    },
    {
      step: '8',
      title: 'Receive Regular Updates',
      text: 'Get construction updates, payment reminders, and important project communication from our team.'
    },
    {
      step: '9',
      title: 'Handover Support',
      text: 'At the time of possession, we assist with final documentation, payment coordination, and handover formalities.'
    }
  ];

  const checklistItems = [
    'Confirm your NRI / OCI eligibility',
    'Select the right property type',
    'Check the project’s RERA registration',
    'Review legal documents',
    'Understand the payment schedule',
    'Arrange funds through approved banking channels',
    'Check home loan eligibility, if required',
    'Understand tax and TDS rules',
    'Prepare Power of Attorney, if needed',
    'Understand repatriation rules',
    'Consult a legal advisor and Chartered Accountant'
  ];

  const faqItems = [
    {
      q: 'Can NRIs buy property in India?',
      a: 'Yes. NRIs and OCIs can generally buy residential and commercial properties in India, subject to applicable rules.'
    },
    {
      q: 'Can NRIs buy agricultural land in India?',
      a: 'Generally, no. NRIs and OCIs cannot purchase agricultural land, plantation property, or farmhouses without specific approval.'
    },
    {
      q: 'Can NRIs get a home loan in India?',
      a: 'Yes. NRIs can apply for home loans from Indian banks and housing finance companies, subject to eligibility.'
    },
    {
      q: 'Is PAN Card required for NRI property purchase?',
      a: 'Yes. PAN Card is usually required for property purchase, taxation, registration, and banking-related processes.'
    },
    {
      q: 'Can an NRI appoint someone in India for registration?',
      a: 'Yes. An NRI can appoint a trusted person through a valid Power of Attorney.'
    },
    {
      q: 'Is rental income from property taxable in India?',
      a: 'Yes. Rental income earned from property in India is taxable in India.'
    },
    {
      q: 'Can NRIs repatriate sale proceeds?',
      a: 'Yes, subject to RBI/FEMA rules, tax payment, source of funds, and required documentation.'
    },
    {
      q: 'Can NRIs buy property jointly with foreign nationals?',
      a: 'This depends on the legal status of the co-buyer. It is better to take legal advice before making a joint purchase.'
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
            <span className="text-white font-medium">NRI Guide</span>
          </div>

          <div className="max-w-[900px]">
            <span className="text-[12px] tracking-[0.26em] uppercase font-body font-semibold text-[#4FA3E3] block mb-2">
              NRI Guide
            </span>
            <h1 className="text-[30px] sm:text-[44px] lg:text-[52px] font-heading font-normal text-white leading-[1.12] mb-4">
              Buying a Home in India, Made Easier for Global Indians
            </h1>
            <p className="text-[15px] sm:text-[17px] font-body font-light text-[#C7DCED] leading-relaxed mb-4">
              For many NRIs, buying a home in India is not just about investment. It is about staying connected to family, securing a future address, creating long-term value, and keeping a strong bond with home.
            </p>
            <p className="text-[15px] sm:text-[17px] font-body font-light text-[#C7DCED] leading-relaxed mb-4">
              At Northstar Homes, we understand that buying a property while living abroad can feel complicated. There are questions about documents, payments, home loans, taxes, registration, Power of Attorney, and repatriation of funds. This guide is created to help you understand the basics in a simple and clear way.
            </p>
            <p className="text-[15px] sm:text-[17px] font-body font-light text-[#C7DCED] leading-relaxed">
              Whether you are planning to invest in Hyderabad, buy a future home in Vizag, or explore premium residential projects in India, this NRI Guide will help you take the first step with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Who Can Buy Property in India?
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-4 leading-tight">
            Who Can Buy Property in India?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-8 max-w-[840px]">
            NRIs and OCIs are generally allowed to buy residential and commercial properties in India.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* This means you can buy */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FBFC] border border-line">
              <h3 className="text-[18px] font-heading font-normal text-ink mb-4">
                This means you can buy:
              </h3>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {allowedProperties.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-line">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                    <span className="text-[14px] font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* However, NRIs and OCIs are generally not allowed to buy */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FBFC] border border-line flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-heading font-normal text-ink mb-4">
                  However, NRIs and OCIs are generally not allowed to buy:
                </h3>
                <ul className="space-y-2.5 list-none p-0 m-0 mb-6">
                  {notAllowedProperties.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-line">
                      <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-[14px] font-medium text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed p-4 rounded-xl bg-white border border-line">
                These rules may change based on government guidelines, so it is always better to consult a legal advisor before making a purchase.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Documents Usually Required
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Documents Usually Required
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              The documents may vary depending on the project, bank, and registration process. However, most NRI buyers are usually asked to provide:
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8 list-none p-0 m-0">
            {requiredDocuments.map((doc, idx) => (
              <li key={idx} className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-line shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-[14px] font-medium text-ink">{doc}</span>
              </li>
            ))}
          </ul>

          <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed p-4 rounded-xl bg-white border border-line max-w-[840px]">
            Our team can guide you with the basic document checklist required for booking, agreement, and registration.
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: How NRIs Can Make Payments
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              How NRIs Can Make Payments
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-4">
              NRI property payments should be made through proper banking channels.
            </p>
            <h3 className="text-[16px] font-semibold text-ink">
              You can usually make payments through:
            </h3>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 list-none p-0 m-0 max-w-[900px]">
            {paymentModes.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-4 bg-soft rounded-xl border border-line">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-[14px] sm:text-[15px] font-medium text-ink">{item}</span>
              </li>
            ))}
          </ul>

          <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 mb-6 max-w-[900px]">
            <p className="text-[14px] text-amber-950 font-medium">
              Payments should not be made in cash, foreign currency notes, or traveller’s cheques.
            </p>
          </div>

          <p className="text-[15px] text-muted leading-relaxed">
            At Northstar Homes, we provide clear payment schedules, official receipts, and proper communication at every stage of the transaction.
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Can NRIs Get Home Loans in India?
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Can NRIs Get Home Loans in India?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-4">
              Yes, NRIs can apply for home loans from Indian banks and housing finance companies.
            </p>
            <h3 className="text-[16px] font-semibold text-ink">
              Loan approval depends on factors such as:
            </h3>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 list-none p-0 m-0">
            {loanApprovalFactors.map((factor, idx) => (
              <li key={idx} className="p-4 bg-white rounded-xl border border-line shadow-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-[14px] font-medium text-ink">{factor}</span>
              </li>
            ))}
          </ul>

          <p className="text-[15px] text-muted leading-relaxed max-w-[840px]">
            The loan amount is usually disbursed directly to the developer or seller. Repayment can generally be made through NRE, NRO, FCNR accounts, or inward remittance.
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Power of Attorney for NRIs
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Power of Attorney for NRIs
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-4">
              If you are unable to travel to India for documentation or registration, you can appoint a trusted family member or representative through a Power of Attorney.
            </p>
            <h3 className="text-[16px] font-semibold text-ink">
              A Power of Attorney can help with:
            </h3>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 list-none p-0 m-0 max-w-[900px]">
            {poaHelpsWith.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-3.5 bg-soft rounded-xl border border-line">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-[14px] font-medium text-ink">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed p-4 rounded-xl bg-[#F9FBFC] border border-line max-w-[840px]">
            The Power of Attorney should be properly drafted and legally validated. It is always better to take legal advice before issuing one.
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Taxes NRIs Should Know About
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Taxes NRIs Should Know About
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Property purchase and ownership in India may involve taxes at different stages.
            </p>
          </div>

          <div className="space-y-6 max-w-[900px] mb-8">
            
            {/* Stamp Duty and Registration */}
            <div className="p-6 rounded-2xl bg-white border border-line shadow-sm">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Stamp Duty and Registration
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed mb-3">
                Stamp duty and registration charges are payable as per the state rules.
              </p>
              <p className="text-[14px] text-ink font-medium mb-2">
                For Northstar Homes projects, this may apply as per:
              </p>
              <ul className="space-y-1.5 list-none p-0 m-0 mb-3 pl-2">
                <li className="text-[14px] text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Telangana rules for Hyderabad projects
                </li>
                <li className="text-[14px] text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Andhra Pradesh rules for Vizag projects
                </li>
              </ul>
              <p className="text-[13px] text-muted leading-relaxed">
                The final amount depends on the property value, location, and government guidelines.
              </p>
            </div>

            {/* Rental Income Tax */}
            <div className="p-6 rounded-2xl bg-white border border-line shadow-sm">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Rental Income Tax
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                If you rent out your property in India, the rental income is taxable in India. TDS may also apply as per income tax rules.
              </p>
            </div>

            {/* Capital Gains Tax */}
            <div className="p-6 rounded-2xl bg-white border border-line shadow-sm">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Capital Gains Tax
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                If you sell your property in India, capital gains tax may apply. The tax amount depends on how long you held the property and the profit earned from the sale.
              </p>
            </div>

            {/* DTAA Benefit */}
            <div className="p-6 rounded-2xl bg-white border border-line shadow-sm">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                DTAA Benefit
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                If you are paying tax in India and also in your country of residence, you may be able to claim relief under the Double Taxation Avoidance Agreement, depending on the country and applicable rules.
              </p>
            </div>

          </div>

          <p className="text-[14px] text-muted leading-relaxed">
            For taxation, it is always advisable to consult a Chartered Accountant.
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Repatriation of Funds
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Repatriation of Funds
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-4">
              Repatriation means sending money from India to your overseas bank account.
            </p>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mb-6">
              NRIs may be allowed to repatriate sale proceeds from property in India, subject to RBI rules, tax clearance, source of funds, and required documents.
            </p>
            <h3 className="text-[16px] font-semibold text-ink mb-3">
              In general, the process may require:
            </h3>
          </div>

          <ul className="space-y-3 mb-8 max-w-[840px] list-none p-0 m-0">
            {repatriationRequirements.map((req, idx) => (
              <li key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-soft border border-line">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-[14px] sm:text-[15px] font-medium text-ink">{req}</span>
              </li>
            ))}
          </ul>

          <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
            Before repatriating funds, it is recommended to consult your bank and tax advisor.
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Why NRIs Should Invest in Hyderabad
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Why NRIs Should Invest in Hyderabad
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Hyderabad has become one of India’s most preferred cities for real estate investment. For NRIs, it offers a strong combination of growth, infrastructure, employment, lifestyle, and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-sm">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Strong IT and Business Growth
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                Hyderabad is home to major IT parks, global companies, financial districts, pharma companies, healthcare institutions, and fast-growing business corridors. This creates strong demand for quality residential spaces.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-sm">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Excellent Infrastructure
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                The city has strong road connectivity, ORR access, airport connectivity, metro expansion, and well-developed social infrastructure.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-sm">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                High Residential Demand
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                Areas such as HITEC City, Gachibowli, Financial District, Kokapet, Narsingi, Tellapur, Patancheru, Srisailam Highway, and other growth corridors continue to attract both homebuyers and investors.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-sm">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Good Long-Term Potential
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                Hyderabad offers a balanced mix of liveability, affordability compared to many metros, employment opportunities, and premium residential development. This makes it a strong choice for NRIs looking for long-term investment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Why NRIs Should Invest in Vizag
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Why NRIs Should Invest in Vizag
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Vizag is one of the most promising real estate destinations in Andhra Pradesh. It offers a different kind of value compared to a metro city — a mix of coastal lifestyle, growing infrastructure, business potential, and peaceful living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FBFC] border border-line">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Coastal Lifestyle
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                Vizag offers a beautiful natural setting with beaches, hills, open spaces, and a more relaxed pace of life. For NRIs looking for a future home, retirement home, or second home, Vizag is a strong option.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FBFC] border border-line">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Growing Economic Importance
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                The city has a strong presence in ports, logistics, industries, defence, education, healthcare, and emerging technology sectors.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FBFC] border border-line">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Future Growth Potential
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                With improving infrastructure, commercial development, and increasing attention from businesses and investors, Vizag has strong long-term potential.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FBFC] border border-line">
              <h3 className="text-[18px] font-heading font-medium text-ink mb-2">
                Suitable for End Use and Investment
              </h3>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                Vizag is attractive for NRIs who want a home for family use, future settlement, rental potential, or long-term appreciation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: How Northstar Homes Supports NRI Buyers
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#07294A] text-white border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[840px] mb-8">
            <h2 className="text-[28px] sm:text-[40px] font-heading font-normal text-white mb-4 leading-tight">
              How Northstar Homes Supports NRI Buyers
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#C7DCED] font-light leading-relaxed mb-6">
              Buying a home from another country requires trust, clarity, and regular communication. Our team helps NRI customers throughout the property journey.
            </p>
            <h3 className="text-[16px] font-semibold text-white mb-4">
              We assist with:
            </h3>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 list-none p-0 m-0">
            {northstarAssistance.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.06] border border-white/10">
                <span className="text-[#4FA3E3] font-bold">✓</span>
                <span className="text-[13px] text-white/90 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[15px] text-[#9CB5CB] leading-relaxed">
            Our goal is to make your property-buying experience simple, transparent, and comfortable.
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Step-by-Step Buying Process for NRIs
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-bg border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[760px] mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-2 leading-tight">
              Step-by-Step Buying Process for NRIs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {buyingProcessSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-[#F9FBFC] border border-line flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-[#07294A] text-white flex items-center justify-center font-mono font-semibold text-xs mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-[16px] font-semibold text-ink mb-2">
                    {step.step}. {step.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: Quick Checklist for NRI Buyers
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#F9FBFC] border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="max-w-[780px] mb-8">
            <h2 className="text-[28px] sm:text-[36px] font-heading font-normal text-ink mb-3 leading-tight">
              Quick Checklist for NRI Buyers
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Before buying a property in India, make sure you:
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[960px] list-none p-0 m-0">
            {checklistItems.map((item, idx) => {
              const isChecked = !!checkedList[idx];
              return (
                <li
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-sm'
                      : 'bg-white border-line text-ink hover:border-accent/40'
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
                    <span>{faq.q}</span>
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
          SECTION: Start Your Property Journey with Northstar Homes
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#07294A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-[1040px] mx-auto px-6 sm:px-10 text-center relative z-10">
          <h2 className="text-[30px] sm:text-[44px] font-heading font-normal text-white mb-4 leading-tight max-w-[820px] mx-auto">
            Start Your Property Journey with Northstar Homes
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#C7DCED] font-light max-w-[760px] mx-auto mb-6 leading-relaxed">
            Whether you live in the USA, UK, UAE, Canada, Australia, Singapore, Europe, or anywhere else in the world, Northstar Homes is here to help you invest in India with confidence.
          </p>
          <p className="text-[14px] text-white/85 font-medium mb-10 max-w-[680px] mx-auto">
            Explore our residential projects in Hyderabad and Vizag, connect with our team, schedule a virtual consultation, or plan a site visit for your family in India.
          </p>

          {/* CTA Options */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-btn-bg text-btn-ink text-[12px] tracking-[0.14em] uppercase font-semibold hover:bg-white hover:text-ink transition-all shadow-md cursor-pointer"
            >
              Schedule a Virtual Consultation
            </a>
            <a
              href="#ongoing-projects"
              className="px-7 py-3.5 rounded-full bg-white text-ink text-[12px] tracking-[0.14em] uppercase font-semibold hover:bg-white/90 transition-all shadow-md cursor-pointer"
            >
              Explore Projects in Hyderabad
            </a>
            <a
              href="#ongoing-projects"
              className="px-7 py-3.5 rounded-full bg-white text-ink text-[12px] tracking-[0.14em] uppercase font-semibold hover:bg-white/90 transition-all shadow-md cursor-pointer"
            >
              Explore Projects in Vizag
            </a>
            <a
              href="#coming-soon"
              className="px-7 py-3.5 rounded-full border border-white/30 text-white text-[12px] tracking-[0.14em] uppercase font-semibold hover:bg-white/10 transition-all cursor-pointer"
            >
              Download Project Brochure
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-[#3898E2] text-white text-[12px] tracking-[0.14em] uppercase font-semibold hover:bg-white hover:text-ink transition-all shadow-md cursor-pointer"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
