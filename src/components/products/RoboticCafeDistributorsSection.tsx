'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RoboticCafeDistributorsSection() {
  const locale = useLocale();

  return (
    <section className="bg-gray-100 py-20 px-8">
      <motion.div
        className="w-[70%] mx-auto bg-stone-800 border-2 border-yellow-600 rounded-2xl py-14 px-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-bold text-4xl mb-6">
          Our Distributors Worldwide
        </h2>

        <p className="text-gray-200 text-base text-center max-w-2xl mx-auto leading-relaxed mb-10">
          Check if your city or country already has our distributor or become one after purchasing
          a minimum order of our self-service café kiosks.
        </p>

        <Link
          href={`/${locale}/contact`}
          className="inline-block bg-transparent border-2 border-yellow-500 text-white font-semibold rounded-full px-12 py-4 text-base hover:bg-yellow-900/20 transition-colors"
        >
          Distributers
        </Link>
      </motion.div>
    </section>
  );
}
