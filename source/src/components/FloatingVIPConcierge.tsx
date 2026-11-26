"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles, X } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export default function FloatingVIPConcierge() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpenWhatsApp = () => {
    openWhatsApp({
      customMessage: "Hello Craft4Events, I would like to speak directly with an Event Designer regarding concept styling, venue suitability, and dates.",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      
      {/* Interactive Tooltip Badge */}
      <AnimatePresence>
        {!isDismissed && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-[#C5A880] shadow-[0_10px_30px_rgba(197,168,128,0.30)] text-[#2D2D2D] backdrop-blur-md relative cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleOpenWhatsApp}
          >
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#8B263E] leading-tight flex items-center gap-1">
                Chat with Event Designer
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
              </span>
              <span className="text-[9px] text-stone-800 font-medium">
                Instant WhatsApp VIP Consultation
              </span>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="ml-1 text-stone-700 hover:text-[#8B263E] p-0.5 transition-colors"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button with Pulsing Radiance */}
      <motion.button
        onClick={handleOpenWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-4 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white border-2 border-[#C5A880] shadow-[0_12px_36px_rgba(139,38,62,0.35)] flex items-center justify-center transition-all duration-300"
        aria-label="Chat with Event Designer on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#C5A880]/40 animate-ping pointer-events-none opacity-60" />
        <span className="absolute -inset-2 rounded-full bg-[#8B263E]/20 animate-pulse pointer-events-none" />

        <div className="relative z-10 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-[#25D366] fill-[#25D366]" />
        </div>

        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-white sm:hidden" />
      </motion.button>

    </div>
  );
}
