'use client'
import { motion } from 'framer-motion'

export default function RobotRentalHeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url('https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357290/Hospital-Lobby-Crowded_pmdx1p.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.52)',
          zIndex: 1,
        }}
      />

      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '100px 24px',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          style={{
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '52px',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          Robot Rental In Dubai, UAE
        </h1>

        <p
          style={{
            color: '#f5a623',
            fontWeight: 600,
            fontSize: '22px',
            letterSpacing: '0.03em',
          }}
        >
          Rent CaféXbot Robotic Café For Your Event
        </p>
      </motion.div>
    </section>
  )
}
