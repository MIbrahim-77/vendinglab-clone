'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function CoffeeRevenueBoostSection() {
  const locale = useLocale()

  return (
    <>
      {/* ── Part 1: Dark Brown CTA Box ── */}
      <div className="bg-slate-200 py-8 px-8 relative">
        <motion.div
          className="max-w-5xl mx-auto bg-stone-800 border-2 border-yellow-600 rounded-2xl py-12 px-16 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 text-8xl opacity-20 select-none">
            👜
          </span>

          <h2 className="text-white font-bold uppercase text-2xl tracking-wide mb-6">
            Easy Way to Increase Your Coffee Robot Revenue by 50 - 75%
          </h2>

          <p className="text-white text-base text-center leading-relaxed max-w-4xl mx-auto mb-10">
            CafeXbot is the world&apos;s only multiproduct talking robotic cafe. Therefore, we highly
            recommend you capitalize on that. Our Robotic Cafe can serve cakes, tea, hot chocolate,
            ice cream with toppings, and more. With our advanced technology, including the Barista
            Robot, Furthermore, an unparalleled experience for your customers is guaranteed through
            our advanced technology. Our clients&apos; experience shows that the more variety of
            products you sell, the higher the profit from your robotic cafe!
          </p>

          <Link
            href={`/${locale}/products/xbot-robotic-cafe`}
            className="inline-block bg-transparent border-2 border-yellow-500 text-white font-semibold rounded-full px-12 py-4 text-base hover:bg-yellow-900/20 transition"
          >
            See Full Spec CafeXbot Robotic Cafe
          </Link>
        </motion.div>
      </div>

      {/* ── Part 2: Prime Locations Section ── */}
      <section className="bg-slate-200 py-16 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#2d2d2d] font-bold text-4xl mb-6">
            Prime Locations For Your Barista Robot
          </h2>

          <p className="text-gray-600 text-base text-center max-w-2xl mx-auto leading-relaxed">
            CafeXbot is about practicality and entertainment, making it a great business in a
            location with lots of people. Moreover, your advantage is the ability to move your Coffee
            Robot overnight if you want to improve the location. Additionally, attractions,
            waterfronts, public parks, and airports are highly recommended, followed by the other
            locations listed below.
          </p>
        </motion.div>
      </section>
    </>
  )
}
