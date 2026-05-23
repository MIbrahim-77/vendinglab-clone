'use client';

import { motion, type Variants } from 'framer-motion';

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const leftFeatures = [
  'Exceptional design attracts customers',
  'Saves high renovation costs',
  'Plug-and-play for swift startup',
  'Significant monthly rental savings',
];

const rightFeatures = [
  'Saves time on cafe planning & design',
  'Kiosk arrives ready to operate',
  'Operates with minimal staff count',
  'Real-time sales monitoring through your PC or Mobile',
];

export default function IceCreamFeaturesSection() {
  return (
    <section className="bg-slate-200 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInScale}
          className="text-4xl font-bold text-[#2d2d2d] text-center mb-16"
        >
          How CafeXbot&apos;s Ice Cream Bot Makes Money For You
        </motion.h2>

        <div className="grid grid-cols-3 items-center gap-8">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="flex flex-col justify-center"
          >
            {leftFeatures.map((feature, i) => (
              <div key={i} className="flex items-start justify-end gap-3 mb-10 last:mb-0">
                <p className="text-[#2d2d2d] text-base font-medium text-right">{feature}</p>
                <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
              </div>
            ))}
          </motion.div>

          {/* Center Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInScale}
            className="flex justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357168/xbot-Carnival-bot_gjnzkc.webp"
              alt="CafeXbot Ice Cream Robot"
              referrerPolicy="no-referrer"
              className="w-72 h-auto object-contain mx-auto"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="flex flex-col justify-center"
          >
            {rightFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 mb-10 last:mb-0">
                <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
                <p className="text-[#2d2d2d] text-base font-medium text-left">{feature}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-[#2d2d2d] font-bold uppercase text-2xl tracking-widest text-center mt-16"
        >
          = HIGH ROI &amp; LOW EXPENSES
        </motion.p>
      </div>
    </section>
  );
}
