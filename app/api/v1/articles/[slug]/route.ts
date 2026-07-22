import { NextRequest, NextResponse } from "next/server";
import { BLOG_POSTS, OFFERS } from "@/lib/data";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return NextResponse.json(
      { success: false, error: "Article not found" },
      { status: 404 }
    );
  }

  const relatedArticles = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedOffers = OFFERS.slice(0, 3);

  const faq = [
    {
      question: "Are these survey and reward platforms verified?",
      answer: "Yes, all platforms listed on Campus Cash World are vetted for payment reliability and data privacy.",
    },
    {
      question: "How long does it take to cash out earnings?",
      answer: "Depending on the platform, payouts range from instant digital gift cards to 3-5 business days for PayPal transfers.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
  };

  return NextResponse.json(
    {
      success: true,
      data: {
        ...post,
        featuredImage: post.imageUrl,
        readingTime: parseInt(post.readTime, 10) || 5,
        faq,
        schema,
        relatedOffers,
        relatedArticles,
      },
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
