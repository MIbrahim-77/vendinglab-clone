'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useState, useEffect, useRef } from 'react'

const images = [
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358244/coffee-robot-machine04_k4qycb.webp', alt: 'Kidzania Dubai Mall Location 1' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358275/Kidzania-picture-2_av4jk4.webp', alt: 'Kidzania Dubai Mall Location 2' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358278/Kidzania-picture-3_q7bfgf.webp', alt: 'Kidzania Dubai Mall Location 3' },
  { src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358270/kidzania-CafeXbot-Robotic-Cafe-picture-4_qdcyra.webp', alt: 'Kidzania Dubai Mall Location 4' },
]

export default function LocationsKidzaniaSection() {
  const locale = useLocale()
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    setFade(false)
    setTimeout(() => {
      setCurrent((index + images.length) % images.length)
      setFade(true)
    }, 300)
  }

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % images.length)
        setFade(true)
      }, 300)
    }, 3000)
  }

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [])

  const handlePrev = () => { stopAutoScroll(); goTo(current - 1); startAutoScroll() }
  const handleNext = () => { stopAutoScroll(); goTo(current + 1); startAutoScroll() }

  const arrowStyle: React.CSSProperties = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ffffff',
    border: 'none', fontSize: '20px', fontWeight: 700, color: '#333333',
    cursor: 'pointer', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-10 lg:py-16 px-5 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* LEFT */}
        <motion.div style={{ flex: 1 }} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ color: '#1a1a1a', fontWeight: 800, fontSize: 'clamp(22px, 3.5vw, 28px)', marginBottom: '28px', lineHeight: 1.3 }}>
            Robotic Cafe At Kidzania - Dubai Mall
          </h2>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>Location Starting Date: </span>
            <span style={{ color: '#f5a623', fontWeight: 700 }}>29.01.2025</span>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>Opening Hours: Monday – Friday 9 Am – 9 Pm</span>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>Saturday &amp; Sunday – 9 Am To 11 Pm</span>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>Profitability: </span>
            <span style={{ color: '#f5a623', fontWeight: 700 }}>ROI 80% Plus</span>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>Google Map Link: </span>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#f5a623', fontWeight: 700, textDecoration: 'underline' }}>
              Click Here
            </a>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>Menu Selections: </span>
            <span style={{ color: '#f5a623', fontWeight: 700 }}>Coffee, Hot Chocolate, Tea, Milkshake, Ice Cream, Cakes, Cookies</span>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link
              href={`/${locale}/contact`}
              style={{
                display: 'inline-block', background: 'transparent', border: '2px solid #c9a84c',
                color: '#1a1a1a', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em',
                textTransform: 'uppercase', borderRadius: '999px', padding: '14px 32px', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,168,76,0.10)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
            >
              CONTACT WITH SALES TEAM
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div style={{ flex: 1 }} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={images[current].src}
              alt={images[current].alt}
              referrerPolicy="no-referrer"
              style={{ width: '100%', height: 'clamp(240px, 50vw, 420px)', objectFit: 'cover', borderRadius: '16px', display: 'block', opacity: fade ? 1 : 0, transition: 'opacity 0.3s ease' }}
            />
            <button onClick={handlePrev} style={{ ...arrowStyle, left: '12px' }}>‹</button>
            <button onClick={handleNext} style={{ ...arrowStyle, right: '12px' }}>›</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopAutoScroll(); goTo(i); startAutoScroll() }}
                style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: i === current ? '#f5a623' : 'rgba(0,0,0,0.2)', border: 'none', cursor: 'pointer', padding: 0, transition: 'background-color 0.3s' }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
