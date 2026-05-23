'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

interface RowOpportunity {
  iconUrl: string;
  line1: string;
  line2?: string;
  line2Color?: string;
  buttonText: string;
  buttonStyle: string;
  note?: string;
  href: string;
}

function RowCard({ opportunity, index }: { opportunity: RowOpportunity; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index}
      className="bg-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={opportunity.iconUrl}
        alt={opportunity.buttonText}
        referrerPolicy="no-referrer"
        className="w-20 h-20 object-contain flex-shrink-0"
      />

      <div className="flex-1 text-center sm:text-left px-0 sm:px-8">
        <p className="text-gray-800 font-medium text-base">{opportunity.line1}</p>
        {opportunity.line2 && (
          <p className={`font-medium ${opportunity.line2Color || 'text-orange-500'}`}>{opportunity.line2}</p>
        )}
      </div>

      <div className="flex flex-col items-center sm:items-end gap-2 flex-shrink-0">
        <Link
          href={opportunity.href}
          className={`${opportunity.buttonStyle} w-full sm:w-auto text-center`}
        >
          {opportunity.buttonText}
        </Link>
        {opportunity.note && (
          <p className="text-orange-500 text-xs italic">{opportunity.note}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function BusinessSection() {
  const locale = useLocale();

  const opportunities: RowOpportunity[] = [
    {
      iconUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356439/5-scaled_oh9h7j.webp',
      line1: 'Purchase CafeXbot to place it in a busy location.',
      line2: 'Enjoy more than 100% ROI operating automatically.',
      buttonText: 'Investment Opportunities',
      buttonStyle: 'border-2 border-yellow-600 text-yellow-800 bg-transparent rounded-full px-6 py-3 font-medium hover:bg-yellow-50 inline-block',
      note: "* Subject to the location's footfall performance",
      href: `/${locale}/business/investment`,
    },
    {
      iconUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356439/5-scaled_oh9h7j.webp',
      line1: 'Get your own CafeXbot and let us operate it for you in a chosen location.',
      line2: 'Currently available in Dubai and calls are open for Singapore.',
      buttonText: 'Passive Investment Opportunities',
      buttonStyle: 'bg-red-600 text-white rounded-full px-6 py-3 font-medium hover:bg-red-700 inline-block',
      href: `/${locale}/business/passive-income`,
    },
    {
      iconUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356439/5-scaled_oh9h7j.webp',
      line1: 'Purchase minimal quantity and become the exclusive distributor.',
      line2: 'Sell Xbot to other investors in your area and profit from it.',
      buttonText: 'Distributorship Opportunities',
      buttonStyle: 'border-2 border-yellow-600 text-yellow-800 rounded-full px-6 py-3 font-medium hover:bg-yellow-50 inline-block',
      href: '#',
    },
    {
      iconUrl: 'https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779356439/5-scaled_oh9h7j.webp',
      line1: 'Franchise Xbot and capitalise on our rich F&B expertise.',
      line2: 'Operate with ease while we take some of the load.',
      buttonText: 'Franchise Opportunities',
      buttonStyle: 'border-2 border-yellow-600 text-yellow-800 rounded-full px-6 py-3 font-medium hover:bg-yellow-50 inline-block',
      href: '#',
    },
  ];

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-bold text-black text-center mb-10"
        >
          Business Opportunities With VLT Robotics
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {opportunities.map((opportunity, i) => (
            <RowCard key={opportunity.buttonText} opportunity={opportunity} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
