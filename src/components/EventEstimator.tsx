"use client";

import React, { useState } from "react";
import { Calculator, MessageCircle, Sparkles } from "lucide-react";

export default function EventEstimator() {
  const [eventType, setEventType] = useState("Baby Birthday Theme");
  const [guests, setGuests] = useState("50 - 150 Guests");
  const [needsProduction, setNeedsProduction] = useState(true);
  const [needsArtist, setNeedsArtist] = useState(false);

  const handleInquire = () => {
    const text = `*Custom Event Plan Request - Create 4 Moments*%0A%0A` +
      `*Event Theme:* ${encodeURIComponent(eventType)}%0A` +
      `*Expected Gathering:* ${encodeURIComponent(guests)}%0A` +
      `*Lighting & Stage FX:* ${needsProduction ? "Yes" : "No"}%0A` +
      `*Live Performance Artist / Act:* ${needsArtist ? "Yes" : "No"}%0A%0A` +
      `Please share a customized bespoke portfolio and quote.`;

    window.open(`https://api.whatsapp.com/send?phone=918595675935&text=${text}`, "_blank");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-white border border-[#E7E5E4] p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Subtle accent border */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />

        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E7E5E4] text-[#8C7147] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#C5A880]" /> Instant Theme Planner
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
            Design Your <span className="italic font-light text-[#7B5EA7]">Celebration Setup</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-800 font-normal mt-2 leading-relaxed">
            Select your event theme and bespoke preferences to generate an instant briefing directly for our creative direction team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7147] mb-2">
              Select Event Theme
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full bg-white border border-[#E7E5E4] rounded-xl px-4 py-3 text-xs text-[#2D2D2D] focus:outline-none focus:border-[#C5A880] font-medium transition-colors"
            >
              <option>Baby Birthday Theme</option>
              <option>Baby Welcome Decoration</option>
              <option>Car Decor</option>
              <option>Couple Room Decor</option>
              <option>Rooftop Party Theme</option>
              <option>25th Anniversary Theme</option>
              <option>50th Anniversary Theme</option>
              <option>Adult Birthday Theme</option>
              <option>Haldi Decor Theme</option>
              <option>Mehndi Decor Theme</option>
              <option>Corporate Party Theme</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7147] mb-2">
              Expected Gathering
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-white border border-[#E7E5E4] rounded-xl px-4 py-3 text-xs text-[#2D2D2D] focus:outline-none focus:border-[#C5A880] font-medium transition-colors"
            >
              <option>Intimate (20 - 50 Guests)</option>
              <option>Gathering (50 - 150 Guests)</option>
              <option>Celebration (150 - 350 Guests)</option>
              <option>Grand Gala (350 - 800+ Guests)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 py-4 border-y border-[#E7E5E4]">
          <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-stone-700 select-none">
            <input
              type="checkbox"
              checked={needsProduction}
              onChange={(e) => setNeedsProduction(e.target.checked)}
              className="w-4 h-4 rounded text-[#8B263E] focus:ring-[#8B263E] accent-[#8B263E]"
            />
            <span>Include Architectural Lighting & Backdrop Staging</span>
          </label>

          <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-stone-700 select-none">
            <input
              type="checkbox"
              checked={needsArtist}
              onChange={(e) => setNeedsArtist(e.target.checked)}
              className="w-4 h-4 rounded text-[#8B263E] focus:ring-[#8B263E] accent-[#8B263E]"
            />
            <span>Include Live Performance Artists / Entertainment</span>
          </label>
        </div>

        <div className="text-center">
          <button
            onClick={handleInquire}
            className="px-8 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 group"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A880]" />
            <span>Share Plan on WhatsApp for Quote</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880] group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
