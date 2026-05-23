'use client';

import { motion } from 'framer-motion';

const COFFEE_ROWS = [
  { label: 'Coffee Ground', value: '$0.35', highlight: false },
  { label: 'Water 100ml', value: '$0.02', highlight: false },
  { label: 'Milk 60ml', value: '$0.06', highlight: false },
  { label: 'Paper Cup', value: '$0.05', highlight: false },
  { label: 'Sugar', value: '$0.03', highlight: false },
  { label: 'Cost Of One Cup Of Coffee', value: '$0.51', highlight: false },
  { label: 'Price of one cup in the park', value: '$5-6', highlight: false },
  { label: 'Profit per cup', value: '$4.49-5.49', highlight: false },
  { label: 'Daily Profit With 100 Cups Sold', value: '$449-549', highlight: true },
  { label: 'Daily Profit With 200 Cups Sold', value: '$898-1098', highlight: true },
];

const ICE_CREAM_ROWS = [
  { label: 'Ice Cream Powder 30gm', value: '$0.3', highlight: false },
  { label: 'Water 100ml', value: '$0.02', highlight: false },
  { label: 'Paper Cup', value: '$0.05', highlight: false },
  { label: 'Spoon', value: '$0.02', highlight: false },
  { label: 'Cost Of One Cup Of Ice Cream', value: '$0.39', highlight: false },
  { label: 'Price of one cup in the park', value: '$5-6', highlight: false },
  { label: 'Profit per cup', value: '$4.61-5.61', highlight: false },
  { label: 'Daily Profit With 100 Cups Sold', value: '$461-561', highlight: true },
  { label: 'Daily Profit With 200 Cups Sold', value: '$922-1122', highlight: true },
];

const CAKES_ROWS = [
  { label: 'Cost Of Cake', value: '$1', highlight: false },
  { label: 'Paper Box', value: '$0.05', highlight: false },
  { label: 'Total Cost', value: '$1.05', highlight: false },
  { label: 'Price of one cake', value: '$4', highlight: false },
  { label: 'Profit per cake', value: '$2.95', highlight: false },
  { label: 'Daily Profit With 100 Cakes Sold', value: '$59', highlight: true },
  { label: 'Daily Profit With 200 Cakes Sold', value: '$147.5', highlight: true },
];

const COLUMNS = [
  { heading: 'COFFEE / HOT CHOCOLATE', rows: COFFEE_ROWS },
  { heading: 'ICE CREAM / FROZEN YOGHURT', rows: ICE_CREAM_ROWS },
  { heading: 'CAKES / BISCUITS / MACARONS', rows: CAKES_ROWS },
];

export default function RoboticCafeProfitSection() {
  return (
    <section className="bg-slate-200 py-16 px-8">
      <motion.h2
        className="text-gray-800 font-bold text-4xl text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Average Profitability Calculation
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {COLUMNS.map((col, i) => (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <p className="text-orange-500 font-bold uppercase text-sm tracking-wide text-center mb-4">
              {col.heading}
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              {col.rows.map((row, j) =>
                row.highlight ? (
                  <div key={j} className="flex justify-between mb-2">
                    <span className="text-orange-500 font-bold text-sm">{row.label}</span>
                    <span className="text-orange-500 font-bold text-sm">{row.value}</span>
                  </div>
                ) : (
                  <div key={j} className="flex items-center mb-2">
                    <span className="text-gray-700 text-sm whitespace-nowrap">{row.label}</span>
                    <span className="flex-1 border-b-2 border-dashed border-gray-300 mx-2" />
                    <span className="text-gray-800 font-semibold text-sm whitespace-nowrap">{row.value}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
