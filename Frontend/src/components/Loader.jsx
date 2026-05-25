import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-obsidian"
    >
      <div className="text-center">
        <p className="eyebrow mb-6">INVEST TREE REALTY</p>
        <h1 className="font-display text-5xl md:text-7xl italic gold-gradient">
          Where Skylines<br/>Take Root.
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="h-px bg-gold mt-10 mx-auto max-w-xs"
        />
      </div>
    </motion.div>
  )
}
