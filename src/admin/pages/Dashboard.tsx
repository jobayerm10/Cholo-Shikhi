import { Link } from 'react-router-dom'
import { messages, stats, students } from '../data'
import { ArrowRightIcon, BookIcon, MessageIcon, PlusIcon, UsersIcon } from '../icons'

const statCards = [
  { label: 'মোট শিক্ষার্থী', value: stats.students, icon: UsersIcon, color: '#3DA9F5' },
  { label: 'মোট কোর্স', value: stats.courses, icon: BookIcon, color: '#F5B33D' },
  { label: 'নতুন বার্তা', value: stats.messages, icon: MessageIcon, color: '#4ADE80' },
]

export default function Dashboard() {
  const recentMessages = messages.slice(0, 4)
  const recentStudents = students.slice(0, 4)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold">স্বাগতম, অ্যাডমিন</h2>
        <p className="mt-1 text-sm text-white/55">আজকের প্ল্যাটফর্মের সারসংক্ষেপ এখানে দেখা যাচ্ছে।</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16]"
          >
            <div className="flex items-start justify-between">
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl"
                style={{ backgroundColor: `${color}22`, color }}
              >
                <Icon className="h-6 w-6" />
              </span>
              <span className="rounded-full bg-hl-green/10 px-2.5 py-1 text-xs font-semibold text-hl-green">+12%</span>
            </div>
            <p className="mt-5 text-3xl font-bold">{value}</p>
            <p className="mt-1 text-sm text-white/55">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-3xl border border-white/[0.08] bg-white/[0.03] lg:col-span-2">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
            <h3 className="font-bold">সাম্প্রতিক বার্তা</h3>
            <Link
              to="/admin/messages"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-white"
            >
              সব দেখুন <ArrowRightIcon />
            </Link>
          </div>

          <ul className="divide-y divide-white/[0.06]">
            {recentMessages.map((msg) => (
              <li key={msg.id} className="flex items-start gap-4 px-6 py-4 transition-colors hover:bg-white/[0.02]">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: 'rgba(61,169,245,0.18)', color: '#3DA9F5' }}
                >
                  {msg.name.charAt(0)}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-semibold">{msg.name}</span>
                    {msg.unread && <span className="h-2 w-2 rounded-full bg-brand" aria-label="অপঠিত" />}
                    <span className="ml-auto text-xs text-white/40">{msg.time}</span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-white/75">{msg.subject}</p>
                  <p className="mt-0.5 truncate text-sm text-white/45">{msg.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-6">
          <section className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6">
            <h3 className="font-bold">দ্রুত অ্যাকশন</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/admin/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-strong"
              >
                <PlusIcon className="h-4 w-4" /> নতুন কোর্স যোগ করুন
              </Link>
              <Link
                to="/admin/students"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-brand/40 hover:text-white"
              >
                <UsersIcon className="h-4 w-4" /> শিক্ষার্থী তালিকা
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-white/[0.08] bg-white/[0.03]">
            <div className="border-b border-white/[0.07] px-6 py-4">
              <h3 className="font-bold">নতুন শিক্ষার্থী</h3>
            </div>
            <ul className="divide-y divide-white/[0.06]">
              {recentStudents.map((student) => (
                <li key={student.id} className="flex items-center gap-3 px-6 py-3.5">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: `${student.color}30`, color: student.color }}
                  >
                    {student.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{student.name}</p>
                    <p className="truncate text-xs text-white/45">{student.joined}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
