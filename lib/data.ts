export interface Offer {
  id: string;
  offerId: string;
  name: string;
  slug: string;
  network: string;
  payout: string;
  epc: string;
  trafficType: string;
  status: string;
  tagline: string;
  description: string;
  logo: string;
  rating: number;
  trustScore: number;
  payoutMin: number;
  payoutType: string;
  avgEarningsMonth: string;
  timePerDay: string;
  easeOfUse: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
  countries: string[]; // country codes: us, uk, ca, au, ie
  categories: string[];
  faqs: { question: string; answer: string }[];
  payoutProofVerified: boolean;
  minAge: number;
  mobileApp: boolean;
}

export interface Country {
  name: string;
  code: string;
  slug: string;
  currency: string;
  flagEmoji: string;
  description: string;
  avgSurveyPay: string;
  topOfferSlug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  readTime: string;
  publishedAt: string;
  imageUrl: string;
}

export const COUNTRIES: Country[] = [
  {
    name: "United States",
    code: "us",
    slug: "us",
    currency: "USD ($)",
    flagEmoji: "🇺🇸",
    description: "The largest market for paid online surveys with highest inventory, highest payout rates, and diverse reward options including PayPal and Amazon gift cards.",
    avgSurveyPay: "$0.50 - $3.50",
    topOfferSlug: "swagbucks"
  },
  {
    name: "United Kingdom",
    code: "uk",
    slug: "uk",
    currency: "GBP (£)",
    flagEmoji: "🇬🇧",
    description: "Strong market for consumer research panels and cashback sites with reliable GBP payouts via PayPal and high-street vouchers.",
    avgSurveyPay: "£0.40 - £3.00",
    topOfferSlug: "swagbucks"
  },
  {
    name: "Canada",
    code: "ca",
    slug: "ca",
    currency: "CAD ($)",
    flagEmoji: "🇨🇦",
    description: "Steady stream of bilingual (English/French) panels and consumer research platforms offering Canadian dollar gift cards and PayPal transfers.",
    avgSurveyPay: "$0.60 - $4.00 CAD",
    topOfferSlug: "inboxdollars"
  },
  {
    name: "Australia",
    code: "au",
    slug: "au",
    currency: "AUD ($)",
    flagEmoji: "🇦🇺",
    description: "Growing survey market with high focus on retail, banking, and lifestyle surveys paying out in AUD.",
    avgSurveyPay: "$0.80 - $5.00 AUD",
    topOfferSlug: "surveoo"
  },
  {
    name: "Ireland",
    code: "ie",
    slug: "ie",
    currency: "EUR (€)",
    flagEmoji: "🇮🇪",
    description: "European Eurozone survey hub with trusted international research panels operating locally.",
    avgSurveyPay: "€0.50 - €3.50",
    topOfferSlug: "king-opinion"
  }
];

export const OFFERS: Offer[] = [
  {
    id: "1",
    offerId: "11120",
    name: "SwagBucks - Surveys Rewards - DOI",
    slug: "swagbucks",
    network: "MaxBounty",
    payout: "$2.25 per lead",
    epc: "$0.39",
    trafficType: "Fixed",
    status: "Active",
    tagline: "The gold standard rewards platform with surveys, cashback, and videos.",
    description: "Swagbucks is one of the oldest and most reliable reward platforms online. Beyond standard surveys, users earn points (SB) for searching the web, shopping online, playing games, and watching promotional videos. Payouts are reliable via PayPal or gift cards starting at $3.",
    logo: "⭐",
    rating: 4.6,
    trustScore: 94,
    payoutMin: 3.00,
    payoutType: "PayPal, Amazon, Gift Cards",
    avgEarningsMonth: "$30 - $150 / mo",
    timePerDay: "20-30 mins",
    easeOfUse: "Beginner Friendly",
    affiliateUrl: "https://afflat3d2.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=11120&c=918277&a=762196&k=5146054F8245D2857790D66CEFBE59D4&l=15064&s1=kor26",
    pros: [
      "$5 welcome bonus for new members",
      "Multiple earning streams beyond surveys",
      "Low $3 minimum payout threshold",
      "Consistent survey inventory daily"
    ],
    cons: [
      "Can get screened out of surveys after starting",
      "Points system (100 SB = $1) takes slight getting used to"
    ],
    countries: ["us", "uk", "ca", "au", "ie"],
    categories: ["Surveys", "Cashback", "Games", "Shopping"],
    faqs: [
      {
        question: "How long do Swagbucks payouts take?",
        answer: "Most gift card rewards arrive within 2 to 3 business days via email. PayPal transfers typically take 3 to 5 business days."
      },
      {
        question: "Is Swagbucks free to join?",
        answer: "Yes, Swagbucks is 100% free to join and never charges membership fees."
      }
    ],
    payoutProofVerified: true,
    minAge: 13,
    mobileApp: true
  },
  {
    id: "2",
    offerId: "6365",
    name: "InboxDollars - DOI",
    slug: "inboxdollars",
    network: "MaxBounty",
    payout: "$1.12 per lead",
    epc: "$0.31",
    trafficType: "Fixed",
    status: "Active",
    tagline: "Get paid cash (not points) for reading emails, surveys, and offers.",
    description: "InboxDollars pays real cash directly into your account rather than points. Founded in 2000, it features daily paid emails, online surveys, grocery cashbacks, and game rewards. Very transparent earnings structure with a $15 payout threshold.",
    logo: "💵",
    rating: 4.3,
    trustScore: 90,
    payoutMin: 15.00,
    payoutType: "PayPal, Check, Gift Cards",
    avgEarningsMonth: "$25 - $100 / mo",
    timePerDay: "15-25 mins",
    easeOfUse: "Beginner Friendly",
    affiliateUrl: "https://afflat3d3.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=6365&c=918277&a=762196&k=9838B6D2A0321F5B49ACF0C15C4AD4CC&l=5077&s1=Kor26",
    pros: [
      "Pays in cash USD, not complicated point systems",
      "$5 instant sign-up bonus",
      "Easy cashback offers on grocery receipts"
    ],
    cons: [
      "Higher minimum payout threshold ($15)",
      "First cashout has a small processing fee for checks"
    ],
    countries: ["us", "ca"],
    categories: ["Surveys", "Cash", "Emails", "Receipts"],
    faqs: [
      {
        question: "Why is the minimum payout $15?",
        answer: "InboxDollars sets a $15 threshold for first-time payouts to cover transaction and processing overhead for cash payments."
      }
    ],
    payoutProofVerified: true,
    minAge: 18,
    mobileApp: true
  },
  {
    id: "3",
    offerId: "30906",
    name: "King Opinion - Earn with Surveys - SOI",
    slug: "king-opinion",
    network: "MaxBounty",
    payout: "$2.62 per lead",
    epc: "$0.08",
    trafficType: "Fixed",
    status: "Active",
    tagline: "Fast-payout global survey platform with high acceptance rates.",
    description: "King Opinion is popular across Europe and North America for straightforward consumer opinion questionnaires. They feature a remarkably low payout minimum and prompt bank or gift card transfers.",
    logo: "👑",
    rating: 4.2,
    trustScore: 88,
    payoutMin: 5.00,
    payoutType: "PayPal, Skrill, Vouchers",
    avgEarningsMonth: "$20 - $80 / mo",
    timePerDay: "15 mins",
    easeOfUse: "Beginner Friendly",
    affiliateUrl: "https://afflat3d2.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=30906&c=918277&a=762196&k=0EE84D45D023B1F6AD743473005101FE&l=35633&s1=Blog-Kor26",
    pros: [
      "Low $5 minimum withdrawal",
      "Clean, ad-free interface",
      "High mobile browser compatibility"
    ],
    cons: [
      "Fewer earning methods outside surveys",
      "Customer support can take 48h to respond"
    ],
    countries: ["us", "uk", "ca", "au", "ie"],
    categories: ["Surveys", "Quick Payout"],
    faqs: [
      {
        question: "Does King Opinion require ID verification?",
        answer: "Only for high-value suspicious accounts to prevent fraud; standard users just need email confirmation."
      }
    ],
    payoutProofVerified: true,
    minAge: 16,
    mobileApp: false
  },
  {
    id: "4",
    offerId: "31078",
    name: "Surveoo - Earn with Surveys - SOI",
    slug: "surveoo",
    network: "MaxBounty",
    payout: "$3.00 per lead",
    epc: "$0.07",
    trafficType: "Fixed",
    status: "Active",
    tagline: "High-paying online surveys with guaranteed daily invitations.",
    description: "Surveoo connects brands with everyday consumers. Known for pairing users with higher-than-average paying market research studies across 100+ countries.",
    logo: "📊",
    rating: 4.1,
    trustScore: 85,
    payoutMin: 20.00,
    payoutType: "PayPal, Bank Transfer",
    avgEarningsMonth: "$40 - $120 / mo",
    timePerDay: "20 mins",
    easeOfUse: "Intermediate",
    affiliateUrl: "https://afflat3d2.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=31078&c=918277&a=762196&k=CD928BC83BED313045F5331C4C23E4E1&l=36077&s1=kor26",
    pros: [
      "Higher average pay per completed survey",
      "Available in over 100 countries",
      "Clean dashboard with estimated completion times"
    ],
    cons: [
      "$20 minimum payout is higher than average",
      "Strict screening criteria"
    ],
    countries: ["us", "uk", "ca", "au", "ie"],
    categories: ["Surveys", "High Pay"],
    faqs: [
      {
        question: "How often are new surveys added?",
        answer: "New surveys are matched daily based on your demographic profile."
      }
    ],
    payoutProofVerified: true,
    minAge: 18,
    mobileApp: false
  },
  {
    id: "5",
    offerId: "16346",
    name: "Pinecone Research - Marketing Surveys - DOI",
    slug: "pinecone-research",
    network: "MaxBounty",
    payout: "$5.80 per lead",
    epc: "$0.29",
    trafficType: "Fixed",
    status: "Active",
    tagline: "Exclusive, invite-only high-paying product testing and surveys ($3/survey).",
    description: "Pinecone Research is operated by Nielsen. Unlike mass-market survey sites, Pinecone pays a flat $3.00 for almost every completed 15-minute survey and frequently invites members to test physical consumer goods at home.",
    logo: "🌲",
    rating: 4.8,
    trustScore: 98,
    payoutMin: 3.00,
    payoutType: "PayPal, Bank Transfer, Gift Cards",
    avgEarningsMonth: "$30 - $60 / mo",
    timePerDay: "10 mins",
    easeOfUse: "Advanced (Invite/Approval)",
    affiliateUrl: "https://afflat3d2.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=16346&c=918277&a=762196&k=70D1EBA6722ADAF4E6FBB171ED248AC7&l=17465&s1=kor26",
    pros: [
      "Guaranteed $3 per standard survey",
      "Free physical product testing samples",
      "Very low disqualification rate once accepted"
    ],
    cons: [
      "Hard to get into (registration opens periodically)",
      "Strict account limits per household"
    ],
    countries: ["ca", "us", "uk"],
    categories: ["Surveys", "Product Testing", "High Pay"],
    faqs: [
      {
        question: "Why can't I sign up immediately?",
        answer: "Pinecone Research maintains strict demographic quotas to ensure accurate market representation."
      }
    ],
    payoutProofVerified: true,
    minAge: 18,
    mobileApp: false
  },
  {
    id: "6",
    offerId: "30409",
    name: "Survey Club - CP1C [iOS]",
    slug: "survey-club",
    network: "MaxBounty",
    payout: "$4.50 per lead",
    epc: "$0.38",
    trafficType: "Fixed",
    status: "Active",
    tagline: "Comprehensive survey aggregator matching you to highest-paying panels.",
    description: "Survey Club acts as a matching engine for paid medical studies, focus groups, online surveys, and clinical trials since 2005.",
    logo: "🎯",
    rating: 4.0,
    trustScore: 82,
    payoutMin: 25.00,
    payoutType: "PayPal, Amazon Gift Cards, Check",
    avgEarningsMonth: "$50 - $200 / mo",
    timePerDay: "20 mins",
    easeOfUse: "Beginner Friendly",
    affiliateUrl: "https://afflat3d2.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=30409&c=918277&a=762196&k=598139E3053E05D523B64B71A673531A&l=34952",
    pros: [
      "Access to high-paying focus groups ($50-$250)",
      "Aggregates dozens of top survey panels",
      "Detailed earnings tracker"
    ],
    cons: [
      "Requires signing up for multiple external panels",
      "High $25 payout minimum"
    ],
    countries: ["us", "ca", "uk", "au"],
    categories: ["Surveys", "Focus Groups", "High Pay"],
    faqs: [
      {
        question: "Are focus groups safe?",
        answer: "Yes, verified focus groups through Survey Club are conducted by legitimate Fortune 500 market research firms."
      }
    ],
    payoutProofVerified: true,
    minAge: 18,
    mobileApp: true
  },
  {
    id: "7",
    offerId: "24889",
    name: "Maru Voice - DOI",
    slug: "maru-voice",
    network: "MaxBounty",
    payout: "$5.25 per lead",
    epc: "$0.60",
    trafficType: "Fixed",
    status: "Active",
    tagline: "Influential Canadian and UK market research panel with cash rewards.",
    description: "Maru Voice is operated by Maru/Blue, a premier global research company. Members influence corporate policies, media trends, and product development.",
    logo: "🍁",
    rating: 4.3,
    trustScore: 91,
    payoutMin: 10.00,
    payoutType: "PayPal, Visa Prepaid, Gift Cards",
    avgEarningsMonth: "$15 - $50 / mo",
    timePerDay: "10 mins",
    easeOfUse: "Beginner Friendly",
    affiliateUrl: "https://afflat3d3.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=24889&c=918277&a=762196&k=96EC8F19A4F6412CD019C3B24D02F17B&l=26271&s1=koerr26",
    pros: [
      "Quarterly cash sweepstakes for active members",
      "Surveys directly influence major brands",
      "Clean mobile experience"
    ],
    cons: [
      "Limited availability outside Canada and UK",
      "Moderate survey invitation frequency"
    ],
    countries: ["ca", "uk"],
    categories: ["Surveys", "Market Research"],
    faqs: [
      {
        question: "What are the sweepstakes prizes?",
        answer: "Maru Voice holds regular cash draws ranging from $100 to $1,000 for active panel participants."
      }
    ],
    payoutProofVerified: true,
    minAge: 18,
    mobileApp: true
  },
  {
    id: "8",
    offerId: "27707",
    name: "Survey Authority - MaxBounty Exclusive - SOI",
    slug: "survey-authority",
    network: "MaxBounty",
    payout: "$1.75 per lead",
    epc: "$0.11",
    trafficType: "Fixed",
    status: "Active",
    tagline: "Quick opinion polls with fast validation and gift card payouts.",
    description: "Survey Authority is a streamlined opinion platform designed for students and busy young adults looking for bite-sized micro-surveys.",
    logo: "🛡️",
    rating: 4.1,
    trustScore: 84,
    payoutMin: 10.00,
    payoutType: "Amazon Gift Cards, PayPal",
    avgEarningsMonth: "$15 - $45 / mo",
    timePerDay: "10 mins",
    easeOfUse: "Beginner Friendly",
    affiliateUrl: "https://afflat3d3.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=27707&c=918277&a=762196&k=D37F78184AD27F15A6A3FD0127577155&l=29747&s1=kor26",
    pros: [
      "Short 5-10 minute polls",
      "Low frustration screening process",
      "Reliable email notifications"
    ],
    cons: [
      "Fewer high-ticket focus groups",
      "Payouts limited to select gift cards and PayPal"
    ],
    countries: ["us", "uk", "ca", "au", "ie"],
    categories: ["Surveys", "Micro-Tasks"],
    faqs: [
      {
        question: "Can I use Survey Authority on my phone?",
        answer: "Yes, the web app is fully responsive on iOS and Android browsers."
      }
    ],
    payoutProofVerified: true,
    minAge: 16,
    mobileApp: false
  },
  {
    id: "9",
    offerId: "22888",
    name: "Rewardia - Earn Rewards - DOI",
    slug: "rewardia",
    network: "MaxBounty",
    payout: "$3.30 per lead",
    epc: "$0.39",
    trafficType: "Fixed",
    status: "Active",
    tagline: "Earn rewards playing games, watching videos, and answering surveys in Australia.",
    description: "Rewardia is a popular rewards community tailored for Australian users, offering multiple engaging ways to earn cash and vouchers.",
    logo: "🦘",
    rating: 4.3,
    trustScore: 89,
    payoutMin: 5.00,
    payoutType: "Bank Transfer, Gift Cards",
    avgEarningsMonth: "$25 - $90 / mo",
    timePerDay: "20 mins",
    easeOfUse: "Beginner Friendly",
    affiliateUrl: "https://afflat3d2.com/trk/lnk/0C3A139E-9517-46F7-825B-A826E3E5BA17/?o=22888&c=918277&a=762196&k=0EE84D45D023B1F6AD743473005101FE&l=35633&s1=kor26",
    pros: [
      "Localized Australian payouts",
      "Fun mini-games and trivia",
      "Low $5 minimum payout"
    ],
    cons: [
      "Primarily focused on AU market",
      "Verification required for bank transfers"
    ],
    countries: ["au"],
    categories: ["Surveys", "Games", "Rewards"],
    faqs: [
      {
        question: "Is Rewardia available outside Australia?",
        answer: "Rewardia has expanded to select regions, but its primary reward pool is optimized for Australian members."
      }
    ],
    payoutProofVerified: true,
    minAge: 18,
    mobileApp: false
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Are Online Survey Sites Legit in 2026? What Students Need to Know",
    slug: "are-online-survey-sites-legit-2026",
    excerpt: "An honest, data-backed evaluation of GPT and survey platforms. Learn how to spot scams, avoid disqualification traps, and maximize your hourly return.",
    content: `
## The Reality of Online Surveys
If you are a college student or recent grad looking for flexible side income, you have likely stumbled across paid survey sites. The internet is flooded with exaggerated claims of making thousands of dollars a month sitting on the couch. 

**The truth:** Online surveys will not replace a part-time job. However, when approached with realistic expectations, they can reliably cover your monthly coffee tab, textbook rentals, or streaming subscriptions.

## How to Spot Legitimate Platforms vs. Scams
Legitimate survey sites share a few non-negotiable characteristics:
1. **They are 100% free to join.** If a platform asks for an upfront fee, training payment, or credit card to "unlock high-paying surveys," run away immediately.
2. **Transparent payout terms.** Real platforms clearly state their minimum payout thresholds (e.g., $3 to $15) and reward methods (PayPal, verified gift cards).
3. **Realistic earning ranges.** Trusted sites estimate earnings between $20 and $150 per month based on active participation, not guaranteed daily windfalls.

## Tips to Minimize Disqualifications
One of the most common frustrations is spending 5 minutes filling out demographic questions only to be screened out. To reduce this:
- **Be consistent:** Always answer profile questions truthfully. Automated systems flag contradictory answers.
- **Complete your profile:** Fill out your full demographic and interest profile immediately upon registration so the matching algorithm sends you relevant surveys.
- **Check daily:** Fresh surveys fill up quickly. Logging in during morning hours yields higher completion rates.
    `,
    author: "Sarah Jenkins, CFP®",
    category: "Guides",
    readTime: "6 min read",
    publishedAt: "2026-07-10",
    imageUrl: "https://picsum.photos/seed/student-laptop/800/450"
  },
  {
    id: "2",
    title: "How to Avoid Survey Disqualification Traps and Boost Hourly Earnings",
    slug: "avoid-survey-disqualification-traps",
    excerpt: "Stop wasting time on screenouts. Here are 5 tactical ways to qualify for more market research panels.",
    content: `
## Why Do Screenouts Happen?
Market research companies look for very specific target demographics (e.g., IT decision-makers in California, pet owners with specific dietary preferences). If your profile does not match the client's exact brief, you are disqualified early.

## Proven Strategies for Better Match Rates
- **Keep your profile updated:** Update your employment status, household income, and technology usage regularly.
- **Target niche panels:** Sites like Pinecone Research have much lower disqualification rates because of pre-screened member buckets.
- **Don't rush:** Automated quality bots flag responses completed in under 30 seconds, leading to instant bans and unpaid effort.
    `,
    author: "Marcus Vance",
    category: "Strategy",
    readTime: "4 min read",
    publishedAt: "2026-07-14",
    imageUrl: "https://picsum.photos/seed/analytics/800/450"
  },
  {
    id: "3",
    title: "PayPal vs. Gift Cards: Which Payout Method is Best for Students?",
    slug: "paypal-vs-gift-cards-survey-payouts",
    excerpt: "Comparing fees, processing times, and liquidity when cashing out your survey earnings.",
    content: `
## Evaluating Payout Options
When you accumulate points or cash on Swagbucks, InboxDollars, or Surveoo, you face a choice: direct PayPal cash or digital gift cards (Amazon, Walmart, Apple).

## Pros and Cons of PayPal
- **Pros:** True cash liquidity. You can use it anywhere, transfer to your bank, or pay tuition fees.
- **Cons:** Sometimes requires reaching a slightly higher threshold ($5-$10) compared to instant $3 gift card vouchers.

## Pros and Cons of Gift Cards
- **Pros:** Often delivered instantly via email; sometimes platforms offer a 2-5% discount on specific brand gift cards.
- **Cons:** Locked into spending at a single merchant.
    `,
    author: "Elena Rostova",
    category: "Finance",
    readTime: "5 min read",
    publishedAt: "2026-07-18",
    imageUrl: "https://picsum.photos/seed/wallet/800/450"
  }
];

export const COMPARISONS = [
  {
    slug: "swagbucks-vs-inboxdollars",
    offerASlug: "swagbucks",
    offerBSlug: "inboxdollars",
    winnerSlug: "swagbucks",
    verdict: "Swagbucks wins for lower payout minimums ($3 vs $15) and diverse earning activities, though InboxDollars is great if you prefer direct cash over point systems.",
    comparisonData: {
      "Sign-up Bonus": ["$5.00", "$5.00"],
      "Min. Payout": ["$3.00", "$15.00"],
      "Payout Type": ["Points (SB) to PayPal/Gift Cards", "Direct Cash to PayPal/Check"],
      "Earning Methods": ["Surveys, Videos, Shopping, Search", "Surveys, Emails, Cashback"],
      "Mobile App": ["Yes (iOS & Android)", "Yes (iOS & Android)"],
      "Trust Score": ["94 / 100", "90 / 100"]
    }
  },
  {
    slug: "swagbucks-vs-surveoo",
    offerASlug: "swagbucks",
    offerBSlug: "surveoo",
    winnerSlug: "swagbucks",
    verdict: "Swagbucks offers a broader ecosystem and lower cashout threshold, while Surveoo is tailored specifically for high-paying survey inventory.",
    comparisonData: {
      "Sign-up Bonus": ["$5.00", "None"],
      "Min. Payout": ["$3.00", "$20.00"],
      "Payout Type": ["PayPal, Gift Cards", "PayPal, Bank Transfer"],
      "Earning Methods": ["Surveys, Games, Search", "Surveys Only"],
      "Mobile App": ["Yes", "Mobile Web Only"],
      "Trust Score": ["94 / 100", "85 / 100"]
    }
  }
];
