import React from 'react';

const featuredAwards = [
  { name: 'Young Achiever Award — Mr. Uttam Korupol', event: 'Times Realty Icons 2018' },
  { name: 'District-1 Wins Prestigious Project Award', event: 'Times Realty Icons 2017' },
  { name: 'Best Award in Real Estate Category', event: 'HMTV Business Excellence Awards 2017' },
  { name: 'Best Design Apartment Project of the Year', event: 'Realty Excellence Awards 2016' }
];

export default function AwardsTestimonial() {
  return (
    <section
      aria-label="Awards and Testimonials"
      className="bg-soft border-y border-line py-16 max-[880px]:py-10"
    >
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6">
        <div className="flex flex-wrap gap-[72px] max-[880px]:gap-10">
          
          {/* Left: Recognition */}
          <div className="flex-1 min-w-0 basis-[380px]">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-line">
              <p className="text-accent2 text-xs tracking-[0.3em] uppercase m-0 font-semibold">
                Official Recognition
              </p>
              <a 
                href="#awards" 
                className="text-[12px] uppercase tracking-wider text-accent hover:text-ink font-semibold transition-colors"
              >
                View All Awards &rarr;
              </a>
            </div>

            {featuredAwards.map((award, index) => (
              <div key={index} className="border-b border-line py-[18px]">
                <p className="text-[18px] font-heading m-0 text-ink leading-snug">
                  {award.name}
                </p>
                <p className="mt-1 text-[12px] tracking-[0.14em] uppercase text-muted m-0 font-body">
                  {award.event}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Home Owners Philosophy */}
          <div className="flex-1 min-w-0 basis-[380px]">
            <p className="text-accent2 text-xs tracking-[0.3em] uppercase mb-8 font-semibold">
              Client Trust & Legacy
            </p>
            <blockquote className="font-heading text-[26px] sm:text-[30px] leading-[1.4] m-0 text-ink font-normal">
              “Every award we receive is a reflection of the trust our homeowners place in us and our resolve to build spaces that endure across generations.”
            </blockquote>
            <p className="mt-7 text-sm tracking-[0.14em] uppercase text-muted font-body font-medium">
              Board of Directors · Northstar Homes
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
