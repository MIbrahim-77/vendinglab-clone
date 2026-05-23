'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function IceCreamCTABox() {
  const locale = useLocale();

  return (
    <div className="relative bg-slate-200 py-6 md:py-8 px-4 md:px-8">
      <motion.div
        className="max-w-4xl mx-auto bg-stone-800 border-2 border-yellow-600 rounded-2xl py-8 md:py-12 px-6 md:px-8 lg:px-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-white font-bold uppercase text-lg sm:text-xl md:text-2xl tracking-wide mb-4 md:mb-6">
          CafeXbot Is More Than Just Ice Cream Robot
        </h3>
        <p className="text-white text-sm md:text-base text-center leading-relaxed max-w-2xl mx-auto mb-6 md:mb-10">
          CafeXbot is the only multiproduct robotic cafe in the world. We highly advise
          you to capitalize on this. The more product variety you sell, the higher your ROI.
        </p>
        <Link
          href={`/${locale}/products/xbot-robotic-cafe`}
          className="inline-block bg-transparent border-2 border-yellow-500 text-white font-semibold rounded-full px-8 md:px-12 py-3 md:py-4 text-sm md:text-base hover:bg-yellow-900/20 transition-colors"
        >
          See Full Spec Xbot Robotic Cafe
        </Link>
      </motion.div>
      <div className="absolute bottom-0 right-4 md:right-8 text-3xl md:text-6xl">👜</div>
    </div>
  );
}
