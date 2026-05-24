'use client'
import { motion } from 'framer-motion'

export default function VideoHeroSection() {
  return (
    <section
      className="relative flex items-center justify-center w-full overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[520px]"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source
          src="https://res.cloudinary.com/drqisyk9h/video/upload/q_auto/f_auto/v1779636892/My-Video_p9gnsg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center w-full mx-auto px-6 py-16 sm:px-10 sm:py-20 md:px-12 md:py-24 lg:px-12 lg:py-[120px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-center leading-tight"
          style={{
            color: '#ffffff',
            textShadow: '0 2px 16px rgba(0,0,0,0.5)',
          }}
        >
          Leading Robotics Manufacturer For F&amp;B Industry In UAE
        </h1>
      </motion.div>
    </section>
  )
}
