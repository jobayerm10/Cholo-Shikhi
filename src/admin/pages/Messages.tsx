import { useState } from 'react'
import { messages, unreadCount } from '../data'
import { MessageIcon } from '../icons'

type Filter = 'all' | 'unread'

export default function Messages() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'unread' ? messages.filter((m) => m.unread) : messages

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">বার্তা</h2>
          <p className="mt-1 text-sm text-white/55">
            মোট {messages.length}টি বার্তা · অপঠিত {unreadCount}টি
          </p>
        </div>

        <div className="flex gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
          {(
            [
              { key: 'all', label: 'সব বার্তা' },
              { key: 'unread', label: `অপঠিত (${unreadCount})` },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                filter === tab.key ? 'bg-brand text-white' : 'text-white/55 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-white/[0.12] py-16 text-center">
          <MessageIcon className="h-8 w-8 text-white/30" />
          <p className="text-white/50">কোনো অপঠিত বার্তা নেই</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-4">
          {visible.map((msg) => (
            <li
              key={msg.id}
              className={`rounded-3xl border bg-white/[0.03] p-5 transition-all duration-300 hover:border-brand/30 sm:p-6 ${
                msg.unread ? 'border-brand/25' : 'border-white/[0.08]'
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: 'rgba(61,169,245,0.18)', color: '#3DA9F5' }}
                >
                  {msg.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{msg.name}</p>
                  <p className="truncate text-xs text-white/45">{msg.email}</p>
                </div>

                <div className="ml-auto flex items-center gap-3">
                  {msg.unread && (
                    <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">অপঠিত</span>
                  )}
                  <span className="text-xs text-white/40">{msg.time}</span>
                </div>
              </div>

              <p className="mt-4 font-medium text-white/85">{msg.subject}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">{msg.message}</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={`mailto:${msg.email}`}
                  className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-strong"
                >
                  উত্তর দিন
                </a>
                <button
                  type="button"
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-white/70 transition-colors duration-300 hover:border-brand/40 hover:text-white"
                >
                  পড়া হয়েছে
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
