'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const models = [
  {
    name: 'Mocca Bot',
    image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357114/Xbot-Mocca-Bot_xoxomk.webp',
  },
  {
    name: 'Carnival Bot',
    image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357168/xbot-Carnival-bot_gjnzkc.webp',
  },
  {
    name: 'Carnival Bot Pro',
    image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357424/xbot-Carnival-bot_wjm7bl.webp',
  },
]

export default function RobotRentalModelsSection() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % models.length)
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

  return (
    <section style={{ backgroundColor: '#0a0a0a', position: 'relative', overflow: 'hidden' }} className="py-20 px-8">
      <div
        style={{
          position: 'absolute',
          right: '-30px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#f5a623',
          zIndex: 1,
        }}
      />

       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
         <motion.div
           className="w-full lg:flex-1 text-center lg:text-left"
           style={{ flex: 1 }}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-2xl md:text-3xl lg:text-4xl" style={{ color: '#ffffff', fontWeight: 700, lineHeight: 1.2, marginBottom: '24px' }}>
             Which Robot Cafe Would You Like To Rent?
           </h2>
           <p style={{ color: '#cccccc', fontWeight: 400, fontSize: '16px', lineHeight: 1.7, maxWidth: '100%' }}>
             Each robotic cafe comes fully stocked with Ice Cream and Coffee that you can serve for Free or sell to your event visitors
           </p>
         </motion.div>

         <motion.div
           className="w-full lg:flex-1"
           style={{ flex: 1, position: 'relative', textAlign: 'center' }}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           onMouseEnter={stopAutoScroll}
           onMouseLeave={startAutoScroll}
         >
           <img
             src={models[current].image}
             alt={models[current].name}
             referrerPolicy="no-referrer"
             className="h-[280px] md:h-[320px] lg:h-[380px]"
             style={{
               width: '100%',
               objectFit: 'contain',
               display: 'block',
               opacity: fade ? 1 : 0,
               transition: 'opacity 0.3s ease',
             }}
           />

          <p style={{ color: '#cccccc', fontSize: '16px', fontWeight: 400, marginTop: '20px', textAlign: 'center', letterSpacing: '0.05em' }}>
            {models[current].name}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
            {models.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setFade(false)
                  setTimeout(() => {
                    setCurrent(i)
                    setFade(true)
                  }, 300)
                }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: i === current ? '#f5a623' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'backgroundColor 0.3s',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
