"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calculator, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

interface BudgetEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  initialTheme?: string;
}

export default function BudgetEstimatorModal({ isOpen, onClose, initialTheme }: BudgetEstimatorProps) {
  const [eventType, setEventType] = useState(initialTheme || "baby-birthday");
  const [guestRange, setGuestRange] = useState("50-150");
  const [includeSfx, setIncludeSfx] = useState(true);
  const [includeArtist, setIncludeArtist] = useState(false);

  const calculateEstimate = () => {
    let base = 65000;
    if (eventType === "baby-birthday") base = 55000;
    if (eventType === "baby-welcome") base = 45000;
    if (eventType === "car-room") base = 35000;
    if (eventType === "rooftop") base = 85000;
    if (eventType === "25th-anniv") base = 95000;
    if (eventType === "50th-anniv") base = 115000;
    if (eventType === "adult-birthday") base = 75000;
    if (eventType === "haldi-mehndi") base = 120000;
    if (eventType === "corporate") base = 220000;

    if (guestRange === "150-350") base *= 1.4;
    if (guestRange === "350+") base *= 1.9;

    if (includeSfx) base += 35000;
    if (includeArtist) base += 50000;

    return Math.round(base).toLocaleString("en-IN");
  };

  const handleSendWhatsAppQuote = () => {
    const customMessage = 
      `*CREATE 4 MOMENTS — INSTANT ESTIMATOR BRIEFING*%0A%0A` +
      `*Event Theme:* ${encodeURIComponent(eventType)}%0A` +
      `*Expected Gathering:* ${encodeURIComponent(guestRange)} Guests%0A` +
      `*Stage FX & Spatial Illumination:* ${includeSfx ? "Yes" : "No"}%0A` +
      `*Live Performance Artist / Act:* ${includeArtist ? "Yes" : "No"}%0A%0A` +
      `_Hello Create 4 Moments, I calculated an initial theme estimate on your website. Please share available dates and customized portfolio packages._`;

    openWhatsApp({ customMessage });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#C5A880] max-h-[92vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white hover:bg-white text-stone-800 hover:text-[#8B263E] transition-colors border border-[#C5A880]/40 shadow-2xs"
              aria-label="Close Estimator"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#8B263E] font-bold text-[10px] uppercase tracking-[0.25em]">
              <Calculator className="w-4 h-4 text-[#C5A880]" />
              <span>Instant Budget Planner</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B263E] mb-1">
              Estimate Your Celebration <span className="italic font-light text-[#7B5EA7]">Investment</span>
            </h3>
            
            <p className="text-xs text-stone-800 font-normal mb-6">
              Turnkey bespoke decor, spatial lighting, and live artists customized to your vision.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-[#8C7147] block mb-2 uppercase tracking-[0.15em] text-[10px]">
                  1. Select Event Theme
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "baby-birthday", name: "Baby Birthday" },
                    { id: "baby-welcome", name: "Baby Welcome" },
                    { id: "car-room", name: "Car / Room Decor" },
                    { id: "rooftop", name: "Rooftop Party" },
                    { id: "25th-anniv", name: "25th Anniversary" },
                    { id: "50th-anniv", name: "50th Anniversary" },
                    { id: "adult-birthday", name: "Adult Birthday" },
                    { id: "haldi-mehndi", name: "Haldi & Mehndi" },
                    { id: "corporate", name: "Corporate Gala" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setEventType(cat.id)}
                      className={`py-2 px-2.5 rounded-xl border text-[11px] font-semibold transition-all ${
                        eventType === cat.id
                          ? "bg-[#8B263E] text-white border-[#8B263E] shadow-xs"
                          : "bg-white text-stone-900 border-[#C5A880]/40 hover:border-[#8B263E]"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold text-[#8C7147] block mb-1.5 uppercase tracking-[0.15em] text-[10px]">
                  2. Expected Guest Gathering
                </label>
                <select
                  value={guestRange}
                  onChange={(e) => setGuestRange(e.target.value)}
                  className="w-full bg-white border border-[#C5A880]/50 rounded-xl px-3 py-2.5 text-xs text-[#2D2D2D] focus:outline-none focus:border-[#8B263E] font-medium shadow-2xs"
                >
                  <option value="20-50">20 - 50 Guests (Intimate Gathering)</option>
                  <option value="50-150">50 - 150 Guests (Signature Setup)</option>
                  <option value="150-350">150 - 350 Guests (Grand Celebration)</option>
                  <option value="350+">350+ Guests (Extravaganza Staging)</option>
                </select>
              </div>

              <div className="pt-2 border-t border-[#C5A880]/30">
                <label className="font-bold text-[#8C7147] block mb-2 uppercase tracking-[0.15em] text-[10px]">
                  3. Production & Live Entertainment Add-ons
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <label className="flex items-center gap-2 cursor-pointer bg-white p-2.5 rounded-xl border border-[#C5A880]/40 flex-1 shadow-2xs">
                    <input
                      type="checkbox"
                      checked={includeSfx}
                      onChange={(e) => setIncludeSfx(e.target.checked)}
                      className="w-4 h-4 rounded text-[#8B263E] focus:ring-[#8B263E] accent-[#8B263E]"
                    />
                    <span className="text-stone-900 font-semibold text-xs">Architectural Lighting & Stage FX</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-white p-2.5 rounded-xl border border-[#C5A880]/40 flex-1 shadow-2xs">
                    <input
                      type="checkbox"
                      checked={includeArtist}
                      onChange={(e) => setIncludeArtist(e.target.checked)}
                      className="w-4 h-4 rounded text-[#8B263E] focus:ring-[#8B263E] accent-[#8B263E]"
                    />
                    <span className="text-stone-900 font-semibold text-xs">Live Artist / Choreographer</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white border border-[#C5A880]/50 flex items-center justify-between shadow-2xs">
              <div>
                <span className="text-[10px] text-stone-800 uppercase tracking-wider block font-bold">Estimated Turnkey Range</span>
                <span className="text-2xl font-serif font-bold text-[#8B263E]">₹{calculateEstimate()}*</span>
              </div>
              <button
                onClick={handleSendWhatsAppQuote}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Get WhatsApp Quote</span>
              </button>
            </div>
            
            <p className="text-[10px] text-stone-700 font-medium mt-2 text-center">
              *Preliminary estimate including custom bespoke decor, spatial illumination, setup & teardown.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
