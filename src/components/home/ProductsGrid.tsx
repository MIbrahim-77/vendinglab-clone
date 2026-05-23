'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, type Variants } from 'framer-motion';

export interface Product {
  title: string;
  slug: string;
  imageUrl: string;
  imageAlt?: string;
}

interface ProductsGridProps {
  products?: Product[];
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    title: 'CafeXbot Coffee Barista Robot',
    slug: 'xbot-coffee-barista-robot',
    imageUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356445/Xbot-Mocca-2_wndj9h.webp',
    imageAlt: 'CafeXbot Coffee Barista Robot',
  },
  {
    title: 'CafeXbot Ice Cream Robot',
    slug: 'xbot-ice-cream-robot',
    imageUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356445/xbot-Carnival-bot_mczhni.webp',
    imageAlt: 'CafeXbot Ice Cream Robot',
  },
  {
    title: 'CafeXbot Robotic Cafe',
    slug: 'xbot-robotic-cafe',
    imageUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356439/5-scaled_oh9h7j.webp',
    imageAlt: 'CafeXbot Robotic Cafe',
  },
];

const sectionVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function ProductCard({ product, href }: { product: Product; href: string }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image area — white background, product shown cleanly */}
      <div className="flex items-center justify-center bg-white p-6 pt-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.imageAlt ?? product.title}
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = 'https://picsum.photos/600/400?random=99'; }}
          className="w-full h-64 object-contain p-4"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col items-center gap-4 px-6 pb-8 pt-2 flex-1">
        <h3 className="text-gray-900 text-xl font-bold text-center leading-snug">
          {product.title}
        </h3>
        <Link
          href={href}
          className="text-sm font-semibold uppercase tracking-wider text-amber-500 hover:text-amber-600 transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const locale = useLocale();
  const items = products?.length ? products : DEFAULT_PRODUCTS;

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — centered */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
          >
            Our Latest Innovations as a Robotic Cafe Manufacturer
          </motion.h2>
          <motion.p variants={headerVariants} className="text-base sm:text-lg">
            <span className="text-amber-500 font-semibold">
              10 countries distributorships signed in first 6 months
            </span>
            <span className="text-gray-700"> of production since March 2023.</span>
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {items.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              href={`/${locale}/products/${product.slug}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
