'use client'
import { motion } from 'framer-motion'

const BIG_CUP_URL = 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357107/black-coffee-cup_cfqtcx.webp'
const SMALL_CUP_URL = 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357108/coffee1-1_hgnqd5.webp'

export default function CoffeeProfitSection() {
  const normalRows = [
    { label: 'Coffee Ground', value: '$0.35' },
    { label: 'Water 100ml', value: '$0.02' },
    { label: 'Milk 60ml', value: '$0.06' },
    { label: 'Paper Cup', value: '$0.05' },
    { label: 'Sugar', value: '$0.03' },
    { label: 'Cost Of One Cup Of Coffee', value: '$0.51' },
    { label: 'Price of one cup in the park', value: '$5-6' },
    { label: 'Profit per robotic barista coffee cup', value: '$4.49-5.49' },
  ]
  const highlightedRows = [
    { label: 'DAILY PROFIT WITH 100 CUPS SOLD', value: '$449-549' },
    { label: 'DAILY PROFIT WITH 200 CUPS SOLD', value: '$898-1098' },
  ]

  const beanPositions = [
    'top-8 right-8',
    'top-20 right-4',
    'bottom-12 right-20',
    'bottom-4 right-32',
  ]

  return (
    <section className="relative bg-slate-200 py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Profit Calculation Table */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[55%]"
        >
          <h3 className="font-semibold text-lg text-gray-700 mb-6 border-l-4 border-gray-500 pl-3">
            Robotic Coffee Cup Profit Calculation
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {normalRows.map((row, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className="flex justify-between items-center mb-2"
              >
                <span className="text-sm text-gray-700">{row.label}</span>
                <span className="flex-1 border-b-2 border-dashed border-gray-400 mx-3" />
                <span className="text-sm font-semibold text-gray-700">{row.value}</span>
              </motion.div>
            ))}

            {highlightedRows.map((row, i) => (
              <motion.div
                key={`hl-${i}`}
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className="flex justify-between items-center mb-2"
              >
                <span className="text-sm text-orange-600 font-bold uppercase">{row.label}</span>
                <span className="flex-1 border-b-2 border-dashed border-orange-400 mx-3" />
                <span className="text-sm font-bold text-orange-600 uppercase">{row.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Coffee cup image with scattered beans */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden sm:flex w-full sm:w-[45%] relative justify-center items-center"
        >
          <img
            src={BIG_CUP_URL}
            alt="Coffee cup"
            referrerPolicy="no-referrer"
            className="w-80 h-80 object-contain mx-auto"
          />
          {beanPositions.map((pos, i) => (
            <img
              key={i}
              src={SMALL_CUP_URL}
              alt=""
              referrerPolicy="no-referrer"
              className={`absolute w-8 h-8 opacity-70 ${pos}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
