import { COMPARISONS, OFFERS } from "@/lib/data";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CheckCircle2, ArrowRight, Trophy, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ComparisonPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { slug } = await params;
  const comparison = COMPARISONS.find((c) => c.slug === slug);

  if (!comparison) {
    notFound();
  }

  const offerA = OFFERS.find((o) => o.slug === comparison.offerASlug);
  const offerB = OFFERS.find((o) => o.slug === comparison.offerBSlug);
  const winner = OFFERS.find((o) => o.slug === comparison.winnerSlug);

  if (!offerA || !offerB || !winner) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider block mb-2">
            Side-by-Side Comparison
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {offerA.name} vs. {offerB.name} (2026 Comparison)
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Which platform offers better payouts, lower withdrawal thresholds, and fewer screenouts?
          </p>
        </div>

        {/* Winner Banner */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-6 rounded-3xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Editor&apos;s Choice Winner</span>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{winner.name}</h2>
            </div>
          </div>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 max-w-md text-center sm:text-right">
            {comparison.verdict}
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm mb-12">
          <div className="grid grid-cols-3 bg-zinc-100 dark:bg-zinc-800 p-4 text-xs font-bold text-zinc-700 dark:text-zinc-300">
            <div>Feature / Metric</div>
            <div className="text-center">{offerA.name}</div>
            <div className="text-center">{offerB.name}</div>
          </div>

          <div className="divide-y divide-zinc-100 dark:divide-zinc-800 text-xs">
            {Object.entries(comparison.comparisonData).map(([metric, values], idx) => (
              <div key={idx} className="grid grid-cols-3 p-4 items-center">
                <div className="font-semibold text-zinc-600 dark:text-zinc-400">{metric}</div>
                <div className="text-center font-medium text-zinc-900 dark:text-white">{values[0]}</div>
                <div className="text-center font-medium text-zinc-900 dark:text-white">{values[1]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">{offerA.name}</h3>
              <p className="text-xs text-zinc-500 mb-6">{offerA.tagline}</p>
            </div>
            <a
              href={`/go/${offerA.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors"
            >
              Join {offerA.name} →
            </a>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">{offerB.name}</h3>
              <p className="text-xs text-zinc-500 mb-6">{offerB.tagline}</p>
            </div>
            <a
              href={`/go/${offerB.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors"
            >
              Join {offerB.name} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
