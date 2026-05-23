'use client';

import { motion } from 'framer-motion';

const LEFT_FEATURES = [
  'Cool Design attracts the audience',
  'Kiosk arrives ready to operate',
  'Monitor sales in real time from your PC or Mobile',
];

const RIGHT_FEATURES = [
  'Plug & play to start',
  'Works with 1 or no staff',
  'Low rental & staff numbers skyrocket your returns',
];

function ToggleIcon() {
  return (
    <svg width="36" height="20" viewBox="0 0 36 20" className="flex-shrink-0">
      <rect width="36" height="20" rx="10" fill="#f97316" />
      <circle cx="26" cy="10" r="8" fill="white" />
    </svg>
  );
}

export default function RoboticCafeBestSection() {
  return (
    <section
      className="py-20 px-8 relative"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357302/Xbot-Robotic-cafes_yayr8v.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative max-w-5xl mx-auto bg-[rgba(40,25,10,0.88)] rounded-2xl p-6 md:px-12 md:py-10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-orange-400 font-bold text-2xl mb-8">
          CafeXbot Is Probably The Best Robotic Cafe On The Planet!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          <div className="flex flex-col gap-6">
            {LEFT_FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <ToggleIcon />
                <span className="text-white text-base font-medium">{f}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {RIGHT_FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <ToggleIcon />
                <span className="text-white text-base font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
