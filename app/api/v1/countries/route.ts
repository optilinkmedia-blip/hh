import { NextResponse } from "next/server";
import { COUNTRIES, OFFERS } from "@/lib/data";

export async function GET() {
  const data = COUNTRIES.map((c) => ({
    name: c.name,
    code: c.code,
    slug: c.slug,
    currency: c.currency,
    flagEmoji: c.flagEmoji,
    description: c.description,
    avgSurveyPay: c.avgSurveyPay,
    offers: OFFERS.filter((o) => o.countries.includes(c.code)),
  }));

  return NextResponse.json({
    success: true,
    data,
  });
}
