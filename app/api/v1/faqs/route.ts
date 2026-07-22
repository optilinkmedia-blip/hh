import { NextResponse } from "next/server";
import { OFFERS } from "@/lib/data";

export async function GET() {
  const allFaqs = OFFERS.flatMap((o) =>
    o.faqs.map((f) => ({ offerName: o.name, offerSlug: o.slug, ...f }))
  );

  return NextResponse.json({
    success: true,
    data: allFaqs,
  });
}
