'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const points = [
  'You love ice cream',
  'You value your time',
  'You love passive income',
  'You appreciate easy scalability',
  'You want to diversify your business portfolio',
  'You are a pioneer spirit that likes Robots and new technologies...',
]

export default function IceCreamBusinessForYouSection() {
  return (
    <section style={{ backgroundColor: '#dde0e8' }} className="py-16 px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl text-center mb-12">
          Robotic Ice Cream Kiosk Business Is For You If
        </h2>

        <div className="max-w-6xl mx-auto flex flex-row items-center justify-center gap-12">
          <div className="flex items-end justify-center flex-1">
            <Image
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357164/Business-Girl_rqlc46.webp"
              alt="Business Woman with Laptop"
              width={380}
              height={480}
              className="object-contain object-bottom"
            />
          </div>

          <div className="flex-1 max-w-lg flex flex-col gap-5">
            {points.map((text) => (
              <div key={text} className="flex flex-row items-start gap-4">
                <div
                  className="w-5 h-5 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: '#7b2d8b' }}
                />
                <span className="text-gray-800 font-semibold text-base md:text-lg leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
