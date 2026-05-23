'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

export default function IceCreamRobotHeroSection() {
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#eeeceb' }} className="py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357178/Xbot-Robotic-Ice-Cream_jyfltx.webp"
            alt="CafeXbot Ice Cream Robot"
            width={420}
            height={420}
            className="object-contain w-full max-w-[280px] md:max-w-[420px] h-auto"
            style={{ width: '100%', height: 'auto', maxWidth: '420px' }}
          />
        </motion.div>

        <motion.div
          className="flex-1 max-w-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 font-bold text-4xl md:text-5xl leading-tight mb-6">
            Your Own Ice Cream Robot Cafe Business
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-center max-w-sm mx-auto mb-10">
            <span className="text-yellow-600 font-semibold">
              Step into the ice cream robot industry as an owner
            </span>
            <span className="text-gray-700">
              {' '}and delight customers with a range of frozen treats like never before. Join the
              revolution!
            </span>
          </p>

          <Link
            href={`/${locale}/contact`}
            className="block mx-auto bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm rounded-full px-12 py-4 border-2 border-yellow-500 transition shadow-lg w-fit"
          >
            REQUEST BROCHURE
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
