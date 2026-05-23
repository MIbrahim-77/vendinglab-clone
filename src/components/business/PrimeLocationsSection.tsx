'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const cities = [
  {
    name: 'DUBAI',
    subtitle: '',
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358146/Dubai-1_m6amqi.webp',
    top: 0,
    left: 0,
  },
  {
    name: 'ABU\nDHABI',
    subtitle: '',
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358143/ADU-DHABI-2_vr127l.webp',
    top: 120,
    left: 220,
  },
  {
    name: 'KSA',
    subtitle: 'SELECTED CITIES',
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358148/KSA_ydm6bl.webp',
    top: 0,
    left: 500,
  },
  {
    name: 'SINGAPORE',
    subtitle: '',
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358142/ADU-DHABI-1_taoqkm.webp',
    top: 120,
    left: 720,
  },
]

const lines = [
  { x1: 65, y1: 65, x2: 285, y2: 185 },
  { x1: 285, y1: 185, x2: 565, y2: 65 },
  { x1: 565, y1: 65, x2: 785, y2: 185 },
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
          className="relative mx-auto"
          style={{ width: '100%', maxWidth: '900px', height: '340px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <svg
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            width="100%"
            height="100%"
            viewBox="0 0 900 340"
            preserveAspectRatio="none"
          >
            {lines.map((line, i) => (
              <line
                key={i}
                x1={line.x1} y1={line.y1}
                x2={line.x2} y2={line.y2}
                stroke="#f5a623"
                strokeWidth="1.5"
                opacity="0.7"
              />
            ))}
          </svg>

          {cities.map((city) => (
            <div
              key={city.name}
              style={{
                position: 'absolute',
                top: city.top,
                left: city.left,
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  border: '3px solid #f5a623',
                  overflow: 'hidden',
                  boxShadow: '0 0 20px rgba(245,166,35,0.4)',
                  position: 'relative',
                }}
              >
                <Image
                  fill
                  src={city.src}
                  alt={city.name}
                  className="object-cover object-center"
                />
              </div>
              <div style={{ width: '130px', textAlign: 'center', marginTop: '10px' }}>
                <p className="font-bold text-sm uppercase whitespace-pre-line" style={{ color: '#f5a623' }}>
                  {city.name}
                </p>
                {city.subtitle && (
                  <p className="text-white text-xs mt-0.5">{city.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
