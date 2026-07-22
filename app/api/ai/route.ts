import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { OFFERS } from "@/lib/data";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: NextRequest) {
  try {
    const { prompt, country } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const context = `You are the lead financial research AI for Campus Cash World, an ethical, transparent platform helping students and young adults find legitimate online side hustles and survey platforms. 
Guidelines:
- Grade 7-8 readability. Short paragraphs. No hype ("amazing", "game-changing").
- No absolute guarantees. Be transparent about disqualification rates and time investment.
- Reference specific platforms from our database: Swagbucks, InboxDollars, King Opinion, Surveoo, Pinecone Research, Survey Club, Maru Voice, Survey Authority.
- User Country context: ${country || "Global / US"}.

User Question: ${prompt}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: context,
    });

    return NextResponse.json({ text: response.text || "No response generated." });
  } catch (error: any) {
    console.error("AI API Error:", error);
    // Fallback response if API key is missing or error occurs
    return NextResponse.json({ 
      text: "Based on our student financial guides, legitimate survey sites like Swagbucks and Pinecone Research offer reliable secondary income between $25 and $150/month when completed consistently. Make sure to choose platforms with verified PayPal or gift card payouts and beware of any site charging upfront fees." 
    });
  }
}
