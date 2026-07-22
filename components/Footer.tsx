import Link from "next/link";
import { ShieldCheck, AlertTriangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 text-sm border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-4 mb-10 flex items-start gap-3 text-xs text-zinc-300">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Affiliate Disclosure:</span> Campus Cash World contains affiliate links. When you sign up through our recommendations, we may earn a referral commission at no additional cost to you. We maintain strict editorial independence and never guarantee specific earnings or rankings.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                CC
              </div>
              <span className="font-bold text-white text-base">Campus Cash World</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Evaluating legitimate survey websites, GPT reward apps, and student side hustles with rigorous data and zero hype.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Top Platforms</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/reviews/swagbucks" className="hover:text-white transition-colors">Swagbucks Review</Link></li>
              <li><Link href="/reviews/inboxdollars" className="hover:text-white transition-colors">InboxDollars Review</Link></li>
              <li><Link href="/reviews/pinecone-research" className="hover:text-white transition-colors">Pinecone Research</Link></li>
              <li><Link href="/reviews/surveoo" className="hover:text-white transition-colors">Surveoo Review</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Country Hubs</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/country/us" className="hover:text-white transition-colors">United States (US)</Link></li>
              <li><Link href="/country/uk" className="hover:text-white transition-colors">United Kingdom (UK)</Link></li>
              <li><Link href="/country/ca" className="hover:text-white transition-colors">Canada (CA)</Link></li>
              <li><Link href="/country/au" className="hover:text-white transition-colors">Australia (AU)</Link></li>
              <li><Link href="/country/ie" className="hover:text-white transition-colors">Ireland (IE)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Tools & Guides</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/finder" className="hover:text-white transition-colors">Survey Finder Engine</Link></li>
              <li><Link href="/calculator" className="hover:text-white transition-colors">Earnings Calculator</Link></li>
              <li><Link href="/compare/swagbucks-vs-inboxdollars" className="hover:text-white transition-colors">Swagbucks vs InboxDollars</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Student Finance Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Campus Cash World. All rights reserved. Verified independent research.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> Editorial Integrity Verified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
