'use client'
import { motion } from 'framer-motion'

export default function RobotRentalHeroSection() {
  return (
     <section
       className="min-h-[360px] md:min-h-[440px] lg:min-h-[520px]"
       style={{
         position: 'relative',
         width: '100%',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundImage: "url('https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357290/Hospital-Lobby-Crowded_pmdx1p.webp')",
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
       }}
     >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.52)',
          zIndex: 1,
        }}
      />

       <motion.div
         className="px-6 py-16 md:py-20 lg:py-24"
         style={{
           position: 'relative',
           zIndex: 2,
           textAlign: 'center',
         }}
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7 }}
       >
         <h1
           className="text-3xl md:text-4xl lg:text-5xl"
           style={{
             color: '#ffffff',
             fontWeight: 700,
             lineHeight: 1.2,
             marginBottom: '20px',
           }}
         >
           Robot Rental In Dubai, UAE
         </h1>

         <p
           className="text-lg md:text-xl lg:text-2xl"
           style={{
             color: '#f5a623',
             fontWeight: 600,
             letterSpacing: '0.03em',
           }}
         >
           Rent CaféXbot Robotic Café For Your Event
         </p>
       </motion.div>
    </section>
  )
}
