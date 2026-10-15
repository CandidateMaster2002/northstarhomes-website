import React, { useState, useEffect, useMemo } from 'react';

// Format number in Indian currency style
function formatINR(val) {
  if (isNaN(val) || val === null || val === undefined) return '0';
  const rounded = Math.round(val);
  return rounded.toLocaleString('en-IN');
}

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(9);
  const [tenureType, setTenureType] = useState('years'); // 'years' | 'months'
  const [tenureValue, setTenureValue] = useState(5);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Handle tenure switch
  const handleTenureTypeChange = (type) => {
    if (type === tenureType) return;
    if (type === 'months') {
      setTenureType('months');
      setTenureValue(Math.min(360, Math.max(6, tenureValue * 12)));
    } else {
      setTenureType('years');
      setTenureValue(Math.min(30, Math.max(1, Math.round(tenureValue / 12))));
    }
  };

  // Calculations
  const calculations = useMemo(() => {
    const P = parseFloat(loanAmount) || 0;
    const annualR = parseFloat(interestRate) || 0;
    const N = tenureType === 'years' ? (parseFloat(tenureValue) || 0) * 12 : parseFloat(tenureValue) || 0;

    if (P <= 0 || annualR <= 0 || N <= 0) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
        principalPercent: 100,
        interestPercent: 0
      };
    }

    const r = annualR / (12 * 100);
    const emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    const principalPercent = totalPayment > 0 ? (P / totalPayment) * 100 : 100;
    const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      principalPercent: Math.round(principalPercent * 10) / 10,
      interestPercent: Math.round(interestPercent * 10) / 10
    };
  }, [loanAmount, interestRate, tenureType, tenureValue]);

  // Donut chart stroke dash calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const principalStroke = (calculations.principalPercent / 100) * circumference;
  const interestStroke = circumference - principalStroke;

  return (
    <main className="min-h-screen bg-[#F9FBFC] text-ink">

      {/* ─────────────────────────────────────────────────────────────
          COMPACT SLIM HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#07294A] text-white pt-24 pb-8 sm:pt-28 sm:pb-10 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-body font-semibold text-[#8FA7BD] mb-3">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#8FA7BD]">Resources</span>
            <span>/</span>
            <span className="text-white font-medium">EMI Calculator</span>
          </div>

          <div className="max-w-[880px]">
            <h1 className="text-[30px] sm:text-[44px] lg:text-[48px] font-heading font-normal text-white leading-[1.14] mb-4">
              Plan Your Dream Home with Confidence
            </h1>
            <p className="text-[15px] sm:text-[16px] font-body font-light text-[#C7DCED] leading-relaxed mb-3">
              Owning a Northstar home begins with smart financial planning. Our easy-to-use Home Loan EMI Calculator helps you estimate your monthly installments and plan your investment with complete clarity.
            </p>
            <p className="text-[15px] sm:text-[16px] font-body font-light text-[#C7DCED] leading-relaxed mb-3">
              Simply enter your loan amount, interest rate, and tenure to instantly calculate your EMI and understand your repayment journey. Whether you are exploring premium apartments, luxury villas, or future-ready living spaces, this tool helps you make informed decisions before taking the next step toward your dream home.
            </p>
            <p className="text-[15px] sm:text-[16px] font-body font-light text-[#C7DCED] leading-relaxed">
              At Northstar Homes, we believe a home is more than an investment — it is a foundation for a better tomorrow. Start planning today and move closer to the home you have always envisioned.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          EMI CALCULATOR INTERACTIVE SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-16">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">

          <div className="bg-white border border-line shadow-sm rounded-3xl p-6 sm:p-10 lg:p-12">
            
            <h2 className="text-[26px] sm:text-[32px] font-heading font-normal text-ink mb-8 pb-4 border-b border-line">
              EMI Calculator
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* ── LEFT COLUMN: INPUT CONTROLS & SLIDERS ── */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* 1. Loan Amount */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <label className="text-[14px] sm:text-[15px] font-semibold text-ink">
                      Loan Amount
                    </label>
                    <div className="relative flex items-center">
                      <input 
                        type="number"
                        min="100000"
                        max="200000000"
                        step="50000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Math.max(0, Number(e.target.value)))}
                        className="w-[180px] sm:w-[220px] px-3.5 py-2 text-right font-mono font-semibold text-[16px] text-ink bg-soft border border-line rounded-lg focus:outline-none focus:border-accent focus:bg-white transition-all pr-8"
                      />
                      <span className="absolute right-3 text-muted font-bold text-sm pointer-events-none">
                        ₹
                      </span>
                    </div>
                  </div>

                  <input 
                    type="range"
                    min="500000"
                    max="100000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-[#0B6FB5]"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-muted mt-1.5">
                    <span>₹ 5 Lakhs</span>
                    <span>₹ 10 Crores</span>
                  </div>
                </div>

                {/* 2. Interest Rate */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <label className="text-[14px] sm:text-[15px] font-semibold text-ink">
                      Interest Rate
                    </label>
                    <div className="relative flex items-center">
                      <input 
                        type="number"
                        min="1"
                        max="30"
                        step="0.05"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Math.max(0, Number(e.target.value)))}
                        className="w-[140px] sm:w-[160px] px-3.5 py-2 text-right font-mono font-semibold text-[16px] text-ink bg-soft border border-line rounded-lg focus:outline-none focus:border-accent focus:bg-white transition-all pr-8"
                      />
                      <span className="absolute right-3 text-muted font-bold text-sm pointer-events-none">
                        %
                      </span>
                    </div>
                  </div>

                  <input 
                    type="range"
                    min="1"
                    max="30"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-[#0B6FB5]"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-muted mt-1.5">
                    <span>1 %</span>
                    <span>30 %</span>
                  </div>
                </div>

                {/* 3. Loan Tenure */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <label className="text-[14px] sm:text-[15px] font-semibold text-ink">
                      Loan Tenure
                    </label>

                    <div className="flex items-center gap-2">
                      <input 
                        type="number"
                        min={tenureType === 'years' ? 1 : 6}
                        max={tenureType === 'years' ? 30 : 360}
                        step="1"
                        value={tenureValue}
                        onChange={(e) => setTenureValue(Math.max(1, Number(e.target.value)))}
                        className="w-[90px] sm:w-[110px] px-3.5 py-2 text-right font-mono font-semibold text-[16px] text-ink bg-soft border border-line rounded-lg focus:outline-none focus:border-accent focus:bg-white transition-all"
                      />

                      {/* Yr / Mo Choice Radio Buttons */}
                      <div className="flex bg-soft border border-line rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => handleTenureTypeChange('years')}
                          className={`px-3 py-1.5 rounded-md text-[13px] font-semibold transition-all cursor-pointer ${
                            tenureType === 'years'
                              ? 'bg-[#07294A] text-white shadow-sm'
                              : 'text-muted hover:text-ink'
                          }`}
                        >
                          Yr
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTenureTypeChange('months')}
                          className={`px-3 py-1.5 rounded-md text-[13px] font-semibold transition-all cursor-pointer ${
                            tenureType === 'months'
                              ? 'bg-[#07294A] text-white shadow-sm'
                              : 'text-muted hover:text-ink'
                          }`}
                        >
                          Mo
                        </button>
                      </div>
                    </div>
                  </div>

                  <input 
                    type="range"
                    min={tenureType === 'years' ? 1 : 6}
                    max={tenureType === 'years' ? 30 : 360}
                    step="1"
                    value={tenureValue}
                    onChange={(e) => setTenureValue(Number(e.target.value))}
                    className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-[#0B6FB5]"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-muted mt-1.5">
                    <span>{tenureType === 'years' ? '1 Year' : '6 Months'}</span>
                    <span>{tenureType === 'years' ? '30 Years' : '360 Months'}</span>
                  </div>
                </div>

              </div>

              {/* ── RIGHT COLUMN: RESULTS SUMMARY & VISUAL CHART ── */}
              <div className="lg:col-span-5 bg-[#F9FBFC] border border-line rounded-2xl p-6 sm:p-8">
                
                {/* 1. Loan EMI */}
                <div className="pb-5 mb-5 border-b border-line text-center">
                  <h3 className="text-[13px] tracking-[0.16em] uppercase font-semibold text-muted mb-1 font-body">
                    Loan EMI
                  </h3>
                  <div className="text-[34px] sm:text-[40px] font-mono font-bold text-accent leading-none">
                    {formatINR(calculations.emi)} <span className="text-[16px] text-muted font-normal font-body">INR</span>
                  </div>
                </div>

                {/* 2. Total Interest Payable */}
                <div className="pb-5 mb-5 border-b border-line text-center">
                  <h3 className="text-[13px] tracking-[0.16em] uppercase font-semibold text-muted mb-1 font-body">
                    Total Interest Payable
                  </h3>
                  <div className="text-[24px] sm:text-[28px] font-mono font-semibold text-ink leading-tight">
                    {formatINR(calculations.totalInterest)} <span className="text-[14px] text-muted font-normal font-body">INR</span>
                  </div>
                </div>

                {/* 3. Total Payment (Principal + Interest) */}
                <div className="pb-6 mb-6 border-b border-line text-center">
                  <h3 className="text-[13px] tracking-[0.16em] uppercase font-semibold text-muted mb-1 font-body leading-snug">
                    Total Payment<br /><span className="text-[11px] text-muted/80 font-normal lowercase">(Principal + Interest)</span>
                  </h3>
                  <div className="text-[26px] sm:text-[30px] font-mono font-bold text-ink leading-tight">
                    {formatINR(calculations.totalPayment)} <span className="text-[14px] text-muted font-normal font-body">INR</span>
                  </div>
                </div>

                {/* Donut Chart Visual Summary */}
                <div className="flex flex-col items-center">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                      {/* Background circle */}
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="#e2e8f0"
                        strokeWidth="18"
                        fill="transparent"
                      />
                      {/* Principal Stroke (Accent blue) */}
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="#0B6FB5"
                        strokeWidth="18"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - principalStroke}
                        strokeLinecap="round"
                        className="transition-all duration-500 ease-out"
                      />
                      {/* Interest Stroke (Accent green / gold) */}
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="#5CC266"
                        strokeWidth="18"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - interestStroke}
                        transform="rotate(180 80 80)"
                        strokeLinecap="round"
                        className="transition-all duration-500 ease-out"
                      />
                    </svg>
                    
                    <div className="absolute text-center">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-muted block">
                        Principal
                      </span>
                      <span className="text-[18px] font-mono font-bold text-ink">
                        {calculations.principalPercent}%
                      </span>
                    </div>
                  </div>

                  {/* Chart Legend */}
                  <div className="flex items-center justify-center gap-6 mt-4 text-[13px] font-body">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#0B6FB5]" />
                      <span className="text-muted">Principal ({calculations.principalPercent}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#5CC266]" />
                      <span className="text-muted">Interest ({calculations.interestPercent}%)</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
