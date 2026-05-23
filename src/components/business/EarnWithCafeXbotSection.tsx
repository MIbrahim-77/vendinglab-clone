'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

export default function EarnWithCafeXbotSection() {
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden py-20 px-8 text-center" style={{ minHeight: '420px' }}>
      <Image
        src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357425/Xbot-Mocca-Bot_na1mu3.webp"
        alt="CafeXbot Background"
        fill
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 1 }}
      />

      <motion.div
        className="relative max-w-3xl mx-auto"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6">
          How Much Can You Earn With CafeXbot Investment Opportunities?
        </h2>

        <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          <span className="text-white">
            On average, locations provide 50-80% ROI per year while the good ones can go far beyond 80%. Additionally, we do not want to overpromise but have{' '}
          </span>
          <span className="text-yellow-500 font-semibold">
            live data from the kiosks that are currently in operation so that you can see how this investment idea materialised for other investors.
          </span>
        </p>

        <Link
          href={`/${locale}/contact`}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm rounded-full px-12 py-4 border-2 border-yellow-500 transition shadow-lg"
        >
          MESSAGE OUR TEAM TO SEE THE NUMBERS
        </Link>
      </motion.div>
    </section>
  )
}
