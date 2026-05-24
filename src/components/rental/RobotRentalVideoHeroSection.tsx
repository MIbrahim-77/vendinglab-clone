'use client'
import { motion } from 'framer-motion'

export default function RobotRentalVideoHeroSection() {
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
          backgroundColor: 'rgba(0, 0, 0, 0.62)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center mx-auto flex flex-col items-center px-6 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-6 lg:py-[120px]"
        style={{
          maxWidth: '900px',
          gap: '16px',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h1
          className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-extrabold text-center leading-tight m-0"
          style={{
            color: '#ffffff',
            textShadow: '0 2px 16px rgba(0,0,0,0.5)',
          }}
        >
          Robot Rental In Dubai, UAE
        </h1>

        {/* Subtitle */}
        <p
          className="text-[17px] sm:text-[19px] md:text-[20px] lg:text-[22px] text-center font-semibold m-0"
          style={{
            color: '#f5a623',
            letterSpacing: '0.02em',
          }}
        >
          Rent Caf&eacute;Xbot Robotic Caf&eacute; For Your Event
        </p>
      </motion.div>
    </section>
  )
}
