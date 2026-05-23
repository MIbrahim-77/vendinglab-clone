'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function RoboticCafeGlobalSection() {
  return (
    <section className="bg-black py-16 px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-bold text-3xl md:text-4xl mb-10 tracking-tight">
          Join Our Global Robotic Cafe Community
        </h2>

        <Image
          src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357167/world-map_unmeu3.webp"
          alt="Global Robotic Cafe Community World Map"
          width={1400}
          height={800}
          className="w-full h-auto mx-auto"
          style={{ maxWidth: '1100px' }}
        />
      </motion.div>
    </section>
  )
}
