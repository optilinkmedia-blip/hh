import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import { BookOpen, ArrowRight } from "lucide-react";

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200/50 mb-4">
            <BookOpen className="w-3.5 h-3.5" /> Student Financial Guides
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Campus Cash World Blog
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Rigorous, anti-hype guides helping students evaluate online side hustles, surveys, and budgeting strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-zinc-400">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="px-6 pb-6 pt-4 text-xs font-semibold text-zinc-500 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
                <span>By {post.author}</span>
                <span className="text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
