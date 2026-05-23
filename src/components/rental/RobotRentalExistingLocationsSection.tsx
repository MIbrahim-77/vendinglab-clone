'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const locations = [
  {
    label: 'DUBAI FRAME',
    image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357250/Dubai-Frame_nd8qpj.webp',
    alt: 'Dubai Frame',
  },
  {
    label: 'RIVERLAND',
    image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357183/xbot-waterfronts_iby5k5.webp',
    alt: 'Riverland',
  },
  {
    label: 'EMIRATES TOWERS',
    image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357249/Crowded-Mall_cwcgnb.webp',
    alt: 'Emirates Towers',
  },
]

export default function RobotRentalExistingLocationsSection() {
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#f5f5f5' }} className="py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-gray-900 font-bold text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Existing Locations
        </motion.h2>

        <motion.p
          className="text-base font-semibold text-center mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gray-800">
            Locations are the Building Blocks for Your Passive Income Portfolio Let our established locations{' '}
          </span>
          <span style={{ color: '#f5a623' }}>
            be the foundation of your passive income Opportunity. Discover the potential within
          </span>
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          {locations.map((loc, index) => (
            <motion.div
              key={loc.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '300px' }}
            >
              <img
                src={loc.image}
                alt={loc.alt}
                referrerPolicy="no-referrer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '28px',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  textAlign: 'left',
                }}
              >
                {loc.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href={`/${locale}/locations`}
            style={{
              color: '#f5a623',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            MORE DETAILS ABOUT THE LOCATIONS
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
