'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const row1 = [
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357408/Coffee-cup-white_kiznpr.webp',
    label: 'Coffee Variety',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357422/Vanilla-Stawberry-Cup_nwosrd.webp',
    label: 'Ice Cream',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357406/Coffee-Black-cup_wcekeq.webp',
    label: 'Hot Chocolate',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357418/Milkshake_mwj7k3.webp',
    label: 'Milkshake',
  },
]

const row2 = [
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357419/pngwing.com-1_w8g5md.webp',
    label: 'Tea',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357412/dry-cakes-investment-opportunities_d2lgd2.webp',
    label: 'Dry Cakes',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357409/Cookies-investment-opportunities_o0mykn.webp',
    label: 'Cookies',
  },
]

const bulletPoints = [
  '8 Varieties Of Food And Drinks',
  '3.8 Square Meters Total Area',
  'Serves Upto 3 Products At A Time',
]

export default function MultiproductRoboticCafeSection() {
  return (
    <section style={{ backgroundColor: '#eeeceb' }} className="py-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl text-center leading-tight max-w-4xl mx-auto mb-6">
          Best Multiproduct Robotic Cafe Investment Opportunities For You
        </h2>

        <p className="text-center max-w-3xl mx-auto leading-relaxed mb-12">
          <span className="text-gray-700 text-base">
            Robotic CafeXbot offers one of the best investment opportunities &amp; ideas on the market today. In addition, CafeXbot is fully automated and is the{' '}
          </span>
          <span className="text-yellow-600 font-semibold">
            only Robotic Cafe that serves up to 8 varieties of food and drinks within 3.8sq.m
          </span>
        </p>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-10 flex-shrink-0 max-w-xs w-full">
            {bulletPoints.map((point) => (
              <div key={point} className="flex flex-row items-center gap-3">
                <span className="text-gray-900 font-bold text-base whitespace-nowrap">{point}</span>
                <div className="flex-1 border-b-2 border-gray-400 mx-2" />
                <div className="w-3 h-3 rounded-full bg-gray-700 flex-shrink-0" />
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#4a3f35' }} className="rounded-2xl p-6 md:p-8 flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {row1.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      background: 'radial-gradient(circle, #5a5048 0%, #3a3028 100%)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <Image src={item.src} alt={item.label} width={70} height={70} className="object-contain w-12 h-12 md:w-auto md:h-auto" />
                  </div>
                  <span className="text-white text-xs font-semibold text-center">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              {row2.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      background: 'radial-gradient(circle, #5a5048 0%, #3a3028 100%)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <Image src={item.src} alt={item.label} width={70} height={70} className="object-contain w-12 h-12 md:w-auto md:h-auto" />
                  </div>
                  <span className="text-white text-xs font-semibold text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
