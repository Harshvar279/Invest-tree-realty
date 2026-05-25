import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const taglineWords = ['Your Satisfaction.', 'Our Expertise.']

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglineWords.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-12 gap-8 items-center">
        
        {/* LEFT — Invest Tree Realty */}
        <motion.div 
          className="col-span-12 md:col-span-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-gold text-xs tracking-[0.4em] mb-6">— EST. GURUGRAM</p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-pearl">
            <span className="text-gold italic">Invest</span><br/>
            Tree<br/>
            <span className="text-fog font-light text-4xl md:text-5xl">Realty</span>
          </h1>
        </motion.div>

        {/* CENTER — Vertical divider line */}
        <div className="hidden md:block col-span-1 h-[60vh] mx-auto">
          <motion.div 
            className="w-px h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>

        {/* RIGHT — Rolling tagline */}
        <motion.div 
          className="col-span-12 md:col-span-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="h-32 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="font-display text-5xl md:text-6xl text-pearl absolute"
              >
                {taglineWords[index]}
              </motion.h2>
            </AnimatePresence>
          </div>
          <p className="text-fog mt-8 max-w-md text-sm leading-relaxed">
            Gurugram's quiet standard in luxury real estate. Partnered with DLF, M3M, Whiteland, Hero Homes & BPTP.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="px-8 py-3 bg-gold text-obsidian text-xs tracking-[0.2em] hover:bg-pearl transition-all">
              EXPLORE PROPERTIES
            </button>
            <button className="px-8 py-3 border border-pearl/20 text-pearl text-xs tracking-[0.2em] hover:border-gold hover:text-gold transition-all">
              MEET FOUNDER
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
