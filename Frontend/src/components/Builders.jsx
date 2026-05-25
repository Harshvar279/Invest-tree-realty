const builders = ['WHITELAND', 'M3M', 'DLF', 'HERO HOMES', 'BPTP', 'WHITELAND', 'M3M', 'DLF', 'HERO HOMES', 'BPTP']

export default function Builders() {
  return (
    <section id="builders" className="py-24 border-y border-gold/10 overflow-hidden bg-obsidian">
      <p className="eyebrow text-center mb-10">— OFFICIAL CHANNEL PARTNERS</p>
      <div className="relative">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {[...builders, ...builders].map((b, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl text-fog/40 hover:text-gold transition-colors">
              {b} <span className="text-gold/30 mx-8">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
      `}</style>
    </section>
  )
}
