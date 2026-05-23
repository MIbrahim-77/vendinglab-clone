'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

const products = [
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357425/Xbot-Mocca-Bot_na1mu3.webp',
    name: 'CafeXbot Coffee Barista Robot',
    href: '/products/coffee-barista-robot',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357424/xbot-Carnival-bot_wjm7bl.webp',
    name: 'CafeXbot Ice Cream Robot',
    href: '/products/ice-cream-robot',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357416/Latte-bot-1024x739_fn0qco.webp',
    name: 'CafeXbot Robotic Cafe',
    href: '/products/robotic-cafe',
  },
]

export default function PassiveIncomeModelsSection() {
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#f0efed' }} className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-800 font-bold text-4xl md:text-5xl text-center mb-4">
            Check the models of CafeXbot available for investment with passive income
          </h2>

          <p className="text-base md:text-lg text-center max-w-2xl mx-auto">
            <span className="text-gray-600">Our Xbot Robotic Cafes usually cost below USD$100,000 depending on the model. </span>
            <span style={{ color: '#f5a623' }} className="font-bold">Have a look at our model range to decide the right type of investment for your location</span>
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                padding: '24px 24px 20px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                flex: 1,
                maxWidth: '380px',
                width: '100%',
              }}
            >
              <div className="relative w-full mb-6" style={{ height: '200px' }}>
                <Image src={product.src} alt={product.name} fill className="object-contain object-center" />
              </div>
              <p className="text-gray-800 font-bold text-lg text-center mb-3">{product.name}</p>
              <Link
                href={`/${locale}${product.href}`}
                style={{ color: '#f5a623' }}
                className="font-bold text-sm tracking-widest uppercase hover:underline transition"
              >
                LEARN MORE
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
