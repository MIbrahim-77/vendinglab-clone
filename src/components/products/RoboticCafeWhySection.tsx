'use client';

import { motion } from 'framer-motion';

const LEFT_ITEMS = [
  'Maximize your profits with minimal operating costs',
  'Offer a personalized experience with customizable coffee and ice cream options',
  'Serve customers faster with our rapid, automated processes, capable of handling 4 cups at a time',
  'Stand out with a full robot cafe experience in just 3.8 square meters',
];

const RIGHT_ITEMS = [
  'Seamlessly serve 8 food and drink items, all in one machine',
  'Stand out by letting customers add toppings and flavors of their choice',
  'Enjoy swimming Blue Oceans by being one of the few owners of a comprehensive robotic cafe serving multiple food and drink options.',
  'Save valuable space with our compact design and enjoy low rentals',
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const itemRightVariants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

export default function RoboticCafeWhySection() {
  return (
    <>
      <section className="bg-gray-100 py-20 px-8">
        <motion.h2
          className="text-gray-800 font-bold text-4xl text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why CafeXbot Robot Cafe?
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-3 items-center gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {LEFT_ITEMS.map((text, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-3 mb-8 last:mb-0"
              >
                <span className="text-green-500 font-bold text-xl flex-shrink-0 mt-1">✓</span>
                <p className="text-[#2d2d2d] text-base leading-snug">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357297/Smiling-girl-with-laptop_tlbzof.webp"
              alt="CafeXbot Robot Cafe"
              className="w-64 h-auto object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {RIGHT_ITEMS.map((text, i) => (
              <motion.div
                key={i}
                variants={itemRightVariants}
                className="flex items-start gap-3 mb-8 last:mb-0"
              >
                <span className="text-green-500 font-bold text-xl flex-shrink-0 mt-1">✓</span>
                <p className="text-[#2d2d2d] text-base leading-snug">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-10 px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#3d2000] font-bold uppercase text-xl tracking-wide mb-3">
          Quick Return On Investment Within 6 Months To 1 Year!
        </p>
        <p className="text-[#3d2000] text-base mb-6">
          That all depends on your location of course! Use calculator below to estimate your returns.
        </p>
        <p className="text-[#3d2000] font-bold uppercase tracking-widest text-sm cursor-pointer">
          Calculate Your Profit ↓
        </p>
      </motion.div>
    </>
  );
}
