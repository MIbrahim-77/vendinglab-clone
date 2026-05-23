'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function RobotRentalManufacturedBanner() {
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="px-8 py-6">
       <motion.div
         className="flex-col md:flex-row px-6 md:px-12"
         style={{
           backgroundColor: '#dde1ea',
           borderRadius: '16px',
           padding: '28px 24px',
           maxWidth: '900px',
           margin: '0 auto',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           gap: '24px',
         }}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
       >
         <div className="flex-col md:flex-row text-center md:text-left" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
           <svg
             width="40"
             height="40"
             className="md:w-13 md:h-13"
             viewBox="0 0 24 24"
             fill="none"
             stroke="#1a1a1a"
             strokeWidth="1.5"
             strokeLinecap="round"
             strokeLinejoin="round"
             style={{ flexShrink: 0 }}
           >
             <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
             <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
           </svg>

           <span
             className="text-base md:text-lg"
             style={{
               color: '#1a1a1a',
               fontWeight: 700,
             }}
           >
             CafeXbot is Proudly Manufactured in Dubai!
           </span>
         </div>

         <Link
           href={`/${locale}/contact`}
           style={{
             display: 'inline-block',
             background: 'transparent',
             border: '2px solid #c9a84c',
             color: '#1a1a1a',
             fontWeight: 600,
             fontSize: '13px',
             letterSpacing: '0.08em',
             textTransform: 'uppercase',
             borderRadius: '999px',
             padding: '12px 28px',
             transition: 'all 0.2s',
           }}
           onMouseEnter={(e) => {
             ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,168,76,0.10)'
           }}
           onMouseLeave={(e) => {
             ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
           }}
         >
           SEND RENTAL ENQUIRY
         </Link>
       </motion.div>
    </section>
  )
}
