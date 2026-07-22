import { NextRequest, NextResponse } from "next/server";
import { OFFERS, BLOG_POSTS } from "@/lib/data";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").toLowerCase();

  if (!q) {
    return NextResponse.json({ success: true, data: [] });
  }

  const matchedOffers = OFFERS.filter(
    (o) =>
      o.name.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q) ||
      o.categories.some((c) => c.toLowerCase().includes(q))
  ).map((o) => ({ type: "offer", ...o }));

  const matchedArticles = BLOG_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  ).map((p) => ({ type: "article", ...p }));

  return NextResponse.json({
    success: true,
    query: q,
    count: matchedOffers.length + matchedArticles.length,
    data: [...matchedOffers, ...matchedArticles],
  });
}
