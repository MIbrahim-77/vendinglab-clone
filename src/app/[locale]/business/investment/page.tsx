import type { Metadata } from 'next';
import Link from 'next/link';
import InvestmentOpportunitiesHeroSection from '@/components/business/InvestmentOpportunitiesHeroSection';
import MultiproductRoboticCafeSection from '@/components/business/MultiproductRoboticCafeSection';
import BusinessOpportunitiesHowSection from '@/components/business/BusinessOpportunitiesHowSection';
import EarnWithCafeXbotSection from '@/components/business/EarnWithCafeXbotSection';
import WherePlaceCafeSection from '@/components/business/WherePlaceCafeSection';
import MonitorRoboticCafesSection from '@/components/business/MonitorRoboticCafesSection';
import InvestmentOpportunityCostSection from '@/components/business/InvestmentOpportunityCostSection';
import WhyDontUseOpportunitiesSection from '@/components/business/WhyDontUseOpportunitiesSection';
import UnlimitedFutureInvestmentSection from '@/components/business/UnlimitedFutureInvestmentSection';
import ContactVLTRoboticsSection from '@/components/business/ContactVLTRoboticsSection';

export const metadata: Metadata = {
  title: 'Investment Opportunities',
  description:
    'Purchase CafeXbot and place it in a busy location. Enjoy more than 100% ROI operating automatically with VLT Robotics.',
};

export default async function InvestmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 pb-24">
      <InvestmentOpportunitiesHeroSection />
      <MultiproductRoboticCafeSection />
      <BusinessOpportunitiesHowSection />
      <EarnWithCafeXbotSection />
      <WherePlaceCafeSection />
      <MonitorRoboticCafesSection />
      <InvestmentOpportunityCostSection />
      <WhyDontUseOpportunitiesSection />
      <UnlimitedFutureInvestmentSection />
      <ContactVLTRoboticsSection />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-10">
          <Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/business`} className="hover:text-white transition-colors">Business</Link>
          <span>/</span>
          <span className="text-gray-300">Investment Opportunities</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-yellow-400" />
          <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">Business</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Investment Opportunities
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
          Purchase CafeXbot to place it in a busy location. Enjoy more than 100% ROI
          operating automatically — no staff, no overhead, just revenue.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {[
            { value: '100%+', label: 'Target ROI' },
            { value: '24/7', label: 'Autonomous operation' },
            { value: '2 weeks', label: 'Delivery time' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-yellow-400">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <Link
          href={`/${locale}/robot-rental`}
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
