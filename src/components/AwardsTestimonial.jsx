const awards = [
  { name: '[Award name]', year: '[Year]' },
  { name: '[Award name]', year: '[Year]' },
  { name: '[Award name]', year: '[Year]' },
]

export default function AwardsTestimonial() {
  return (
    <section
      aria-label="Awards and Testimonials"
      className="bg-soft border-y border-line py-16 max-[880px]:py-10"
    >
      <div className="max-w-[1280px] mx-auto px-10 max-[880px]:px-6">
        <div className="flex flex-wrap gap-[72px] max-[880px]:gap-10">
          <div className="flex-1 min-w-0 basis-[380px]">
            <p className="text-accent2 text-xs tracking-[0.3em] uppercase mb-8">
              Recognition
            </p>
            {awards.map((award, index) => (
              <div key={index} className="border-b border-line py-[22px]">
                <p className="text-[19px] m-0">{award.name}</p>
                <p className="mt-1.5 text-[13px] tracking-[0.14em] uppercase text-muted m-0">
                  {award.year}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-1 min-w-0 basis-[380px]">
            <p className="text-accent2 text-xs tracking-[0.3em] uppercase mb-8">
              Home Owners
            </p>
            <blockquote className="font-heading text-[30px] leading-[1.45] m-0">
              [Owner testimonial — two or three lines, to be supplied by the client.]
            </blockquote>
            <p className="mt-7 text-sm tracking-[0.14em] uppercase text-muted">
              [Name] · [Project]
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
