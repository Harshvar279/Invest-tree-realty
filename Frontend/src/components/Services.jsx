import { motion } from 'framer-motion'
import { Building2, Home, TreePine, Castle, Building, Briefcase } from 'lucide-react'

const services = [
  { icon: Briefcase, title: 'Investment Consulting', desc: 'Portfolio-first counsel. Yield, growth, exit — mapped before site visits.' },
  { icon: Home, title: 'Residential', desc: "Apartments, builder floors and family homes across Gurugram's premium sectors." },
  { icon: Building2, title: 'Commercial', desc: 'Office spaces, retail and pre-leased assets with verified returns.' },
  { icon: TreePine, title: 'Plots & Lands', desc: 'DTCP-approved plots in high-appreciation corridors of new Gurugram.' },
  { icon: Castle, title: 'Villas', desc: 'Independent floors and gated villas — privacy with capital appreciation.' },
  { icon: Building, title: 'Builder Floors', desc: 'Independent floors from trusted developers across the city.' }
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-gradient-to-b from-obsidian to-navy/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="eyebrow mb-4">— WHAT WE DO</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Every kind of <span className="italic gold-gradient">address.</span>
            </h2>
          </div>
          <p className="max-w-md text-fog">From a first apartment to a commercial portfolio — we cover every property type across Gurugram and its peripheries.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-obsidian p-10 group cursor-pointer hover:bg-navy/40 transition-all duration-500"
            >
              <s.icon className="w-8 h-8 text-gold mb-8 group-hover:scale-110 transition-transform" strokeWidth={1} />
              <p className="eyebrow text-[0.6rem] mb-3">0{i+1}</p>
              <h3 className="font-display text-2xl mb-4">{s.title}</h3>
              <p className="text-fog text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
