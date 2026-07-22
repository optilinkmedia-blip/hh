import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = newsletterSchema.parse(body);

    // In production, save to db or mailing list
    return NextResponse.json({
      success: true,
      message: `Successfully subscribed ${email} to Campus Cash World alerts.`,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: "Valid email address is required" },
      { status: 400 }
    );
  }
}
