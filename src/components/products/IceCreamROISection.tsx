'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const profitRows = [
  { label: 'Ice Cream Powder 30gm', value: '$0.3' },
  { label: 'Water 100ml', value: '$0.02' },
  { label: 'Paper Cup', value: '$0.05' },
  { label: 'Spoon', value: '$0.02' },
  { label: 'Cost Of One Cup Of Ice Cream', value: '$0.39' },
  { label: 'Price of one cup in the park', value: '$5-6' },
  { label: 'Profit per cup', value: '$4.61-5.61' },
]

const dailyRows = [
  { label: 'DAILY PROFIT WITH 100 CUPS SOLD', value: '$461-561' },
  { label: 'DAILY PROFIT WITH 200 CUPS SOLD', value: '$922-1122' },
]

export default function IceCreamROISection() {
  const scrollToCalculator = () => {
    const el = document.getElementById('profit-calculator')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="bg-gray-100 pt-12 pb-0">
        <motion.div
          className="mx-8 md:mx-16 rounded-2xl py-10 px-8 text-center"
          style={{
            background: 'linear-gradient(135deg, #f5c518 0%, #e6a800 50%, #d4920a 100%)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-stone-800 font-black uppercase tracking-wide text-2xl md:text-3xl mb-2">
            QUICK RETURN ON INVESTMENT WITHIN 6 MONTHS TO 1 YEAR!
          </h3>
          <p className="text-stone-700 text-base mb-8">
            Use calculator below to estimate your returns.
          </p>
          <button
            type="button"
            onClick={scrollToCalculator}
            className="bg-white/80 hover:bg-white text-gray-900 font-bold text-base rounded-full px-10 py-3 border border-black/15 transition shadow inline-flex items-center gap-2"
          >
            Calculate Your Profit ⊕
          </button>
        </motion.div>
      </div>

      <section className="bg-gray-100 py-16 px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 font-bold text-4xl md:text-5xl text-center mb-12">
            Average Profitability of Ice Cream Robot Cup
          </h2>

          <div className="max-w-6xl mx-auto flex flex-row items-start justify-between gap-12">
            <div className="flex-1 max-w-xl">
              <p className="text-gray-800 font-semibold text-lg mb-6">
                Ice Cream kiosk cup{' '}
                <span className="text-yellow-600 font-semibold">profit calculation</span>
              </p>

              {profitRows.map((row) => (
                <div key={row.label} className="flex flex-row items-center mb-2">
                  <span className="text-gray-700 text-sm whitespace-nowrap">{row.label}</span>
                  <span className="flex-1 border-b-2 border-dotted border-gray-400 mx-3 mb-0.5" />
                  <span className="text-gray-800 text-sm font-medium whitespace-nowrap">
                    {row.value}
                  </span>
                </div>
              ))}

              <div className="mt-2 border-t border-gray-300 pt-3">
                {dailyRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-row items-center justify-between mt-1"
                  >
                    <span className="text-yellow-700 font-bold text-sm uppercase">
                      {row.label}
                    </span>
                    <span className="text-yellow-700 font-bold text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357169/xbot-choco-ice-cream-cup_nbnovl.webp"
                alt="CafeXbot Chocolate Ice Cream Cup"
                width={320}
                height={320}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
