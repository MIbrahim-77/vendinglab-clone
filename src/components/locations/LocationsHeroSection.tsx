'use client'
import { motion } from 'framer-motion'

export default function LocationsHeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(280px, 50vw, 380px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url('https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358283/riverland-dubai-park-new-2_c19qzg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.50)',
          zIndex: 1,
        }}
      />

      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: 'clamp(40px, 10vw, 80px) 24px',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          style={{
            color: '#ffffff',
            fontWeight: 700,
            fontSize: 'clamp(28px, 6vw, 52px)',
            lineHeight: 1.2,
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}
        >
          CafeXbot Existing Locations
        </h1>
      </motion.div>
    </section>
  )
}
