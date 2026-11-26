"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";

interface InteractiveArtistCardProps {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  features: string[];
  bookButtonText: string;
  onBook: () => void;
  onWhatsApp: () => void;
  delay?: number;
}

export default function InteractiveArtistCard({
  icon,
  tag,
  title,
  description,
  features,
  bookButtonText,
  onBook,
  onWhatsApp,
  delay = 0,
}: InteractiveArtistCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanHover(media.matches);
      const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 240, damping: 24, mass: 0.6 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    if (canHover) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.985 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1100,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-3xl bg-white border border-[#C5A880]/50 hover:border-[#C5A880] transition-colors duration-500 shadow-sm hover:shadow-[0_16px_44px_rgba(139,38,62,0.14)] p-8 flex flex-col justify-between select-none overflow-hidden"
    >
      <motion.div
        style={{
          rotateX: canHover ? rotateX : 0,
          rotateY: canHover ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col h-full justify-between"
      >
        {/* Cursor Glow */}
        {canHover && (
          <div
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 240px at ${glowPos.x}px ${glowPos.y}px, rgba(197, 168, 128, 0.16), transparent 75%)`,
            }}
          />
        )}

        <div style={{ transform: "translateZ(16px)" }}>
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#C5A880]/40 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#8B263E] transition-all duration-300 shadow-xs">
            {icon}
          </div>
          <span className="text-[10px] font-serif italic text-[#7B5EA7] font-semibold tracking-wider block mb-1">
            {tag}
          </span>
          <h3 className="font-serif text-xl text-[#8B263E] mb-2 font-bold group-hover:text-[#721D32] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-stone-800 leading-relaxed font-normal mb-5">
            {description}
          </p>

          <div className="space-y-2.5 mb-6">
            {features.map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-[11px] text-stone-900 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8B263E] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="pt-4 border-t border-[#C5A880]/30 flex flex-col gap-2 relative z-20"
          style={{ transform: "translateZ(24px)" }}
        >
          <button
            onClick={onBook}
            className="w-full py-2.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] active:scale-98 text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 text-center shadow-xs hover:shadow-md hover:-translate-y-0.5"
          >
            {bookButtonText}
          </button>
          <button
            onClick={onWhatsApp}
            className="w-full py-2 rounded-full border border-[#C5A880] hover:border-[#8B263E] hover:bg-white text-[#8C7147] hover:text-[#8B263E] text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-2xs hover:shadow-xs active:scale-98"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp Inquiry</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
