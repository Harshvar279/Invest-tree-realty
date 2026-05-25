import { motion } from 'framer-motion'

export default function Founder() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Photo with circle logo overlay */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="/founder.jpg" 
              alt="Satish Kumar" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"/>
          </div>
          
          {/* Circle logo — auto-cropped using CSS */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full overflow-hidden border-2 border-gold bg-obsidian shadow-2xl">
            <img 
              src="/logo.png" 
              alt="Invest Tree Logo" 
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <p className="text-gold text-xs tracking-[0.3em] mb-4">— FOUNDER</p>
          <h2 className="font-display text-5xl text-pearl leading-tight mb-6">
            Satish<br/><em className="text-gold">Kumar</em>
          </h2>
          <p className="text-fog leading-relaxed mb-4">
            A decade of trust, built one handshake at a time. Satish founded Invest Tree on a simple promise — negligible brokerage, uncompromising service.
          </p>
          <p className="text-fog leading-relaxed">
            Today, his name opens doors at DLF, M3M, Whiteland, Hero Homes & BPTP.
          </p>
        </div>
      </div>
    </section>
  )
}
