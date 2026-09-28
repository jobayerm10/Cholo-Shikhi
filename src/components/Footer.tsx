import Logo from './Logo'
import { navLinks, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-night">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            HSC মানবিক বিভাগের শিক্ষার্থীদের জন্য বাংলাদেশের প্রথম এবং একমাত্র পূর্ণাঙ্গ অনলাইন প্ল্যাটফর্ম।
          </p>
        </div>

        <nav aria-label="ফুটার নেভিগেশন">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/40">দ্রুত লিংক</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 transition-colors duration-200 hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/40">যোগাযোগ</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/60">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="transition-colors duration-200 hover:text-brand">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors duration-200 hover:text-brand">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-5">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-white/40 sm:px-6 lg:px-8">
          {site.copyright}
        </p>
      </div>
    </footer>
  )
}
