import { OFFERS } from "@/lib/data";
import { OfferCard } from "@/components/OfferCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Star, ShieldCheck, CheckCircle2, XCircle, ArrowRight, Clock, DollarSign, Globe } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const offer = OFFERS.find((o) => o.slug === slug);

  if (!offer) {
    notFound();
  }

  const alternatives = OFFERS.filter((o) => o.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-zinc-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/finder" className="hover:text-zinc-900 dark:hover:text-white">Reviews</Link>
          <span>/</span>
          <span className="text-emerald-600 font-semibold">{offer.name}</span>
        </div>

        {/* Review Hero Header */}
        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-5xl p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                {offer.logo}
              </span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-extrabold">{offer.name} Review (2026)</h1>
                  {offer.payoutProofVerified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Payouts
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-500">{offer.tagline}</p>
              </div>
            </div>

            <div className="flex items-center bg-amber-50 dark:bg-amber-950/30 px-4 py-2 rounded-2xl text-amber-800 dark:text-amber-300 font-bold text-lg gap-1.5 shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              {offer.rating} <span className="text-xs text-zinc-500 font-normal">/ 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs mb-8">
            <div>
              <span className="text-zinc-400 block mb-1">Trust Score</span>
              <span className="font-bold text-emerald-600 text-sm">{offer.trustScore} / 100</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">Min Payout</span>
              <span className="font-bold text-zinc-900 dark:text-white text-sm">${offer.payoutMin.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">Est. Earnings</span>
              <span className="font-bold text-zinc-900 dark:text-white text-sm">{offer.avgEarningsMonth}</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">Ease of Use</span>
              <span className="font-bold text-zinc-900 dark:text-white text-sm">{offer.easeOfUse}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">Reviewed by Campus Cash World Research Team</span>
            <a
              href={`/go/${offer.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              Visit {offer.name} Official Site <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-sm text-emerald-600 flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-4 h-4" /> Pros
            </h3>
            <ul className="space-y-3 text-xs text-zinc-700 dark:text-zinc-300">
              {offer.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span> {pro}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-sm text-rose-600 flex items-center gap-2 mb-4">
              <XCircle className="w-4 h-4" /> Cons
            </h3>
            <ul className="space-y-3 text-xs text-zinc-700 dark:text-zinc-300">
              {offer.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Review Description */}
        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 mb-8 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">In-Depth Analysis</h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {offer.description}
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Our editorial team independently evaluates payout speeds, customer support response times, and frequency of screening disqualifications. {offer.name} maintains a robust {offer.trustScore}/100 trust rating among student communities.
          </p>
        </div>

        {/* FAQs */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 mb-12">
          <h3 className="text-xl font-bold mb-6">Frequently Asked Questions about {offer.name}</h3>
          <FaqAccordion faqs={offer.faqs} />
        </div>

        {/* Alternatives */}
        <div>
          <h3 className="text-xl font-bold mb-6">Alternative Platforms to Consider</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {alternatives.map((alt) => (
              <OfferCard key={alt.id} offer={alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
