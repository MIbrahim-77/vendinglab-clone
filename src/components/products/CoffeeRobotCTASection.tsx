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

export default function CoffeeRobotCTASection() {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <h2 className="text-4xl font-bold leading-tight mb-6 text-[#2d2d2d] text-center lg:text-left">
            Your Own Highly Profitable Coffee Robot Business That Is More Than A Barista Robot
          </h2>

          <p className="text-base text-gray-600 text-center lg:text-left max-w-md mb-8">
            Dive into the ultra-profitable world of owning a Coffee Robot business. Furthermore,{' '}
            <span className="text-[#f97316] font-semibold">Join the Robot Revolution</span>
            {' '}and become a proud Barista Robot owner.
          </p>

          <button
            className="bg-red-600 text-white border-2 border-yellow-500 rounded-full px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition shadow-md"
            type="button"
          >
            REQUEST BROCHURE
          </button>
        </motion.div>

        {/* Right: Images */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="w-full lg:w-1/2 relative flex items-center justify-center h-60 sm:h-80 lg:h-96"
        >
          {/* Blur/secondary image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357110/coffee-cup-blur_bp51yg.webp"
            alt="Coffee cup blur"
            referrerPolicy="no-referrer"
            className="w-32 sm:w-48 h-32 sm:h-48 object-contain opacity-60 absolute top-0 right-8"
          />

          {/* Main image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357112/xbot-coffee-cup_m1zzik.webp"
            alt="Xbot Coffee Cup"
            referrerPolicy="no-referrer"
            className="w-48 sm:w-72 h-48 sm:h-72 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
