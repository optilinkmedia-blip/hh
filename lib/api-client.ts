import { Offer, BlogPost, Country } from "@/lib/data";

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`/api/v1${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `API error: ${res.status}`);
  }

  const data = await res.json();
  return data.data !== undefined ? data.data : data;
}

export async function getOffers(params?: { category?: string; country?: string; search?: string; limit?: number }) {
  const searchParams = new URLSearchParams();
  if (params?.category) searchParams.set("category", params.category);
  if (params?.country) searchParams.set("country", params.country);
  if (params?.search) searchParams.set("search", params.search);
  if (params?.limit) searchParams.set("limit", String(params.limit));

  const query = searchParams.toString();
  return fetchApi<Offer[]>(`/offers${query ? `?${query}` : ""}`);
}

export async function getOfferBySlug(slug: string) {
  return fetchApi<Offer & { relatedOffers: Offer[]; relatedArticles: BlogPost[] }>(`/offers/${slug}`);
}

export async function getArticles() {
  return fetchApi<BlogPost[]>(`/articles`);
}

export async function getArticleBySlug(slug: string) {
  return fetchApi<BlogPost & { relatedOffers: Offer[]; relatedArticles: BlogPost[]; faq: any[] }>(`/articles/${slug}`);
}

export async function getCategories() {
  return fetchApi<string[]>(`/categories`);
}

export async function getCountries() {
  return fetchApi<Country[]>(`/countries`);
}

export async function searchContent(q: string) {
  return fetchApi<any[]>(`/search?q=${encodeURIComponent(q)}`);
}

export async function runSurveyFinder(criteria: { country: string; student: boolean; paypal: boolean; mobile: boolean }) {
  return fetchApi<any[]>(`/survey-finder`, {
    method: "POST",
    body: JSON.stringify(criteria),
  });
}
