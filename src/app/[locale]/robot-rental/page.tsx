import type { Metadata } from 'next';
import InquiryForm from './InquiryForm';
import RobotRentalVideoHeroSection from '@/components/rental/RobotRentalVideoHeroSection';
import RobotRentalIntroSection from '@/components/rental/RobotRentalIntroSection';
import RobotRentalManufacturedBanner from '@/components/rental/RobotRentalManufacturedBanner';
import RobotRentalModelsSection from '@/components/rental/RobotRentalModelsSection';
import RobotRentalBrandingSection from '@/components/rental/RobotRentalBrandingSection';
import RobotRentalProductVarietySection from '@/components/rental/RobotRentalProductVarietySection';
import RobotRentalPastEventsSection from '@/components/rental/RobotRentalPastEventsSection';
import RobotRentalExistingLocationsSection from '@/components/rental/RobotRentalExistingLocationsSection';
import RobotRentalContactSection from '@/components/rental/RobotRentalContactSection';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Robot Rental in Dubai, UAE | VLT Robotics',
  description:
    'Rent CafeXbot for corporate events, exhibitions, weddings and more in Dubai, UAE. Setup included, technical support on-site.',
  openGraph: {
    title: 'Robot Rental in Dubai, UAE | VLT Robotics',
    description:
      'Rent CafeXbot for corporate events, exhibitions, weddings and more in Dubai, UAE.',
    images: [
      {
        url: 'https://vendinglab.tech/wp-content/uploads/2023/10/xbotcafe-final.png',
        width: 1952,
        height: 523,
        alt: 'CafeXbot Robot Rental Dubai',
      },
    ],
  },
};

// ─── Static content ───────────────────────────────────────────────────────────

const RENTAL_OPTIONS = [
  {
    label: 'Daily',
    description: 'Perfect for one-day events, product launches, and pop-ups.',
    icon: '📅',
  },
  {
    label: 'Weekly',
    description: 'Ideal for exhibitions, trade shows, and multi-day conferences.',
    icon: '🗓️',
  },
  {
    label: 'Monthly',
    description: 'Best for long-term activations, hotel lobbies, and office deployments.',
    icon: '📆',
  },
];

const FEATURES = [
  'Full setup and installation included',
  'On-site technical support available',
  'Consumables (coffee beans, cups, etc.) available',
  'Branded wrapping and customisation options',
  'Remote monitoring and real-time reporting',
  'Flexible delivery across UAE',
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RobotRentalPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <RobotRentalVideoHeroSection />
      <RobotRentalIntroSection />
      <RobotRentalManufacturedBanner />
      <RobotRentalModelsSection />
      <RobotRentalBrandingSection />
      <RobotRentalProductVarietySection />
      <RobotRentalPastEventsSection />
      <RobotRentalExistingLocationsSection />
      <RobotRentalContactSection />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-medium">Available in Dubai, UAE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Robot Rental in{' '}
            <span className="text-yellow-400">Dubai, UAE</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Elevate your next event with CafeXbot — the fully autonomous robotic cafe.
            Perfect for corporate gatherings, exhibitions, weddings, and brand activations.
          </p>
        </div>
      </section>

      {/* ── Rental options ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {RENTAL_OPTIONS.map((option) => (
            <div
              key={option.label}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-yellow-400/20 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{option.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{option.label} Rental</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features + Form ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Features list */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-yellow-400" />
              <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
                What is included
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Everything you need for a seamless experience
            </h2>
          </div>

          <ul className="space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300 text-sm leading-snug">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { value: '50+', label: 'Events served' },
              { value: '10+', label: 'Countries' },
              { value: '24h', label: 'Response time' },
              { value: '2015', label: 'Est. in Dubai' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 rounded-xl p-4 text-center border border-white/5"
              >
                <p className="text-2xl font-bold text-yellow-400">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry form */}
        <div className="lg:col-span-3">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
