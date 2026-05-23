'use client'
import { motion } from 'framer-motion'

export default function WhyDontUseOpportunitiesSection() {
  return (
    <section style={{ backgroundColor: '#f5f3f0' }} className="py-20 px-8">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="font-bold text-4xl md:text-5xl leading-tight text-center mb-8"
          style={{ color: '#f5a623' }}
        >
          Why We Don&apos;t Use These Investment Opportunities Ourselves?
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-6">
          VLT Robotics Manufacturing LLC is a private company in Dubai. From the day we saw the CafeXbot investment opportunities we realized that it would be difficult to quickly scale it around the world without good partnerships and investors as the cost of each cafe is high.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-center">
          <span className="text-gray-700">
            Having our machines alongside our partners and investors builds a conflict of interest that we will place our machines in the best locations and give the mediocre locations to our investors.{' '}
          </span>
          <span className="font-bold" style={{ color: '#f5a623' }}>
            As such, we have decided to practice a fair partnership and that all of the machines will belong to our investors giving everyone maximum revenue from all location investment opportunities.
          </span>
        </p>
      </motion.div>
    </section>
  )
}
