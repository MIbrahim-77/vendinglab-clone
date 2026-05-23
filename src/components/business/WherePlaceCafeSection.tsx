'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const locations = [
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357421/Public-Park-1_ypwidi.webp',
    label: 'Public Parks',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357333/busy-airport-terminal-corridor-scaled-1_osnscr.webp',
    label: 'Airports',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357410/Crowded-Mall_msu2w3.webp',
    label: 'Malls',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357415/Hospital-Lobby-Crowded_shier3.webp',
    label: 'Hospitals',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357413/Government-Building-Crowded_jzmabj.webp',
    label: 'Government Buildings',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357330/Angkor-wat-toursit_ni4cr6.webp',
    label: 'Tourist Attractions',
  },
]

export default function WherePlaceCafeSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ backgroundColor: '#dde0e8' }} className="py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-shrink-0 max-w-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-yellow-500 font-bold text-3xl md:text-4xl leading-tight mb-6">
            Where Do We Place Your Cafe For The Best Business Opportunities?
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            Our team works tirelessly to identify the best locations with lucrative business prospects. We then collaborate closely with the management of these locations to create exceptional rental deals. Once finalized, we inform our investors, allowing them to select the locations they find most suitable and beneficial for their goals.
          </p>
        </motion.div>

        <div className="flex-1 max-w-lg">
          <div className="relative w-full">
            <div className="rounded-2xl overflow-hidden relative w-full" style={{ height: '320px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={locations[currentIndex].src}
                    alt={locations[currentIndex].label}
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-center text-gray-900 font-bold text-xl mt-4">
              {locations[currentIndex].label}
            </p>

            <div className="flex justify-center gap-2 mt-4">
              {locations.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-yellow-500' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
