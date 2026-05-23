'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    number: '01',
    title: 'Connect with Sales Team',
    description:
      'Connect with our sales team, select your model of CafeXbot, and commence the purchasing procedure by signing the Manufacturing Agreement.',
    numberBg: '#c0392b',
  },
  {
    number: '02',
    title: 'Sign Operation Agreement',
    description:
      'While your CafeXbot is being built by VLT Robotic Manufacturing LLC (Dubai), sign the Operation Agreement with our fully owned subsidiary - Robo Vending Services LLC (Dubai) - to operate your CafeXbot at prospective locations in Dubai or Singapore. Alternatively, some of our existing distributors might be interested in operating your cafe in their countries and may offer you deals. Our sales team will inform you which countries are open for such opportunities.',
    numberBg: '#f5a623',
  },
  {
    number: '3',
    title: 'Find a Location',
    description:
      'The Robo Vending Services LLC team finds prospective locations and offers to place your kiosk there. These might be placements in attractions, airports, or malls that will become available at that point in time. Our team will also advise you on the potential revenues at each location from our experience, as ROI might vary from 30 to 150% per annum.',
    numberBg: '#f5a623',
  },
  {
    number: '4',
    title: 'Kiosk Setup and Operation',
    description:
      'Once a location is selected, Robo Vending Services LLC takes care of all the necessary things to operate the kiosk at the location, including setup, staffing, team training, kiosk refills, and maintenance. As the owner, you will receive an application with a live stream of the kiosk sales performance.',
    numberBg: '#f5a623',
  },
  {
    number: '5',
    title: 'Track Revenue and Profits',
    description:
      'Monthly sales performance figures are compiled into a P&L report submitted to you (the owner) by the 5th of the new month. The P&L file includes all revenues and expenses incurred during the month. A 20% revenue share is taken by Robo Vending Services LLC, and the remaining profit is ready for distribution. Such profits accumulate and are distributed at the end of every calendar quarter.',
    numberBg: '#f5a623',
  },
  {
    number: '6',
    title: 'Flexible Ownership Options',
    description:
      'The contract continues for the comfort of both parties. However, if one day you (the owner) wish to start your own operations in your country, you can give a 2-month notice, finish the ongoing location contract, and take your CafeXbot kiosk to operate it yourself to further increase your ROI potential.',
    numberBg: '#f5a623',
  },
]

function StepCard({ card, index }: { card: typeof cards[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ position: 'relative', paddingTop: '40px' }}
    >
      <div
        style={{
          backgroundColor: '#e8e9ed',
          borderRadius: '16px',
          padding: '32px 24px 28px 24px',
          border: '2px solid #f5a623',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-28px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: card.numberBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '20px',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          {card.number}
        </div>

        <h3 className="text-gray-900 font-bold text-lg md:text-xl text-center mb-3 mt-2">
          {card.title}
        </h3>

        <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function RevenueSharingModelSection() {
  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-gray-900 font-bold text-3xl md:text-4xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          80/20 Revenue Sharing Model for Passive Income with CafeXbot
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 32px' }}>
          {cards.map((card, index) => (
            <StepCard key={card.number} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
