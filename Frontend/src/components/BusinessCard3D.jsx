import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { toJpeg } from 'html-to-image'
import { Download, RotateCw, Phone, Mail, MapPin } from 'lucide-react'

export default function BusinessCard3D() {
  const [flipped, setFlipped] = useState(false)
  const cardRef = useRef(null)

  const handleDownload = async () => {
    if (!cardRef.current) return
    try {
      const dataUrl = await toJpeg(cardRef.current, { 
        quality: 0.98, 
        backgroundColor: '#000000',
        pixelRatio: 3
      })
      const link = document.createElement('a')
      link.download = 'satish-kumar-invest-tree.jpeg'
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Download failed:', err)
    }
  }

  return (
    <section className="relative py-32 px-6 md:px-12">
      {/* 3 COLUMN LAYOUT — download button hidden in right col */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 items-center">
        
        {/* LEFT COLUMN — Title */}
        <div className="col-span-12 md:col-span-4">
          <p className="text-gold text-xs tracking-[0.3em] mb-3">— THE FOUNDER</p>
          <h2 className="font-display text-4xl md:text-5xl text-pearl leading-tight">
            Meet the<br/><em className="text-gold">vision</em>.
          </h2>
          <p className="text-fog mt-4 text-sm">
            Hold. Drag. Flip. This is his card — yours to keep.
          </p>
        </div>

        {/* MIDDLE COLUMN — The 3D Card */}
        <div className="col-span-12 md:col-span-6 flex justify-center">
          <div className="perspective-[1500px] w-full max-w-md">
            <motion.div
              className="relative w-full aspect-[1.7/1] cursor-grab active:cursor-grabbing"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.15}
              whileHover={{ scale: 1.03 }}
              ref={cardRef}
            >
              {/* FRONT */}
              <div 
                className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-between shadow-2xl"
                style={{ 
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(135deg, #0A0F1C 0%, #000000 100%)',
                  border: '1px solid rgba(201, 169, 97, 0.3)',
                  boxShadow: '0 30px 60px rgba(201,169,97,0.15), inset 0 0 30px rgba(201,169,97,0.05)'
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-2xl text-pearl">Satish Kumar</h3>
                    <p className="text-gold text-[10px] tracking-[0.25em] mt-1">FOUNDER</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg">
                      <span className="text-gold">Invest</span> <span className="text-pearl">TREE</span>
                    </p>
                    <p className="text-fog text-[8px] tracking-widest">REALTY</p>
                  </div>
                </div>
                
                <div className="space-y-1.5 text-right">
                  <p className="text-pearl text-xs flex items-center justify-end gap-2">
                    <Phone size={10} className="text-gold"/> +91 8969696100
                  </p>
                  <p className="text-pearl text-xs flex items-center justify-end gap-2">
                    <Mail size={10} className="text-gold"/> investtree103@gmail.com
                  </p>
                  <p className="text-fog text-[10px] flex items-center justify-end gap-2 max-w-[260px] ml-auto">
                    <MapPin size={10} className="text-gold"/> Sec 103, opp Hero Homes, Dwarka Expressway, Gurugram
                  </p>
                </div>
              </div>

              {/* BACK */}
              <div 
                className="absolute inset-0 rounded-2xl p-7 flex items-center justify-center shadow-2xl"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: 'linear-gradient(135deg, #000000 0%, #0A0F1C 100%)',
                  border: '1px solid rgba(201, 169, 97, 0.3)'
                }}
              >
                <div className="text-center">
                  <img 
                    src="/logo.png" 
                    alt="Invest Tree" 
                    className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-gold mb-3"
                  />
                  <p className="font-display text-2xl">
                    <span className="text-gold">Invest</span> <span className="text-pearl">TREE</span>
                  </p>
                  <p className="text-fog text-[10px] tracking-[0.3em] mt-2">
                    YOUR SATISFACTION, OUR EXPERTISE
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN — Tiny hidden buttons */}
        <div className="col-span-12 md:col-span-2 flex md:flex-col gap-3 justify-center md:justify-start">
          <button
            onClick={() => setFlipped(!flipped)}
            className="group w-8 h-8 rounded-full border border-gold/30 hover:border-gold flex items-center justify-center transition-all hover:bg-gold/10"
            title="Flip card"
          >
            <RotateCw size={12} className="text-gold/60 group-hover:text-gold" />
          </button>
          <button
            onClick={handleDownload}
            className="group w-8 h-8 rounded-full border border-gold/30 hover:border-gold flex items-center justify-center transition-all hover:bg-gold/10"
            title="Download as JPEG"
          >
            <Download size={12} className="text-gold/60 group-hover:text-gold" />
          </button>
        </div>
      </div>
    </section>
  )
}
