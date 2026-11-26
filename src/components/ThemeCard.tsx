"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Play } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  image: string;
  videoUrl?: string;
  description: string;
  setupTime?: string;
  inclusions?: string[];
}

interface ThemeCardProps extends CatalogItem {
  onBook: (themeName: string) => void;
}

export default function ThemeCard({
  name,
  category,
  image,
  videoUrl,
  description,
  onBook,
}: ThemeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[#C5A880]/50 hover:border-[#C5A880] shadow-sm hover:shadow-[0_12px_36px_rgba(197,168,128,0.22)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Canvas (Image or Short Video Reel) */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-white">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${isPlaying ? "opacity-0" : "opacity-100"}`}
        />

        {videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/70 via-transparent to-transparent pointer-events-none" />

        {/* Video Reel Indicator */}
        {videoUrl && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#C5A880]/40 text-[#8B263E] text-[10px] font-semibold uppercase tracking-wider shadow-xs">
            <Play className={`w-3 h-3 ${isPlaying ? "fill-[#8B263E] text-[#8B263E]" : "fill-[#C5A880] text-[#C5A880]"}`} />
            <span>{isPlaying ? "Playing Reel" : "Preview Reel"}</span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-[#8B263E] text-white text-[10px] uppercase font-bold tracking-wider shadow-xs">
          {category}
        </div>

        {/* Title over Image Gradient */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm group-hover:text-[#E8E0F0] transition-colors">
            {name}
          </h3>
        </div>
      </div>

      {/* Card Details — Pristine Off-White/Cream with Rich Maroon Heading & Gold Borders */}
      <div className="p-6 bg-white flex-1 flex flex-col justify-between">
        <p className="text-stone-800 text-xs sm:text-sm leading-relaxed mb-6 font-normal line-clamp-3">
          {description}
        </p>

        {/* Actions */}
        <div className="pt-4 border-t border-[#C5A880]/30 flex items-center gap-2.5">
          <button
            onClick={() => onBook(name)}
            className="flex-1 py-2.5 px-4 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Book Experience</span>
          </button>

          <button
            onClick={() => {
              openWhatsApp({ themeTitle: category, packageItem: name });
            }}
            className="p-2.5 rounded-full border border-[#C5A880] hover:border-[#8B263E] bg-white hover:bg-white text-[#8B263E] transition-colors shadow-xs"
            title="Inquire on WhatsApp"
            aria-label={`Inquire about ${name} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
