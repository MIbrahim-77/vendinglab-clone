'use client';

import { motion, type Variants } from 'framer-motion';

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const bulletItem: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const bulletContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const bullets = [
  'You value your time',
  'You love passive income',
  'You appreciate easy scalability',
  'You love to save money on renovation',
  'You want to diversify your business portfolio',
  'You are a pioneer spirit that likes Coffee, Robots and new technologies...',
];

function scrollToCalculator() {
  const el = document.getElementById('calculate-profit');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function CoffeeRobotForYouSection() {
  return (
    <>
      {/* Part 1: Gray section with image + bullets */}
      <section className="bg-[#9e9e9e] py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Automated Café Business Is For You If
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Image */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="w-full lg:w-[45%]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357108/business-fit-you-cmp_z4jusm.webp"
                alt="Business person with laptop"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-contain object-bottom"
              />
            </motion.div>

            {/* Right: Bullets */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={bulletContainer}
              className="w-full lg:w-[55%]"
            >
              {bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  variants={bulletItem}
                  className="flex items-start gap-4 mb-5"
                >
                  <span className="w-4 h-4 rounded-full bg-[#7b2d8b] flex-shrink-0 mt-1" />
                  <p className="text-white text-base font-medium">{bullet}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 2: Golden CTA bar */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-10 px-8 text-center"
      >
        <p className="text-[#3d2000] font-bold uppercase text-xl tracking-wide mb-3">
          QUICK RETURN ON INVESTMENT WITHIN 6 MONTHS TO 1 YEAR!
        </p>
        <p className="text-[#3d2000] text-base mb-6">
          Use the calculator below to estimate the returns of your automated coffee system.
        </p>
        <button
          type="button"
          onClick={scrollToCalculator}
          className="text-[#3d2000] font-bold uppercase tracking-widest text-sm cursor-pointer hover:opacity-80 transition"
        >
          CALCULATE YOUR PROFIT ↓
        </button>
      </motion.div>

      {/* Part 3: Next section heading */}
      <div className="bg-white py-8 text-center">
        <h3 className="text-3xl font-bold text-[#2d2d2d]">
          Average Profitability of Robotic Coffee Cup
        </h3>
      </div>
    </>
  );
}
