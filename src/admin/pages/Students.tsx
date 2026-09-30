import { stats, students } from '../data'
import { SearchIcon } from '../icons'

export default function Students() {
  const active = students.filter((s) => s.status === 'active').length

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">শিক্ষার্থী</h2>
          <p className="mt-1 text-sm text-white/55">
            মোট {stats.students} জন · সক্রিয় {active} জন দেখানো হচ্ছে
          </p>
        </div>

        <label className="relative">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            type="search"
            placeholder="নাম বা ইমেইল দিয়ে খুঁজুন"
            aria-label="শিক্ষার্থী সার্চ"
            className="w-full rounded-full border border-white/10 bg-white/[0.05] py-2.5 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-white/35 focus:border-brand/50 sm:w-72"
          />
        </label>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.07] text-xs uppercase tracking-wider text-white/40">
                <th className="px-6 py-4 font-semibold">শিক্ষার্থী</th>
                <th className="px-4 py-4 font-semibold">কোর্স</th>
                <th className="px-4 py-4 font-semibold">যোগদান</th>
                <th className="px-4 py-4 font-semibold">স্ট্যাটাস</th>
                <th className="px-6 py-4 text-right font-semibold">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {students.map((student) => (
                <tr key={student.id} className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold"
                        style={{ backgroundColor: `${student.color}30`, color: student.color }}
                      >
                        {student.name.charAt(0)}
                      </span>
                      <span>
                        <span className="block font-semibold">{student.name}</span>
                        <span className="block text-xs text-white/45">{student.email}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-white/70">{student.course}</td>
                  <td className="px-4 py-4 text-white/50">{student.joined}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        student.status === 'active' ? 'bg-hl-green/12 text-hl-green' : 'bg-sun/12 text-sun'
                      }`}
                    >
                      {student.status === 'active' ? 'সক্রিয়' : 'পেন্ডিং'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs font-semibold text-white/70 transition-colors hover:border-brand/40 hover:text-white"
                      >
                        বিস্তারিত
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] px-6 py-4 text-sm text-white/50">
          <span>
            1–{students.length} / {stats.students} দেখানো হচ্ছে
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled
              className="rounded-full border border-white/10 px-4 py-1.5 text-white/40 disabled:opacity-50"
            >
              আগের
            </button>
            <button
              type="button"
              className="rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 font-semibold text-brand"
            >
              পরের
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
