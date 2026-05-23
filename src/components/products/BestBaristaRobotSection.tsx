'use client'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

const features = [
  'Serves up to 3 cups in a single serving',
  'The only talking coffee robot in the world',
  'Delivers perfect barista robot experience every time',
  'Easily becomes a full scale robotic cafe',
]

export default function BestBaristaRobotSection() {
  const locale = useLocale()

  return (
    <section className="bg-white py-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl max-w-4xl mx-auto leading-tight mb-6">
          You Have Found The Best Barista Robot That Is More Than A Coffee Robot
        </h2>

        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          And when we say best, we mean it! You have found the best barista robot. Indeed, It has
          more unique elements than any other automated café in the world! For example, Some of them
          are below and you can read our full article to find the rest of the{' '}
          <Link
            href={`/${locale}/blog/12-robotic-cafe-unique-characteristics`}
            className="text-blue-600 underline hover:text-blue-800"
          >
            12 Robotic Cafe Unique Characteristics
          </Link>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          {features.map((text) => (
            <div
              key={text}
              className="rounded-2xl py-8 px-6 text-center text-white font-semibold text-base leading-snug"
              style={{
                background: 'linear-gradient(135deg, #2d1f0e, #4a3020)',
                border: '1px solid #c9a84c',
                boxShadow: '0 4px 15px rgba(201, 168, 76, 0.2)',
              }}
            >
              {text}
            </div>
          ))}
        </div>

        <Link
          href={`/${locale}/contact`}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded-full px-12 py-4 text-sm border-2 border-red-400 transition shadow-lg"
        >
          TALK TO OUR SPECIALIST
        </Link>
      </motion.div>
    </section>
  )
}
