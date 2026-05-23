'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NewsItem {
  publication: string;
  quote: string;
  logoUrl?: string;
  articleUrl: string;
}

interface NewsArticlesProps {
  articles?: NewsItem[];
}

// ─── Default data ─────────────────────────────────────────────────────────────

const DEFAULT_ARTICLES: NewsItem[] = [
  {
    publication: 'Benzinga',
    quote: 'CafeXbot by VLT Robotics, is winning in terms of profit across major international markets',
    articleUrl: 'https://www.benzinga.com/partner/general/25/11/48896064/coffee-robot-vs-robotic-cafe-which-one-wins-the-profit-game',
  },
  {
    publication: 'Medium',
    quote: 'Whether you seek lower costs, faster growth, or unique service, CafeXbot makes a strong case',
    articleUrl: 'https://medium.com/@theventurecation/10-reasons-to-invest-in-a-robotic-cafe-right-now-e9d22734eb77',
  },
  {
    publication: 'Khaleej Times',
    quote: 'CafeXbot robotic barista café is now rapidly making waves across major international markets',
    articleUrl: 'https://www.khaleejtimes.com/kt-network/vlt-robotics-celebrates-four-years-by-expanding-its-robotic-barista-caf-empire',
  },
  {
    publication: 'TechBullion',
    quote: 'CafeXbot by Vending Lab Tech can outperform traditional vending machines by a wide margin',
    articleUrl: 'https://techbullion.com/robotic-cafe-unplugged-inside-the-rise-of-cafexbot-and-the-future-of-fb-kiosks/',
  },
  {
    publication: 'Digital Journal',
    quote: 'In a world of impersonal service, robotic kiosks craft memorable, joyful moments for every customer',
    articleUrl: 'https://www.digitaljournal.com/tech-science/robotic-barista-vending-machine-becomes-experiential/article',
  },
  {
    publication: 'Khaleej Times',
    quote: 'A robotic hand waves, dances, and entertains you while your coffee brews—fun meets technology',
    articleUrl: 'https://www.khaleejtimes.com/travel/electronic-sim-robotic-vending-machine-5-technologies-that-could-revolutionise-travel-showcased-at',
  },
  {
    publication: 'World Today News',
    quote: "Dubai's Xbot Café wows all visitors as the only kiosk featuring a talking, interactive robot experience",
    articleUrl: 'https://www.world-today-news.com/arab-media-forum-showcases-innovative-culinary-concepts-and-success-stories-of-dubais-proudly-from-dubai-initiative/',
  },
  {
    publication: 'Curly Tales',
    quote: 'Meet Icealice, the first AI mannequin robot serving ice cream using gestures, voice, and personality',
    articleUrl: 'https://curlytales.com/dubais-global-village-gets-uaes-first-ice-cream-serving-ai-robot/',
  },
];

// ─── Publication initials avatar (fallback when no logoUrl) ──────────────────

function PublicationAvatar({ name }: { name: string }) {
  // Take up to 2 words, first letter each
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <span className="text-sm font-bold text-white tracking-wide">
      {initials}
    </span>
  );
}

// ─── Animation variants ───────────────────────────────────────────────────────

const sectionVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

// ─── Quote icon ───────────────────────────────────────────────────────────────

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
    </svg>
  );
}

// ─── External link icon ───────────────────────────────────────────────────────

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ─── News card ────────────────────────────────────────────────────────────────

function NewsCard({ item, readLabel }: { item: NewsItem; readLabel: string }) {
  return (
    <motion.a
      variants={cardVariants}
      href={item.articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
    >
      {/* Publication header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo or initials avatar */}
          {item.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.logoUrl}
              alt={item.publication}
              className="h-7 w-auto object-contain"
            />
          ) : (
            <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
              <PublicationAvatar name={item.publication} />
            </div>
          )}
          <span className="text-sm font-semibold text-gray-800">
            {item.publication}
          </span>
        </div>

        {/* External link indicator */}
        <span className="text-gray-300 group-hover:text-yellow-500 transition-colors">
          <ExternalLinkIcon />
        </span>
      </div>

      {/* Decorative quote mark */}
      <QuoteIcon className="w-6 h-6 text-yellow-400/60 -mb-1" />

      {/* Quote */}
      <blockquote className="flex-1 text-sm text-gray-600 italic leading-relaxed">
        {item.quote}
      </blockquote>

      {/* Read article CTA */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow-600 group-hover:text-yellow-500 transition-colors mt-auto pt-1">
        {readLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </motion.a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function NewsArticles({ articles }: NewsArticlesProps) {
  const t = useTranslations('news');
  const items = articles?.length ? articles : DEFAULT_ARTICLES;

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14"
        >
          <motion.div variants={headerVariants} className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-yellow-400" />
            <span className="text-yellow-600 text-sm font-semibold uppercase tracking-widest">
              {t('section_label')}
            </span>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl leading-tight"
          >
            {t('section_title')}
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((item) => (
            <NewsCard
              key={item.publication}
              item={item}
              readLabel={t('read_article')}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
