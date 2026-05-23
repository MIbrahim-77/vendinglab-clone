'use client';

import { motion } from 'framer-motion';

export default function RoboticCafeYourWaySection() {
  return (
    <section className="bg-[#1a0f08] py-24 px-8">
      <div className="max-w-6xl mx-auto flex items-center gap-16">
        <motion.div
          className="flex-1"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white font-bold text-5xl leading-tight mb-6">
            Your CafeXbot Cafe Robot, Your Way!
          </h2>
          <p className="text-orange-400 text-base leading-relaxed max-w-sm">
            Use the screens on top and a well-lit area on the bottom to
            create an original look and feel for your own automated café brand.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357298/Untitled-design-72-e1697630643535_sh4tcr.webp"
            alt="CafeXbot Cafe Robot Your Way"
            className="w-full h-auto object-contain max-h-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
