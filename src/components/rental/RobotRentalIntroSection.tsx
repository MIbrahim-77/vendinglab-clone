'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function RobotRentalIntroSection() {
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              color: '#2d2d2d',
              fontWeight: 400,
              fontSize: '18px',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 28px auto',
            }}
          >
            Robot Rental Dubai, UAE. Hire CafeXbot for events, serving freshly brewed coffee, soft ice cream, and exclusive delights!
          </p>

          <Link
            href={`/${locale}/contact`}
            style={{
              display: 'inline-block',
              background: '#f0f0f0',
              border: '2px solid #c9a84c',
              color: '#2d2d2d',
              fontWeight: 700,
              fontSize: '15px',
              borderRadius: '999px',
              padding: '14px 40px',
              marginBottom: '56px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,168,76,0.10)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = '#f0f0f0'
            }}
          >
            Rent Robotic CafeXbot For Your Event
          </Link>
        </motion.div>

         <div className="flex flex-col lg:flex-row" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
           <motion.div
             className="w-full lg:flex-1"
             style={{ flex: 1 }}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <img
               src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779358187/ADNAC-Tawdheef-event-robot-serving-coffee-scaled_c7rgbn.webp"
               alt="Robot Rental Dubai Event"
               referrerPolicy="no-referrer"
               className="h-[280px] md:h-[360px] lg:h-[460px]"
               style={{ width: '100%', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
             />
           </motion.div>

           <motion.div
             className="w-full lg:flex-1 order-first lg:order-none"
             style={{ flex: 1 }}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <h2
               className="text-2xl md:text-3xl lg:text-4xl"
               style={{
                 color: '#1a1a1a',
                 fontWeight: 800,
                 lineHeight: 1.2,
                 marginBottom: '24px',
                 textAlign: 'center',
               }}
             >
               Your Top Choice For Robot Rental In Dubai, UAE
             </h2>

             <p style={{ fontSize: '15px', lineHeight: 1.7, textAlign: 'center' }}>
               <span style={{ color: '#444444' }}>
                 Enrich your brand&apos;s presence across events, offices, and business hubs through our advanced Robot Rental Dubai and across entire UAE. Our cutting-edge robotic cafe rentals redefine the vending experience, delivering unforgettable encounters worldwide.{' '}
               </span>
               <span style={{ color: '#f5a623', fontWeight: 600 }}>
                 At VLT Robotics, we&apos;re not merely reshaping vending; we&apos;re leading a revolution, one event at a time.
               </span>
             </p>

             <div className="gap-6 md:gap-12" style={{ display: 'flex', marginTop: '32px', justifyContent: 'center' }}>
               <div style={{ textAlign: 'center' }}>
                 <div className="text-2xl md:text-3xl lg:text-4xl" style={{ color: '#f5a623', fontWeight: 800 }}>18+</div>
                 <div style={{ color: '#2d2d2d', fontSize: '16px', fontWeight: 500 }}>Customers</div>
               </div>
               <div style={{ textAlign: 'center' }}>
                 <div className="text-2xl md:text-3xl lg:text-4xl" style={{ color: '#f5a623', fontWeight: 800 }}>32+</div>
                 <div style={{ color: '#2d2d2d', fontSize: '16px', fontWeight: 500 }}>Robot Rentals</div>
               </div>
             </div>
           </motion.div>
         </div>
      </div>
    </section>
  )
}
