"use client";

import { useState } from "react";
import { OFFERS, COUNTRIES, Offer } from "@/lib/data";
import { OfferCard } from "@/components/OfferCard";
import { Search, SlidersHorizontal, CheckCircle2, DollarSign, Globe, Smartphone, ShieldCheck, Sparkles } from "lucide-react";

export default function SurveyFinderPage() {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [selectedPayout, setSelectedPayout] = useState("all");
  const [selectedDevice, setSelectedDevice] = useState("all");
  const [incomeGoal, setIncomeGoal] = useState(50);
  const [studentOnly, setStudentOnly] = useState(false);

  // Filter offers
  const filteredOffers = OFFERS.filter((offer) => {
    // Country filter
    if (selectedCountry && !offer.countries.includes(selectedCountry)) {
      return false;
    }
    // Payout preference
    if (selectedPayout !== "all") {
      if (selectedPayout === "paypal" && !offer.payoutType.toLowerCase().includes("paypal")) return false;
      if (selectedPayout === "giftcards" && !offer.payoutType.toLowerCase().includes("gift")) return false;
    }
    // Device
    if (selectedDevice === "mobile" && !offer.mobileApp) {
      return false;
    }
    return true;
  }).sort((a, b) => b.trustScore - a.trustScore);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200/50 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Matching Algorithm
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Survey Finder Engine
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Tell us your preferences and country to instantly find the highest-rated, verified survey platforms matching your profile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm h-fit space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <h2 className="font-bold text-sm flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-600" /> Filter Preferences
              </h2>
              <button
                onClick={() => {
                  setSelectedCountry("us");
                  setSelectedPayout("all");
                  setSelectedDevice("all");
                  setIncomeGoal(50);
                  setStudentOnly(false);
                }}
                className="text-[11px] text-emerald-600 hover:underline font-semibold"
              >
                Reset
              </button>
            </div>

            {/* Country Selector */}
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                Your Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flagEmoji} {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Payout Preference */}
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                Preferred Payout
              </label>
              <select
                value={selectedPayout}
                onChange={(e) => setSelectedPayout(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold"
              >
                <option value="all">Any Payout Type</option>
                <option value="paypal">PayPal Cash</option>
                <option value="giftcards">Gift Cards / Vouchers</option>
              </select>
            </div>

            {/* Device */}
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                Primary Device
              </label>
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold"
              >
                <option value="all">Any Device (Desktop & Mobile)</option>
                <option value="mobile">Dedicated Mobile App Required</option>
              </select>
            </div>

            {/* Monthly Goal Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Target Monthly Goal
                </label>
                <span className="text-xs font-bold text-emerald-600">${incomeGoal}/mo</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="10"
                value={incomeGoal}
                onChange={(e) => setIncomeGoal(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between bg-white dark:bg-zinc-900 px-6 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                Found <strong className="text-zinc-900 dark:text-white">{filteredOffers.length}</strong> matching platforms for your criteria.
              </span>
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> All verified
              </span>
            </div>

            {filteredOffers.length === 0 ? (
              <div className="bg-white dark:bg-zinc-900 p-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
                <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">No exact matches found for this filter combination.</p>
                <p className="text-xs text-zinc-500">Try broadening your country or payout preferences.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredOffers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
