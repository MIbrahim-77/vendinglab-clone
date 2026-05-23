'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function RoboticCafeHowItWorksSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="bg-black py-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-bold text-4xl md:text-5xl mb-6">
          How CafeXbot Robotic cafe makes a cup of coffee
        </h2>

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          It just takes 40 Seconds for an xbot to produce and serve an Ice Cream cup
        </p>

        <div
          className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 0 30px 10px rgba(255, 255, 255, 0.6), 0 0 60px 20px rgba(255, 255, 255, 0.3), 0 0 100px 300px rgba(255, 255, 255, 0.15)',
          }}
        >
          <Image
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357424/xbot-Carnival-bot_wjm7bl.webp"
            alt="CafeXbot Robotic Cafe"
            width={1200}
            height={700}
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 hover:bg-white/30 transition flex items-center justify-center"
              aria-label="Play video"
            >
              <Play size={36} color="white" fill="white" className="ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
