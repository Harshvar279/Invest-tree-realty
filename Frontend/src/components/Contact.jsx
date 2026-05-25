import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      const res = await fetch(`${apiUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else { setStatus('error') }
    } catch (err) { setStatus('error') }
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-gradient-to-b from-obsidian to-navy">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <p className="eyebrow mb-4">— GET IN TOUCH</p>
          <h2 className="font-display text-4xl md:text-6xl mb-10 leading-tight">
            Begin with a<br/><span className="italic gold-gradient">conversation.</span>
          </h2>
          <div className="space-y-6 text-fog">
            <div>
              <p className="eyebrow text-[0.6rem] mb-2">OFFICE</p>
              <p className="text-pearl">Northern Peripheral Road,<br/>near DPS School, Sector 103,<br/>Gurugram, Haryana 122006</p>
            </div>
            <div>
              <p className="eyebrow text-[0.6rem] mb-2">CONTACT</p>
              <p className="text-pearl">investtree103@gmail.com</p>
              <p className="text-pearl">+91 89696 96100</p>
            </div>
            <div>
              <p className="eyebrow text-[0.6rem] mb-2">HOURS</p>
              <p className="text-pearl">Open every day · 9 AM – 7 PM</p>
            </div>
            <div>
              <p className="eyebrow text-[0.6rem] mb-2">RERA</p>
              <p className="text-pearl">HRERA-PKL-REA-3139-2024</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="https://wa.me/918969696100" target="_blank" rel="noreferrer" className="btn-gold !py-3 !px-5 text-[0.7rem]">WhatsApp</a>
              <a href="https://instagram.com/investtreerealty" target="_blank" rel="noreferrer" className="btn-gold !py-3 !px-5 text-[0.7rem]">Instagram</a>
              <a href="https://share.google/txwDQGrzE9ZFZXU6P" target="_blank" rel="noreferrer" className="btn-gold !py-3 !px-5 text-[0.7rem]">Directions</a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {['name','email','phone'].map(field => (
            <div key={field}>
              <label className="eyebrow text-[0.6rem]">{field.toUpperCase()}</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                required
                value={form[field]}
                onChange={e => setForm({...form, [field]: e.target.value})}
                className="w-full bg-transparent border-b border-gold/20 py-3 mt-1 focus:border-gold outline-none text-pearl"
              />
            </div>
          ))}
          <div>
            <label className="eyebrow text-[0.6rem]">MESSAGE</label>
            <textarea
              rows="4"
              required
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              className="w-full bg-transparent border-b border-gold/20 py-3 mt-1 focus:border-gold outline-none text-pearl resize-none"
            />
          </div>
          <button type="submit" disabled={status==='sending'} className="btn-gold w-full justify-center">
            {status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Message Sent' : 'Send Message →'}
          </button>
          {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Please WhatsApp us directly.</p>}
        </form>
      </div>
    </section>
  )
}
