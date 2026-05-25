export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gold/10 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="" className="h-12 w-12 rounded-full object-cover border border-gold/30" />
              <div>
                <p className="font-display text-2xl">Invest Tree Realty</p>
                <p className="eyebrow text-[0.6rem] mt-1">YOUR SATISFACTION, OUR EXPERTISE.</p>
              </div>
            </div>
            <p className="text-fog max-w-md leading-relaxed">Gurugram's quiet standard in luxury real estate. Rooted in trust. Reaching skyward.</p>
          </div>
          <div>
            <p className="eyebrow mb-5">SERVICES</p>
            <ul className="space-y-3 text-fog text-sm">
              <li>Investment Consulting</li>
              <li>Residential</li>
              <li>Commercial</li>
              <li>Plots & Lands</li>
              <li>Villas & Floors</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">CONNECT</p>
            <ul className="space-y-3 text-fog text-sm">
              <li><a href="https://wa.me/918969696100" className="hover:text-gold">WhatsApp</a></li>
              <li><a href="https://instagram.com/investtreerealty" className="hover:text-gold">Instagram</a></li>
              <li><a href="mailto:investtree103@gmail.com" className="hover:text-gold">Email</a></li>
              <li><a href="https://share.google/txwDQGrzE9ZFZXU6P" className="hover:text-gold">Visit Office</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-fog">
          <p>© 2024 Invest Tree Realty. Founded by Satish Kumar Kuleria.</p>
          <p>RERA: HRERA-PKL-REA-3139-2024</p>
          <p className="italic">Rooted in Gurugram. Reaching skyward. 🌳</p>
        </div>
      </div>
    </footer>
  )
}
