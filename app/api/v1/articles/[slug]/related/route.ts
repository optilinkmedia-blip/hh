import { NextRequest, NextResponse } from "next/server";
import { BLOG_POSTS } from "@/lib/data";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return NextResponse.json({
    success: true,
    data: related,
  });
}
