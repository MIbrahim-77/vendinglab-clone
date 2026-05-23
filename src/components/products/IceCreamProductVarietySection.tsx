'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357178/Xbot-Robotic-Ice-Cream_jyfltx.webp',
    label: 'Soft Ice Cream',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357180/xbot-robotic-yogurt_lwhkw8.webp',
    label: 'Frozen Yoghurt',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357179/Xbot-robotic-slush_qpkedd.webp',
    label: 'Açaí',
  },
]

export default function IceCreamProductVarietySection() {
  return (
    <section style={{ backgroundColor: '#dde0e8' }} className="py-8 md:py-12 lg:py-16 px-4 md:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-900 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 md:mb-6">
          Ice Cream Robot Product Variety
        </h2>

        <p className="max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-12">
          <span className="text-gray-600 text-sm md:text-base">
            CafeXbot ice cream kiosk is equipped with a highly reliable and fully automated{' '}
          </span>
          <span className="text-gray-900 font-bold text-sm md:text-base">
            Pasmo Ice Cream Machine system that can make a variety of things beyond just ice cream.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {products.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl pt-8 pb-6 px-6 text-center shadow-sm border border-[#e8e8e8]"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={280}
                height={280}
                className="object-contain mx-auto mb-6"
              />
              <p className="text-gray-900 font-bold text-xl mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
