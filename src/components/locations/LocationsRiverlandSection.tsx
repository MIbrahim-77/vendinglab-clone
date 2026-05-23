'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useState, useEffect, useRef } from 'react'

const images = [
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358458/Riverland-Dubai-Parks-2_qz40jt.webp",
    alt: "Riverland Dubai Parks Location 1",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358283/riverland-dubai-park-new-2_c19qzg.webp",
    alt: "Riverland Dubai Parks Location 2",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358268/IMG-20240124-WA0067_ouw6et.webp",
    alt: "Riverland Dubai Parks Location 3",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358257/Dubai-Frame-robotic-cafe_f1lv4i.webp",
    alt: "Riverland Dubai Parks Location 4",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358280/riverland-dubai-park-new_whod8x.webp",
    alt: "Riverland Dubai Parks Location 5",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358455/riverland-dubai-park-new-4_wx6akr.webp",
    alt: "Riverland Dubai Parks Location 6",
  },
]

export default function LocationsRiverlandSection() {
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

  const handlePrev = () => {
    stopAutoScroll()
    goTo(current - 1)
    startAutoScroll()
  }

  const handleNext = () => {
    stopAutoScroll()
    goTo(current + 1)
    startAutoScroll()
  }

  return (
    <section
      style={{ backgroundColor: '#f9f9f9' }}
      className="py-16 px-8"
    >
      <div
        className="max-w-6xl mx-auto"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '64px',
        }}
      >
        <motion.div
          style={{ flex: 1 }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              color: '#1a1a1a',
              fontWeight: 800,
              fontSize: '28px',
              marginBottom: '28px',
              lineHeight: 1.3,
            }}
          >
            Robotic Cafe At Riverland In Dubai Parks, Dubai
          </h2>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>
              Location Starting Date:{' '}
            </span>
            <span style={{ color: '#f5a623', fontWeight: 700 }}>
              30.12.2023
            </span>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>
              Opening Hours:{' '}
            </span>
            <span style={{ color: '#333333', fontWeight: 400 }}>
              Opening Hours – Saturday To Wednesday – 10 A.M. To 11 P.M.
              <br />
              Thursday And Friday – 10 A.M. To 12 A.M.
            </span>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>
              Profitability:{' '}
            </span>
            <span style={{ color: '#f5a623', fontWeight: 700 }}>
              ROI 50% Plus
            </span>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>
              Google Map Link:{' '}
            </span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#f5a623',
                fontWeight: 700,
                textDecoration: 'underline',
              }}
            >
              Click Here
            </a>
          </div>

          <div style={{ marginBottom: '16px', fontSize: '16px' }}>
            <span style={{ color: '#333333', fontWeight: 400 }}>
              Menu Selections:{' '}
            </span>
            <span style={{ color: '#f5a623', fontWeight: 700 }}>
              Coffee &amp; Ice Cream
            </span>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link
              href={`/${locale}/contact`}
              style={{
                display: 'inline-block',
                background: 'transparent',
                border: '2px solid #c9a84c',
                color: '#1a1a1a',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '999px',
                padding: '14px 32px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,168,76,0.10)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              }}
            >
              CONTACT WITH SALES TEAM
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ flex: 1 }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={images[current].src}
              alt={images[current].alt}
              referrerPolicy="no-referrer"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '16px',
                display: 'block',
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            />

            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                top: '50%',
                left: '12px',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: 'none',
                fontSize: '20px',
                fontWeight: 700,
                color: '#333333',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ‹
            </button>

            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '12px',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: 'none',
                fontSize: '20px',
                fontWeight: 700,
                color: '#333333',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ›
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '16px',
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  stopAutoScroll()
                  goTo(i)
                  startAutoScroll()
                }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: i === current ? '#f5a623' : 'rgba(0,0,0,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background-color 0.3s',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
