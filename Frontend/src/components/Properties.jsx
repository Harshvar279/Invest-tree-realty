import { motion } from 'framer-motion'

const properties = [
  { name: 'DLF Privana South', loc: 'Sector 76, Gurugram', type: 'Luxury Residences', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80' },
  { name: 'M3M Golf Estate', loc: 'Sector 65, Gurugram', type: 'Premium Apartments', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80' },
  { name: 'Whiteland The Aspen', loc: 'Sector 76, Gurugram', type: 'Iconic Towers', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80' },
  { name: 'Hero Homes', loc: 'Sector 104, Gurugram', type: 'Family Residences', img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&q=80' },
  { name: 'BPTP Amstoria', loc: 'Sector 102, Gurugram', type: 'Villas & Floors', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80' },
  { name: 'Off-Market Plots', loc: 'New Gurugram', type: 'DTCP Approved', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80' }
]

export default function Properties() {
  return (
    <section id="properties" className="py-32 px-6 md:px-12 bg-gradient-to-b from-obsidian via-navy/20 to-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="eyebrow mb-4">— FEATURED PROPERTIES</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            The city, <span className="italic gold-gradient">curated.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-navy relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="eyebrow text-[0.6rem] mb-2">{p.type}</p>
                  <h3 className="font-display text-2xl mb-1">{p.name}</h3>
                  <p className="text-fog text-sm">{p.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-gold">Request Full Portfolio →</a>
        </div>
      </div>
    </section>
  )
}
