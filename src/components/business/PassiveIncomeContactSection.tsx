'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function PassiveIncomeContactSection() {
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#dde1ea' }} className="py-20 px-8">
      <div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row"
        style={{ alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}
      >
        <motion.div
          style={{ flex: 1 }}
          className="w-full text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl md:text-3xl lg:text-[32px]"
            style={{
              color: '#2d2d2d',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '32px',
              maxWidth: '420px',
            }}
          >
            Have question about passive income opportunity above?
          </h2>

          <Link
            href={`/${locale}/contact`}
            style={{
              display: 'inline-block',
              background: 'transparent',
              border: '2px solid #c9a84c',
              color: '#2d2d2d',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: '999px',
              padding: '16px 40px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,168,76,0.08)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
            }}
          >
            CONTACT VLT ROBOTICS TEAM
          </Link>
        </motion.div>

        <motion.div
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
            style={{
              borderRadius: '50%',
              backgroundColor: '#c9a84c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357293/Milkshake_wrh0co.webp"
              alt="CafeXbot Coffee Cup"
              referrerPolicy="no-referrer"
              style={{
                width: '110%',
                height: '110%',
                objectFit: 'contain',
                position: 'absolute',
                bottom: '-10px',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
