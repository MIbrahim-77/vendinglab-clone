'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PassiveIncomeHeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center text-center py-20 px-8"
      style={{ minHeight: '380px' }}
    >
      <Image
        src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357314/20230518_110508-scaled_y2bq0o.webp"
        alt="Passive Income Background"
        fill
        className="object-cover object-center"
        style={{ zIndex: 0 }}
        priority
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.62)', zIndex: 1 }}
      />

      <motion.div
        className="relative max-w-3xl mx-auto"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-center mb-6">
          <span className="text-white">Passive Income Opportunities </span>
          <span className="font-bold" style={{ color: '#f5a623' }}>with Robotic cafe</span>
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto">
          <span className="text-white">
            Generate passive income opportunities by purchasing cafeXbot and letting{' '}
          </span>
          <span className="font-bold" style={{ color: '#f5a623' }}>
            our team run it for you in selected locations worldwide.
          </span>
        </p>
      </motion.div>
    </section>
  )
}
