'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LOCATIONS = [
  { name: 'Hospital Lobby', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357290/Hospital-Lobby-Crowded_pmdx1p.webp' },
  { name: 'Public Park', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357296/Public-Park-1_sc3sva.webp' },
  { name: 'Government Building', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357289/Government-Building-Crowded_ucymuw.webp' },
  { name: 'Dubai Parks (Coming Soon)', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357251/Dubai-Parks-f-1_bg5bgb.webp' },
  { name: 'Crowded Mall', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357249/Crowded-Mall_cwcgnb.webp' },
  { name: 'Dubai Frame (Coming Soon)', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357250/Dubai-Frame_nd8qpj.webp' },
  { name: 'Dubai Riverland (Coming Soon)', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357243/busy-airport-terminal-corridor-scaled-1_ke1agq.webp' },
]

export default function RoboticCafeLocationsSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % LOCATIONS.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(p => (p - 1 + LOCATIONS.length) % LOCATIONS.length)
  const next = () => setCurrent(p => (p + 1) % LOCATIONS.length)

  return (
    <section className="bg-slate-200 py-16 px-8">
      <h2 className="text-gray-800 font-bold text-4xl text-center mb-10">
        Existing CafeXbot Robotic Cafe Locations
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOCATIONS[current].image}
                alt={LOCATIONS[current].name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="bg-black/40 text-white font-bold text-xl px-6 py-2 rounded-lg">
                  {LOCATIONS[current].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition"
        >
          <span className="text-gray-800 font-bold text-xl">‹</span>
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition"
        >
          <span className="text-gray-800 font-bold text-xl">›</span>
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {LOCATIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${i === current ? 'bg-orange-500' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
