import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { documents, testimonials } from '../data/site'

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="রিভিউ ও ডকুমেন্ট"
            title="শিক্ষার্থীদের বিশ্বাসে গড়ে ওঠা প্ল্যাটফর্ম"
            description="হাজারো শিক্ষার্থীর সফলতার অভিজ্ঞতা এবং ফ্রি ডকুমেন্ট — সব এক জায়গায়।"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08}>
              <figure className="flex h-full flex-col gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:border-brand/35">
                <div className="flex items-center gap-1 text-sun" aria-label={`${review.rating} রেটিং`}>
                  {Array.from({ length: 5 }).map((_, star) => (
                    <span key={star} className={star < review.rating ? 'opacity-100' : 'opacity-25'}>
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-[15px] leading-relaxed text-white/70">“{review.quote}”</blockquote>

                <figcaption className="mt-auto flex items-center gap-3 border-t border-white/[0.08] pt-4">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: review.color }}
                    aria-hidden="true"
                  >
                    {review.initial}
                  </span>
                  <span>
                    <span className="block font-semibold">{review.name}</span>
                    <span className="block text-xs text-white/50">{review.college}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-bold sm:text-2xl">ফ্রি ডকুমেন্ট সেন্টার</h3>
              <a href="#contact" className="text-sm font-semibold text-brand transition-colors hover:text-white">
                সব ডকুমেন্ট পাই →
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {documents.map((doc) => (
                <a
                  key={doc.title}
                  href="#contact"
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-night/60 p-4 transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.04]"
                >
                  <span className="grid h-11 w-9 shrink-0 place-items-center rounded-lg bg-hl-red/15 text-xs font-bold text-hl-red">
                    PDF
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold group-hover:text-brand">{doc.title}</span>
                    <span className="block text-xs text-white/45">{doc.meta}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
