import { BLOG_POSTS } from "@/lib/data";
import { BookOpen, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-zinc-500 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-emerald-600 font-semibold truncate">{post.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              {post.category}
            </span>
            <span className="text-xs text-zinc-400">{post.readTime}</span>
            <span className="text-xs text-zinc-400">• Published {post.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold text-zinc-900 dark:text-white">Written by {post.author}</span>
            <span className="flex items-center gap-1 text-emerald-600">
              <ShieldCheck className="w-4 h-4" /> Fact-Checked & Reviewed
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/finder"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
          >
            Explore Verified Survey Platforms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
