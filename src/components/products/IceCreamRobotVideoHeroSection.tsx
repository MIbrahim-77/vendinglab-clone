'use client'
import { motion } from 'framer-motion'

export default function IceCreamRobotVideoHeroSection() {
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
          src="https://res.cloudinary.com/drqisyk9h/video/upload/q_auto/f_auto/v1779636912/202310101748_vihcdl.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center mx-auto flex flex-col items-center px-6 py-16 sm:px-8 sm:py-20 md:py-24 lg:py-[100px]"
        style={{
          maxWidth: '900px',
          gap: '20px',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357111/xbotcafe-final_mnkajf.webp"
          alt="CafeXbot Logo"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto object-contain block mb-2"
        />

        {/* Heading */}
        <h1
          className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-extrabold text-center leading-tight m-0"
          style={{
            color: '#ffffff',
            textShadow: '0 2px 16px rgba(0,0,0,0.5)',
          }}
        >
          Ice Cream Robot
        </h1>

        {/* Subtitle */}
        <p
          className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-center m-0"
          style={{
            lineHeight: 1.7,
            maxWidth: '750px',
          }}
        >
          <span style={{ color: '#ffffff', fontWeight: 400 }}>
            CafeXbot Ice Cream Robot can serve ice cream in just under 40 seconds.{' '}
          </span>
          <span style={{ color: '#f5a623', fontWeight: 600 }}>
            Experience the next level of automated dessert creation and serving.
          </span>
        </p>
      </motion.div>
    </section>
  )
}
