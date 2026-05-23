'use client';

import { motion } from 'framer-motion';

export default function RoboticCafeYourWaySection() {
  return (
    <section className="bg-[#1a0f08] py-24 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Your CafeXbot Cafe Robot, Your Way!
          </h2>
          <p className="text-orange-400 text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Use the screens on top and a well-lit area on the bottom to
            create an original look and feel for your own automated café brand.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center w-full max-w-sm lg:max-w-full"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357298/Untitled-design-72-e1697630643535_sh4tcr.webp"
            alt="CafeXbot Cafe Robot Your Way"
            className="w-full h-auto object-contain max-h-64 md:max-h-72 lg:max-h-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
