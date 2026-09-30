import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Reviews from '../components/Reviews'
import Notices from '../components/Notices'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'

export default function Landing({ section }: { section?: string }) {
  useEffect(() => {
    if (section) {
      const el = document.getElementById(section)
      if (el) {
        const timer = window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
        return () => window.clearTimeout(timer)
      }
    }
    window.scrollTo(0, 0)
  }, [section])

  return (
    <div className="min-h-screen bg-night">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Reviews />
        <Notices />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
