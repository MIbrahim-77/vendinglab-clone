'use client';

// TODO: Connect to Payload CMS to fetch live location data
// import { getPayloadClient } from '@/lib/payload';
// const locations = await payload.find({ collection: 'locations' });

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, type Variants } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Location {
  id: string;
  name: string;
  city: string;
  country: string;
  countryCode: string;
  type: 'Mall' | 'Hotel' | 'Office' | 'Airport' | 'Exhibition' | 'Hospital';
  status: 'Active' | 'Coming Soon';
  description: string;
  flag: string;
}

// ─── Static location data ─────────────────────────────────────────────────────

const LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'Dubai Mall',
    city: 'Dubai',
    country: 'UAE',
    countryCode: 'AE',
    type: 'Mall',
    status: 'Active',
    description: 'CafeXbot serving premium coffee to millions of visitors at the world\'s largest mall.',
    flag: '🇦🇪',
  },
  {
    id: '2',
    name: 'DIFC Innovation Hub',
    city: 'Dubai',
    country: 'UAE',
    countryCode: 'AE',
    type: 'Office',
    status: 'Active',
    description: 'Automated barista serving the Dubai International Financial Centre\'s fintech community.',
    flag: '🇦🇪',
  },
  {
    id: '3',
    name: 'Abu Dhabi Airport',
    city: 'Abu Dhabi',
    country: 'UAE',
    countryCode: 'AE',
    type: 'Airport',
    status: 'Active',
    description: 'Contactless coffee service for travellers at Abu Dhabi International Airport.',
    flag: '🇦🇪',
  },
  {
    id: '4',
    name: 'Marina Bay Sands',
    city: 'Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    type: 'Hotel',
    status: 'Active',
    description: 'Luxury robotic cafe experience at one of Singapore\'s most iconic destinations.',
    flag: '🇸🇬',
  },
  {
    id: '5',
    name: 'Jewel Changi Airport',
    city: 'Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    type: 'Airport',
    status: 'Active',
    description: 'CafeXbot delighting travellers at the world\'s most awarded airport.',
    flag: '🇸🇬',
  },
  {
    id: '6',
    name: 'Riyadh Season',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    type: 'Exhibition',
    status: 'Active',
    description: 'Seasonal deployment at Saudi Arabia\'s largest entertainment and cultural festival.',
    flag: '🇸🇦',
  },
  {
    id: '7',
    name: 'Qatar National Convention Centre',
    city: 'Doha',
    country: 'Qatar',
    countryCode: 'QA',
    type: 'Exhibition',
    status: 'Active',
    description: 'Serving delegates at major international conferences and exhibitions in Doha.',
    flag: '🇶🇦',
  },
  {
    id: '8',
    name: 'London Tech Hub',
    city: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    type: 'Office',
    status: 'Coming Soon',
    description: 'Upcoming deployment at a leading technology campus in central London.',
    flag: '🇬🇧',
  },
  {
    id: '9',
    name: 'Paris La Defense',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    type: 'Office',
    status: 'Coming Soon',
    description: 'CafeXbot coming to Europe\'s largest business district in 2025.',
    flag: '🇫🇷',
  },
];

// ─── Type badge colours ───────────────────────────────────────────────────────

const TYPE_COLORS: Record<Location['type'], string> = {
  Mall: 'bg-purple-400/10 text-purple-300 border-purple-400/20',
  Hotel: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  Office: 'bg-sky-400/10 text-sky-300 border-sky-400/20',
  Airport: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
  Exhibition: 'bg-orange-400/10 text-orange-300 border-orange-400/20',
  Hospital: 'bg-red-400/10 text-red-300 border-red-400/20',
};

// ─── Animation variants ───────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// ─── Location card ────────────────────────────────────────────────────────────

function LocationCard({ loc }: { loc: Location }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group bg-[#111] border border-white/5 hover:border-white/15 rounded-2xl p-5 flex flex-col gap-3 transition-colors duration-300"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl" role="img" aria-label={loc.country}>{loc.flag}</span>
          <div>
            <h3 className="text-white font-bold text-sm leading-snug">{loc.name}</h3>
            <p className="text-gray-500 text-xs">{loc.city}, {loc.country}</p>
          </div>
        </div>

        {/* Status badge */}
        <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${
          loc.status === 'Active'
            ? 'bg-green-400/10 text-green-400 border-green-400/20'
            : 'bg-gray-400/10 text-gray-400 border-gray-400/20'
        }`}>
          {loc.status === 'Active' && (
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" aria-hidden="true" />
          )}
          {loc.status}
        </span>
      </div>

      {/* Type badge */}
      <span className={`self-start text-xs font-medium px-2.5 py-1 rounded-full border ${TYPE_COLORS[loc.type]}`}>
        {loc.type}
      </span>

      {/* Description */}
      <p className="text-gray-400 text-xs leading-relaxed">{loc.description}</p>
    </motion.div>
  );
}

// ─── Country summary ──────────────────────────────────────────────────────────

function CountrySummary() {
  const countries = Array.from(new Set(LOCATIONS.map((l) => l.country)));
  const active = LOCATIONS.filter((l) => l.status === 'Active').length;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
      {[
        { value: String(LOCATIONS.length), label: 'Total locations' },
        { value: String(active), label: 'Active deployments' },
        { value: String(countries.length), label: 'Countries' },
        { value: '10+', label: 'Distributors worldwide' },
      ].map((stat) => (
        <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-center">
          <p className="text-2xl font-bold text-yellow-400">{stat.value}</p>
          <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Map placeholder ──────────────────────────────────────────────────────────

function MapPlaceholder() {
  return (
    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#111] border border-white/5 mb-14 flex items-center justify-center">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Location dots */}
      {[
        { top: '38%', left: '52%', label: 'UAE' },
        { top: '42%', left: '58%', label: 'SG' },
        { top: '36%', left: '50%', label: 'SA' },
        { top: '37%', left: '54%', label: 'QA' },
        { top: '28%', left: '47%', label: 'UK' },
        { top: '30%', left: '48%', label: 'FR' },
      ].map((dot) => (
        <div
          key={dot.label}
          className="absolute"
          style={{ top: dot.top, left: dot.left }}
          aria-hidden="true"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
          </span>
        </div>
      ))}

      <div className="relative z-10 text-center px-4">
        <p className="text-white font-semibold text-sm mb-1">Global Deployment Map</p>
        <p className="text-gray-500 text-xs">
          {/* TODO: Replace with Mapbox or Google Maps embed */}
          Interactive map coming soon — connect Mapbox with NEXT_PUBLIC_MAPBOX_TOKEN
        </p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function LocationsContent() {
  const locale = useLocale();
  const activeLocations = LOCATIONS.filter((l) => l.status === 'Active');
  const comingSoon = LOCATIONS.filter((l) => l.status === 'Coming Soon');

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-10" aria-label="Breadcrumb">
          <Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/about`} className="hover:text-white transition-colors">About</Link>
          <span>/</span>
          <span className="text-gray-300">Our Existing Locations</span>
        </nav>

        {/* Page header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-yellow-400" />
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
              Worldwide
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Our Existing Locations
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-gray-400 text-base max-w-xl leading-relaxed">
            CafeXbot is deployed across malls, airports, hotels, and offices in the UAE,
            Singapore, and beyond. New locations are added regularly.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <CountrySummary />

        {/* Map */}
        <MapPlaceholder />

        {/* Active locations */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            Active Deployments
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeLocations.map((loc) => (
              <LocationCard key={loc.id} loc={loc} />
            ))}
          </div>
        </motion.div>

        {/* Coming soon */}
        {comingSoon.length > 0 && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400" aria-hidden="true" />
              Coming Soon
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {comingSoon.map((loc) => (
                <LocationCard key={loc.id} loc={loc} />
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white">Want CafeXbot in your location?</h3>
            <p className="text-gray-400 text-sm mt-1">
              Enquire about rental, investment, or franchise opportunities.
            </p>
          </div>
          <Link
            href={`/${locale}/robot-rental`}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition-colors text-sm flex-shrink-0"
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
