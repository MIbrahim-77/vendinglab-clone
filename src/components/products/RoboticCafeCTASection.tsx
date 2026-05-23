'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function RoboticCafeCTASection() {
  const locale = useLocale()

  return (
    <section className="bg-gray-100 py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#2d2d2d] font-bold text-3xl md:text-4xl lg:text-4xl leading-tight mb-6">
            Robotic Cafe Business That Makes &gt;100% ROI For It&apos;s Owners
          </h2>

          <p className="text-gray-600 text-base max-w-md mb-8 leading-relaxed">
            Join a transformative movement in cafe services. Discover the potential of owning your
            very own robotic cafe,{' '}
            <span className="text-orange-500 font-semibold">
              where innovation and automation turn into high ROIs
            </span>{' '}
            and unmatched profits that many businesses dream about.
          </p>

          <Link
            href={`/${locale}/robot-rental`}
            className="inline-block bg-red-600 text-white border-2 border-yellow-500 rounded-full px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition shadow-md"
          >
            REQUEST BROCHURE
          </Link>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center w-full max-w-sm lg:max-w-full"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357302/Xbot-Robotic-cafes_yayr8v.webp"
            alt="CafeXbot Robotic Cafe Models"
            className="w-full h-auto object-contain max-h-64 md:max-h-80 lg:max-h-96"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  )
}
