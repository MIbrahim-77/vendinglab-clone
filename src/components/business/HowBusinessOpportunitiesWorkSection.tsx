'use client'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  'Manufacturing Agreement',
  'Building the Cafe',
  'Location Search',
  'CafeXbot Ready for Your Investment Opportunities',
  'Location Selection',
  'Placement at Location',
  'App Access',
  'Monthly P&L',
  'Quarterly profit sharing',
]

export default function HowBusinessOpportunitiesWorkSection() {
  return (
    <section style={{ backgroundColor: '#eeeceb' }} className="py-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl text-center mb-12">
          How Our Business Opportunities Work?
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 max-w-lg flex flex-col w-full order-2 lg:order-1">
            {steps.map((step, i) => (
              <div
                key={step}
                className={`flex flex-row items-center gap-3 py-4 cursor-pointer group ${
                  i < steps.length - 1 ? '' : ''
                }`}
                style={{ borderBottom: i < steps.length - 1 ? '1px solid #d0cdc8' : 'none' }}
              >
                <ChevronRight size={16} className="text-yellow-600 flex-shrink-0" />
                <span className="text-yellow-600 font-bold text-base group-hover:underline transition">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 flex items-center justify-center w-full max-w-sm lg:max-w-full order-1 lg:order-2">
            <Image
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357416/Latte-bot-1024x739_fn0qco.webp"
              alt="CafeXbot Robotic Cafe"
              width={480}
              height={380}
              className="object-contain w-full max-w-[320px] lg:max-w-[480px] h-auto"
              style={{ width: '100%', height: 'auto', maxWidth: '480px' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
