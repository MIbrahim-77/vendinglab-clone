'use client';

import { motion } from 'framer-motion';

const FOOD_ITEMS = [
  { label: 'ICE CREAM', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357300/Vanilla-Stawberry-Cup_aysejz.webp' },
  { label: 'COFFEE', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357246/Coffee-cup-white_gqqbjs.webp' },
  { label: 'HOT CHOCOLATE', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357244/Coffee-Black-cup_mnxlfc.webp' },
  { label: 'FLAVORED MILK', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357293/Milkshake_wrh0co.webp' },
  { label: 'COOKED FOOD', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357247/Cooked-Food_g50p5x.webp' },
  { label: 'TEA', image: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357294/pngwing.com-1_dzob1r.webp' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function RoboticCafeVarietySection() {
  return (
    <section className="bg-slate-200 py-20 px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#2d2d2d] font-bold text-4xl text-center mb-6"
      >
        Unmatched Variety Of Robotic Cafe Food Options
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-600 text-base text-center max-w-3xl mx-auto mb-16 leading-relaxed"
      >
        Choose how you want your CafeXbot Robot Cafe build. Have it come with{' '}
        <span className="text-orange-500 font-medium">
          coffee, iced coffee, hot chockolate, milkshakes, ice cream, toppings, tea and snack boxes.
        </span>{' '}
        Or, as we suggest, have all of them in one cafe for maximum servings outcome in a day.
      </motion.p>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex-[0_0_45%] flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357291/Latte-bot_gewihv.webp"
            alt="CafeXbot Robotic Cafe"
            className="w-full h-auto object-contain max-h-96"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          className="flex-[0_0_55%] grid grid-cols-2 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {FOOD_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              className="flex flex-col items-center justify-between h-44 rounded-xl p-4"
              style={{
                background: '#2d1f14',
                border: '1px solid #c9a84c',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-28 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-white uppercase font-bold text-sm text-center tracking-wide">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
