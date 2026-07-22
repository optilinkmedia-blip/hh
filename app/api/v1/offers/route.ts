import { NextRequest, NextResponse } from "next/server";
import { OFFERS } from "@/lib/data";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const country = searchParams.get("country");
  const search = searchParams.get("search");
  const limit = searchParams.get("limit");

  let filtered = [...OFFERS];

  if (category && category !== "All") {
    filtered = filtered.filter((o) =>
      o.categories.some((c) => c.toLowerCase() === category.toLowerCase())
    );
  }

  if (country) {
    filtered = filtered.filter((o) =>
      o.countries.some((c) => c.toLowerCase() === country.toLowerCase())
    );
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (o) =>
        o.name.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q) ||
        o.tagline.toLowerCase().includes(q)
    );
  }

  if (limit) {
    const l = parseInt(limit, 10);
    if (!isNaN(l)) {
      filtered = filtered.slice(0, l);
    }
  }

  const responseData = {
    success: true,
    count: filtered.length,
    data: filtered.map((o) => ({
      id: o.offerId,
      name: o.name,
      slug: o.slug,
      network: o.network,
      payout: o.payout,
      epc: parseFloat(o.epc.replace("$", "")),
      rating: o.rating,
      trustScore: o.trustScore,
      countries: o.countries.map((c) => c.toUpperCase()),
      categories: o.categories,
      logo: o.logo,
      tagline: o.tagline,
      payoutMin: o.payoutMin,
    })),
  };

  return NextResponse.json(responseData, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
