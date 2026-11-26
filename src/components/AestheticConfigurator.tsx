"use client";

import React, { useState, useMemo } from "react";
import { 
  Check, MessageCircle, Copy, CheckCheck, 
  ArrowRight, Sliders, RefreshCw 
} from "lucide-react";
import Image from "next/image";

interface PaletteOption {
  id: string;
  name: string;
  subtitle: string;
  colors: string[];
  botanicalStyle: string;
}

interface CoreTheme {
  id: string;
  label: string;
  coverImage: string;
}

// 6 Core Polished Themes (all redundant, fragmented sub-cards removed)
const CORE_THEMES: CoreTheme[] = [
  {
    id: "birthday-theme",
    label: "Birthday Theme",
    coverImage: "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM (1).jpeg",
  },
  {
    id: "anniversary-theme",
    label: "Anniversary Theme",
    coverImage: "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM (1).jpeg",
  },
  {
    id: "rooftop-party-theme",
    label: "Rooftop Party Theme",
    coverImage: "/photos/Rooftop party theme/WhatsApp Image 2026-09-26 at 11.37.19 PM (1).jpeg",
  },
  {
    id: "haldi-decor-theme",
    label: "Haldi Decor Theme",
    coverImage: "/photos/Haldi decor theme/WhatsApp Image 2026-09-26 at 11.38.31 PM (1).jpeg",
  },
  {
    id: "mehndi-decor-theme",
    label: "Mehndi Decor Theme",
    coverImage: "/photos/Mehndi decor theme/WhatsApp Image 2026-09-26 at 11.38.07 PM.jpeg",
  },
  {
    id: "corporate-party-theme",
    label: "Corporate Party Theme",
    coverImage: "/photos/corporate party theme/WhatsApp Image 2026-09-26 at 11.39.26 PM (1).jpeg",
  },
];

const PALETTES: PaletteOption[] = [
  {
    id: "champagne-gold",
    name: "Champagne Gold & Ivory",
    subtitle: "Timeless warm metallics with soft ivory drapery and crystal details",
    colors: ["#C5A880", "#F5EFE6", "#FFFFFF", "#2D2D2D"],
    botanicalStyle: "White Carnations, Ivory Garden Roses & Gold Leaf Accents"
  },
  {
    id: "royal-lavender",
    name: "Royal Lavender & Silver",
    subtitle: "Elegant purple tones with shimmer silver accents and soft lighting",
    colors: ["#7B5EA7", "#E8E0F0", "#FFFFFF", "#2D2D2D"],
    botanicalStyle: "Purple Hydrangeas, Lavender Sprigs & Silver-Dusted Ferns"
  },
  {
    id: "blush-renaissance",
    name: "Blush Rose & Pink Quartz",
    subtitle: "Romantic pastel pinks with delicate gold filigree and floral touches",
    colors: ["#EAD5D0", "#FAF5F2", "#8C7147", "#312624"],
    botanicalStyle: "Blush Peonies, Sweet Avalanche Roses & Imported Ranunculus"
  },
  {
    id: "tropical-fiesta",
    name: "Tropical Fiesta & Neon Pop",
    subtitle: "Bold vibrant colours for high-energy birthday bashes and rooftop parties",
    colors: ["#FF6B6B", "#FFE66D", "#4ECDC4", "#2D2D2D"],
    botanicalStyle: "Sunflowers, Tropical Leaves, Balloon Installations & LED Neon Signs"
  },
  {
    id: "maroon-elegance",
    name: "Maroon Velvet & Deep Crimson",
    subtitle: "Rich deep tones for grand anniversary galas, haldi, and corporate events",
    colors: ["#8B263E", "#C5A880", "#FFFFFF", "#2D2D2D"],
    botanicalStyle: "Deep Red Roses, Marigold Garlands, Velvet Drapery & Brass Urlis"
  }
];

export default function AestheticConfigurator() {
  const [selectedPalette, setSelectedPalette] = useState<PaletteOption>(PALETTES[0]);
  const [selectedTheme, setSelectedTheme] = useState<string>(CORE_THEMES[0].label);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>("C4M-EVT-8942-X");

  // Active theme cover image lookup
  const activeThemeCover = useMemo(() => {
    const match = CORE_THEMES.find((c) => c.label.toLowerCase() === selectedTheme.toLowerCase());
    return match?.coverImage || CORE_THEMES[0].coverImage;
  }, [selectedTheme]);

  // Generate randomized reference code on demand
  const refreshReferenceCode = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    setReferenceCode(`C4M-EVT-${randomDigits}-${randomLetter}`);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referenceCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleDirectWhatsAppInquiry = () => {
    const message = 
      `*EVENT CONFIGURATOR INQUIRY - CRAFT 4 EVENTS*%0A%0A` +
      `*Reference:* ${encodeURIComponent(referenceCode)}%0A` +
      `*Event Theme:* ${encodeURIComponent(selectedTheme)}%0A` +
      `*Colour Palette:* ${encodeURIComponent(selectedPalette.name)}%0A` +
      `*Décor & Botanical Style:* ${encodeURIComponent(selectedPalette.botanicalStyle)}%0A%0A` +
      `_Hello Craft 4 Events! I've configured my celebration concept above. Please review availability and share a custom quote._`;

    window.open(`https://api.whatsapp.com/send?phone=918595675935&text=${message}`, "_blank");
  };

  return (
    <section id="configurator" className="py-28 border-b border-[#E7E5E4] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B8A8D0] text-[10px] uppercase tracking-[0.3em] text-[#7B5EA7] font-semibold mb-4 shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-[#7B5EA7]" />
            <span>Interactive Event Builder</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-4">
            Theme & Event <span className="italic font-light text-[#8B263E]">Configurator</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#7B5EA7] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed">
            Build your dream celebration step by step. Choose your theme and colour palette — then send your configured dossier directly to our team via WhatsApp.
          </p>
        </div>

        {/* Main Grid: Interactive Controls on Left, Live Dossier Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Event Theme */}
            <div className="bg-white border border-[#E7E5E4] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#7B5EA7] font-bold">
                  Step 01 / Event Theme
                </span>
                <span className="text-xs font-serif italic text-stone-800 font-medium">
                  {CORE_THEMES.length} Core Themes
                </span>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#2D2D2D] mb-4">
                Choose Your Celebration Type
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CORE_THEMES.map((cat) => {
                  const isSelected = selectedTheme === cat.label;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedTheme(cat.label)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-300 text-xs flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#8B263E] text-white border-[#8B263E] shadow-md font-semibold scale-[1.02]"
                          : "bg-white text-stone-700 border-[#E7E5E4] hover:border-[#7B5EA7] hover:text-[#2D2D2D]"
                      }`}
                    >
                      <span className="line-clamp-1">{cat.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#E8E0F0] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Palette */}
            <div className="bg-white border border-[#E7E5E4] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#7B5EA7] font-bold">
                  Step 02 / Colour & Style
                </span>
                <span className="text-xs font-serif italic text-stone-800 font-medium">Curated Palettes</span>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#2D2D2D] mb-4">
                Select Colour Palette
              </h3>

              <div className="space-y-3">
                {PALETTES.map((pal) => {
                  const isSelected = selectedPalette.id === pal.id;
                  return (
                    <div
                      key={pal.id}
                      onClick={() => setSelectedPalette(pal)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-white border-[#7B5EA7] ring-1 ring-[#7B5EA7]/30 shadow-md"
                          : "bg-white border-[#E7E5E4] hover:border-stone-400"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-sm font-medium text-[#2D2D2D]">{pal.name}</h4>
                          {isSelected && (
                            <span className="px-2 py-0.5 rounded-full bg-white border border-[#7B5EA7] text-[9px] uppercase tracking-wider text-[#7B5EA7] font-bold">
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-stone-800 font-normal max-w-md">{pal.subtitle}</p>
                      </div>

                      {/* Color Swatch Circles */}
                      <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                        {pal.colors.map((c, i) => (
                          <span
                            key={i}
                            className="w-5 h-5 rounded-full border border-stone-300 shadow-inner"
                            style={{ backgroundColor: c }}
                            title={c}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Dynamic Live Visual Preview Card (5 Cols Sticky) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white border border-[#E7E5E4] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              
              {/* Subtle gradient ribbon top */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-white via-[#8B263E] to-[#C5A880]" />

              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E4] mb-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#7B5EA7] font-bold">
                      Live Event Summary
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#2D2D2D]">
                    Your Event Dossier
                  </h3>
                </div>

                {/* Reference Code Tag */}
                <div className="flex items-center gap-1.5 bg-white border border-[#E7E5E4] px-3 py-1.5 rounded-full">
                  <span className="font-mono text-[11px] font-bold text-[#2D2D2D] tracking-wider">
                    {referenceCode}
                  </span>
                  <button
                    onClick={refreshReferenceCode}
                    className="text-stone-700 hover:text-[#7B5EA7] p-0.5 transition-colors cursor-pointer"
                    title="Generate New Reference Code"
                    aria-label="Generate new reference code"
                  >
                    <RefreshCw className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Dynamic Image Preview */}
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6 bg-white border border-[#E7E5E4] shadow-inner group">
                <Image
                  src={activeThemeCover}
                  alt={selectedTheme}
                  fill
                  className="object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 via-[#2D2D2D]/20 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#2D2D2D] text-[10px] font-bold uppercase tracking-wider border border-[#E7E5E4] shadow-sm">
                    {selectedTheme}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#EFE6D8] font-semibold block mb-0.5">
                    Configured Aesthetic
                  </span>
                  <h4 className="font-serif text-lg font-normal drop-shadow">
                    {selectedPalette.name}
                  </h4>
                </div>
              </div>

              {/* Configured Parameters Breakdown */}
              <div className="space-y-3.5 text-xs mb-6">
                
                <div className="flex items-start justify-between pb-2 border-b border-[#E7E5E4]">
                  <span className="text-stone-800 font-medium">Event Theme:</span>
                  <span className="font-semibold text-[#2D2D2D] text-right">{selectedTheme}</span>
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-[#E7E5E4]">
                  <span className="text-stone-800 font-medium">Colour Palette:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[#2D2D2D]">{selectedPalette.name.split("&")[0]}</span>
                    <div className="flex items-center gap-0.5">
                      {selectedPalette.colors.map((c, i) => (
                        <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B5EA7] block mb-1">
                    Décor & Botanical Direction:
                  </span>
                  <p className="text-[11px] text-stone-800 font-normal leading-relaxed italic bg-white p-2.5 rounded-xl border border-[#E7E5E4]">
                    &ldquo;{selectedPalette.botanicalStyle}&rdquo;
                  </p>
                </div>
              </div>

              {/* Actions: Direct WhatsApp Inquiry & Copy Reference Code */}
              <div className="space-y-2.5">
                <button
                  onClick={handleDirectWhatsAppInquiry}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8E0F0]" />
                  <span>Direct WhatsApp Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleCopyCode}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#E7E5E4] hover:bg-white text-[#2D2D2D] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Reference Code Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#7B5EA7]" />
                      <span>Copy Reference ({referenceCode})</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 text-center border-t border-[#E7E5E4]">
                <span className="text-[10px] text-stone-700 font-medium">
                  ✦ Bespoke Celebration Quote Within 2 Hours • Transparent Pricing ✦
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
