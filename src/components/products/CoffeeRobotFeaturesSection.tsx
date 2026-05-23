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
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const leftFeatures = [
  'Exceptional design attracts customers',
  'Saves high renovation costs',
  'Plug-and-play for swift startup',
  'CafeXbot arrives ready to operate',
];

const rightFeatures = [
  'Saves time on cafe planning & design',
  'Significant monthly rental savings',
  'Operates with minimal staff count',
  'Real-time sales monitoring through your PC or Mobile',
];

export default function CoffeeRobotFeaturesSection() {
  return (
    <section className="bg-[#1a0f0a] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInScale}
          className="text-4xl font-bold text-white text-center max-w-4xl mx-auto mb-16"
        >
          How CafeXbot Barista Robot Makes Money For You, Beyond Just Being A Coffee Robot
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="flex flex-col justify-center order-2 lg:order-none"
          >
            {leftFeatures.map((feature, i) => (
              <div key={i} className="flex items-center lg:justify-end gap-3 mb-10 last:mb-0">
                <p className="text-[#f97316] text-base font-medium lg:text-right">{feature}</p>
                <span className="text-[#f97316] text-lg leading-none">●</span>
              </div>
            ))}
          </motion.div>

          {/* Center Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInScale}
            className="flex justify-center order-1 lg:order-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357114/Xbot-Mocca-Bot_xoxomk.webp"
              alt="CafeXbot Barista Robot"
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
            className="flex flex-col justify-center order-3 lg:order-none"
          >
            {rightFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 mb-10 last:mb-0">
                <span className="text-[#f97316] text-lg leading-none">●</span>
                <p className="text-[#f97316] text-base font-medium text-left">{feature}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
