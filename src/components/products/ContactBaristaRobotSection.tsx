'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

export default function ContactBaristaRobotSection() {
  const locale = useLocale()

  return (
    <section className="bg-slate-200 py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-8">
        <motion.div
          className="flex-1 max-w-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 font-bold text-4xl md:text-5xl leading-tight mb-6">
            Contact Us And Put This Barista Robot To Work For You!
          </h2>

          <p className="text-gray-600 text-base leading-relaxed max-w-sm mb-8">
            Existing ones are already making thousands daily for their owners. Check our Passive
            Income Opportunities if you want us to find a location and operate it for you.
          </p>

          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-transparent border-2 border-yellow-600 text-gray-900 font-bold uppercase tracking-widest text-sm rounded-full px-10 py-3 hover:bg-yellow-50 transition"
          >
            CONTACT US
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-80 h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center overflow-hidden relative"
            style={{
              background: 'radial-gradient(circle, #c9a06a 0%, #b8864a 60%, #a07040 100%)',
            }}
          >
            <Image
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357112/xbot-coffee-cup_m1zzik.webp"
              alt="CafeXbot Coffee Cup"
              width={380}
              height={420}
              className="object-contain"
              style={{ marginTop: '-20px' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
