'use client'
import { motion } from 'framer-motion'

const badges = [
  {
    label: 'Digital Screen',
    style: { top: '8%', right: '2%' },
  },
  {
    label: 'Your Brand Here',
    style: { bottom: '28%', left: '2%' },
  },
  {
    label: 'Sticker Panel',
    style: { bottom: '18%', right: '8%' },
  },
]

export default function RobotRentalBrandingSection() {
  return (
    <section
      style={{ backgroundColor: '#f0f0f0' }}
      className="py-20 px-8"
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
        }}
      >
        <motion.div
          style={{ flex: 1 }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              color: '#2d2d2d',
              fontWeight: 800,
              fontSize: '38px',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}
          >
            Branding Options For Robot Rental In Dubai
          </h2>
          <p
            style={{
              color: '#555555',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: 1.7,
              maxWidth: '420px',
            }}
          >
            Branding can be done on the top screens in photo or video format
            and both bottom panels of the kiosk.
          </p>
        </motion.div>

        <motion.div
          style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357425/Xbot-Mocca-Bot_na1mu3.webp"
            alt="CafeXbot Mocca Bot Branding"
            referrerPolicy="no-referrer"
            style={{
              width: '100%',
              maxWidth: '520px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
              style={{
                position: 'absolute',
                backgroundColor: '#f5a623',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                padding: '10px 20px',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                ...badge.style,
              }}
            >
              {badge.label}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
