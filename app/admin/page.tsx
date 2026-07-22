"use client";

import { useState } from "react";
import { OFFERS, BLOG_POSTS } from "@/lib/data";
import { LayoutDashboard, ShieldCheck, Users, TrendingUp, FileText, Settings, Plus, Check } from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"offers" | "blog" | "analytics">("offers");
  const [offersList, setOffersList] = useState(OFFERS);
  const [editingOffer, setEditingOffer] = useState<typeof OFFERS[0] | null>(null);
  const [newOfferName, setNewOfferName] = useState("");
  const [newOfferLogo, setNewOfferLogo] = useState<string | null>(null);
  const [newOfferAffiliateUrl, setNewOfferAffiliateUrl] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewOfferLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddOrUpdateOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOfferName) return;

    if (editingOffer) {
      setOffersList(offersList.map(o => o.id === editingOffer.id ? { ...o, name: newOfferName, logo: newOfferLogo || o.logo, affiliateUrl: newOfferAffiliateUrl } : o));
      setEditingOffer(null);
      setSuccessMsg("Offer successfully updated!");
    } else {
      const newOffer = {
        id: String(offersList.length + 1),
        offerId: "9999" + (offersList.length + 1),
        name: newOfferName,
        slug: newOfferName.toLowerCase().replace(/\s+/g, "-"),
        network: "MaxBounty",
        payout: "$2.00 per lead",
        epc: "$0.15",
        trafficType: "Fixed",
        status: "Active",
        tagline: "Newly added verified research panel.",
        description: "Custom platform added via admin dashboard.",
        logo: newOfferLogo || "⭐",
        rating: 4.5,
        trustScore: 90,
        payoutMin: 5.0,
        payoutType: "PayPal",
        avgEarningsMonth: "$25 - $75 / mo",
        timePerDay: "15 mins",
        easeOfUse: "Beginner",
        affiliateUrl: newOfferAffiliateUrl,
        pros: ["Quick sign up", "Low minimum payout"],
        cons: ["Newer platform"],
        countries: ["us", "uk", "ca"],
        categories: ["Surveys"],
        faqs: [],
        payoutProofVerified: true,
        minAge: 18,
        mobileApp: false,
      };
      setOffersList([newOffer, ...offersList]);
      setSuccessMsg("Offer successfully added!");
    }
    
    setNewOfferName("");
    setNewOfferLogo(null);
    setNewOfferAffiliateUrl("");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const startEdit = (offer: typeof OFFERS[0]) => {
    setEditingOffer(offer);
    setNewOfferName(offer.name);
    setNewOfferLogo(offer.logo);
    setNewOfferAffiliateUrl(offer.affiliateUrl);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200/50 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> Secure Admin Control Panel
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Campus Cash World Admin</h1>
          </div>

          <div className="flex items-center space-x-2 bg-white dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("offers")}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === "offers" ? "bg-emerald-600 text-white shadow-sm" : "hover:text-emerald-600"
              }`}
            >
              Offers ({offersList.length})
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === "blog" ? "bg-emerald-600 text-white shadow-sm" : "hover:text-emerald-600"
              }`}
            >
              Blog Posts ({BLOG_POSTS.length})
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === "analytics" ? "bg-emerald-600 text-white shadow-sm" : "hover:text-emerald-600"
              }`}
            >
              Analytics & Clicks
            </button>
          </div>
        </div>

        {successMsg && (
          <div className="bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-emerald-700 dark:text-emerald-300 px-4 py-3 rounded-2xl text-xs font-semibold mb-6 flex items-center gap-2">
            <Check className="w-4 h-4" /> {successMsg}
          </div>
        )}

        {activeTab === "offers" && (
          <div className="space-y-8">
            {/* Add/Edit Offer Form */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-bold text-sm mb-4">{editingOffer ? "Edit Offer" : "Quick Add Survey Platform"}</h3>
              <form onSubmit={handleAddOrUpdateOffer} className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Platform Name (e.g. Toluna)"
                    value={newOfferName}
                    onChange={(e) => setNewOfferName(e.target.value)}
                    className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-48 p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold"
                  />
                  {newOfferLogo && <img src={newOfferLogo} alt="Logo" className="w-10 h-10 object-cover rounded-lg" />}
                </div>
                <input
                  type="url"
                  placeholder="Affiliate URL"
                  value={newOfferAffiliateUrl}
                  onChange={(e) => setNewOfferAffiliateUrl(e.target.value)}
                  className="flex-1 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <Plus className="w-4 h-4" /> {editingOffer ? "Update Offer" : "Add Offer"}
                </button>
              </form>
            </div>

            {/* Offers Table */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <h3 className="font-bold text-sm">Managed Survey Platforms</h3>
                <span className="text-xs text-zinc-500">{offersList.length} total active</span>
              </div>
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800 text-xs">
                {offersList.map((offer) => (
                  <div key={offer.id} className="p-4 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <div className="flex items-center space-x-3">
                      {offer.logo.startsWith('data:') ? (
                        <img src={offer.logo} alt={offer.name} className="w-10 h-10 object-cover rounded-lg" />
                      ) : (
                        <span className="text-2xl">{offer.logo}</span>
                      )}
                      <div>
                        <span className="font-bold text-zinc-900 dark:text-white block">{offer.name}</span>
                        <span className="text-zinc-400">Slug: /go/{offer.slug}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button onClick={() => startEdit(offer)} className="text-xs text-emerald-600 font-semibold hover:underline">Edit</button>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        Trust: {offer.trustScore}/100
                      </span>
                      <span className="font-semibold text-amber-600">★ {offer.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "blog" && (
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm">Published Student Guides ({BLOG_POSTS.length})</h3>
            </div>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800 text-xs">
              {BLOG_POSTS.map((post) => (
                <div key={post.id} className="p-4 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-white block mb-0.5">{post.title}</span>
                    <span className="text-zinc-400">By {post.author} • {post.readTime}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                    {post.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <span className="text-xs text-zinc-400 block mb-1">Total Affiliate Clicks (7d)</span>
              <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">1,428</span>
              <span className="text-[11px] text-emerald-600 font-semibold mt-2 block">+18% vs last week</span>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <span className="text-xs text-zinc-400 block mb-1">Survey Finder Runs</span>
              <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">854</span>
              <span className="text-[11px] text-emerald-600 font-semibold mt-2 block">Top country: US (64%)</span>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <span className="text-xs text-zinc-400 block mb-1">Estimated Conversion Rate</span>
              <span className="text-3xl font-extrabold text-emerald-600">34.2%</span>
              <span className="text-[11px] text-zinc-500 mt-2 block">Optimized via /go/[slug] route</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
