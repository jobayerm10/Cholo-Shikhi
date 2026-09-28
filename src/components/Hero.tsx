import { motion } from 'framer-motion'
import { galleryItems, heroCategories } from '../data/site'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const columnOffsets = ['pt-12 sm:pt-16 lg:pt-20', '', 'pt-9 sm:pt-12 lg:pt-16']
const pillAspects = ['aspect-[9/22]', 'aspect-[9/25]', 'aspect-[9/22]', 'aspect-[9/22]', 'aspect-[9/25]', 'aspect-[9/22]']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(900px 520px at 6% 8%, rgba(96,62,152,0.38), transparent 62%), radial-gradient(760px 520px at -4% 92%, rgba(160,52,74,0.24), transparent 60%), radial-gradient(700px 460px at 96% 20%, rgba(43,84,148,0.22), transparent 65%), #0b0a12',
        }}
      />

      <span aria-hidden="true" className="absolute left-5 top-32 hidden h-3 w-3 rounded-full bg-[#F5883D] sm:block" />
      <span aria-hidden="true" className="absolute left-[52%] top-24 hidden h-3.5 w-3.5 rounded-full bg-[#F5A33D] lg:block" />
      <span aria-hidden="true" className="absolute left-[46%] top-[58%] hidden h-4 w-4 rounded-full bg-[#F0566B] lg:block" />
      <span aria-hidden="true" className="absolute right-8 top-[52%] hidden h-5 w-5 rounded-full bg-[#34D07A] lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-[1.02fr_1fr] lg:gap-10 lg:px-8 lg:pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.h1
            variants={item}
            className="text-[1.9rem] font-bold leading-[1.35] sm:text-4xl sm:leading-[1.3] lg:text-[3.3rem] lg:leading-[1.25]"
          >
            HSC <span className="text-hl-green">মানবিক বিভাগের জন্য</span>
            <br className="hidden sm:block" /> বাংলাদেশের{' '}
            <span className="text-hl-red">প্রথম এবং একমাত্র পূর্ণাঙ্গ</span> প্ল্যাটফর্ম
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            লাইভ ক্লাস, বিষয়ভিত্তিক নোট, সাপ্তাহিক মডেল টেস্ট ও পরীক্ষামুখী প্রস্তুতি — একই প্ল্যাটফর্মে, তোমার
            সুবিধামতো সময়ে।
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_34px_rgba(61,169,245,0.35)] transition-all duration-300 hover:bg-brand-strong hover:shadow-[0_16px_40px_rgba(61,169,245,0.45)]"
            >
              সকল কোর্স দেখুন
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-7 py-3.5 text-[15px] font-semibold text-white/90 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              যোগাযোগ করুন
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-14">
            <p className="text-lg font-bold sm:text-xl">ক্যাটাগরি নির্বাচন করুন :</p>
            <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
              {heroCategories.map((category) => (
                <a
                  key={category}
                  href="#courses"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-brand sm:text-base"
                >
                  {category}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4" aria-label="শিক্ষার্থীদের গ্যালারি">
          {[0, 1, 2].map((col) => (
            <div key={col} className={`flex flex-col gap-3 sm:gap-4 ${columnOffsets[col]}`}>
              {[0, 1].map((row) => {
                const index = col + row * 3
                const photo = galleryItems[index]
                return (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, y: 32, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 + index * 0.09, ease: 'easeOut' }}
                    whileHover={{ scale: 1.03 }}
                    className={`relative w-full overflow-hidden rounded-full shadow-[0_24px_60px_rgba(0,0,0,0.45)] ${pillAspects[index]}`}
                    style={{ backgroundColor: photo.bg }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={420}
                      height={1040}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700"
                    />
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
