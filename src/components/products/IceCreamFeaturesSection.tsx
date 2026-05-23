'use client';

import { motion, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

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
    <section className="bg-slate-200 py-8 md:py-12 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInScale}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2d2d2d] text-center mb-8 md:mb-12 lg:mb-16"
        >
          How CafeXbot&apos;s Ice Cream Bot Makes Money For You
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 lg:gap-8">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {leftFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 mb-6 last:mb-0 lg:justify-end">
                <p className="text-[#2d2d2d] text-sm md:text-base font-medium text-left lg:text-right">{feature}</p>
                <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 mt-1.5 order-first lg:order-last" />
              </div>
            ))}
          </motion.div>

          {/* Center Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInScale}
            className="flex justify-center order-1 lg:order-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357168/xbot-Carnival-bot_gjnzkc.webp"
              alt="CafeXbot Ice Cream Robot"
              referrerPolicy="no-referrer"
              className="w-48 md:w-56 lg:w-72 h-auto object-contain mx-auto"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col justify-center order-3"
          >
            {rightFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 mb-6 last:mb-0">
                <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />
                <p className="text-[#2d2d2d] text-sm md:text-base font-medium text-left">{feature}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-[#2d2d2d] font-bold uppercase text-base sm:text-lg md:text-xl lg:text-2xl tracking-widest text-center mt-8 md:mt-16"
        >
          = HIGH ROI &amp; LOW EXPENSES
        </motion.p>
      </div>
    </section>
  );
}
