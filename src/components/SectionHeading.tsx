type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand">
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">{description}</p>}
    </div>
  )
}
