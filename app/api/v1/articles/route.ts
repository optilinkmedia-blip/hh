import { NextRequest, NextResponse } from "next/server";
import { BLOG_POSTS } from "@/lib/data";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  let posts = [...BLOG_POSTS];
  if (category && category !== "All") {
    posts = posts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  return NextResponse.json(
    {
      success: true,
      count: posts.length,
      data: posts.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        featuredImage: p.imageUrl,
        publishedAt: p.publishedAt,
        readingTime: parseInt(p.readTime, 10) || 5,
        category: p.category,
        author: p.author,
      })),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
