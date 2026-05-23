'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CustomizeCafeXbotSection() {
  const locale = useLocale()

  return (
    <>
      <section className="py-16 px-8 text-center" style={{ background: '#0f0d0a' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white font-bold text-4xl md:text-5xl mb-12">
            Customize Your CafeXbot Barista Robot
          </h2>

          <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left max-w-md">
              <p className="text-yellow-500 font-bold text-lg leading-relaxed">
                Choose From Our Range Of CafeXbot Designs To Match Your Cafe&apos;s Style And Branding.
                <span className="text-white font-bold text-lg leading-relaxed">
                  {' '}Customize Your Robot With Franke A300 Or Franke A600 Coffee Machines.
                </span>
              </p>
            </div>

            <button
              type="button"
              className="w-10 h-10 rounded-full bg-stone-600 flex items-center justify-center text-white shrink-0"
              aria-label="Previous design"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex flex-col items-center">
              <Image
                src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357114/Xbot-Mocca-Bot_xoxomk.webp"
                alt="Mocca Bot"
                width={280}
                height={320}
                className="object-contain"
              />
              <span className="text-yellow-500 font-bold text-base uppercase tracking-widest mt-4 mb-3">
                MOCCA BOT
              </span>
              <button
                type="button"
                className="bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest text-sm rounded-full px-8 py-2 hover:bg-white/10 transition"
              >
                RESERVE
              </button>
            </div>

            <button
              type="button"
              className="w-10 h-10 rounded-full bg-stone-600 flex items-center justify-center text-white shrink-0"
              aria-label="Next design"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </section>

      <div className="bg-slate-200 px-8 pt-0 pb-16">
        <motion.div
          className="max-w-5xl mx-auto rounded-2xl py-12 px-8 text-center"
          style={{
            background: '#3d2c1e',
            border: '2px solid #c9a84c',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white font-bold text-3xl md:text-4xl max-w-2xl mx-auto leading-tight mb-8">
            Request Our Brochure With Specifications And Details Of Our Coffee Robot
          </h3>

          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm rounded-full px-12 py-4 border-2 border-red-400 transition shadow-lg"
          >
            REQUEST BROCHURE
          </Link>
        </motion.div>
      </div>
    </>
  )
}
