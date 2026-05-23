'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IceCreamGlobalCommunitySection() {
  return (
    <section className="bg-black py-8 md:py-12 lg:py-16 px-4 md:px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 lg:mb-10 tracking-tight">
          Join Our Global Ice Cream Robotic Cafe Community
        </h2>

        <Image
          src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357167/world-map_unmeu3.webp"
          alt="Global Ice Cream Robotic Cafe Community World Map"
          width={1400}
          height={800}
          className="w-full h-auto mx-auto"
          style={{ maxWidth: '1100px' }}
        />
      </motion.div>
    </section>
  )
}
