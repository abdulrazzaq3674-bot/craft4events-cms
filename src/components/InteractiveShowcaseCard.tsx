"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { LandmarkCaseStudy } from "@/data/caseStudies";

interface InteractiveShowcaseCardProps {
  commission: LandmarkCaseStudy;
  onClick: () => void;
  index: number;
}

export default function InteractiveShowcaseCard({
  commission,
  onClick,
  index,
}: InteractiveShowcaseCardProps) {
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
  const imgTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-6px", "6px"]);
  const imgTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-6px", "6px"]);

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
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1100,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[#E7E5E4] hover:border-[#8B263E]/60 shadow-sm hover:shadow-[0_16px_44px_rgba(139,38,62,0.12)] transition-colors duration-500 cursor-pointer flex flex-col justify-between select-none"
    >
      <motion.div
        style={{
          rotateX: canHover ? rotateX : 0,
          rotateY: canHover ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col h-full justify-between"
      >
        {/* Glow */}
        {canHover && (
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 260px at ${glowPos.x}px ${glowPos.y}px, rgba(139, 38, 62, 0.12), transparent 75%)`,
            }}
          />
        )}

        {/* Image Canvas with 3D Parallax */}
        <div 
          className="relative h-80 overflow-hidden bg-white"
          style={{ transform: "translateZ(10px)" }}
        >
          <motion.img
            src={commission.coverImage}
            alt={commission.title}
            style={{
              x: canHover ? imgTranslateX : 0,
              y: canHover ? imgTranslateY : 0,
            }}
            className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.02] group-hover:scale-106 group-hover:brightness-100 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/85 via-[#2D2D2D]/30 to-transparent pointer-events-none" />

          <span 
            className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#2D2D2D] text-[10px] font-bold uppercase tracking-widest border border-[#E7E5E4] shadow-sm z-20"
            style={{ transform: "translateZ(24px)" }}
          >
            {commission.category}
          </span>

          <span 
            className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#8B263E]/90 backdrop-blur-md text-white border border-white/20 text-[10px] uppercase font-semibold z-20"
            style={{ transform: "translateZ(24px)" }}
          >
            {commission.timeline.length}-Day Timeline
          </span>

          <div 
            className="absolute bottom-4 left-4 right-4 text-white z-20"
            style={{ transform: "translateZ(20px)" }}
          >
            <span className="text-[10px] uppercase tracking-wider text-[#E8E0F0] font-bold block mb-1">
              {commission.locationType} • {commission.year}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug drop-shadow-md group-hover:text-[#F3EBF9] transition-colors">
              {commission.title}
            </h3>
          </div>
        </div>

        {/* Editorial Body */}
        <div 
          className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white relative z-20"
          style={{ transform: "translateZ(16px)" }}
        >
          <div>
            <blockquote className="font-serif text-xs italic text-[#7B5EA7] leading-relaxed mb-4 pb-4 border-b border-[#E7E5E4]">
              &ldquo;{commission.editorialQuote}&rdquo;
            </blockquote>

            <p className="text-xs text-stone-800 font-normal leading-relaxed mb-6">
              {commission.curatorNote}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {commission.metrics.slice(0, 2).map((m) => (
                <div key={m.label} className="bg-white p-2.5 rounded-xl border border-[#E7E5E4]">
                  <span className="text-[9px] uppercase tracking-wider text-stone-800 font-semibold block">{m.label}</span>
                  <span className="font-serif text-xs font-semibold text-[#2D2D2D]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="pt-4 border-t border-[#E7E5E4] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#7B5EA7] group-hover:text-[#8B263E] transition-colors"
            style={{ transform: "translateZ(26px)" }}
          >
            <span>View Full Story</span>
            <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#8B263E] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-1 shadow-2xs">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
