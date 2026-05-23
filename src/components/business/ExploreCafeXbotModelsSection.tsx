'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const models = [
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357298/Untitled-design-72-e1697630643535_sh4tcr.webp',
    alt: 'CafeXbot Model 1',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357291/Latte-bot_gewihv.webp',
    alt: 'CafeXbot Latte Bot',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357424/xbot-Carnival-bot_wjm7bl.webp',
    alt: 'CafeXbot Carnival Bot',
  },
  {
    src: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357425/Xbot-Mocca-Bot_na1mu3.webp',
    alt: 'CafeXbot Mocca Bot',
  },
]

export default function ExploreCafeXbotModelsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % models.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ backgroundColor: '#e8e9ed' }} className="py-16 px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '40px 24px',
          overflow: 'hidden',
        }}
      >
         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
           <div className="flex-shrink-0 w-full max-w-sm lg:max-w-[380px]">
             <div className="relative w-full" style={{ height: '280px' }}>
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentIndex}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.6 }}
                   style={{ position: 'absolute', inset: 0 }}
                 >
                   <Image
                     fill
                     src={models[currentIndex].src}
                     alt={models[currentIndex].alt}
                     className="object-contain object-center"
                   />
                 </motion.div>
               </AnimatePresence>
             </div>
             <div className="flex justify-center gap-2 mt-4">
               {models.map((_, i) => (
                 <button
                   key={i}
                   onClick={() => setCurrentIndex(i)}
                   style={{
                     width: '8px',
                     height: '8px',
                     borderRadius: '50%',
                     backgroundColor: i === currentIndex ? '#f5a623' : '#d1d5db',
                     border: 'none',
                     cursor: 'pointer',
                     padding: 0,
                   }}
                 />
               ))}
             </div>
           </div>

           <motion.div
             className="flex-1 max-w-sm w-full text-center"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
            <h2 className="text-gray-800 font-bold text-3xl md:text-4xl leading-tight text-center mb-6">
              Explore CafeXbot Models For Lucrative Passive Income Investments
            </h2>

            <p className="text-base leading-relaxed text-center">
              <span className="text-gray-700 font-bold">
                You can select any of the available models of CafeXbot and own it while giving it to our operation departments and distributors{' '}
              </span>
              <span className="font-bold" style={{ color: '#f5a623' }}>
                to operate for you in the locations selected by both parties.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
