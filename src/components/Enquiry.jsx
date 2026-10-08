import React from 'react'
import ScrollReveal from './ScrollReveal'

export default function Enquiry() {
  return (
    <section id="contact" className="bg-deep text-deep-ink">
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6 flex flex-wrap gap-[72px] max-[880px]:gap-10 py-16">
        {/* Left Column */}
        <div className="flex-1 min-w-0 basis-[380px]">
          <ScrollReveal>
            <h2 className="text-[clamp(32px,3.4vw,46px)] leading-[1.14] mb-6 font-heading">
              Request more information
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-[18px] leading-[1.8] opacity-[0.86] max-w-[42ch] mb-10">
              Share a few details and our team will arrange a site visit, a walkthrough of the master plan, or send across the brochure.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-[22px] mb-2.5">
              <a href="tel:+918657553355" className="hover:opacity-70 transition-opacity">
                +91 86575 53355
              </a>
            </p>
            <p className="text-[18px] opacity-[0.86]">
              <a href="mailto:support@northstarhomes.in" className="hover:opacity-70 transition-opacity">
                support@northstarhomes.in
              </a>
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column / Form */}
        <div className="flex-1 min-w-0 basis-[380px]">
          <ScrollReveal delay={0.3}>
            <form
              className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
          <div>
            <label htmlFor="fname" className="block text-[12px] tracking-[0.18em] uppercase mb-2.5 opacity-80">
              First Name*
            </label>
            <input
              id="fname"
              name="fname"
              type="text"
              autoComplete="given-name"
              required
              className="w-full min-h-12 bg-transparent border-0 border-b border-white/30 text-inherit font-inherit text-base py-2.5 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="lname" className="block text-[12px] tracking-[0.18em] uppercase mb-2.5 opacity-80">
              Last Name*
            </label>
            <input
              id="lname"
              name="lname"
              type="text"
              autoComplete="family-name"
              required
              className="w-full min-h-12 bg-transparent border-0 border-b border-white/30 text-inherit font-inherit text-base py-2.5 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-[12px] tracking-[0.18em] uppercase mb-2.5 opacity-80">
              Phone*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className="w-full min-h-12 bg-transparent border-0 border-b border-white/30 text-inherit font-inherit text-base py-2.5 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="project" className="block text-[12px] tracking-[0.18em] uppercase mb-2.5 opacity-80">
              Project of Interest
            </label>
            <select
              id="project"
              name="project"
              defaultValue="Sanctuary"
              className="w-full min-h-12 bg-transparent border-0 border-b border-white/30 text-inherit font-inherit text-base py-2.5 focus:outline-none focus:border-white transition-colors [&>option]:bg-deep [&>option]:text-deep-ink"
            >
              <option value="Sanctuary">Sanctuary</option>
              <option value="SP Palacio">SP Palacio</option>
              <option value="Allura">Allura</option>
              <option value="Park Avenue">Park Avenue</option>
              <option value="Golden Valley">Golden Valley</option>
            </select>
          </div>

          <div className="col-span-full">
            <label htmlFor="message" className="block text-[12px] tracking-[0.18em] uppercase mb-2.5 opacity-80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full min-h-12 bg-transparent border-0 border-b border-white/30 text-inherit font-inherit text-base py-2.5 resize-y focus:outline-none focus:border-white transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="col-span-full bg-btn-bg text-btn-ink min-h-12 px-8 py-4 text-[13px] tracking-[0.16em] uppercase cursor-pointer border-0 hover:opacity-90 transition-opacity"
          >
            Submit Enquiry
          </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
