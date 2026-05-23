'use client';

import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

// ─── Inline SVG icons ─────────────────────────────────────────────────────────

function VoiceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white flex-shrink-0" aria-hidden="true">
      <line x1="2" y1="12" x2="2" y2="12" />
      <line x1="6" y1="8" x2="6" y2="16" />
      <line x1="10" y1="5" x2="10" y2="19" />
      <line x1="14" y1="8" x2="14" y2="16" />
      <line x1="18" y1="10" x2="18" y2="14" />
      <line x1="22" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white flex-shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white flex-shrink-0" aria-hidden="true">
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
  );
}

const FEATURES = [
  { label: 'VOICE RECOGNITION', Icon: VoiceIcon },
  { label: 'MULTI PRODUCT CAFES', Icon: GridIcon },
  { label: 'AUTOMATED PROCESS', Icon: PowerIcon },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ReliableTechnologies() {
  return (
    <section className="bg-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">

        {/* ── ROW 1: Text left + Images right ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left — text */}
          <motion.div variants={fadeUp} className="text-center lg:text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Reliable Technologies Inside
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Since the start of the manufacturing of our first robotic cafe model Ice Alice in 2015{' '}
              <span className="text-amber-500 font-medium">
                our technical team have experimented with hundreds of different technologies as parts of our robotic cafes.
              </span>
              {' '}As a robotic cafe manufacturer, we&apos;ve stopped our choices on the technologies that have great quality-price ratio to bring the best investment value to our partners around the globe.
            </p>
          </motion.div>

          {/* Right — dual images in one container */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden shadow-lg flex flex-col sm:flex-row h-auto sm:h-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356443/ice-alice-1_pkqhxk.webp"
              alt="Ice Alice - Previous robotic cafe model by VLT Robotics"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = 'https://picsum.photos/600/400?random=5'; }}
              className="w-full sm:w-1/2 h-40 sm:h-full object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356439/2-scaled_aohk9k.webp"
              alt="CafeXbot - New robotic cafe model by VLT Robotics"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = 'https://picsum.photos/600/400?random=6'; }}
              className="w-full sm:w-1/2 h-40 sm:h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* ── ROW 2: Dark features bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 rounded-3xl py-8 px-8 sm:px-12"
          style={{ backgroundColor: '#3d3028' }}
        >
          <h3 className="text-white font-bold text-2xl text-center mb-8">
            Manufacturing Unique Robotic Cafes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl py-5 px-6 border w-full"
                style={{
                  backgroundColor: '#4a3b30',
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
              >
                <Icon />
                <span className="text-white font-bold uppercase tracking-wider text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
