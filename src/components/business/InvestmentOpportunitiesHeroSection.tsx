'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function InvestmentOpportunitiesHeroSection() {
  return (
    <section style={{ backgroundColor: '#dde0e8' }} className="py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        <motion.div
          className="flex-shrink-0 w-full max-w-md md:max-w-[420px] lg:max-w-[480px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357314/20230518_110508-scaled_y2bq0o.webp"
            alt="CafeXbot Investment Opportunities"
            width={480}
            height={400}
            className="w-full h-auto object-cover"
            style={{ borderRadius: '16px' }}
          />
        </motion.div>

        <motion.div
          className="flex-1 max-w-lg text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6">
            <div className="text-gray-900 font-black text-4xl md:text-5xl leading-tight">
              Investment opportunities
            </div>
            <div className="text-gray-900 font-black text-4xl md:text-5xl leading-tight">
              & <span className="text-yellow-500 font-black">ideas - CafeXbot</span>
            </div>
          </h2>

          <p className="text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            <span className="text-gray-700 font-semibold">
              Discover great investment opportunities &amp; ideas in robotic food tech. Moreover, this Robot Cafe brings{' '}
            </span>
            <span className="text-yellow-600 font-semibold">
              more than 100% ROI to investors in good locations globally.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
