import { NextRequest, NextResponse } from "next/server";
import { OFFERS } from "@/lib/data";
import { z } from "zod";

const surveyFinderSchema = z.object({
  country: z.string().default("US"),
  student: z.boolean().default(true),
  paypal: z.boolean().default(true),
  mobile: z.boolean().default(true),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const criteria = surveyFinderSchema.parse(body);

    const scoredOffers = OFFERS.map((o) => {
      let score = 70;
      if (o.countries.includes(criteria.country.toLowerCase())) score += 15;
      if (criteria.paypal && o.payoutType.toLowerCase().includes("paypal")) score += 10;
      if (criteria.mobile && o.mobileApp) score += 5;
      if (o.rating >= 4.5) score += 5;

      return {
        id: o.offerId,
        name: o.name,
        slug: o.slug,
        payout: o.payout,
        rating: o.rating,
        logo: o.logo,
        tagline: o.tagline,
        score: Math.min(score, 99),
        reason: `Matched based on ${criteria.country} availability and reward preferences.`,
      };
    }).sort((a, b) => b.score - a.score);

    return NextResponse.json({
      success: true,
      criteria,
      data: scoredOffers,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Invalid criteria" },
      { status: 400 }
    );
  }
}
