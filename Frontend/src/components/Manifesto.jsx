import { motion } from 'framer-motion'

export default function Manifesto() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 max-w-6xl mx-auto">
      <p className="eyebrow mb-12">— MANIFESTO</p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2 }}
        className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15]"
      >
        A tree is known by its fruit.<br/>
        <span className="italic text-fog">A firm — by the homes it builds futures around.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-12 max-w-2xl text-fog text-lg leading-relaxed"
      >
        We are not a brokerage. We are an advisory practice that happens to close deals. Every recommendation begins with your portfolio, not our pipeline. Every property is vetted before it reaches your inbox. And our fees? Negligible — because trust compounds, commission doesn't.
      </motion.p>
    </section>
  )
}
