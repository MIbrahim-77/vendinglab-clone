'use client'
import { motion } from 'framer-motion'

const steps = [
  'You Invest Into A Selected Model Of CafeXbot',
  'We Get Good Locations To Place CafeXbot',
  'Our Team Buys The Necessary Consumables',
  'Our Operations Team Fills The CafeXbot Daily',
  'Our Accounting Team Updates Your P&L Daily',
  'You Get Mobile App For CafeXbots You Own To See The Income It Is Generating With Live Reporting',
  'Your Passive Income Profits Are Distributed To You Every Quarter Depending On The Model Selected.',
]

function StepItem({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex flex-row items-start gap-3 py-2">
      <div
        className="flex-shrink-0 flex items-center justify-center font-bold text-sm"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '2px solid #f5a623',
          color: '#f5a623',
        }}
      >
        {number}
      </div>
      <p className="text-white text-sm md:text-base leading-snug flex-1">
        {text}
      </p>
    </div>
  )
}

export default function AchieveEffortlessPassiveSection() {
  return (
    <section style={{ backgroundColor: '#e8e9ed' }} className="py-16 px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: '#3d3428',
          borderRadius: '20px',
          padding: '40px 48px',
        }}
      >
        <h2 className="font-bold text-xl md:text-2xl uppercase tracking-wide mb-8" style={{ color: '#f5a623' }}>
          ACHIEVE EFFORTLESS PASSIVE INCOME: INVEST &amp; REST WITH CAFEXBOT
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 48px' }}>
          {steps.map((step, index) => (
            <StepItem key={index} number={index + 1} text={step} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
