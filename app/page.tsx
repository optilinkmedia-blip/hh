import Link from "next/link";
import { OFFERS, BLOG_POSTS, COUNTRIES } from "@/lib/data";
import { OfferCard } from "@/components/OfferCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AiAdvisor } from "@/components/AiAdvisor";
import { ShieldCheck, Search, Calculator, ArrowRight, CheckCircle2, Sparkles, Globe, Award } from "lucide-react";

export default function HomePage() {
  const topOffers = OFFERS.slice(0, 4);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50 mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Student Side Hustle & Survey Guide 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-4xl mx-auto mb-6 leading-tight">
              Evaluate Legitimate Ways to Earn Money Online Without the Hype.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Written for students and young adults. Honest reviews, country-specific eligibility, realistic earning estimates, and zero get-rich-quick claims.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/finder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all shadow-sm"
              >
                <Search className="w-4 h-4" /> Open Survey Finder
              </Link>
              <Link
                href="/calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              >
                <Calculator className="w-4 h-4 text-emerald-600" /> Calculate Earnings
              </Link>
            </div>

            {/* Trust Metric Badges */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col items-center">
                <span className="font-bold text-2xl text-zinc-900 dark:text-white">8+</span>
                <span className="text-xs text-zinc-500">Verified Platforms</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-2xl text-emerald-600">100%</span>
                <span className="text-xs text-zinc-500">Free to Join</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-2xl text-zinc-900 dark:text-white">5</span>
                <span className="text-xs text-zinc-500">Country Hubs</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-2xl text-zinc-900 dark:text-white">No Hype</span>
                <span className="text-xs text-zinc-500">Real Data Only</span>
              </div>
            </div>
          </div>
        </section>

        {/* Country Hub Selector */}
        <section className="py-12 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  Select Your Country Hub
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Survey eligibility, payout rates, and top panels vary by geography. Choose your region.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {COUNTRIES.map((country) => (
                <Link
                  key={country.code}
                  href={`/country/${country.code}`}
                  className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 hover:border-emerald-600 transition-all flex flex-col items-center text-center group"
                >
                  <span className="text-4xl mb-2">{country.flagEmoji}</span>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {country.name}
                  </h3>
                  <span className="text-[11px] text-zinc-500 mt-1">{country.currency}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Rated Platforms */}
        <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  Top-Rated Survey Platforms (2026 Verified)
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Ranked by trust score, payout reliability, and active student reviews.
                </p>
              </div>
              <Link
                href="/finder"
                className="mt-4 md:mt-0 text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                View All Platforms <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </section>

        {/* Student Finance Blog / Guides Section */}
        <section className="py-16 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  Student Side Hustle Guides
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Practical financial advice written to grade 7-8 readability standards.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                All Articles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-zinc-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-base text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="px-6 pb-6 pt-2 text-xs font-semibold text-zinc-500 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
                    <span>By {post.author}</span>
                    <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">Read guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AI Advisor Section */}
        <section className="py-16 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AiAdvisor />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-zinc-500">
                Straight answers about online survey earnings, taxes, and security.
              </p>
            </div>

            <FaqAccordion
              faqs={[
                {
                  question: "How much money can I realistically make with online surveys?",
                  answer: "Most active users earn between $30 and $150 per month by dedicating 15-30 minutes daily across 2-3 trusted platforms. It is a reliable way to cover small personal expenses, not a full-time income source."
                },
                {
                  question: "Are online survey sites safe and legitimate?",
                  answer: "Established platforms like Swagbucks and Pinecone Research are completely legitimate and backed by major market research firms. Always check for a verified badge and never pay upfront fees."
                },
                {
                  question: "Why do I keep getting disqualified from surveys?",
                  answer: "Disqualification happens when your demographic profile (age, region, profession) doesn't match what the market research client is looking for. Keeping your profile updated helps reduce screenouts."
                },
                {
                  question: "Do I need to pay taxes on survey earnings?",
                  answer: "In many jurisdictions, supplemental side hustle income below certain thresholds ($600 in the US) may not trigger formal 1099 forms, but you are legally responsible for reporting all earnings according to local tax laws."
                }
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
