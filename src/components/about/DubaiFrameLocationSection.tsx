'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358260/image0-1_lsbucu.webp', alt: 'Dubai Frame CafeXbot Location 1' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358262/image7_i5ntsm.webp', alt: 'Dubai Frame CafeXbot Location 2' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358265/image9-1-1_cmu0bt.webp', alt: 'Dubai Frame CafeXbot Location 3' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358265/image9-1-1_cmu0bt.webp', alt: 'Dubai Frame CafeXbot Location 4' },
]

const arrowStyle: React.CSSProperties = {
  position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
  width: '40px', height: '40px', borderRadius: '50%',
  backgroundColor: 'rgba(255,255,255,0.85)', border: 'none', cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
}

export default function DubaiFrameLocationSection() {
  const locale = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-10 lg:py-16 px-5 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* Left: Text Content */}
        <motion.div
          className="flex-shrink-0 w-full lg:max-w-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 font-bold text-2xl md:text-3xl leading-tight mb-6">
            Robotic Cafe At Dubai Frame, Dubai
          </h2>

          <p className="text-gray-700 text-base mb-3">
            Location Starting Date:{' '}
            <span className="font-bold" style={{ color: '#f5a623' }}>21.12.2023</span>
          </p>

          <p className="text-gray-700 text-base mb-3">
            (Temporarily Closed For Renovation)
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-3">
            Location Geo Position: Frame Location: In The Entrance To The Dubai Frame After Purchasing The Tickets.
          </p>

          <p className="text-gray-700 text-base mb-3">
            Profitability:{' '}
            <span className="font-bold" style={{ color: '#f5a623' }}>ROI 120% Plus</span>
          </p>

          <p className="text-gray-700 text-base mb-3">
            Menu Selections:{' '}
            <span className="font-bold" style={{ color: '#f5a623' }}>Coffee &amp; Ice Cream</span>
          </p>

          <Link
            href={`/${locale}/contact`}
            style={{
              display: 'inline-block', marginTop: '24px', padding: '14px 32px',
              borderRadius: '50px', border: '2px solid #c8860a',
              backgroundColor: 'transparent', color: '#1a1a1a',
              fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em',
              textTransform: 'uppercase',
              boxShadow: '0 0 0 1px #c8860a, inset 0 0 8px rgba(197,134,10,0.15)',
              transition: 'all 0.2s', cursor: 'pointer', textAlign: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f5a623'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a' }}
          >
            CONTACT WITH SALES TEAM
          </Link>
        </motion.div>

        {/* Right: Image Carousel */}
        <motion.div
          className="flex-1 w-full lg:max-w-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{ position: 'relative', width: '100%', height: 'clamp(240px, 50vw, 400px)', borderRadius: '16px', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  fill
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            <button onClick={() => setCurrentIndex(prev => (prev - 1 + images.length) % images.length)} style={{ ...arrowStyle, left: '12px' }}>
              <ChevronLeft size={20} color="#1a1a1a" />
            </button>
            <button onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)} style={{ ...arrowStyle, right: '12px' }}>
              <ChevronRight size={20} color="#1a1a1a" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  backgroundColor: i === currentIndex ? '#f5a623' : '#d1d5db',
                  border: 'none', cursor: 'pointer', padding: 0,
                }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
