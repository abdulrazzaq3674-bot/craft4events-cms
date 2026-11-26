"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Music, ArrowDown, MessageCircle, Sparkles } from "lucide-react";

interface InteractiveEntertainmentCardProps {
  onInquire: () => void;
  onBook: () => void;
}

export default function InteractiveEntertainmentCard({
  onInquire,
  onBook,
}: InteractiveEntertainmentCardProps) {
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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4.5deg", "-4.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4.5deg", "4.5deg"]);
  const iconTranslateZ = useTransform(mouseXSpring, [-0.5, 0.5], ["-4px", "4px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.985 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1100,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-3xl overflow-hidden bg-white border-2 border-dashed border-[#C5A880] transition-colors duration-500 shadow-sm hover:shadow-[0_16px_44px_rgba(139,38,62,0.14)] flex flex-col justify-between select-none"
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
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 260px at ${glowPos.x}px ${glowPos.y}px, rgba(197, 168, 128, 0.18), transparent 75%)`,
            }}
          />
        )}

        {/* Header Canvas with Entertainment Accent */}
        <div 
          className="relative h-60 overflow-hidden bg-gradient-to-br from-[#FAF9F5] via-white to-[#F5F2EB] flex flex-col items-center justify-center p-6 text-center"
          style={{ transform: "translateZ(14px)" }}
        >
          <motion.div 
            style={{ x: canHover ? iconTranslateZ : 0 }}
            className="w-16 h-16 rounded-2xl bg-white border border-[#C5A880]/60 shadow-md flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#8B263E] transition-all duration-300"
          >
            <Music className="w-8 h-8 text-[#8B263E]" />
          </motion.div>
          
          <span className="text-[10px] font-serif font-bold text-[#8B263E] uppercase tracking-[0.22em] mb-1">
            12 / Entertainment Roster
          </span>
          <span className="text-xs text-stone-800 font-medium">
            Choreographers • Dancers • Acts • DJs
          </span>
        </div>

        {/* Card Body */}
        <div 
          className="p-6 bg-white flex-1 flex flex-col justify-between relative z-20"
          style={{ transform: "translateZ(18px)" }}
        >
          <div>
            <h3 className="font-serif text-xl font-bold text-[#8B263E] group-hover:text-[#721D32] transition-colors leading-tight mb-2 flex items-center justify-between">
              <span>Live Artists & Entertainment</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
            <p className="text-xs text-stone-800 font-normal leading-relaxed mb-4">
              Professional dance troupes, choreographers, specialty entertainment acts, and celebrity DJs to electrify your celebration.
            </p>
          </div>

          <div 
            className="pt-3.5 border-t border-[#C5A880]/30 flex items-center justify-between gap-2"
            style={{ transform: "translateZ(26px)" }}
          >
            <a
              href="#artists"
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7B5EA7] hover:text-[#8B263E] transition-colors hover:translate-x-0.5 duration-200"
            >
              <span>View Roster</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <div className="flex items-center gap-1.5">
              <button
                onClick={onInquire}
                className="p-1.5 rounded-full border border-[#C5A880] hover:border-[#8B263E] bg-white text-[#25D366] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                title="Inquire on WhatsApp"
                aria-label="Inquire on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onBook}
                className="px-3.5 py-1.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] active:scale-95 text-white text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                Book Artists
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
