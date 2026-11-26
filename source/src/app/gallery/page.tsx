"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, Eye, Images } from "lucide-react";
import Link from "next/link";
import Lightbox, { LightboxPhotoItem } from "@/components/Lightbox";
import Navbar from "@/components/Navbar";
import { SERVICES_DATA, MAIN_CATEGORIES } from "@/data/services";
import { openWhatsApp } from "@/utils/whatsapp";

interface PhotoEntry extends LightboxPhotoItem {
  id: string;
  image: string;
  category: string;
  categorySlug: string;
}

const GALLERY_CATEGORY_FILTERS = [
  { slug: "all", label: "All Photos" },
  { slug: "birthday-theme", label: "Birthday Themes" },
  { slug: "baby-birthday-theme", label: "Baby Birthday" },
  { slug: "baby-welcome-decoration", label: "Baby Welcome" },
  { slug: "adult-birthday-theme", label: "Adult Birthday" },
  { slug: "anniversary-theme", label: "Anniversary Themes" },
  { slug: "50th-anniversary-theme", label: "50th Anniversary" },
  { slug: "25th-anniversary-theme", label: "25th Anniversary" },
  { slug: "car-decor", label: "Car Decor" },
  { slug: "couple-room-decor", label: "Couple Room Decor" },
  { slug: "rooftop-party-theme", label: "Rooftop Party" },
  { slug: "haldi-decor-theme", label: "Haldi Decor" },
  { slug: "mehndi-decor-theme", label: "Mehndi Decor" },
  { slug: "corporate-party-theme", label: "Corporate Party" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Sync category filter from URL query param
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat) {
        if (GALLERY_CATEGORY_FILTERS.some((c) => c.slug === cat)) {
          setActiveCategory(cat);
        } else if (MAIN_CATEGORIES.some((c) => c.slug === cat)) {
          setActiveCategory(cat);
        }
      }
    }
  }, []);

  // Aggregate all high-resolution event photographs across every theme
  const allPhotos: PhotoEntry[] = useMemo(() => {
    return SERVICES_DATA.flatMap((cat) =>
      cat.allPhotos.map((photoUrl, idx) => ({
        id: `${cat.slug}-${idx}`,
        image: photoUrl,
        category: cat.title,
        categorySlug: cat.slug,
      }))
    );
  }, []);

  // Filtered photos based on active tab
  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return allPhotos;

    if (activeCategory === "birthday-theme") {
      return allPhotos.filter((p) =>
        ["baby-birthday-theme", "baby-welcome-decoration", "adult-birthday-theme"].includes(p.categorySlug)
      );
    }

    if (activeCategory === "anniversary-theme") {
      return allPhotos.filter((p) =>
        ["50th-anniversary-theme", "25th-anniversary-theme"].includes(p.categorySlug)
      );
    }

    return allPhotos.filter((p) => p.categorySlug === activeCategory);
  }, [activeCategory, allPhotos]);

  // Active category display title
  const currentTitle = useMemo(() => {
    if (activeCategory === "all") return "Master Portfolio Archive";
    const found = GALLERY_CATEGORY_FILTERS.find((f) => f.slug === activeCategory);
    return found ? `${found.label} Gallery` : "Event Portfolio";
  }, [activeCategory]);

  return (
    <main className="min-h-screen text-[#2D2D2D] selection:bg-[#8B263E] selection:text-white font-sans bg-[#FAF9F5]/40">
      <Navbar />

      {/* Gallery Header */}
      <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center border-b border-[#E7E5E4]">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8C7147] hover:text-[#8B263E] transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E7E5E4] text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Event Photography Archive</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#2D2D2D] mb-3">
          {currentTitle}
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-700 font-normal leading-relaxed mb-8">
          Showing {filteredPhotos.length} high-resolution photographs from our real event productions across India. Click any photo to view in fullscreen.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {GALLERY_CATEGORY_FILTERS.map((tab) => {
            const isActive = activeCategory === tab.slug;
            return (
              <button
                key={tab.slug}
                onClick={() => setActiveCategory(tab.slug)}
                className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "bg-[#8B263E] text-white shadow-md scale-105 border border-[#8B263E]"
                    : "bg-white text-stone-700 border border-[#E7E5E4] hover:border-[#C5A880] hover:text-[#8B263E] hover:shadow-2xs"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Clean Smartphone-Like Photo-Only Grid (Zero Clutter, Zero Blueprint Tags) */}
      <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: Math.min((index % 12) * 0.03, 0.3) }}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-stone-100 border border-[#E7E5E4] cursor-pointer shadow-2xs hover:shadow-xl hover:border-[#C5A880] transition-all duration-300"
            >
              <img
                src={photo.image}
                alt={photo.category}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out select-none"
              />

              {/* Hover Overlay with Eye Icon and Category Pill */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4">
                <div className="self-end w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md text-[#2D2D2D] flex items-center justify-center shadow-lg">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="text-white">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-white/95 line-clamp-1 drop-shadow-sm">
                    {photo.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Responsive Fullscreen Lightbox Modal Popup */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <Lightbox
            key="clean-gallery-lightbox"
            items={filteredPhotos}
            activeIndex={activeLightboxIndex}
            isOpen={true}
            onClose={() => setActiveLightboxIndex(null)}
            onWhatsApp={(item) =>
              openWhatsApp({
                themeTitle: item.category || "Event Gallery Photo",
                customMessage: `Hello Craft4Events, I am inquiring about this event decor photo from your gallery (${item.category}).`
              })
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}
