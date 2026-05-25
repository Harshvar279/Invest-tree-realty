import { useEffect, useState } from 'react'
import { initSmoothScroll } from './lib/smoothScroll'

import Loader from './components/Loader'
import Navbar from './components/Navbar'

/* NEW */
import Hero from './components/Hero'
import Founder from './components/Founder'

/* EXISTING */
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import Builders from './components/Builders'
import Properties from './components/Properties'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initSmoothScroll()

    const t = setTimeout(() => setLoading(false), 2200)

    return () => clearTimeout(t)
  }, [])

  return (
    <div className="noise relative bg-obsidian text-pearl">
      
      {loading && <Loader />}

      {/* NEW 3D BACKGROUND */}
      <GlassCity />

      {/* EXISTING NAVBAR */}
      <Navbar />

      {/* NEW HERO */}
      <Hero />

      {/* NEW BUSINESS CARD */}
      <BusinessCard3D />

      {/* NEW FOUNDER SECTION */}
      <Founder />

      {/* KEEP ALL YOUR EXISTING SECTIONS */}
      <Manifesto />
      <Services />
      <Builders />
      <Properties />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  )
}
