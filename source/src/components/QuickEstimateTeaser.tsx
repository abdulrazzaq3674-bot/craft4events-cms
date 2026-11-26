"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Calendar, Sparkles, ArrowRight, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

interface QuickEstimateTeaserProps {
  onOpenEstimator: (theme?: string) => void;
  onOpenConsultation: (theme?: string) => void;
}

export default function QuickEstimateTeaser({
  onOpenEstimator,
  onOpenConsultation,
}: QuickEstimateTeaserProps) {
  const [selectedTheme, setSelectedTheme] = useState("Baby Birthday Theme");
  const [selectedScale, setSelectedScale] = useState("Signature (50-150 Guests)");
  const [includeArtist, setIncludeArtist] = useState(true);

  // Dynamic quick calculation for the teaser banner
  const quickRange = useMemo(() => {
    let base = 65000;
    if (selectedTheme.includes("Baby")) base = 50000;
    if (selectedTheme.includes("Car") || selectedTheme.includes("Room")) base = 35000;
    if (selectedTheme.includes("Rooftop")) base = 85000;
    if (selectedTheme.includes("Anniversary")) base = 105000;
    if (selectedTheme.includes("Corporate")) base = 220000;
    if (selectedTheme.includes("Haldi") || selectedTheme.includes("Mehndi")) base = 115000;

    if (selectedScale.includes("Grand")) base *= 1.45;
    if (includeArtist) base += 45000;

    const min = Math.round(base * 0.9);
    const max = Math.round(base * 1.25);
    return `₹${min.toLocaleString("en-IN")} — ₹${max.toLocaleString("en-IN")}`;
  }, [selectedTheme, selectedScale, includeArtist]);

  return (
    <section className="py-24 border-b border-[#E7E5E4] px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Teaser Card with Luxury Gold Border & Pristine #FFFFFF Surface */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative rounded-3xl bg-white border-2 border-[#C5A880]/60 hover:border-[#C5A880] p-8 sm:p-12 shadow-sm hover:shadow-[0_16px_48px_rgba(197,168,128,0.22)] transition-all overflow-hidden"
        >
          {/* Subtle Ambient Gold Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white via-[#FFFFFF] to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A880]/50 text-[10px] uppercase tracking-[0.25em] text-[#8C7147] font-semibold mb-4 shadow-2xs">
                  <Calculator className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Instant Planning Suite • Real-Time Scoping</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-4">
                  Curate Your Budget & <span className="italic font-light text-[#8B263E]">Styling Vision</span>
                </h3>

                <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed mb-8">
                  Get immediate clarity on your turnkey celebration. Select your preferred theme and gathering scale to explore preliminary investment estimates, spatial inclusions, and live performance options.
                </p>

                {/* Quick Interactive Controls */}
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-[#8C7147] tracking-wider block mb-2">
                      Select Celebration Theme
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Baby Birthday Theme",
                        "Rooftop Party Theme",
                        "25th Anniversary Theme",
                        "Haldi & Mehndi Theme",
                        "Corporate Party Theme"
                      ].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTheme(t)}
                          className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                            selectedTheme === t
                              ? "bg-[#8B263E] text-white border border-[#8B263E] shadow-2xs"
                              : "bg-white text-stone-900 border border-[#C5A880]/40 hover:border-[#8B263E]"
                          }`}
                        >
                          {t.replace(" Theme", "")}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-[#8C7147] tracking-wider block mb-1.5">
                        Gathering Scale
                      </label>
                      <select
                        value={selectedScale}
                        onChange={(e) => setSelectedScale(e.target.value)}
                        className="w-full bg-white border border-[#C5A880]/50 rounded-xl px-3 py-2 text-xs text-[#2D2D2D] font-medium focus:outline-none focus:border-[#8B263E] shadow-2xs"
                      >
                        <option>Intimate (&lt; 50 Guests)</option>
                        <option>Signature (50-150 Guests)</option>
                        <option>Grand (150-350 Guests)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-[#8C7147] tracking-wider block mb-1.5">
                        Live Entertainment
                      </label>
                      <button
                        onClick={() => setIncludeArtist(!includeArtist)}
                        className={`w-full py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-colors shadow-2xs ${
                          includeArtist
                            ? "bg-white border-[#8B263E] text-[#8B263E]"
                            : "bg-white border-[#C5A880]/40 text-stone-800"
                        }`}
                      >
                        <span>Choreographer / Artist</span>
                        <span className="text-[10px] uppercase font-bold">{includeArtist ? "✓ Added" : "+ Add"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-[#C5A880]/30">
                <button
                  onClick={() => onOpenEstimator(selectedTheme)}
                  className="px-6 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Launch Instant Estimator</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenConsultation(selectedTheme)}
                  className="px-6 py-3.5 rounded-full border border-[#C5A880] hover:border-[#8B263E] bg-white hover:bg-white text-[#8B263E] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-2xs flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#8C7147]" />
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Estimator Preview Panel (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-7 rounded-3xl bg-white border border-[#C5A880]/60 shadow-sm relative">
                
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C5A880]/20">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#8C7147]">
                    Indicative Budget Range
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                    Turnkey Package
                  </span>
                </div>

                <div className="mb-4">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#8B263E] tracking-tight">
                    {quickRange}
                  </div>
                  <span className="text-[10px] text-stone-700 font-medium mt-0.5 block">
                    *Comprehensive scope based on selected {selectedTheme.replace(" Theme", "")}.
                  </span>
                </div>

                {/* Inclusions checklist */}
                <div className="space-y-2 mb-6 text-xs text-stone-900 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" />
                    <span>Turnkey Spatial Décor & Stage Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" />
                    <span>Concert Lighting & Anti-Glare Sound Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" />
                    <span>Dedicated Lead Event Stylist on Site</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" />
                    <span>White-Glove Installation & Teardown</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const customMessage = 
                      `*QUICK ESTIMATOR BRIEFING — CREATE 4 MOMENTS*%0A%0A` +
                      `*Theme:* ${selectedTheme}%0A` +
                      `*Scale:* ${selectedScale}%0A` +
                      `*Live Artist:* ${includeArtist ? "Yes" : "No"}%0A%0A` +
                      `_Hello Create 4 Moments, I would like to lock in this estimate and discuss available celebration dates._`;
                    openWhatsApp({ customMessage });
                  }}
                  className="w-full py-3 rounded-full bg-white hover:bg-white border border-[#C5A880] text-[#8C7147] hover:text-[#8B263E] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Lock in WhatsApp Estimate</span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
