'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, type Variants } from 'framer-motion';

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-yellow-400" />
      <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">{text}</span>
    </div>
  );
}

// ─── Timeline data ────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: '2015',
    title: 'Founded in Dubai',
    description:
      'VLT Robotics was established in Dubai, UAE. The first model, Ice Alice — an AI mannequin robot serving ice cream — was developed and deployed.',
  },
  {
    year: '2023',
    title: 'CafeXbot World Launch',
    description:
      'The new CafeXbot model was unveiled at the Tomorrow Conference in Dubai, marking a major leap in robotic cafe technology with full barista capabilities.',
  },
  {
    year: '2023',
    title: '10 Countries in 6 Months',
    description:
      'Within just 6 months of production, VLT Robotics signed distributorship agreements across 10 countries — a record for the robotic F&B industry.',
  },
  {
    year: '2024',
    title: 'Global Event Presence',
    description:
      'CafeXbot was showcased at 25+ major international events including GITEX Global, IDC CIO Summit, Dubai Food Festival, and World Future Energy Summit.',
  },
  {
    year: '2025',
    title: 'Expanding to New Markets',
    description:
      'Active deployments across UAE, Singapore, and Europe. New franchise and passive income programmes launched for global investors.',
  },
  {
    year: '2026',
    title: 'Next Generation',
    description:
      'Development of next-generation CafeXbot models with enhanced AI, expanded menu capabilities, and deeper integration with smart building systems.',
  },
];

// ─── Technology partners ──────────────────────────────────────────────────────

const TECHNOLOGIES = [
  {
    name: 'Franke',
    role: 'Coffee Systems',
    description:
      'Swiss-engineered Franke coffee machines power the espresso core of CafeXbot, delivering consistent barista-quality results at scale.',
  },
  {
    name: 'PASMO',
    role: 'Vending Technology',
    description:
      'PASMO payment and dispensing systems ensure reliable, contactless transactions across all CafeXbot deployments worldwide.',
  },
  {
    name: 'UFactory',
    role: 'Robotic Arms',
    description:
      'UFactory collaborative robotic arms provide the precise, safe, and fluid movements that make CafeXbot a spectacle as much as a service.',
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '10+', label: 'Years of experience' },
  { value: '10', label: 'Countries with distributors' },
  { value: '25+', label: 'Major events attended' },
  { value: '2', label: 'Weeks to manufacture' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutContent() {
  const locale = useLocale();

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://vendinglab.tech/wp-content/uploads/2023/11/mocca-bot-xbot-tomorrow-conference.webp"
          alt="VLT Robotics CafeXbot at Tomorrow Conference"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-yellow-400" />
              <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
                Est. 2015 — Dubai, UAE
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              About VLT Robotics
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-gray-300 text-lg max-w-xl leading-relaxed"
            >
              One of the oldest robotic cafe manufacturers in the world, pioneering
              autonomous F&B technology since 2015.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-white/5 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="py-8 px-6 text-center"
              >
                <p className="text-3xl font-bold text-yellow-400">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Company story ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeLeft}>
              <SectionLabel text="Our Story" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                From Ice Alice to CafeXbot — A Decade of Innovation
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  VLT Robotics was founded in Dubai in 2015 with a bold vision: to make
                  robotic cafe technology accessible to businesses worldwide. Our first
                  creation, <span className="text-white font-medium">Ice Alice</span> — the
                  world's first AI mannequin robot serving ice cream using gestures, voice,
                  and personality — proved that robotics could be both functional and
                  captivating.
                </p>
                <p>
                  In 2023, we unveiled <span className="text-white font-medium">CafeXbot</span>,
                  a fully autonomous robotic cafe capable of serving 60+ drink varieties
                  without any human intervention. Within six months of production, we had
                  signed distributorship agreements across 10 countries — a milestone that
                  validated our global vision.
                </p>
                <p>
                  Today, VLT Robotics stands as one of the oldest and most experienced
                  robotic cafe manufacturers in the world, with deployments across the UAE,
                  Singapore, and beyond.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeLeft} className="mt-8">
              <Link
                href={`/${locale}/about/locations`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                View our existing locations
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative h-[420px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png"
              alt="CafeXbot by VLT Robotics"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain bg-[#111]"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-[#111] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel text="Our Mission" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight"
            >
              Bringing Robotic Cafe Technology to Global Markets
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-400 text-base max-w-2xl mx-auto leading-relaxed"
            >
              We believe the future of food and beverage is autonomous, efficient, and
              delightful. Our mission is to manufacture world-class robotic cafe solutions
              that empower entrepreneurs, investors, and businesses to thrive in the new
              economy — without the overhead of traditional staffing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel text="Milestones" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white max-w-xl leading-tight">
            A Decade of Firsts
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" aria-hidden="true" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-10"
          >
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`pl-12 sm:pl-0 sm:w-[calc(50%-2rem)] ${isLeft ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                    <div className={`bg-[#111] border border-white/5 hover:border-yellow-400/20 transition-colors rounded-2xl p-5 ${isLeft ? 'sm:ml-auto' : ''}`}>
                      <span className="inline-block text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400 border-2 border-[#0a0a0a] mt-5 flex-shrink-0" aria-hidden="true" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section className="bg-[#111] border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel text="Technology" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white max-w-xl leading-tight">
              Reliable Technologies Inside
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-gray-400 text-sm max-w-xl leading-relaxed">
              CafeXbot is built on a foundation of proven, industry-leading components
              from trusted global partners.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {TECHNOLOGIES.map((tech) => (
              <motion.div
                key={tech.name}
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/5 hover:border-yellow-400/20 transition-colors rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                    <span className="text-yellow-400 text-xs font-bold">{tech.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{tech.name}</p>
                    <p className="text-yellow-400 text-xs">{tech.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Manufacturing ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative h-[360px] rounded-2xl overflow-hidden order-last lg:order-first"
          >
            <Image
              src="https://vendinglab.tech/wp-content/uploads/2023/10/Untitled-design-32-e1697442556922.png"
              alt="VLT Robotics manufacturing in Dubai"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5 bg-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-full">
              Made in Dubai, UAE
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeLeft}>
              <SectionLabel text="Manufacturing" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                2-Week Manufacturing Process in Dubai
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Every CafeXbot unit is manufactured in our Dubai facility with a
                  streamlined 2-week production cycle. This rapid turnaround allows us to
                  respond quickly to global demand while maintaining the highest quality
                  standards.
                </p>
                <p>
                  Our manufacturing process integrates precision engineering with rigorous
                  quality control at every stage — from component sourcing to final
                  calibration and testing before shipment.
                </p>
              </div>
            </motion.div>

            <motion.ul variants={stagger} className="mt-8 space-y-3">
              {[
                'Component sourcing from certified global suppliers',
                'In-house assembly and integration in Dubai',
                'Full software calibration and stress testing',
                'Quality certification before every shipment',
                'On-site installation and staff training included',
              ].map((item) => (
                <motion.li key={item} variants={fadeLeft} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Ready to work with us?</h2>
            <p className="text-gray-400 text-sm mt-1">Explore investment, rental, and franchise opportunities.</p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href={`/${locale}/business`}
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Business Opportunities
            </Link>
            <Link
              href={`/${locale}/robot-rental`}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Rent a Robot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
