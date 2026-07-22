import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, Clock, DollarSign } from "lucide-react";
import { Offer } from "@/lib/data";

interface OfferCardProps {
  offer: Offer;
  priority?: boolean;
}

export function OfferCard({ offer, priority = false }: OfferCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
              {offer.logo}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                  {offer.name}
                </h3>
                {offer.payoutProofVerified && (
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Trust Score: <span className="text-emerald-600 font-bold">{offer.trustScore}/100</span>
              </p>
            </div>
          </div>
          <div className="flex items-center bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-lg text-amber-800 dark:text-amber-300 font-bold text-xs gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            {offer.rating}
          </div>
        </div>

        <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
          {offer.tagline}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4 bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 text-xs">
          <div>
            <span className="text-zinc-400 block mb-0.5">Est. Earnings</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">{offer.avgEarningsMonth}</span>
          </div>
          <div>
            <span className="text-zinc-400 block mb-0.5">Min Payout</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">${offer.payoutMin.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-1 mb-6 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>Time: {offer.timePerDay}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-zinc-400" />
            <span>Payouts: {offer.payoutType}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <Link
          href={`/reviews/${offer.slug}`}
          className="flex-1 text-center py-2 px-3 rounded-xl border border-zinc-200 dark:border-zinc-700 font-semibold text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          Read Review
        </Link>
        <a
          href={`/go/${offer.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
        >
          Visit Site <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
