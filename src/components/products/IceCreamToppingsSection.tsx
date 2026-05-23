'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const toppings = [
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357173/xbot-Crushed-Pistachios_bjcg6r.webp',
    label: 'Crushed Pistachios',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357170/xbot-chocolate-Chips_ywta3p.webp',
    label: 'Chocolate Chips',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357172/xbot-Crushed-Almonds_u0xj2i.webp',
    label: 'Crushed Almonds',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357175/xbot-mms_bsayvn.webp',
    label: 'M&Ms',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357175/xbot-Gummy-Bears_lbaop9.webp',
    label: 'Gummy Bears',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357181/xbot-sprinkles_o1ciuh.webp',
    label: 'Sprinkles',
  },
]

export default function IceCreamToppingsSection() {
  return (
    <section style={{ backgroundColor: '#0f0d0a' }} className="py-16 px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-bold text-4xl md:text-5xl mb-4">
          Ice Cream Kiosk Offers A Variety Of Toppings.
        </h2>

        <p className="text-yellow-500 text-base md:text-lg mb-12">
          Your CafeXbot Ice cream robot can serve up to 3 selections of toppings
        </p>

        <div className="flex flex-row items-center justify-center gap-6 overflow-x-auto mx-auto [&::-webkit-scrollbar]:hidden px-4">
          {toppings.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div
                className="w-44 h-44 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: 'radial-gradient(circle, #2a2a2a 0%, #1a1a1a 100%)',
                  border: '2px solid #333',
                }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-semibold text-sm text-center max-w-[120px] leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
