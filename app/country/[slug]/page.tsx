import { COUNTRIES, OFFERS } from "@/lib/data";
import { OfferCard } from "@/components/OfferCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Globe, ShieldCheck, ArrowRight, DollarSign, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CountryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CountryHubPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = COUNTRIES.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  const eligibleOffers = OFFERS.filter((o) => o.countries.includes(country.code));

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Country Header */}
        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{country.flagEmoji}</span>
              <div>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Country Hub</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                  Best Paid Survey Sites in {country.name} (2026)
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              {country.description} Average verified earnings range between <strong className="text-emerald-600">{country.avgSurveyPay}</strong> per survey.
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center shrink-0 w-full md:w-64">
            <span className="text-xs text-zinc-400 block mb-1">Currency & Payouts</span>
            <span className="text-xl font-bold text-zinc-900 dark:text-white">{country.currency}</span>
            <span className="text-[11px] text-emerald-600 mt-2 block font-semibold flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Localized Offers Only
            </span>
          </div>
        </div>

        {/* Eligible Offers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Verified Survey Platforms for {country.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibleOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>

        {/* Local FAQ */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-xl font-bold mb-6 text-center">Frequently Asked Questions in {country.name}</h3>
          <FaqAccordion
            faqs={[
              {
                question: `Are survey earnings taxable in ${country.name}?`,
                answer: `Tax regulations depend on your total supplemental income and employment status. Casual side earnings below standard annual tax-free allowances typically do not require filing, but check local tax guidelines.`
              },
              {
                question: `Which payout method is most popular in ${country.name}?`,
                answer: `PayPal and local Amazon gift cards are the most popular and secure redemption methods for residents in ${country.name}.`
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
