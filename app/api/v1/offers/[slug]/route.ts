import { NextRequest, NextResponse } from "next/server";
import { OFFERS, BLOG_POSTS } from "@/lib/data";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const offer = OFFERS.find((o) => o.slug === slug);

  if (!offer) {
    return NextResponse.json(
      { success: false, error: "Offer not found" },
      { status: 404 }
    );
  }

  const relatedOffers = OFFERS.filter(
    (o) => o.slug !== slug && o.categories.some((c) => offer.categories.includes(c))
  ).slice(0, 3);

  const relatedArticles = BLOG_POSTS.slice(0, 2);

  return NextResponse.json(
    {
      success: true,
      data: {
        ...offer,
        paymentMethods: offer.payoutType.split(",").map((s) => s.trim()),
        relatedOffers,
        relatedArticles,
      },
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
