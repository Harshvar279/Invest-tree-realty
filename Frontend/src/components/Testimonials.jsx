import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  { quote: "Satish ji ne humein perfect 3BHK dilwaya in M3M, bilkul minimal brokerage pe. Pure family ka trust jeet liya unhone.", name: 'Rohit & Anjali Sharma', loc: 'Sector 65' },
  { quote: "Best decision tha Invest Tree Realty se contact karna. Investment ka pura roadmap samjhaya, no pressure, no hidden charges. Highly recommended!", name: 'Vikram Singh Rathore', loc: 'Property Investor' },
  { quote: "Plot dhundhne mein 2 mahine se pareshaan tha. Satish sir ne ek hi week mein perfect location nikal di Sector 92 mein. Genuine advisor hai.", name: 'Amit Kumar Yadav', loc: 'Gurugram' },
  { quote: "Bahut log promise karte hain low brokerage ka, lekin Invest Tree ne sach mein deliver kiya. Commercial space ke liye mera go-to firm.", name: 'Priya Malhotra', loc: 'Business Owner' }
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="eyebrow mb-4">— CLIENT VOICES</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Trust, <span className="italic gold-gradient">in their words.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-gold/15 p-10 hover:border-gold/40 transition-all bg-navy/20"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
              <p className="font-heading text-xl italic leading-relaxed mb-8 text-pearl">"{r.quote}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gold/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-navy flex items-center justify-center font-display text-gold">{r.name[0]}</div>
                <div>
                  <p className="text-pearl text-sm">{r.name}</p>
                  <p className="eyebrow text-[0.6rem] mt-1">{r.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
