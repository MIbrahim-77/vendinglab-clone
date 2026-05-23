'use client';

import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function ManufacturingVideo() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl font-bold text-black text-center mb-8"
        >
          Sneak Peek Into VLT Robotic Cafe Manufacturing Facility
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full lg:w-3/5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356444/IDC-CIO-Summit-2026-1_m3jkxo.webp"
              alt="VLT Robotics Manufacturing Facility"
              referrerPolicy="no-referrer"
              className="rounded-2xl w-full h-72 object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full lg:w-2/5"
          >
            <div className="bg-slate-100 rounded-2xl p-4 sm:p-8 h-full flex items-center">
              <p className="text-gray-600 text-base leading-relaxed">
                Containers like this from all over the world arrive to our Robotics Manufacturing Lab in Dubai, UAE every week. They consist parts and furniture for the most unique robotic cafes Xbot.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
