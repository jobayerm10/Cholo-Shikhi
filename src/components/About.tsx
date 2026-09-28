import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { features, stats } from '../data/site'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="আমাদের সম্পর্কে"
            title="কেন চলো শিখি বাংলাদেশের সেরা পছন্দ"
            description="২০২২ সাল থেকে আমরা HSC মানবিক শিক্ষার্থীদের জন্য সহজ, সুশৃঙ্খল ও ফলপ্রসূ অনলাইন শিক্ষার পরিবেশ তৈরি করছি।"
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35"
                >
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" strokeLinejoin="round" />
                      <path d="M3 12.5 12 17l9-4.5M3 17 12 21.5 21 17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-brand/[0.12] via-white/[0.03] to-transparent p-8 sm:p-10">
              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                লক্ষ্য প্রাপ্তির গল্প লেখায় আমরা তোমার পাশে
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">
                অভিজ্ঞ শিক্ষক, গবেষণাধর্মী নোট এবং নিয়মিত মূল্যায়ন — তিনটি স্তম্ভের ওপর দাঁড়িয়ে আমাদের প্রতিটি কোর্স।
                ফলে শিক্ষার্থীরা শুধু পড়ে না, বুঝে শেখে ও নিজের অগ্রগতি টের পায়।
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/[0.08] bg-night/60 p-5">
                    <p className="text-3xl font-bold text-brand">{stat.value}</p>
                    <p className="mt-1 text-sm text-white/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
