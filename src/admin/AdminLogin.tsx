import { useState, type FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { adminLogin, DEMO_EMAIL, DEMO_PASSWORD, isAdminAuthenticated } from './auth'
import Logo from '../components/Logo'

type LocationState = { from?: { pathname?: string } }

export default function AdminLogin() {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (isAdminAuthenticated()) {
    return <Navigate to="/admin/dashboard" replace />
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    window.setTimeout(() => {
      if (email.trim() === DEMO_EMAIL && password === DEMO_PASSWORD) {
        adminLogin()
        const state = location.state as LocationState | null
        navigate(state?.from?.pathname || '/admin/dashboard', { replace: true })
      } else {
        setError('ইমেইল বা পাসওয়ার্ড ভুল। আবার চেষ্টা করুন।')
        setLoading(false)
      }
    }, 500)
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
      style={{
        background:
          'radial-gradient(760px 480px at 12% 10%, rgba(96,62,152,0.4), transparent 62%), radial-gradient(680px 460px at 90% 90%, rgba(43,84,148,0.28), transparent 65%), #0b0a12',
      }}
    >
      <span aria-hidden="true" className="absolute left-8 top-24 h-3 w-3 rounded-full bg-[#F5883D]" />
      <span aria-hidden="true" className="absolute bottom-24 right-10 h-4 w-4 rounded-full bg-[#F0566B]" />

      <div className="w-full max-w-md">
        <div className="mb-7 flex justify-center">
          <Logo />
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8">
          <h1 className="text-2xl font-bold">অ্যাডমিন লগইন</h1>
          <p className="mt-1.5 text-sm text-white/55">ড্যাশবোর্ডে ঢুকতে আপনার তথ্য দিন</p>

          <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
            <label className="flex flex-col gap-2 text-sm font-medium text-white/70">
              ইমেইল
              <input
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-brand/60"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-white/70">
              পাসওয়ার্ড
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-brand/60"
              />
            </label>

            {error && (
              <p role="alert" className="rounded-xl border border-hl-red/30 bg-hl-red/10 px-4 py-3 text-sm text-hl-red">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_34px_rgba(61,169,245,0.3)] transition-all duration-300 hover:bg-brand-strong disabled:cursor-wait disabled:opacity-70"
            >
              {loading ? 'যাচাই হচ্ছে...' : 'লগইন করুন'}
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-sun/25 bg-sun/10 px-4 py-3 text-xs leading-relaxed text-sun">
            <strong className="font-semibold">ডেমো লগইন:</strong> {DEMO_EMAIL} / {DEMO_PASSWORD}
            <br />
            <span className="text-white/50">পরে backend authentication যুক্ত হলে এটি বাদ যাবে।</span>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/45">
          <a href="/" className="transition-colors hover:text-brand">
            ← ওয়েবসাইটে ফিরে যান
          </a>
        </p>
      </div>
    </div>
  )
}
