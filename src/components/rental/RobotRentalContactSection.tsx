'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path fill="white" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#f5a623"/>
      </svg>
    ),
  },
  {
    href: "https://wa.me/971588928104",
    label: "WhatsApp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.714a.5.5 0 0 0 .63.63l5.869-1.471A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.661-.523-5.17-1.432l-.37-.22-3.835.96.977-3.752-.242-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
  {
    href: "https://t.me",
    label: "Telegram",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

export default function RobotRentalContactSection() {
  const locale = useLocale()

  return (
    <>
       <section
         className="py-12 md:py-16 lg:py-20"
         style={{
           position: 'relative',
           backgroundImage: "url('https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357416/Latte-bot-1024x739_fn0qco.webp')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}
       >
         <div
           style={{
             position: 'absolute',
             inset: 0,
             backgroundColor: 'rgba(20, 40, 20, 0.78)',
             zIndex: 1,
           }}
         />

         <motion.div
           className="px-4"
           style={{
             position: 'relative',
             zIndex: 2,
             maxWidth: '900px',
             margin: '0 auto',
             textAlign: 'center',
           }}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
         >
           <h2
             className="text-2xl md:text-3xl lg:text-4xl"
             style={{
               color: '#ffffff',
               fontWeight: 800,
               lineHeight: 1.2,
               marginBottom: '24px',
             }}
           >
             Contact Us For Your Robot Rental Needs in Dubai and UAE
           </h2>

          <p
            style={{
              color: '#dddddd',
              fontSize: '16px',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}
          >
            Are you prepared to elevate your event or venue with our state-of-the-art
            robotic café solutions for Robot Rental Dubai and UAE? Connect with us today
            to begin your journey towards excellence and inquire about our services,
            specifically tailored for events with robot rental for event needs.
          </p>

          <p style={{ color: '#cccccc', fontSize: '15px', marginBottom: '12px' }}>
            WhatsApp: For immediate assistance, reach us at
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '12px',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#f5a623"/>
              <path d="M19.5 16.9c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51H9.1c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="white"/>
            </svg>
            <a
              href="https://wa.me/971588928104"
              style={{
                color: '#f5a623',
                fontWeight: 700,
                fontSize: '18px',
                textDecoration: 'underline',
              }}
            >
              +971 58 892 8104
            </a>
          </div>

          <p
            style={{
              color: '#aaaaaa',
              fontSize: '14px',
              marginBottom: '32px',
            }}
          >
            For inquiries and collaboration proposals, press rental inquires
          </p>

          <p
            style={{
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '18px',
              marginBottom: '24px',
            }}
          >
            CafeXbot Robot Rental Is Currently Available In Dubai &amp; UAE Only
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href={`/${locale}/contact`}
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid #c9a84c',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '15px',
                borderRadius: '999px',
                padding: '14px 40px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,168,76,0.2)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.15)'
              }}
            >
              Rental Inquiries
            </Link>
            <Link
              href={`/${locale}/contact`}
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid #c9a84c',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '15px',
                borderRadius: '999px',
                padding: '14px 40px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(201,168,76,0.2)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.15)'
              }}
            >
              Sales Inquiries
            </Link>
          </div>
        </motion.div>
      </section>

       <section
         className="py-8 md:py-10"
         style={{
           backgroundColor: '#4a3f35',
           textAlign: 'center',
         }}
       >
         <motion.div
           className="px-4"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
         >
           <p
             style={{
               color: '#ffffff',
               fontWeight: 800,
               fontSize: '16px',
               letterSpacing: '0.1em',
               marginBottom: '24px',
               textTransform: 'uppercase',
             }}
           >
             VISIT US ON SOCIAL MEDIA
           </p>
           <div
             style={{
               display: 'flex',
               justifyContent: 'center',
               gap: '12px',
               flexWrap: 'wrap',
             }}
           >
             {socialLinks.map((social) => (
               <a
                 key={social.label}
                 href={social.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label={social.label}
                 className="w-12 h-12 md:w-14 md:h-14"
                 style={{
                   borderRadius: '12px',
                   backgroundColor: '#f5a623',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'pointer',
                   transition: 'opacity 0.2s',
                   textDecoration: 'none',
                 }}
                 onMouseEnter={e => {
                   (e.currentTarget as HTMLElement).style.opacity = '0.85'
                 }}
                 onMouseLeave={e => {
                   (e.currentTarget as HTMLElement).style.opacity = '1'
                 }}
               >
                 {social.icon}
               </a>
             ))}
           </div>
         </motion.div>
       </section>
    </>
  )
}
