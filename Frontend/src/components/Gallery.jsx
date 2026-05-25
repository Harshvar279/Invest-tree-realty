export default function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80',
    'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=900&q=80',
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80'
  ]
  return (
    <section className="py-32 px-6 md:px-12 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow mb-4">— OUR OFFICE</p>
        <h2 className="font-display text-4xl md:text-6xl mb-16">
          Sector 103. <span className="italic gold-gradient">Open every day.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}>
              <img src={p} alt={`Office ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
