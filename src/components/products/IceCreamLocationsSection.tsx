'use client';
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const locations = [
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357333/busy-airport-terminal-corridor-scaled-1_osnscr.webp', label: 'Theme Parks' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357421/Public-Park-1_ypwidi.webp', label: 'Public Parks' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357410/Crowded-Mall_msu2w3.webp', label: 'Shopping Malls' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357330/Angkor-wat-toursit_ni4cr6.webp', label: 'Tourist Attractions' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357415/Hospital-Lobby-Crowded_shier3.webp', label: 'Cinemas' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357413/Government-Building-Crowded_jzmabj.webp', label: 'Waterfronts' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357314/20230518_110508-scaled_y2bq0o.webp', label: 'Entertainment Venues' },
]

export default function IceCreamLocationsSection() {
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
       <section className="bg-slate-200 py-8 md:py-12 lg:py-16 px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#2d2d2d] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
            Prime Locations For Your Ice Cream Robot
          </h2>

          <p className="text-gray-600 text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed">
            CafeXbot is about practicality and entertainment, making it a great business in a
            location with lots of people. Moreover, your advantage is the ability to move your
            Ice Cream Robot overnight if you want to improve the location. Additionally, theme
            parks, shopping malls, cinemas, and entertainment venues are highly recommended,
            followed by the other locations listed below.
          </p>
        </motion.div>
      </section>

      <section className="bg-slate-200 py-6 md:py-8 lg:py-12 px-2 md:px-4">
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
