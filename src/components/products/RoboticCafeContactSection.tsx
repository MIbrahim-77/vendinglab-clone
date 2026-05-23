'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function RoboticCafeContactSection() {
  const locale = useLocale()

  return (
    <section className="bg-slate-200 py-20 px-8">
      <div className="max-w-6xl mx-auto flex items-center gap-16">
        <motion.div
          className="flex-1"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-800 font-bold text-4xl leading-tight mb-8 max-w-sm">
            Do You Have More Questions About Robotic Cafe? Lets Us Help You Get Them Answered
          </h2>
          <Link
            href={`/${locale}/robot-rental`}
            className="inline-block border-2 border-yellow-500 text-gray-800 font-bold uppercase tracking-widest rounded-full px-12 py-4 text-sm hover:bg-yellow-50 transition"
          >
            CONTACT US
          </Link>
        </motion.div>

        <motion.div
          className="flex-1 relative h-80"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357113/xbot-coffee-cups_ewr41p.webp"
            alt="CafeXbot Coffee Cups"
            className="absolute top-0 right-0 w-64 h-64 object-contain"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357108/coffee1-1_hgnqd5.webp"
            alt="CafeXbot Coffee"
            className="absolute top-8 right-32 w-48 h-48 object-contain"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357178/Xbot-Robotic-Ice-Cream_jyfltx.webp"
            alt="CafeXbot Ice Cream"
            className="absolute bottom-0 right-16 w-40 h-40 object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  )
}
