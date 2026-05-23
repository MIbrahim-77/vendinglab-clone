'use client';

import { motion } from 'framer-motion';

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const TAGS = [
  ['Iced Coffee', 'Hot Coffee', 'Snacks'],
  ['Flavored Milk', 'Hot Tea', 'Hot Chocolate'],
  ['Matcha Tea', 'Toppings'],
];

export default function CoffeeRobotVarietySection() {
  return (
    <section className="bg-gray-100 py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-[#2d2d2d] mb-4">
            Coffee Robot Product Variety
          </h2>

          <p className="text-gray-500 text-base text-center max-w-sm mb-8">
            CafeXbot Barista Robot is equipped with a highly reliable and fully
            automated Franke Coffee system that can make a variety of drinks
            beyond just coffee.
          </p>

          <div className="flex flex-wrap gap-3">
            {TAGS.flat().map((tag) => (
              <button
                key={tag}
                type="button"
                className="bg-transparent border-2 border-orange-400 rounded-xl text-[#f97316] font-semibold text-base px-6 py-3 hover:bg-orange-50 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="flex-1 flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357113/xbot-coffee-cups_ewr41p.webp"
            alt="CafeXbot branded coffee cups"
            referrerPolicy="no-referrer"
            className="w-full max-w-md h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
