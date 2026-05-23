'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MaximizeReturnsSection() {
  return (
    <section style={{ backgroundColor: '#e8e9ed' }} className="py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358163/PXL_20231103_062713812.MP_-e1699101883171_dpqmei.webp"
            alt="CafeXbot Robotic Cafe in Mall"
            width={520}
            height={480}
            className="object-cover"
            style={{ borderRadius: '20px' }}
          />
        </motion.div>

        <motion.div
          className="flex-1 max-w-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-gray-800 font-bold text-3xl md:text-4xl leading-tight text-center mb-6">
            Maximize Your Returns With CafeXbot Passive Income Opportunities
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-center">
            <span className="text-gray-600">
              CafeXbot consistently attracts crowds with its innovation and exceptional taste. We strategically position it in attractions, airports, waterfronts, and prime mall locations{' '}
            </span>
            <span className="font-bold" style={{ color: '#f5a623' }}>
              to maximize Passive Income Opportunities, achieving ROIs surpassing 98% of businesses. Our best locations yield over 100% ROI within a calendar year.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
