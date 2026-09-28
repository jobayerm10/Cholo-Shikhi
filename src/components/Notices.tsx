import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { notices } from '../data/site'

export default function Notices() {
  return (
    <section id="notices" className="scroll-mt-24 border-t border-white/[0.06] bg-white/[0.015] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="নোটিশ"
            title="সাম্প্রতিক নোটিশসমূহ"
            description="ক্লাস, টেস্ট ও ভর্তি সংক্রান্ত সর্বশেষ আপডেট এখানে পাবে।"
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {notices.map((notice, index) => (
            <Reveal key={notice.title} delay={index * 0.07}>
              <article className="group flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-night-soft/80 p-5 transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                <time className="shrink-0 text-sm font-medium text-white/45 sm:w-44">{notice.date}</time>
                <h3 className="flex-1 text-[15px] font-semibold leading-snug transition-colors group-hover:text-brand sm:text-base">
                  {notice.title}
                </h3>
                <span className="shrink-0 self-start rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand sm:self-auto">
                  {notice.tag}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
