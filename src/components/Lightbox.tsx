"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { openWhatsApp } from "@/utils/whatsapp";
import { IMAGE_SHIMMER_BLUR_DATA_URL } from "@/data/wpApi";

export interface LightboxPhotoItem {
  id?: string;
  name?: string;
  category?: string;
  categorySlug?: string;
  image: string;
  description?: string;
}

interface LightboxProps {
  items: LightboxPhotoItem[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onConsultation?: (category?: string, name?: string) => void;
  onWhatsApp?: (item: LightboxPhotoItem) => void;
}

export default function Lightbox({
  items,
  activeIndex,
  isOpen,
  onClose,
  onWhatsApp
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);

  useEffect(() => {
    setCurrentIndex(activeIndex);
  }, [activeIndex]);

  const currentItem = items[currentIndex];

  const goPrev = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goNext = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goPrev, goNext, onClose]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goNext(),
    onSwipedRight: () => goPrev(),
    trackMouse: true,
  });

  if (!isOpen || !currentItem) return null;

  const categoryTitle = currentItem.category || currentItem.name || "Event Photography";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 select-none"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div 
          className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto py-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-semibold tracking-wider backdrop-blur-md">
              {categoryTitle}
            </span>
            <span className="text-white/60 text-xs font-mono">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all border border-white/20 shadow-lg flex items-center justify-center group"
            aria-label="Close Fullscreen View"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Center Canvas / Responsive Fullscreen Image */}
        <div 
          {...swipeHandlers}
          className="relative flex-1 flex items-center justify-center w-full max-w-7xl mx-auto my-auto overflow-hidden px-2 sm:px-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-1 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-white transition-all border border-white/20 backdrop-blur-md shadow-2xl"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-1 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-white transition-all border border-white/20 backdrop-blur-md shadow-2xl"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Current Photo with smooth enter animation */}
          <motion.div
            key={currentItem.image}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex items-center justify-center w-[92vw] sm:w-[85vw] h-[78vh] sm:h-[82vh]"
          >
            <Image
              src={currentItem.image}
              alt={categoryTitle}
              fill
              sizes="90vw"
              placeholder="blur"
              blurDataURL={IMAGE_SHIMMER_BLUR_DATA_URL}
              className="object-contain rounded-xl sm:rounded-2xl select-none"
            />
          </motion.div>
        </div>

        {/* Minimalist Bottom Bar */}
        <div 
          className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-7xl mx-auto pt-2 text-stone-400 text-xs"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-white/60">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">→</kbd> to browse</span>
            <span>•</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">ESC</kbd> to exit</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onWhatsApp) {
                  onWhatsApp(currentItem);
                } else {
                  openWhatsApp({
                    themeTitle: categoryTitle,
                    customMessage: `Hello Craft4Events, I am inquiring about this event decoration: ${categoryTitle}`
                  });
                }
              }}
              className="px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Inquire This Theme on WhatsApp</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
