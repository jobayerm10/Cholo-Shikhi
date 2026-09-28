import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { courses } from '../data/site'

export default function Courses() {
  return (
    <section id="courses" className="scroll-mt-24 border-t border-white/[0.06] bg-white/[0.015] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="আমাদের কোর্স"
            title="পরীক্ষামুখী প্রস্তুতির জন্য সাজানো কোর্সসমূহ"
            description="সিলেবাস অনুযায়ী পূর্ণাঙ্গ লেকচার, নোট ও মডেল টেস্টসহ — শুরু করো আজই।"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={(index % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] transition-all duration-400 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" />
                  {course.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-bold text-[#241703]">
                      {course.tag}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-bold leading-snug sm:text-xl">{course.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{course.description}</p>

                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-white/[0.06] px-3 py-1 text-xs text-white/70">{course.lessons}</span>
                    <span className="rounded-lg bg-white/[0.06] px-3 py-1 text-xs text-white/70">
                      সময়কাল: {course.duration}
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
                    <div>
                      <span className="text-xl font-bold text-brand">{course.price}</span>
                      {course.oldPrice && (
                        <span className="ml-2 text-sm text-white/40 line-through">{course.oldPrice}</span>
                      )}
                    </div>
                    <a
                      href="#contact"
                      className="rounded-full bg-white/[0.07] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-brand"
                    >
                      ভর্তি হোন
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
