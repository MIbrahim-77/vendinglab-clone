'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const locations = [
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357333/busy-airport-terminal-corridor-scaled-1_osnscr.webp', label: 'Airports' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357421/Public-Park-1_ypwidi.webp', label: 'Public Parks' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357410/Crowded-Mall_msu2w3.webp', label: 'Malls' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357330/Angkor-wat-toursit_ni4cr6.webp', label: 'Tourist Attractions' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357415/Hospital-Lobby-Crowded_shier3.webp', label: 'Hospitals' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357413/Government-Building-Crowded_jzmabj.webp', label: 'Government Buildings' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357314/20230518_110508-scaled_y2bq0o.webp', label: 'Other Locations' },
]

export default function RoboticCafeLocationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      const el = scrollRef.current
      if (!el) return

      const maxScroll = el.scrollWidth - el.clientWidth

      if (el.scrollLeft >= maxScroll - 1) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: 300, behavior: 'smooth' })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <>
      <section className="bg-slate-200 py-16 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#2d2d2d] font-bold text-4xl mb-6">
            Most Profitable Locations For Your Robotic Cafe
          </h2>

          <p className="text-gray-600 text-base text-center max-w-3xl mx-auto leading-relaxed">
            CafeXbot Robot Cafe in full specification is really a versatile cafe that would make
            good revenues in many places, with Attractions, Parks, Airports, and Malls definitely
            topping the list. With low rental cost, thanks to its small size, and low staff
            requirements, CafeXbot can achieve ROI that most other businesses dream of.
          </p>
        </motion.div>
      </section>

      <section className="bg-slate-200 py-12 px-4">
        <div className="relative max-w-7xl mx-auto">
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-stone-700/80 hover:bg-stone-800 text-white flex items-center justify-center shadow-lg transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex flex-row gap-6 overflow-x-auto scroll-smooth px-16 py-4 [&::-webkit-scrollbar]:hidden"
          >
            {locations.map((loc) => (
              <div
                key={loc.label}
                className="relative w-72 h-56 rounded-2xl overflow-hidden flex-shrink-0"
              >
                <Image
                  src={loc.src}
                  alt={loc.label}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
                  {loc.label}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-stone-700/80 hover:bg-stone-800 text-white flex items-center justify-center shadow-lg transition"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </section>
    </>
  )
}
