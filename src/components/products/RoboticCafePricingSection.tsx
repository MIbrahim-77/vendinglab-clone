'use client';

import { motion } from 'framer-motion';

export default function RoboticCafePricingSection() {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto flex items-center gap-16">
        <motion.div
          className="flex-1"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-800 font-bold text-4xl leading-tight mb-6">
            CafeXbot Robot Cafe Is Most Fairly Priced
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            What matters most is not the price of such a business but
            how much is its ROI,{' '}
            <span className="text-orange-500 font-medium">
              and CafeXbot&apos;s yearly ROI exceeds 95% of other businesses if it is placed in a strategic spot
            </span>
            {' '}in one of the locations that we have mentioned. Location means everything here!
          </p>
          <p className="text-red-600 font-bold text-base">
            Warning: Don&apos;t place it in the Antarctica, it can&apos;t sell an ice cream to an eskimo!
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
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357291/Latte-bot_gewihv.webp"
            alt="CafeXbot Robot Cafe"
            className="w-full h-auto object-contain max-h-96"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
