'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const cities = [
  {
    name: 'DUBAI',
    subtitle: '',
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358146/Dubai-1_m6amqi.webp',
  },
  {
    name: 'ABU\nDHABI',
    subtitle: '',
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358143/ADU-DHABI-2_vr127l.webp',
  },
  {
    name: 'KSA',
    subtitle: 'SELECTED CITIES',
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358148/KSA_ydm6bl.webp',
  },
  {
    name: 'SINGAPORE',
    subtitle: '',
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358142/ADU-DHABI-1_taoqkm.webp',
  },
]

export default function PrimeLocationsSection() {
  return (
    <section style={{ backgroundColor: '#0f0f0f' }} className="py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white font-bold text-3xl md:text-4xl text-center mb-4">
            Prime Locations For Investors Seeking Passive Income With CafeXbot
          </h2>

          <p className="text-base md:text-lg text-center leading-relaxed max-w-2xl mx-auto">
            <span className="text-white">
              Discover locations ripe for investment and passive income opportunities.{' '}
            </span>
            <span className="font-bold" style={{ color: '#f5a623' }}>
              Choose from diverse markets and let cafeXbot&apos;s streamlined model generate income for you.
            </span>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {cities.map((city, index) => (
            <div
              key={city.name}
              className="flex flex-col items-center"
            >
              <div
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden relative"
                style={{
                  border: '3px solid #f5a623',
                  boxShadow: '0 0 20px rgba(245,166,35,0.4)',
                }}
              >
                <Image
                  fill
                  src={city.src}
                  alt={city.name}
                  className="object-cover object-center"
                />
              </div>
              <div className="text-center mt-3">
                <p className="font-bold text-sm uppercase whitespace-pre-line" style={{ color: '#f5a623' }}>
                  {city.name}
                </p>
                {city.subtitle && (
                  <p className="text-white text-xs mt-1">{city.subtitle}</p>
                )}
              </div>
              {index < cities.length - 1 && (
                <div className="hidden md:block absolute" style={{ display: 'none' }}>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
