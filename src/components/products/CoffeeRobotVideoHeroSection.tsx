'use client'
import { motion } from 'framer-motion'

export default function CoffeeRobotVideoHeroSection() {
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
          src="https://res.cloudinary.com/drqisyk9h/video/upload/q_auto/f_auto/v1779636903/coffe-page-video-dead-final_2_l5213x.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.58)',
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
          className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-center leading-tight m-0"
          style={{
            color: '#ffffff',
            textShadow: '0 2px 16px rgba(0,0,0,0.5)',
          }}
        >
          Coffee Robot / Barista Robot / Robotic Coffee Kiosk
        </h1>

        {/* Subtitle */}
        <p
          className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-center m-0"
          style={{
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: '#ffffff', fontWeight: 400 }}>
            CafeXbot Coffee Robot will serve your favorite coffee{' '}
          </span>
          <span style={{ color: '#f5a623', fontWeight: 700 }}>
            brewed perfectly by a Barista Robot
          </span>
          <br />
          <span style={{ color: '#f5a623', fontWeight: 700 }}>
            in just 70-90 seconds.
          </span>
        </p>
      </motion.div>
    </section>
  )
}
