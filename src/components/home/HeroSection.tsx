'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, type Variants } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection() {
  const locale = useLocale();

  return (
    <div
      style={{
        backgroundImage: "url('https://picsum.photos/1920/1080?random=1')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-center mx-auto lg:text-left lg:mx-0"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
          >
            Leading Robotics Manufacturer for F&B Industry In UAE
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
            Manufacturing since 2015 VLT Robotics is one of the oldest robotic cafe manufacturer
            in the world. In 2023 new model CafeXbot has been shown to the world over a numerous
            launches in events in Dubai, UAE.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Manufacturing since 2015 VLT Robotics is one of the oldest robotic cafe manufacturer
            in the world.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href={`/${locale}/products`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              Explore Products
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/about`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm backdrop-blur-sm"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
