import { site } from "../data/site";

export default function Logo({ className = "" }: { className?: string }) {
  if (site.logoSrc) {
    return (
      <a
        href="#home"
        className={`flex items-center ${className}`}
        aria-label={site.name}
      >
        <img
          src={site.logoSrc}
          alt={site.name}
          className="h-9 w-auto md:h-10"
          width={160}
          height={40}
        />
      </a>
    );
  }

  return (
    <a
      href="#home"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={site.name}
    >
      <span
        className="relative flex h-10 w-7 flex-col items-center justify-end gap-0.5 transition-transform duration-300 group-hover:-rotate-6 md:h-10 md:w-10"
        aria-hidden="true"
      >
        <span className="flex h-6 w-full items-end justify-center gap-1">
          <span className="h-5 w-1/5 rounded-t-md bg-violet-500" />
          <span className="h-7 w-1/5 rounded-t-md bg-slate-100" />
          <span className="h-5 w-1/5 rounded-t-md bg-emerald-400" />
        </span>
        <span className="h-1.5 w-4/5 bg-slate-100 [clip-path:polygon(0_0,100%_0,80%_100%,20%_100%)]" />
        <span className="h-3 w-1/2 bg-slate-100 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
      </span>
      <span className="text-xl font-bold tracking-tight md:text-2xl">
        {site.name}
      </span>
    </a>
  );
}
