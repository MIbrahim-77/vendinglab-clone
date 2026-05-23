'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

export default function IceCreamContactSection() {
  const locale = useLocale()

  return (
    <section className="bg-slate-200 py-8 md:py-12 lg:py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
        <motion.div
          className="flex-1 max-w-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 md:mb-6">
            Contact us and start earning in few months!
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm mx-auto mb-6 md:mb-8">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center overflow-hidden relative"
            style={{
              background: 'radial-gradient(circle, #c9a06a 0%, #b8864a 60%, #a07040 100%)',
            }}
          >
            <Image
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357178/Xbot-Robotic-Ice-Cream_jyfltx.webp"
              alt="CafeXbot Ice Cream Robot"
              width={380}
              height={420}
              className="object-contain w-full max-w-[200px] md:max-w-[320px] h-auto"
              style={{ marginTop: '-10px', width: '100%', height: 'auto' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
