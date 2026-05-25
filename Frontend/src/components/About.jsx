import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[3/4] bg-gradient-to-br from-navy to-obsidian border border-gold/20 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
              alt="Satish Kumar Kuleria"
              className="w-full h-full object-cover opacity-90 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <p className="eyebrow mb-2">FOUNDER</p>
              <p className="font-display text-2xl">Satish Kumar Kuleria</p>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="eyebrow mb-6">— THE FOUNDER</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            From a small beginning<br/>
            <span className="italic gold-gradient">to a city's trust.</span>
          </h2>
          <div className="space-y-5 text-fog leading-relaxed">
            <p>Satish Kumar Kuleria began his career at the <span className="text-pearl">Life Insurance Corporation of India</span> as a Senior Business Associate — a role that taught him the discipline of trust and the architecture of long-term wealth.</p>
            <p>Born on <span className="text-pearl">28 July 1980</span>, he built Invest Tree Realty in 2024 from a single belief: that real estate should be advised, not sold.</p>
            <p>Today he leads families, first-time investors, and seasoned buyers through Gurugram's most coveted addresses. His promise is simple — <span className="text-gold">negligible brokerage, counsel before commission</span>, and a relationship that outlasts the transaction.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gold/10">
            <div>
              <p className="font-display text-5xl gold-gradient">3+</p>
              <p className="eyebrow text-[0.6rem] mt-2">YEARS</p>
            </div>
            <div>
              <p className="font-display text-5xl gold-gradient">5+</p>
              <p className="eyebrow text-[0.6rem] mt-2">BUILDER PARTNERS</p>
            </div>
            <div>
              <p className="font-display text-5xl gold-gradient">200+</p>
              <p className="eyebrow text-[0.6rem] mt-2">FAMILIES SETTLED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
