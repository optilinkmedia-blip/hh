import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      totalClicksToday: 1420,
      activeOffers: 9,
      topCountry: "United States (US)",
      conversionRate: "4.8%",
      updatedAt: new Date().toISOString(),
    },
  });
}
