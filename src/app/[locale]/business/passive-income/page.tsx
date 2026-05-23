import type { Metadata } from 'next';
import Link from 'next/link';
import PassiveIncomeHeroSection from '@/components/business/PassiveIncomeHeroSection';
import MaximizeReturnsSection from '@/components/business/MaximizeReturnsSection';
import PrimeLocationsSection from '@/components/business/PrimeLocationsSection';
import AchieveEffortlessPassiveSection from '@/components/business/AchieveEffortlessPassiveSection';
import ExploreCafeXbotModelsSection from '@/components/business/ExploreCafeXbotModelsSection';
import PassiveIncomeModelsSection from '@/components/business/PassiveIncomeModelsSection';
import RevenueSharingModelSection from '@/components/business/RevenueSharingModelSection';
import ExistingLocationsSection from '@/components/business/ExistingLocationsSection';
import PassiveIncomeContactSection from '@/components/business/PassiveIncomeContactSection';

export const metadata: Metadata = {
  title: 'Passive Income Opportunities',
  description:
    'Get your own CafeXbot and let VLT Robotics operate it for you in a chosen location. Currently available in Dubai and Singapore.',
};

export default async function PassiveIncomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 pb-24">
      <PassiveIncomeHeroSection />
      <MaximizeReturnsSection />
      <PrimeLocationsSection />
      <AchieveEffortlessPassiveSection />
      <ExploreCafeXbotModelsSection />
      <PassiveIncomeModelsSection />
      <RevenueSharingModelSection />
      <ExistingLocationsSection />
      <PassiveIncomeContactSection />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-10">
          <Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/business`} className="hover:text-white transition-colors">Business</Link>
          <span>/</span>
          <span className="text-gray-300">Passive Income Opportunities</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-yellow-400" />
          <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">Business</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Passive Income Opportunities
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
          Get your own CafeXbot and let us operate it for you in a chosen location.
          Earn passive income while we handle everything — currently available in
          Dubai and Singapore.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {[
            { value: '0', label: 'Staff required' },
            { value: 'Dubai & SG', label: 'Available now' },
            { value: 'Monthly', label: 'Revenue payouts' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] border border-white/5 rounded-2xl p-6 text-center">
              <p className="text-2xl font-bold text-yellow-400">{stat.value}</p>
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
