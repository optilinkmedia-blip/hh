import { NextResponse } from "next/server";
import { OFFERS, BLOG_POSTS } from "@/lib/data";

export async function GET() {
  const categoriesSet = new Set<string>();
  OFFERS.forEach((o) => o.categories.forEach((c) => categoriesSet.add(c)));
  BLOG_POSTS.forEach((b) => categoriesSet.add(b.category));

  return NextResponse.json({
    success: true,
    data: Array.from(categoriesSet),
  });
}
