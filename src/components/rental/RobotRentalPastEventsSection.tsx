'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const events = [
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357314/20230518_110508-scaled_y2bq0o.webp",
    title: "Reuters Next Gulf 2025",
    date: "22 October 2025",
    description: "Captivating world leaders, innovators, and market movers, CafeXbot robotic kiosk...",
    gallery: "#",
    video: "#",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358231/coffee-machine01_goosm2.webp",
    title: "Parliamentary Legislative Forum, FNC - UAE",
    date: "07 October 2025",
    description: "The CafeXbot robotic kiosk served premium coffee and ice cream to...",
    gallery: "#",
    video: "#",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358242/coffee-robot-machine03_i8nhdv.webp",
    title: "Forex Expo 2025",
    date: "06 - 07 October 2025",
    description: "CafeXbot robotic café kiosk proved to be a powerful lead-generation magnet at...",
    gallery: "#",
    video: "#",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358260/image0-1_lsbucu.webp",
    title: "ADNOC Offshore AI, Digitalization & Technology Summit 2.0",
    date: "29 - 30 September 2025",
    description: "Adding robotic cafe innovation to ADNOC's prestigious summit at Abu...",
    gallery: "#",
    video: "#",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358265/image9-1-1_cmu0bt.webp",
    title: "Kidzania Dubai Event",
    date: "15 September 2025",
    description: "CafeXbot brought its robotic cafe magic to Kidzania Dubai, delighting young visitors...",
    gallery: "#",
    video: "#",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358273/Kidzania-Picture-1_kewrbx.webp",
    title: "Riverland Dubai Park",
    date: "10 August 2025",
    description: "Serving fresh coffee and ice cream at the iconic Riverland Dubai park location...",
    gallery: "#",
    video: "#",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358268/IMG-20240124-WA0067_ouw6et.webp",
    title: "Corporate Event Dubai",
    date: "24 January 2025",
    description: "CafeXbot robotic cafe serving premium beverages at a major corporate event in Dubai...",
    gallery: "#",
    video: "#",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358455/riverland-dubai-park-new-4_wx6akr.webp",
    title: "Riverland Dubai Season 2025",
    date: "March 2025",
    description: "A spectacular season of robotic cafe service at Riverland Dubai's bustling waterfront...",
    gallery: "#",
    video: "#",
  },
]

function getVisibleItems(windowWidth: number): number {
  if (windowWidth < 640) return 1
  if (windowWidth < 1024) return 2
  return 4
}

function getItemWidth(windowWidth: number): number {
  const visible = getVisibleItems(windowWidth)
  return 100 / visible
}

export default function RobotRentalPastEventsSection() {
  const [current, setCurrent] = useState(0)
  const [windowWidth, setWindowWidth] = useState(1200)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const visibleItems = getVisibleItems(windowWidth)
  const itemWidth = getItemWidth(windowWidth)
  const maxIndex = Math.max(0, events.length - visibleItems)

  useEffect(() => {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 1200)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setCurrent(0)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const startAutoScroll = () => {
    stopAutoScroll()
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1))
    }, 3500)
  }

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [maxIndex])

  const handlePrev = () => {
    stopAutoScroll()
    setCurrent(prev => (prev <= 0 ? maxIndex : prev - 1))
    startAutoScroll()
  }

  const handleNext = () => {
    stopAutoScroll()
    setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1))
    startAutoScroll()
  }

  return (
    <section
      style={{ backgroundColor: '#111111' }}
      className="pt-16 pb-0 px-8"
    >
      <div className="max-w-7xl mx-auto">

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <h2
             className="text-2xl md:text-3xl lg:text-4xl"
             style={{
               color: '#ffffff',
               fontWeight: 800,
               textAlign: 'center',
               marginBottom: '16px',
             }}
           >
             Past CafeXbot Robot Rental Events In Dubai &amp; UAE
           </h2>
           <p
             style={{
               color: '#cccccc',
               fontSize: '16px',
               textAlign: 'center',
               maxWidth: '700px',
               margin: '0 auto 48px auto',
             }}
           >
             Big thanks to our past robot rental event clients in Dubai and UAE!
             We love you as much as you love our Ice Cream &amp; Coffee!
           </p>
         </motion.div>

        <div
          style={{ position: 'relative' }}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
           <button
             onClick={handlePrev}
             className="z-10 flex items-center justify-center"
             style={{
               position: 'absolute',
               top: '50%',
               transform: 'translateY(-50%)',
               left: '-10px',
               width: '36px',
               height: '36px',
               borderRadius: '50%',
               backgroundColor: '#ffffff',
               border: 'none',
               fontSize: '18px',
               fontWeight: 700,
               color: '#333333',
               cursor: 'pointer',
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
             className="z-10 flex items-center justify-center"
             style={{
               position: 'absolute',
               top: '50%',
               transform: 'translateY(-50%)',
               right: '-10px',
               width: '36px',
               height: '36px',
               borderRadius: '50%',
               backgroundColor: '#ffffff',
               border: 'none',
               fontSize: '18px',
               fontWeight: 700,
               color: '#333333',
               cursor: 'pointer',
               boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
             }}
           >
             ›
           </button>

          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${current * itemWidth}%)`,
              }}
            >
              {events.map((event, i) => (
                <div
                  key={i}
                  style={{
                    flex: `0 0 ${itemWidth}%`,
                    paddingRight: '16px',
                    boxSizing: 'border-box',
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="h-40 sm:h-48 lg:h-[220px]"
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '12px 12px 0 0',
                    }}
                  />

                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '0 0 12px 12px',
                      padding: '20px 16px',
                      border: '1px solid #e0e0e0',
                      borderTop: 'none',
                    }}
                  >
                    <h3
                      style={{
                        color: '#1a1a1a',
                        fontWeight: 700,
                        fontSize: '15px',
                        marginBottom: '8px',
                        textAlign: 'center',
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="hidden sm:block"
                      style={{
                        color: '#888888',
                        fontSize: '13px',
                        textAlign: 'center',
                        marginBottom: '12px',
                      }}
                    >
                      {event.date}
                    </p>
                    <p
                      className="hidden md:block"
                      style={{
                        color: '#555555',
                        fontSize: '13px',
                        lineHeight: 1.5,
                        textAlign: 'center',
                        marginBottom: '16px',
                      }}
                    >
                      {event.description}
                    </p>
                    <div
                      className="hidden lg:flex"
                      style={{
                        display: 'none',
                        justifyContent: 'center',
                        gap: '16px',
                      }}
                    >
                      <a
                        href={event.gallery}
                        style={{
                          color: '#3b9ed4',
                          fontSize: '13px',
                          fontWeight: 600,
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}
                      >
                        Gallery
                      </a>
                      <a
                        href={event.video}
                        style={{
                          color: '#3b9ed4',
                          fontSize: '13px',
                          fontWeight: 600,
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}
                      >
                        Video
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
