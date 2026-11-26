"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Images, ArrowRight, MessageCircle, Eye, Sparkles } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { openWhatsApp } from "@/utils/whatsapp";
import type { WpGalleryAlbum } from "@/data/wpApi";

interface SliderPhoto {
  id: string;
  image: string;
  title: string;
  category: string;
  categorySlug: string;
}

interface MasterGallerySliderProps {
  wpAlbums?: WpGalleryAlbum[];
}

const EVENT_PICTURES: SliderPhoto[] = [
  {
    id: "sl-1",
    image: "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM (1).jpeg",
    title: "Fairytale Balloon Castle Staging",
    category: "Baby Birthday Theme",
    categorySlug: "baby-birthday-theme",
  },
  {
    id: "sl-2",
    image: "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.45 PM (1).jpeg",
    title: "Candlelit Suite & Rose Petal Pathway",
    category: "Couple Room Decor",
    categorySlug: "couple-room-decor",
  },
  {
    id: "sl-3",
    image: "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM (1).jpeg",
    title: "Golden Jubilee Grand Archway",
    category: "50th Anniversary Theme",
    categorySlug: "50th-anniversary-theme",
  },
  {
    id: "sl-4",
    image: "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.24 PM.jpeg",
    title: "Starlight Canopy & Open-Sky Lounge",
    category: "Rooftop Party Theme",
    categorySlug: "rooftop-party-theme",
  },
  {
    id: "sl-5",
    image: "/photos/Haldi Decor Theme/Courtyard_Haldi_setup_decorated_20260927174533.jpg",
    title: "Marigold Architecture & Brass Urulis",
    category: "Haldi Decor Theme",
    categorySlug: "haldi-decor-theme",
  },
  {
    id: "sl-6",
    image: "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.29 PM (1).jpeg",
    title: "Monumental Floral Bonnet Ribbon Styling",
    category: "Car Decor",
    categorySlug: "car-decor",
  },
  {
    id: "sl-7",
    image: "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.38 PM.jpeg",
    title: "Silver Jubilee Crystal Chandelier Hall",
    category: "25th Anniversary Theme",
    categorySlug: "25th-anniversary-theme",
  },
  {
    id: "sl-8",
    image: "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.56 PM.jpeg",
    title: "Black-Tie Neon Milestone Lounge",
    category: "Adult Birthday Theme",
    categorySlug: "adult-birthday-theme",
  },
  {
    id: "sl-9",
    image: "/photos/Mehndi Decor Theme/Bohemian_Mehndi_lounge_with_rugs_20260927174533.jpg",
    title: "Bohemian Garden Seating & Floral Swings",
    category: "Mehndi Decor Theme",
    categorySlug: "mehndi-decor-theme",
  },
  {
    id: "sl-10",
    image: "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.50 PM (1).jpeg",
    title: "Auspicious Pastel Cradle Homecoming",
    category: "Baby Welcome Decoration",
    categorySlug: "baby-welcome-decoration",
  },
  {
    id: "sl-11",
    image: "/photos/Corporate Decor Theme/Corporate_annual_celebration_sta…_2K_20260927172904.jpg",
    title: "Executive Concert-Grade Stage Architecture",
    category: "Corporate Party Theme",
    categorySlug: "corporate-party-theme",
  },
  {
    id: "sl-12",
    image: "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.29 PM.jpeg",
    title: "Pastel Cloud Balloon Architecture",
    category: "Baby Birthday Theme",
    categorySlug: "baby-birthday-theme",
  },
];

export default function MasterGallerySlider({ wpAlbums = [] }: MasterGallerySliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const sliderPictures: SliderPhoto[] = useMemo(() => {
    if (wpAlbums.length === 0) return EVENT_PICTURES;

    const dynamicPhotos: SliderPhoto[] = wpAlbums.flatMap((album) => {
      const imgs = album.photos.length > 0 ? album.photos : [album.coverImage];
      return imgs.map((img, idx) => ({
        id: `${album.id}-${idx}`,
        image: img,
        title: album.title,
        category: album.category,
        categorySlug: album.categorySlug,
      }));
    });

    return dynamicPhotos.length > 0 ? dynamicPhotos : EVENT_PICTURES;
  }, [wpAlbums]);

  const marqueeItems = useMemo(
    () => [...sliderPictures, ...sliderPictures],
    [sliderPictures]
  );

  return (
    <section id="portfolio" className="py-24 border-b border-[#E7E5E4] overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A880]/50 text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-3 shadow-xs">
            <Images className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Visual Archive & Real Celebrations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-4">
            The Master <span className="italic font-light text-[#8B263E]">Theme Gallery</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-5" />

          <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed max-w-2xl mx-auto">
            Live photographic documentation of bespoke decor installations, fairytale balloon stages, and luxury celebrations crafted by our team across India. Hover over any photo to pause and click to inspect.
          </p>
        </div>
      </div>

      {/* ═══════════════════════ CONTINUOUS ANIMATED SLIDER (INFINITE MARQUEE) ═══════════════════════ */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge fade masks for seamless visual transition */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 38,
              ease: "linear",
            },
          }}
          className="flex gap-5 sm:gap-6 w-max"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setActiveLightboxIndex(idx % sliderPictures.length)}
              className="group relative w-[280px] sm:w-[350px] md:w-[390px] h-[220px] sm:h-[260px] rounded-3xl overflow-hidden bg-stone-100 border border-[#C5A880]/50 hover:border-[#C5A880] shadow-sm hover:shadow-[0_16px_40px_rgba(139,38,62,0.18)] transition-all duration-300 cursor-pointer shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out select-none"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

              {/* Top category badge */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
                <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8C7147] bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#C5A880]/40 shadow-xs">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom title & Action prompt */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-20 pointer-events-none">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#EFE6D8] block mb-0.5">
                  Real Event Production
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold text-white drop-shadow leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Prominent Master Gallery Navigation CTAs */}
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/gallery"
          className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#8B263E] hover:bg-[#721D32] active:scale-95 text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
        >
          <span>Explore Full Master Gallery (150+ Photos)</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <button
          onClick={() => openWhatsApp({ customMessage: "Hello Craft4Events, please share your complete portfolio lookbook and high-resolution event archive." })}
          className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#C5A880] hover:border-[#8B263E] bg-white hover:bg-white text-[#8C7147] hover:text-[#8B263E] active:scale-95 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>Request Curated WhatsApp Lookbook</span>
        </button>
      </div>

      {/* Lightbox when any slide is clicked */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <Lightbox
            key="slider-lightbox"
            items={sliderPictures}
            activeIndex={activeLightboxIndex}
            isOpen={true}
            onClose={() => setActiveLightboxIndex(null)}
            onWhatsApp={(item) => openWhatsApp({ themeTitle: item.category })}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
