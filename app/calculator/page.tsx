"use client";

import { useState } from "react";
import { Calculator, DollarSign, Clock, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EarningsCalculatorPage() {
  const [minutesPerDay, setMinutesPerDay] = useState(25);
  const [activeSites, setActiveSites] = useState(3);
  const [countryMultiplier, setCountryMultiplier] = useState(1.0);

  // Calculation logic
  // Base hourly rate ~$3.50 to $5.00/hour for legitimate survey platforms
  const hourlyRate = 4.20;
  const hoursPerMonth = (minutesPerDay / 60) * 30;
  const rawEarnings = hoursPerMonth * hourlyRate * countryMultiplier * (1 + (activeSites - 1) * 0.15);
  const realisticMin = Math.round(rawEarnings * 0.7);
  const realisticMax = Math.round(rawEarnings * 1.3);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200/50 mb-4">
            <Calculator className="w-3.5 h-3.5" /> Realistic Financial Estimator
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Survey Earnings Calculator
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            No hype or guaranteed windfalls. Calculate realistic monthly earnings based on time investment and active research panels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Daily Time Investment
                </label>
                <span className="text-xs font-bold text-emerald-600">{minutesPerDay} mins / day</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={minutesPerDay}
                onChange={(e) => setMinutesPerDay(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
              <span className="text-[10px] text-zinc-400 mt-1 block">Recommended: 20-30 mins to avoid survey fatigue.</span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Active Platforms Used
                </label>
                <span className="text-xs font-bold text-emerald-600">{activeSites} platforms</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={activeSites}
                onChange={(e) => setActiveSites(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
              <span className="text-[10px] text-zinc-400 mt-1 block">Using 2-3 platforms helps avoid dry spells.</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                Region / Country Rate
              </label>
              <select
                value={countryMultiplier}
                onChange={(e) => setCountryMultiplier(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold"
              >
                <option value={1.0}>🇺🇸 United States (Highest Inventory)</option>
                <option value={0.95}>🇬🇧 United Kingdom</option>
                <option value={0.90}>🇨🇦 Canada</option>
                <option value={0.85}>🇦🇺 Australia / Ireland</option>
              </select>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between text-center">
            <div>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">
                Estimated Monthly Return
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 my-4">
                ${realisticMin} – ${realisticMax}
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Based on ~{Math.round(hoursPerMonth)} hours of total monthly participation at realistic survey payout rates.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-6">
              <Link
                href="/finder"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Match with Top Platforms <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
