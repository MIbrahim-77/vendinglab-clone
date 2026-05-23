'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useState, useEffect, useRef } from 'react'

const images = [
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358273/Kidzania-Picture-1_kewrbx.webp",
    alt: "BITS Pilani Dubai Location 1",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358249/coffee-robot-machine06_t8e3wc.webp",
    alt: "BITS Pilani Dubai Location 2",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358247/coffee-robot-machine05_djbf3n.webp",
    alt: "BITS Pilani Dubai Location 3",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358244/coffee-robot-machine04_k4qycb.webp",
    alt: "BITS Pilani Dubai Location 4",
  },
  {
    src: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358242/coffee-robot-machine03_i8nhdv.webp",
    alt: "BITS Pilani Dubai Location 5",
  },
]

export default function LocationsBitsPilaniSection() {
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
      style={{ backgroundColor: '#ffffff' }}
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
            }}
          >
            Robotic Cafe At BITS Pilani Dubai
          </h2>

          {[
            {
              label: 'Location Starting Date: ',
              value: '10.10.2025',
              orange: true,
              link: null,
            },
            {
              label: 'Opening Hours: ',
              value: '24 Hours',
              orange: false,
              link: null,
            },
            {
              label: 'Profitability: ',
              value: 'ROI 50% Plus',
              orange: true,
              link: null,
            },
            {
              label: 'Google Map Link: ',
              value: 'Click Here',
              orange: true,
              link: 'https://maps.google.com',
            },
            {
              label: 'Menu Selections: ',
              value: 'Coffee, Hot Chocolate, Tea, Flavoured Milk, Ice Cream, Cakes, Cookies',
              orange: true,
              link: null,
            },
          ].map((row, i) => (
            <div key={i} style={{ marginBottom: '16px', fontSize: '16px' }}>
              <span style={{ color: '#333333', fontWeight: 400 }}>
                {row.label}
              </span>
              {row.link ? (
                <a
                  href={row.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#f5a623',
                    fontWeight: 700,
                    textDecoration: 'underline',
                  }}
                >
                  {row.value}
                </a>
              ) : (
                <span
                  style={{
                    color: row.orange ? '#f5a623' : '#333333',
                    fontWeight: row.orange ? 700 : 400,
                  }}
                >
                  {row.value}
                </span>
              )}
            </div>
          ))}

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
                  backgroundColor: i === current
                    ? '#f5a623'
                    : 'rgba(0,0,0,0.2)',
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
