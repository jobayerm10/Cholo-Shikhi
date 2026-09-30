import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { adminLogout } from './auth'
import { unreadCount } from './data'
import {
  BellIcon,
  BookIcon,
  DashboardIcon,
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  MessageIcon,
  SearchIcon,
  UsersIcon,
  XIcon,
} from './icons'

const navItems = [
  { to: '/admin/dashboard', label: 'ড্যাশবোর্ড', icon: DashboardIcon },
  { to: '/admin/messages', label: 'বার্তা', icon: MessageIcon, badge: unreadCount },
  { to: '/admin/courses', label: 'কোর্স', icon: BookIcon },
  { to: '/admin/students', label: 'শিক্ষার্থী', icon: UsersIcon },
]

const pageTitles: Record<string, string> = {
  '/admin/dashboard': 'ড্যাশবোর্ড',
  '/admin/messages': 'বার্তা',
  '/admin/courses': 'কোর্স',
  '/admin/students': 'শিক্ষার্থী',
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    adminLogout()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2.5 border-b border-white/[0.07] px-6 py-5">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold">চ</span>
        <span>
          <span className="block text-lg font-bold leading-tight">চলো শিখি</span>
          <span className="block text-[11px] uppercase tracking-widest text-white/40">অ্যাডমিন প্যানেল</span>
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label="অ্যাডমিন মেনু">
        <ul className="flex flex-col gap-1.5">
          {navItems.map(({ to, label, icon: Icon, badge }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand/15 text-brand shadow-[inset_0_0_0_1px_rgba(61,169,245,0.25)]'
                      : 'text-white/60 hover:bg-white/[0.05] hover:text-white'
                  }`
                }
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="flex-1">{label}</span>
                {badge ? (
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-hl-red px-1.5 text-[11px] font-bold text-white">
                    {badge}
                  </span>
                ) : null}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/[0.07] px-3 py-4">
        <a
          href="/"
          className="mb-1.5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/60 transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
        >
          <HomeIcon className="h-5 w-5" />
          সাইটে ফিরে যান
        </a>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-hl-red transition-colors duration-200 hover:bg-hl-red/10"
        >
          <LogoutIcon className="h-5 w-5" />
          লগআউট
        </button>
      </div>
    </div>
  )
}

export default function AdminLayout() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-night">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/[0.07] bg-night-soft lg:block">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 z-50 w-64 border-r border-white/[0.07] bg-night-soft lg:hidden"
            >
              <button
                type="button"
                aria-label="মেনু বন্ধ করুন"
                onClick={() => setMobileOpen(false)}
                className="absolute right-3 top-4 grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70"
              >
                <XIcon className="h-4 w-4" />
              </button>
              <SidebarContent onNavigate={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-night/85 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              aria-label="মেনু খুলুন"
              onClick={() => setMobileOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 lg:hidden"
            >
              <MenuIcon />
            </button>

            <h1 className="text-lg font-bold sm:text-xl">{pageTitles[location.pathname] || 'অ্যাডমিন'}</h1>

            <div className="ml-auto flex items-center gap-2.5">
              <label className="relative hidden md:block">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  type="search"
                  placeholder="খুঁজুন..."
                  aria-label="সার্চ"
                  className="w-52 rounded-full border border-white/10 bg-white/[0.05] py-2.5 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-white/35 focus:border-brand/50"
                />
              </label>

              <button
                type="button"
                aria-label="নোটিফিকেশন"
                className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white/70 transition-colors hover:text-white"
              >
                <BellIcon className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-hl-red" />
              </button>

              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-[#A033FF] text-sm font-bold">
                অ
              </span>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
