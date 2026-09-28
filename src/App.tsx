import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Reviews from './components/Reviews'
import Notices from './components/Notices'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
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
      </div>
    </MotionConfig>
  )
}
