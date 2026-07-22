import { NextRequest, NextResponse } from "next/server";
import { OFFERS } from "@/lib/data";

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

  const related = OFFERS.filter(
    (o) => o.slug !== slug && o.countries.some((c) => offer.countries.includes(c))
  ).slice(0, 4);

  return NextResponse.json({
    success: true,
    data: related,
  });
}
