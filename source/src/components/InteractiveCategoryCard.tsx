"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { ServiceCategory, GroupedServiceCategory } from "@/data/services";

interface InteractiveCategoryCardProps {
  cat: GroupedServiceCategory | ServiceCategory;
  index: number;
  experienceTag?: string;
  onInquire: (title: string) => void;
}

export default function InteractiveCategoryCard({
  cat,
  index,
  experienceTag,
  onInquire,
}: InteractiveCategoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Detect if device supports real hover (desktop vs touch)
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanHover(media.matches);
      const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, []);

  // Motion values for subtle 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs with high damping for a calm, editorial feel
  const springConfig = { stiffness: 240, damping: 24, mass: 0.6 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Subtle max 4.5deg tilt — sophisticated, not gaming
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4.5deg", "-4.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4.5deg", "4.5deg"]);

  // Subtle parallax translation of image in opposite direction
  const imgTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-6px", "6px"]);
  const imgTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-6px", "6px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
    setGlowPos({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    if (canHover) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const displayIndex = (index + 1).toString().padStart(2, "0");
  const isGrouped = "isGrouped" in cat && cat.isGrouped;
  const targetHref = "subPageHref" in cat && cat.subPageHref 
    ? cat.subPageHref 
    : `/gallery?category=${cat.slug}`;

  const photoBadgeText = isGrouped && "subAlbums" in cat && cat.subAlbums
    ? `${cat.subAlbums.length} Sub-Albums`
    : `${"allPhotosCount" in cat ? cat.allPhotosCount : (cat.allPhotos?.length || 10)} Photos`;

  const viewButtonLabel = isGrouped ? "View Sub-Albums" : "View Gallery";
  const badgeCollectionText = isGrouped ? "Curated Theme Hub" : "Signature Collection";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: 0.65, 
        delay: Math.min((index % 4) * 0.1, 0.35),
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileTap={{ scale: 0.985 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1100,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-3xl overflow-hidden bg-white border border-[#C5A880]/50 hover:border-[#C5A880] transition-colors duration-500 shadow-sm hover:shadow-[0_16px_44px_rgba(139,38,62,0.14)] flex flex-col justify-between select-none"
    >
      <motion.div
        style={{
          rotateX: canHover ? rotateX : 0,
          rotateY: canHover ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col h-full justify-between"
      >
        {/* Subtle Specular Sheen Glow that follows cursor on desktop */}
        {canHover && (
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 260px at ${glowPos.x}px ${glowPos.y}px, rgba(197, 168, 128, 0.18), transparent 75%)`,
            }}
          />
        )}

        {/* Image Canvas with 3D Depth & Link */}
        <Link
          href={targetHref}
          className="relative h-60 overflow-hidden bg-[#FAF9F5] block cursor-pointer"
          style={{ transform: "translateZ(10px)" }}
        >
          <motion.img
            src={cat.coverImage}
            alt={cat.title}
            style={{
              x: canHover ? imgTranslateX : 0,
              y: canHover ? imgTranslateY : 0,
            }}
            className="w-full h-full object-cover filter brightness-[0.93] contrast-[1.02] group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
          />

          {/* Luxury Scrim Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/75 via-[#2D2D2D]/20 to-transparent pointer-events-none" />

          {/* Top Layered Badges */}
          <div 
            className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20"
            style={{ transform: "translateZ(24px)" }}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-serif font-bold text-white bg-[#8B263E] px-2.5 py-0.5 rounded-full shadow-xs">
                {displayIndex}
              </span>
              {experienceTag && (
                <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8B263E] bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#C5A880]/40 shadow-xs hidden sm:inline-block">
                  {experienceTag}
                </span>
              )}
            </div>

            <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8C7147] bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#C5A880]/40 shadow-xs">
              {photoBadgeText}
            </span>
          </div>

          {/* Bottom Sub-badge over Image */}
          <div 
            className="absolute bottom-3 left-3.5 right-3.5 text-white z-20"
            style={{ transform: "translateZ(18px)" }}
          >
            <span className="text-[9px] uppercase font-bold tracking-[0.22em] text-[#EFE6D8] block mb-0.5 drop-shadow-sm">
              {badgeCollectionText}
            </span>
          </div>
        </Link>

        {/* Card Body with Layered Typography */}
        <div 
          className="p-6 bg-white flex-1 flex flex-col justify-between relative z-20"
          style={{ transform: "translateZ(16px)" }}
        >
          <div>
            <Link href={targetHref}>
              <h3 className="font-serif text-xl font-bold text-[#8B263E] group-hover:text-[#721D32] transition-colors leading-tight mb-2 cursor-pointer flex items-center justify-between">
                <span>{cat.title}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
            </Link>
            <p className="text-xs text-stone-800 font-normal leading-relaxed line-clamp-2 mb-4">
              {cat.subtitle}
            </p>
          </div>

          {/* Footer Action Buttons with Tactile Lift */}
          <div 
            className="pt-3.5 border-t border-[#C5A880]/30 flex items-center justify-between gap-2"
            style={{ transform: "translateZ(26px)" }}
          >
            <Link
              href={targetHref}
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7B5EA7] group-hover:text-[#8B263E] transition-colors hover:translate-x-0.5 duration-200"
            >
              <span>{viewButtonLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => onInquire(cat.title)}
              className="px-3.5 py-1.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] active:scale-95 text-white text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-xs hover:shadow-md hover:-translate-y-0.5"
              aria-label={`Inquire about ${cat.title} on WhatsApp`}
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>Inquire</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
