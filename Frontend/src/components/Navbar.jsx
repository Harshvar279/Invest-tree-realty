import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-obsidian/80 backdrop-blur-md py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo.png" alt="Invest Tree Realty" className="h-10 w-10 rounded-full object-cover border border-gold/30" />
          <div>
            <p className="font-display text-lg leading-none">Invest Tree</p>
            <p className="eyebrow text-[0.55rem] mt-1">REALTY · GURUGRAM</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services','Builders','About','Properties','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-fog hover:text-gold transition-colors">
              {item}
            </a>
          ))}
        </div>
        <a href="https://wa.me/918969696100" target="_blank" rel="noreferrer" className="btn-gold !py-3 !px-6 text-[0.7rem]">
          WhatsApp
        </a>
      </div>
    </nav>
  )
}
