'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

export default function ContactVLTRoboticsSection() {
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#dde0e8' }} className="relative overflow-hidden py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div
          className="flex-shrink-0 max-w-lg w-full text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-bold text-xl md:text-2xl lg:text-3xl leading-snug mb-8">
            <span className="text-gray-900">
              Contact our team to discuss how your business ideas can come together{' '}
            </span>
            <span className="font-bold" style={{ color: '#f5a623' }}>
              with investment opportunities offered by CafeXbot and VLT Robotics
            </span>
          </p>

          <Link
            href={`/${locale}/contact`}
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              borderRadius: '50px',
              border: '2px solid #c8860a',
              backgroundColor: 'transparent',
              color: '#1a1a1a',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              boxShadow: '0 0 0 1px #c8860a',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5a623'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#1a1a1a'
            }}
          >
            CONTACT VLT ROBOTICS TEAM
          </Link>
        </motion.div>

        <motion.div
          className="flex-shrink-0 w-full flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357332/Business-Girl_girysu.webp"
            alt="VLT Robotics Business Team"
            width={420}
            height={480}
            className="object-contain object-bottom w-full max-w-[280px] md:max-w-[360px] lg:max-w-[420px] h-auto"
            style={{ width: '100%', height: 'auto', maxWidth: '420px' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
