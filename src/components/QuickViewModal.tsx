"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { CatalogItem } from "./ThemeCard";

import { openWhatsApp } from "@/utils/whatsapp";

interface QuickViewModalProps {
  item: CatalogItem | null;
  onClose: () => void;
  onBook: (themeName: string) => void;
}

export default function QuickViewModal({ item, onClose, onBook }: QuickViewModalProps) {
  if (!item) return null;

  const directWhatsApp = () => {
    openWhatsApp({ themeTitle: item.category, packageItem: item.name });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#C5A880] shadow-2xl p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-stone-700 hover:text-[#8B263E] transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-white border border-[#C5A880]/30">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#8B263E] px-3.5 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-xs">
              {item.category}
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B263E] mb-2">
            {item.name}
          </h3>
          <p className="text-stone-800 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            {item.description}
          </p>

          {/* Highlights & Inclusions */}
          <div className="bg-white border border-[#C5A880]/40 rounded-2xl p-5 mb-6 shadow-xs">
            <h5 className="text-xs font-bold text-[#8B263E] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Theme Specifications & Inclusions</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-900 font-medium">
              {item.inclusions?.map((inc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" />
                  <span>{inc}</span>
                </div>
              )) || (
                <>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" /> Bespoke Spatial Architecture</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" /> White-Glove Setup & Teardown</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" /> Turnkey Lighting & Coordination</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B263E] shrink-0" /> Dedicated Lead Event Stylist</div>
                </>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onBook(item.name);
              }}
              className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Reserve Theme Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={directWhatsApp}
              className="flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-[#C5A880] hover:border-[#8B263E] text-stone-800 bg-white hover:bg-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
