'use client'
import { useState } from 'react'

function InputSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step: number
  prefix?: string
}) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      <div className="flex items-center">
        {prefix && (
          <span className="bg-zinc-700 px-3 py-3 rounded-l-lg text-gray-400 border-r border-zinc-600 text-sm">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full bg-zinc-800 border border-zinc-600 ${prefix ? 'rounded-r-lg' : 'rounded-lg'} px-4 py-3 text-white text-base focus:outline-none focus:border-orange-500`}
        />
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-2 accent-orange-500 appearance-none h-1 bg-zinc-600 rounded cursor-pointer"
        style={{ accentColor: '#f97316' }}
      />
    </div>
  )
}

export default function IceCreamProfitCalculator() {
  const [softServePrice, setSoftServePrice] = useState(4)
  const [softServeCups, setSoftServeCups] = useState(120)
  const [milkshakePrice, setMilkshakePrice] = useState(5)
  const [milkshakeCups, setMilkshakeCups] = useState(80)
  const [frozenYogurtPrice, setFrozenYogurtPrice] = useState(4)
  const [frozenYogurtCups, setFrozenYogurtCups] = useState(100)
  const [rentalPrice, setRentalPrice] = useState(2000)
  const [staffExpenses, setStaffExpenses] = useState(3000)

  const dailyRevenue =
    softServePrice * softServeCups + milkshakePrice * milkshakeCups + frozenYogurtPrice * frozenYogurtCups
  const monthlyRevenue = dailyRevenue * 30
  const monthlyExpenses = rentalPrice + staffExpenses
  const monthlyProfit = monthlyRevenue - monthlyExpenses

  return (
    <section className="bg-black py-8 md:py-12 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-2 md:mb-4">
          Monthly CafeXbot Ice Cream Robot Profit Calculator
        </h2>
        <p className="text-gray-400 text-sm md:text-base text-center mb-6 md:mb-8 lg:mb-12">
          Estimate your potential earnings with our automated ice cream solution.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Calculator Card */}
          <div className="w-full lg:w-[65%] bg-zinc-900 rounded-2xl p-6 md:p-8">
            <h3 className="text-orange-500 font-bold text-xl mb-8">
              Ice Cream Robot Calculator
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <InputSlider
                label="Soft Serve Price ($)"
                value={softServePrice}
                onChange={setSoftServePrice}
                min={1}
                max={20}
                step={0.5}
                prefix="$"
              />
              <InputSlider
                label="Soft Serves Sold Daily"
                value={softServeCups}
                onChange={setSoftServeCups}
                min={0}
                max={500}
                step={10}
              />
              <InputSlider
                label="Milkshake Price ($)"
                value={milkshakePrice}
                onChange={setMilkshakePrice}
                min={1}
                max={20}
                step={0.5}
                prefix="$"
              />
              <InputSlider
                label="Milkshakes Sold Daily"
                value={milkshakeCups}
                onChange={setMilkshakeCups}
                min={0}
                max={500}
                step={10}
              />
              <InputSlider
                label="Frozen Yogurt Price ($)"
                value={frozenYogurtPrice}
                onChange={setFrozenYogurtPrice}
                min={1}
                max={20}
                step={0.5}
                prefix="$"
              />
              <InputSlider
                label="Frozen Yogurts Sold Daily"
                value={frozenYogurtCups}
                onChange={setFrozenYogurtCups}
                min={0}
                max={500}
                step={10}
              />
              <InputSlider
                label="Rental Price Per Month ($)"
                value={rentalPrice}
                onChange={setRentalPrice}
                min={0}
                max={10000}
                step={100}
                prefix="$"
              />
              <InputSlider
                label="Staff Expenses Per Month ($)"
                value={staffExpenses}
                onChange={setStaffExpenses}
                min={0}
                max={20000}
                step={100}
                prefix="$"
              />
            </div>
          </div>

          {/* Right: Results Card */}
          <div className="w-full lg:w-[35%] bg-gradient-to-b from-yellow-400 to-amber-500 rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-[#3d2000] font-bold text-base md:text-lg lg:text-xl mb-2 md:mb-4">
                Projected Monthly Gross Profit
              </h3>
              <p
                className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 md:mb-2 ${monthlyProfit < 0 ? 'text-red-600' : 'text-[#3d2000]'}`}
              >
                ${monthlyProfit.toLocaleString()}
              </p>
              <p className="text-[#3d2000] text-sm mb-8">
                Estimated based on 30 days operation.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[#3d2000] text-sm">Monthly Revenue:</span>
                  <span className="text-[#3d2000] font-bold text-sm">
                    ${monthlyRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#3d2000] text-sm">Monthly Expenses:</span>
                  <span className="text-red-600 font-bold text-sm">
                    ${monthlyExpenses.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-amber-600/30 rounded-lg p-3 text-sm text-[#3d2000] mb-6">
                Note: This is an estimation. Actual results may vary based on location and traffic.
              </div>
            </div>

            <a
              href="/robot-rental"
              className="block w-full bg-amber-300 hover:bg-amber-200 text-amber-900 font-bold px-6 py-3 rounded-xl text-center transition-colors"
            >
              Get Detailed Report
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
