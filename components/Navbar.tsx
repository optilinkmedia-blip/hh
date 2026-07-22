import Link from "next/link";
import { ShieldCheck, Search, Calculator, BookOpen, Globe, Award, LayoutDashboard } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              CC
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">
                Campus Cash World
              </span>
              <span className="hidden sm:block text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Verified Student Side Hustles
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <Link href="/finder" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Search className="w-4 h-4 text-emerald-600" />
            Survey Finder
          </Link>
          <Link href="/calculator" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-emerald-600" />
            Earnings Calculator
          </Link>
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Globe className="w-4 h-4 text-emerald-600" />
              Country Hubs
            </button>
            <div className="absolute top-full left-0 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg py-2 hidden group-hover:block">
              <Link href="/country/us" className="block px-4 py-2 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800">🇺🇸 United States</Link>
              <Link href="/country/uk" className="block px-4 py-2 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800">🇬🇧 United Kingdom</Link>
              <Link href="/country/ca" className="block px-4 py-2 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800">🇨🇦 Canada</Link>
              <Link href="/country/au" className="block px-4 py-2 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800">🇦🇺 Australia</Link>
              <Link href="/country/ie" className="block px-4 py-2 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800">🇮🇪 Ireland</Link>
            </div>
          </div>
          <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            Guides & Blog
          </Link>
          <Link href="/admin" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-zinc-500">
            <LayoutDashboard className="w-4 h-4" />
            Admin
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            href="/finder"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-sm"
          >
            Find My Survey
          </Link>
        </div>
      </div>
    </header>
  );
}
