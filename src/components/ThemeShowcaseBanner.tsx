"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { openWhatsApp } from "@/utils/whatsapp";

interface ThemePanel {
  id: string;
  titleLine1: string;
  titleLine2: string;
  categorySlug: string;
  image: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

// Custom Luxury Gold Line Icons matching the reference image exactly
const WeddingRingsIcon = () => (
  <svg className="w-8 h-8 text-[#E5C992] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* Left Ring */}
    <circle cx="16" cy="22" r="9" />
    {/* Right Ring */}
    <circle cx="24" cy="22" r="9" />
    {/* Diamond atop left ring */}
    <path d="M16 13 L19 9 L16 6 L13 9 Z" fill="#F8E7C9" stroke="#E5C992" strokeWidth="1.2" />
    <path d="M13 9 L19 9" stroke="#9E783E" strokeWidth="1" />
  </svg>
);

const LotusFlowerIcon = () => (
  <svg className="w-8 h-8 text-[#E5C992] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* Central Petal */}
    <path d="M20 9 C18 16 17 24 20 28 C23 24 22 16 20 9 Z" fill="rgba(229,201,146,0.15)" />
    {/* Left Petal */}
    <path d="M19 14 C13 18 10 24 13 28 C16 28 18 24 19 21" />
    {/* Right Petal */}
    <path d="M21 14 C27 18 30 24 27 28 C24 28 22 24 21 21" />
    {/* Far Left Outer Petal */}
    <path d="M12 21 C7 23 6 28 10 29 C13 29 15 27 16 25" />
    {/* Far Right Outer Petal */}
    <path d="M28 21 C33 23 34 28 30 29 C27 29 25 27 24 25" />
    {/* Base Lotus Leaf/Pad */}
    <path d="M7 29 C14 33 26 33 33 29" strokeWidth="1.6" />
  </svg>
);

const BirthdayCakeIcon = () => (
  <svg className="w-8 h-8 text-[#E5C992] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* Cake Tier Bottom */}
    <rect x="8" y="22" width="24" height="9" rx="2" />
    {/* Cake Tier Top */}
    <rect x="12" y="15" width="16" height="7" rx="1.5" />
    {/* Cake Candles */}
    <line x1="16" y1="15" x2="16" y2="10" strokeWidth="1.6" />
    <line x1="20" y1="15" x2="20" y2="9" strokeWidth="1.6" />
    <line x1="24" y1="15" x2="24" y2="10" strokeWidth="1.6" />
    {/* Candle Flames */}
    <circle cx="16" cy="8.5" r="1.2" fill="#F8E7C9" />
    <circle cx="20" cy="7.5" r="1.3" fill="#F8E7C9" />
    <circle cx="24" cy="8.5" r="1.2" fill="#F8E7C9" />
    {/* Cake Plate */}
    <line x1="6" y1="31" x2="34" y2="31" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const StageLightsIcon = () => (
  <svg className="w-8 h-8 text-[#E5C992] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* Overhead Truss */}
    <line x1="6" y1="10" x2="34" y2="10" strokeWidth="2" />
    <line x1="6" y1="14" x2="34" y2="14" strokeWidth="1.5" />
    {/* Truss Diagonals */}
    <path d="M6 10 L10 14 L14 10 L18 14 L22 10 L26 14 L30 10 L34 14" strokeWidth="1" />
    {/* Stage Screen / Spotlight Frame */}
    <rect x="11" y="16" width="18" height="11" rx="1.5" />
    {/* Spotlight beams / Light beams */}
    <path d="M14 18 L20 23 L26 18" strokeWidth="1.2" />
    {/* Stage Floor */}
    <line x1="7" y1="30" x2="33" y2="30" strokeWidth="2" strokeLinecap="round" />
    {/* Speaker / truss legs */}
    <line x1="8" y1="14" x2="8" y2="30" strokeWidth="1.6" />
    <line x1="32" y1="14" x2="32" y2="30" strokeWidth="1.6" />
  </svg>
);

const CorporateEventsIcon = () => (
  <svg className="w-8 h-8 text-[#E5C992] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* Center Leader Figure */}
    <circle cx="20" cy="13" r="3.5" />
    <path d="M14 24 C14 20 16 19 20 19 C24 19 26 20 26 24" strokeWidth="1.8" />
    {/* Left Attendee */}
    <circle cx="11" cy="16" r="3" />
    <path d="M6 26 C6 23 8 22 11 22 C13 22 14.5 22.8 15.2 24.2" strokeWidth="1.6" />
    {/* Right Attendee */}
    <circle cx="29" cy="16" r="3" />
    <path d="M34 26 C34 23 32 22 29 22 C27 22 25.5 22.8 24.8 24.2" strokeWidth="1.6" />
    {/* Conference Podium / Table Baseline */}
    <line x1="7" y1="29" x2="33" y2="29" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const DestinationWeddingsIcon = () => (
  <svg className="w-8 h-8 text-[#E5C992] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* Palm Tree Trunk */}
    <path d="M17 31 C18 24 16 18 18 13" strokeWidth="2" strokeLinecap="round" />
    {/* Palm Leaves */}
    <path d="M18 13 C14 11 10 13 9 16" strokeWidth="1.6" />
    <path d="M18 13 C15 9 12 7 9 9" strokeWidth="1.6" />
    <path d="M18 13 C20 9 24 8 26 10" strokeWidth="1.6" />
    <path d="M18 13 C22 12 25 15 25 18" strokeWidth="1.6" />
    {/* Soaring Airplane */}
    <path d="M28 8 L33 6 L32 9 L34 11 L31 10.5 L30 13 L29 11.5 L27 11 Z" fill="#F8E7C9" stroke="#E5C992" strokeWidth="1" />
    {/* Island Waves */}
    <path d="M8 31 Q13 29 18 31 T28 31 T34 31" strokeWidth="1.6" />
  </svg>
);

const THEMES: ThemePanel[] = [
  {
    id: "wedding-decor",
    titleLine1: "WEDDING",
    titleLine2: "DECOR",
    categorySlug: "couple-room-decor",
    image: "/showcase/wedding-decor.jpg",
    subtitle: "Opulent Floral Walkways & Royal Mandaps",
    description: "Grand architectural flower arches, crystal chandeliers, candlelit aisles, and fairytale wedding sets.",
    icon: <WeddingRingsIcon />
  },
  {
    id: "haldi-mehandi",
    titleLine1: "HALDI",
    titleLine2: "MEHANDI",
    categorySlug: "haldi-decor-theme",
    image: "/showcase/haldi-mehandi.jpg",
    subtitle: "Vibrant Marigold & Bohemian Festive Canopies",
    description: "Authentic brass urulis with flower petals, bright marigold ceilings, and colorful festive seating cabanas.",
    icon: <LotusFlowerIcon />
  },
  {
    id: "birthday-parties",
    titleLine1: "BIRTHDAY",
    titleLine2: "PARTIES",
    categorySlug: "birthday-theme",
    image: "/showcase/birthday-parties.jpg",
    subtitle: "Fairytale Balloon Art, Cakes & Neon Lounges",
    description: "Whimsical wonderland balloon castles, customized glowing neon signs, luxury cake tables, and character themes.",
    icon: <BirthdayCakeIcon />
  },
  {
    id: "stage-entertainment",
    titleLine1: "STAGE &",
    titleLine2: "ENTERTAINMENT",
    categorySlug: "corporate-party-theme",
    image: "/showcase/stage-entertainment.jpg",
    subtitle: "Concert Lighting, Pyrotechnics & Elite Artists",
    description: "Kinetic LED screens, beam moving heads, DJ consoles, cold spark pyrotechnics, and celebrity acts.",
    icon: <StageLightsIcon />
  },
  {
    id: "corporate-events",
    titleLine1: "CORPORATE",
    titleLine2: "EVENTS",
    categorySlug: "corporate-party-theme",
    image: "/showcase/corporate-events.jpg",
    subtitle: "Executive Galas, Annual Summits & Brand Launches",
    description: "Immersive corporate ballroom architecture, VIP dining galas, keynote stages, and AV production.",
    icon: <CorporateEventsIcon />
  },
  {
    id: "destination-weddings",
    titleLine1: "DESTINATION",
    titleLine2: "WEDDINGS",
    categorySlug: "couple-room-decor",
    image: "/showcase/destination-weddings.jpg",
    subtitle: "Sunset Beach Arches & Heritage Palaces",
    description: "Bespoke destination celebrations across Goa, Udaipur, Jaipur, Thailand, and exotic coastal paradises.",
    icon: <DestinationWeddingsIcon />
  }
];

// Desktop Slanted Polygon Definitions (converging towards the central logo wedge)
// Left panels slant / towards top center
// Right panels slant \ towards top center
// Center logo panel is a converging wedge
const DESKTOP_POLYGONS = {
  // Left 3 panels
  p0: "polygon(0% 0%, 16.5% 0%, 13% 100%, 0% 100%)",
  p1: "polygon(16.5% 0%, 29.5% 0%, 26% 100%, 13% 100%)",
  p2: "polygon(29.5% 0%, 42.5% 0%, 39% 100%, 26% 100%)",
  // Center logo wedge
  center: "polygon(42.5% 0%, 57.5% 0%, 61% 100%, 39% 100%)",
  // Right 3 panels
  p3: "polygon(57.5% 0%, 70.5% 0%, 74% 100%, 61% 100%)",
  p4: "polygon(70.5% 0%, 83.5% 0%, 87% 100%, 74% 100%)",
  p5: "polygon(83.5% 0%, 100% 0%, 100% 100%, 87% 100%)"
};

// Center position coordinates of each panel for bottom title placement
const PANEL_BOTTOM_CENTERS = [
  "6.5%",   // Panel 0 (Wedding Decor)
  "19.5%",  // Panel 1 (Haldi Mehandi)
  "32.5%",  // Panel 2 (Birthday Parties)
  "67.5%",  // Panel 3 (Stage & Entertainment)
  "80.5%",  // Panel 4 (Corporate Events)
  "93.5%"   // Panel 5 (Destination Weddings)
];

interface ThemeShowcaseBannerProps {
  onOpenConsultation?: (themeTitle?: string) => void;
}

export default function ThemeShowcaseBanner({ onOpenConsultation }: ThemeShowcaseBannerProps) {
  const [hoveredPanelIndex, setHoveredPanelIndex] = useState<number | null>(null);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredPanelIndex(null);
    setMouseOffset({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    setActiveHighlightIndex((prev) => (prev > 0 ? prev - 1 : THEMES.length - 1));
  };

  const handleNext = () => {
    setActiveHighlightIndex((prev) => (prev < THEMES.length - 1 ? prev + 1 : 0));
  };

  const handleThemeClick = (theme: ThemePanel) => {
    if (onOpenConsultation) {
      onOpenConsultation(`${theme.titleLine1} ${theme.titleLine2}`);
    } else {
      openWhatsApp({ themeTitle: `${theme.titleLine1} ${theme.titleLine2}` });
    }
  };

  return (
    <section 
      id="showcase"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#0F0B13] border-y border-[#3A2D1F] overflow-hidden select-none"
      aria-label="Interactive Event Theme Showcase"
    >
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP CINEMATIC SLANTED DIAGONAL PANELS LAYOUT (lg & above)
         ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block relative w-full h-[580px] xl:h-[640px] 2xl:h-[700px] overflow-hidden bg-black">
        
        {/* ── LEFT 3 SLANTED PANELS (0: Wedding, 1: Haldi, 2: Birthday) ── */}
        {THEMES.slice(0, 3).map((theme, idx) => {
          const isHovered = hoveredPanelIndex === idx;
          const isDimmed = hoveredPanelIndex !== null && !isHovered;
          const polygon = idx === 0 ? DESKTOP_POLYGONS.p0 : idx === 1 ? DESKTOP_POLYGONS.p1 : DESKTOP_POLYGONS.p2;

          return (
            <div
              key={theme.id}
              onClick={() => handleThemeClick(theme)}
              onMouseEnter={() => setHoveredPanelIndex(idx)}
              style={{ clipPath: polygon }}
              className={`absolute inset-0 cursor-pointer transition-all duration-700 ease-out group ${
                isDimmed ? "opacity-75 filter brightness-75" : "opacity-100 filter brightness-100"
              }`}
            >
              {/* Background Photo */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('${theme.image}')`,
                  transform: `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px) scale(${isHovered ? 1.08 : 1.02})`
                }}
              />

              {/* Ambient Shadow & Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 group-hover:from-black/85 transition-colors duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.6)_100%)] pointer-events-none" />

              {/* Hover Golden Aura Overlay */}
              <div 
                className={`absolute inset-0 bg-[#C5A880]/15 transition-opacity duration-500 pointer-events-none ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`} 
              />
            </div>
          );
        })}

        {/* ── CENTER PIECE: BRANDED LOGO WEDGE ── */}
        <div
          style={{ clipPath: DESKTOP_POLYGONS.center }}
          className="absolute inset-0 z-10 pointer-events-auto cursor-pointer group"
          onClick={() => onOpenConsultation ? onOpenConsultation("Luxury Theme Planning") : openWhatsApp({ themeTitle: "Luxury Theme Planning" })}
        >
          {/* Ivory Floral Drapery Backdrop */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: "url('/showcase/center-drapes.jpg')",
              transform: `translate(${mouseOffset.x * 0.2}px, ${mouseOffset.y * 0.2}px) scale(1.03)`
            }}
          />

          {/* Luxury Warm Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/95 via-[#F7F2EB]/90 to-[#EFE7DC]/95 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(197,168,128,0.25)_100%)] pointer-events-none" />

          {/* Centered Luxury Logo & Tagline Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
            
            {/* Top Micro Flourish */}
            <div className="flex items-center gap-2 mb-2 opacity-80">
              <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#B38F56]" />
              <Sparkles className="w-3.5 h-3.5 text-[#B38F56]" />
              <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#B38F56]" />
            </div>

            {/* Prominent C4E Monogram */}
            <div className="relative flex items-center justify-center tracking-tight my-1 group-hover:scale-105 transition-transform duration-500">
              <span className="font-serif font-black text-5xl xl:text-6xl 2xl:text-7xl text-[#18151A] tracking-[-0.04em] drop-shadow-sm">
                C
              </span>
              <span className="font-serif font-black text-5xl xl:text-6xl 2xl:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#DFC188] via-[#C5A880] to-[#99794B] tracking-[-0.04em] -mx-1 drop-shadow-[0_4px_12px_rgba(197,168,128,0.4)]">
                4
              </span>
              <span className="font-serif font-black text-5xl xl:text-6xl 2xl:text-7xl text-[#18151A] tracking-[-0.04em] drop-shadow-sm">
                E
              </span>
            </div>

            {/* CRAFT 4 EVENTS Main Brand Heading */}
            <div className="mt-2 mb-1 flex items-center gap-1.5 justify-center">
              <span className="font-serif font-bold text-base xl:text-lg 2xl:text-xl uppercase tracking-[0.24em] text-[#1E1924]">
                CRAFT <span className="text-[#B38F56]">4</span> EVENTS
              </span>
            </div>

            {/* Luxury Tagline */}
            <p className="text-[9px] xl:text-[10px] 2xl:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#6B5A49] mb-3">
              PARTY PLANNING & THEME DÉCOR
            </p>

            {/* Bottom Diamond Ornament */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#B38F56]" />
              <span className="text-[#B38F56] text-xs">◆</span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#B38F56]" />
            </div>

            {/* Interactive CTA Pill (Appears nicely on hover) */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#18151A] text-white text-[9px] font-medium uppercase tracking-[0.2em] shadow-lg group-hover:bg-[#8B263E] transition-colors duration-300">
              <span>Book Celebration</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* ── RIGHT 3 SLANTED PANELS (3: Stage, 4: Corporate, 5: Destination) ── */}
        {THEMES.slice(3, 6).map((theme, relIdx) => {
          const absIdx = relIdx + 3;
          const isHovered = hoveredPanelIndex === absIdx;
          const isDimmed = hoveredPanelIndex !== null && !isHovered;
          const polygon = relIdx === 0 ? DESKTOP_POLYGONS.p3 : relIdx === 1 ? DESKTOP_POLYGONS.p4 : DESKTOP_POLYGONS.p5;

          return (
            <div
              key={theme.id}
              onClick={() => handleThemeClick(theme)}
              onMouseEnter={() => setHoveredPanelIndex(absIdx)}
              style={{ clipPath: polygon }}
              className={`absolute inset-0 cursor-pointer transition-all duration-700 ease-out group ${
                isDimmed ? "opacity-75 filter brightness-75" : "opacity-100 filter brightness-100"
              }`}
            >
              {/* Background Photo */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('${theme.image}')`,
                  transform: `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px) scale(${isHovered ? 1.08 : 1.02})`
                }}
              />

              {/* Ambient Shadow & Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 group-hover:from-black/85 transition-colors duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.6)_100%)] pointer-events-none" />

              {/* Hover Golden Aura Overlay */}
              <div 
                className={`absolute inset-0 bg-[#C5A880]/15 transition-opacity duration-500 pointer-events-none ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`} 
              />
            </div>
          );
        })}

        {/* ── HIGH-PRECISION SVG GOLDEN DIVIDER BEVEL LINES ── */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          preserveAspectRatio="none"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <linearGradient id="goldSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8A6B3D" />
              <stop offset="25%" stopColor="#DFBF86" />
              <stop offset="50%" stopColor="#FFF2D6" />
              <stop offset="75%" stopColor="#DFBF86" />
              <stop offset="100%" stopColor="#8A6B3D" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Dividers (Slanted /) */}
          <line x1="165" y1="0" x2="130" y2="1000" stroke="url(#goldSheen)" strokeWidth="2.4" filter="url(#goldGlow)" />
          <line x1="295" y1="0" x2="260" y2="1000" stroke="url(#goldSheen)" strokeWidth="2.4" filter="url(#goldGlow)" />
          <line x1="425" y1="0" x2="390" y2="1000" stroke="url(#goldSheen)" strokeWidth="3" filter="url(#goldGlow)" />

          {/* Right Dividers (Slanted \) */}
          <line x1="575" y1="0" x2="610" y2="1000" stroke="url(#goldSheen)" strokeWidth="3" filter="url(#goldGlow)" />
          <line x1="705" y1="0" x2="740" y2="1000" stroke="url(#goldSheen)" strokeWidth="2.4" filter="url(#goldGlow)" />
          <line x1="835" y1="0" x2="870" y2="1000" stroke="url(#goldSheen)" strokeWidth="2.4" filter="url(#goldGlow)" />
        </svg>

        {/* ── BOTTOM THEME LABELS (GOLD ICON + 2-LINE SERIF TITLE) ── */}
        <div className="absolute bottom-6 inset-x-0 z-20 pointer-events-none">
          {THEMES.map((theme, idx) => {
            const isHovered = hoveredPanelIndex === idx;
            const leftPos = PANEL_BOTTOM_CENTERS[idx];

            return (
              <div
                key={theme.id}
                style={{ left: leftPos }}
                className={`absolute bottom-0 -translate-x-1/2 flex flex-col items-center text-center transition-all duration-500 ${
                  isHovered ? "scale-110 -translate-y-2" : "scale-100"
                }`}
              >
                {/* Theme Icon */}
                <div className={`mb-2.5 transition-transform duration-500 ${isHovered ? "scale-115 text-[#FFF0D4]" : "text-[#E5C992]"}`}>
                  {theme.icon}
                </div>

                {/* Theme Title (2 lines) */}
                <div className="flex flex-col items-center">
                  <span className="font-serif font-bold text-xs xl:text-sm tracking-[0.22em] text-[#FAF8F5] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {theme.titleLine1}
                  </span>
                  <span className="font-serif font-bold text-xs xl:text-sm tracking-[0.22em] text-[#FAF8F5] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {theme.titleLine2}
                  </span>
                </div>

                {/* Subtle Active Indicator Pip */}
                <div className={`w-1.5 h-1.5 rounded-full mt-2 transition-all duration-300 ${
                  isHovered ? "bg-[#DFC188] shadow-[0_0_8px_#DFC188] scale-125" : "bg-white/20"
                }`} />
              </div>
            );
          })}
        </div>

        {/* ── SUBTLE ARROW NAVIGATION CONTROLS (LEFT & RIGHT) ── */}
        <button
          onClick={handlePrev}
          aria-label="Previous theme"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/45 hover:bg-black/75 active:scale-95 text-white/80 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next theme"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/45 hover:bg-black/75 active:scale-95 text-white/80 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE & TABLET RESPONSIVE SHOWCASE GRID (< lg)
         ───────────────────────────────────────────────────────────── */}
      <div className="block lg:hidden px-4 py-10 max-w-5xl mx-auto">
        
        {/* Mobile Center Brand Badge */}
        <div 
          onClick={() => onOpenConsultation ? onOpenConsultation("Luxury Theme Planning") : openWhatsApp({ themeTitle: "Luxury Theme Planning" })}
          className="relative mb-8 rounded-2xl overflow-hidden border border-[#C5A880]/70 shadow-[0_12px_40px_rgba(0,0,0,0.7)] cursor-pointer group"
        >
          {/* Ivory Floral Drapery Backdrop */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/showcase/center-drapes.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/95 via-[#F7F2EB]/90 to-[#EFE7DC]/95 pointer-events-none" />

          <div className="relative z-10 px-6 py-8 text-center flex flex-col items-center">
            {/* Top Micro Sparkles */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#B38F56]" />
              <Sparkles className="w-4 h-4 text-[#B38F56]" />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#B38F56]" />
            </div>

            {/* Monogram C4E */}
            <div className="flex items-center justify-center tracking-tight mb-1">
              <span className="font-serif font-black text-5xl text-[#18151A]">C</span>
              <span className="font-serif font-black text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#DFC188] via-[#C5A880] to-[#99794B] -mx-0.5">
                4
              </span>
              <span className="font-serif font-black text-5xl text-[#18151A]">E</span>
            </div>

            {/* Brand Heading */}
            <div className="mb-1 font-serif font-bold text-base sm:text-lg uppercase tracking-[0.24em] text-[#1E1924]">
              CRAFT <span className="text-[#B38F56]">4</span> EVENTS
            </div>

            {/* Subtitle */}
            <div className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#6B5A49] mb-4">
              PARTY PLANNING & THEME DÉCOR
            </div>

            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#18151A] text-white text-[10px] font-medium uppercase tracking-[0.18em]">
              <span>Tap to Plan Your Celebration</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* 6 Responsive Theme Cards Grid (2 cols on mobile, 3 on tablet) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {THEMES.map((theme, idx) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              onClick={() => handleThemeClick(theme)}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#C5A880]/40 shadow-xl cursor-pointer group active:scale-[0.98] transition-transform"
            >
              {/* Card Photo */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${theme.image}')` }}
              />

              {/* Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute inset-0 border border-[#C5A880]/30 rounded-2xl pointer-events-none group-hover:border-[#C5A880] transition-colors" />

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 flex flex-col items-center text-center">
                <div className="mb-2 text-[#E5C992] group-hover:scale-110 transition-transform">
                  {theme.icon}
                </div>
                <span className="font-serif font-bold text-[11px] sm:text-xs tracking-[0.2em] text-[#FAF8F5] uppercase leading-tight">
                  {theme.titleLine1} {theme.titleLine2}
                </span>
                <span className="text-[9px] text-[#C5A880] tracking-wider mt-1 opacity-90 line-clamp-1">
                  {theme.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
