"use client";

import { useState } from "react";
import { Sparkles, Send, Bot, User, Loader2 } from "lucide-react";

export function AiAdvisor() {
  const [prompt, setPrompt] = useState("");
  const [country, setCountry] = useState("United States");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, country }),
      });
      const data = await res.json();
      setResponse(data.text || "No response received.");
    } catch (err) {
      setResponse("Error connecting to AI advisor. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Ask CCW AI Side Hustle Advisor</h3>
          <p className="text-xs text-zinc-500">Get honest, anti-hype financial guidance backed by our verified survey database.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Which survey site pays out fastest via PayPal in the UK?"
              className="w-full p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-semibold"
            >
              <option value="United States">🇺🇸 United States</option>
              <option value="United Kingdom">🇬🇧 United Kingdom</option>
              <option value="Canada">🇨🇦 Canada</option>
              <option value="Australia">🇦🇺 Australia</option>
              <option value="Ireland">🇮🇪 Ireland</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Analyzing Database...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Ask Advisor
            </>
          )}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line animate-fadeIn">
          <div className="flex items-center gap-2 mb-2 font-bold text-emerald-600">
            <Bot className="w-4 h-4" /> CCW AI Advisor Recommendation:
          </div>
          {response}
        </div>
      )}
    </div>
  );
}
