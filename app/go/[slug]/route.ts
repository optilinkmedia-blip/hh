import { NextRequest, NextResponse } from "next/server";
import { OFFERS } from "@/lib/data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const offer = OFFERS.find((o) => o.slug === slug);

  const searchParams = request.nextUrl.searchParams;
  const subId = searchParams.get("subid") || "direct";
  const utmSource = searchParams.get("utm_source") || "ccw_organic";

  // Log click (in production this writes to database or analytics)
  console.log(`[AFFILIATE CLICK] Offer: ${slug}, SubID: ${subId}, Source: ${utmSource}, Time: ${new Date().toISOString()}`);

  if (!offer) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Add tracking parameters if needed or redirect straight to affiliate URL
  return NextResponse.redirect(offer.affiliateUrl);
}
