import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { site } from '../data/site'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-white/[0.015] py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(600px 400px at 85% 20%, rgba(61,169,245,0.12), transparent 65%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="যোগাযোগ"
            title="কোর্স নিয়ে জানতে চাইলে আমাদের লিখুন"
            description="২৪ ঘণ্টার মধ্যে আমাদের টিম আপনার সঙ্গে যোগাযোগ করবে।"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              {[
                { label: 'ফোন', value: site.phoneDisplay, href: `tel:${site.phoneRaw}` },
                { label: 'ইমেইল', value: site.email, href: `mailto:${site.email}` },
                { label: 'ঠিকানা', value: site.address, href: undefined },
              ].map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand/35"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{row.label}</p>
                  {row.href ? (
                    <a href={row.href} className="mt-1 block text-lg font-semibold hover:text-brand">
                      {row.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold">{row.value}</p>
                  )}
                </div>
              ))}

              <div className="mt-auto flex gap-3 pt-2">
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white/75 transition-all duration-300 hover:border-brand/40 hover:text-white"
                >
                  ফেসবুক
                </a>
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white/75 transition-all duration-300 hover:border-brand/40 hover:text-white"
                >
                  ইউটিউব
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/[0.08] bg-night-soft/80 p-6 backdrop-blur sm:p-8">
              {sent ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-hl-green/15 text-2xl text-hl-green">
                    ✓
                  </span>
                  <h3 className="text-xl font-bold">আপনার বার্তা পাঠানো হয়েছে!</h3>
                  <p className="max-w-sm text-sm text-white/60">
                    খুব দ্রুত আমাদের টিম আপনার সঙ্গে যোগাযোগ করবে। ধন্যবাদ।
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm font-medium text-white/70">
                      আপনার নাম
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="ফুল নাম লিখুন"
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-brand/60"
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-medium text-white/70">
                      মোবাইল নম্বর
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="01XXXXXXXXX"
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-brand/60"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2 text-sm font-medium text-white/70">
                    ইমেইল
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-brand/60"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-white/70">
                    আপনার বার্তা
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="কোন কোর্সে আগ্রহী তা লিখুন..."
                      className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-brand/60"
                    />
                  </label>

                  <button
                    type="submit"
                    className="rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_34px_rgba(61,169,245,0.3)] transition-all duration-300 hover:bg-brand-strong"
                  >
                    বার্তা পাঠান
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
