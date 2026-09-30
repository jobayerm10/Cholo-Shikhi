import { courses } from '../data'
import { PencilIcon, PlusIcon, TrashIcon } from '../icons'

export default function Courses() {
  const published = courses.filter((c) => c.status === 'published').length

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">কোর্স</h2>
          <p className="mt-1 text-sm text-white/55">
            মোট {courses.length}টি কোর্স · প্রকাশিত {published}টি · খসড়া {courses.length - published}টি
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(61,169,245,0.28)] transition-all duration-300 hover:bg-brand-strong"
        >
          <PlusIcon className="h-4 w-4" /> নতুন কোর্স
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.07] text-xs uppercase tracking-wider text-white/40">
                <th className="px-6 py-4 font-semibold">কোর্স</th>
                <th className="px-4 py-4 font-semibold">প্রাইস</th>
                <th className="px-4 py-4 font-semibold">শিক্ষার্থী</th>
                <th className="px-4 py-4 font-semibold">স্ট্যাটাস</th>
                <th className="px-4 py-4 font-semibold">আপডেট</th>
                <th className="px-6 py-4 text-right font-semibold">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {courses.map((course) => (
                <tr key={course.id} className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-bold"
                        style={{ backgroundColor: `${course.color}28`, color: course.color }}
                      >
                        {course.title.charAt(0)}
                      </span>
                      <span className="font-semibold">{course.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-brand">{course.price}</td>
                  <td className="px-4 py-4 text-white/70">{course.students}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        course.status === 'published' ? 'bg-hl-green/12 text-hl-green' : 'bg-sun/12 text-sun'
                      }`}
                    >
                      {course.status === 'published' ? 'প্রকাশিত' : 'খসড়া'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-white/50">{course.updated}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        aria-label="সম্পাদনা"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-white/60 transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        <PencilIcon />
                      </button>
                      <button
                        type="button"
                        aria-label="ডিলিট"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-white/60 transition-colors hover:border-hl-red/40 hover:text-hl-red"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
