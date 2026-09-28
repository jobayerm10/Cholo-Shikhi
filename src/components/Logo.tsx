import { site } from '../data/site'

export default function Logo({ className = '' }: { className?: string }) {
  if (site.logoSrc) {
    return (
      <a href="#home" className={`flex items-center ${className}`} aria-label={site.name}>
        <img src={site.logoSrc} alt={site.name} className="h-9 w-auto md:h-10" width={160} height={40} />
      </a>
    )
  }

  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`} aria-label={site.name}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-white shadow-[0_6px_20px_rgba(61,169,245,0.35)] transition-transform duration-300 group-hover:-rotate-6 md:h-10 md:w-10">
        চ
      </span>
      <span className="text-xl font-bold tracking-tight md:text-2xl">{site.name}</span>
    </a>
  )
}
