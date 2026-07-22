import { NextResponse } from "next/server";
import { COMPARISONS } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: COMPARISONS,
  });
}
