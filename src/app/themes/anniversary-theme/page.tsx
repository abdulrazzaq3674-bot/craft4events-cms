"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, MessageCircle, ArrowRight, Eye, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Lightbox from "@/components/Lightbox";
import BookingModal from "@/components/BookingModal";
import { SERVICES_DATA, HOMEPAGE_SERVICES_DATA } from "@/data/services";
import { openWhatsApp } from "@/utils/whatsapp";

export default function AnniversaryThemesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const anniversaryCategory = HOMEPAGE_SERVICES_DATA.find((c) => c.slug === "anniversary-theme");
  const subAlbums = anniversaryCategory?.subAlbums || [];

  // All anniversary photos gathered from 50th and 25th anniversary themes
  const golden50 = SERVICES_DATA.find((c) => c.slug === "50th-anniversary-theme");
  const silver25 = SERVICES_DATA.find((c) => c.slug === "25th-anniversary-theme");

  const allAnniversaryPhotos = [
    ...(golden50?.allPhotos.map((p) => ({ url: p, album: "50th Anniversary Theme", slug: "50th-anniversary-theme" })) || []),
    ...(silver25?.allPhotos.map((p) => ({ url: p, album: "25th Anniversary Theme", slug: "25th-anniversary-theme" })) || []),
  ];

  return (
    <main className="min-h-screen text-[#2D2D2D] selection:bg-[#8B263E] selection:text-white font-sans bg-[#FAF9F5]/40">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Hero Header */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto border-b border-[#E7E5E4]">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-6">
          <Link href="/" className="hover:text-[#8B263E] transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
          <Link href="/#categories" className="hover:text-[#8B263E] transition-colors">
            Themes
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
          <span className="text-[#8B263E]">Anniversary Theme</span>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A880]/50 text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Curated Theme Hub</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#2D2D2D] mb-4">
            Anniversary <span className="italic font-light text-[#8B263E]">Celebration Themes</span>
          </h1>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-5" />

          <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Celebrate landmark milestones of love. Explore our 2 dedicated collections: Golden Jubilee 50th Anniversary and Silver Jubilee 25th Anniversary styling with grand floral architecture, crystal chandeliers, and memory lane galleries.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-[#C5A880]/40 shadow-xs text-xs font-semibold text-[#8B263E]">
            <span>2 Curated Sub-Albums</span>
            <span className="text-stone-300">•</span>
            <span>16 High-Resolution Event Photographs</span>
          </div>
        </div>
      </section>

      {/* 2 Sub-Albums Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b border-[#E7E5E4]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D2D2D]">
            Select an <span className="italic text-[#8B263E]">Anniversary Sub-Album</span>
          </h2>
          <p className="text-xs text-stone-600 mt-2">
            Click any sub-album below to view its full photo gallery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subAlbums.map((sub, idx) => (
            <motion.div
              key={sub.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#C5A880]/50 hover:border-[#C5A880] shadow-sm hover:shadow-[0_16px_40px_rgba(139,38,62,0.14)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <Link href={`/gallery?category=${sub.slug}`} className="relative h-64 overflow-hidden block">
                <img
                  src={sub.coverImage}
                  alt={sub.title}
                  className="w-full h-full object-cover filter brightness-[0.94] group-hover:scale-108 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-[#8C7147] bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A880]/40 shadow-xs">
                  {sub.photoCount} Photos
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#EFE6D8] font-bold block mb-1">
                    Milestone Sub-Album 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white drop-shadow">
                    {sub.title}
                  </h3>
                </div>
              </Link>

              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="text-xs text-stone-700 leading-relaxed mb-6 font-normal">
                  {sub.subtitle}
                </p>

                <div className="pt-4 border-t border-[#E7E5E4] flex items-center justify-between gap-3">
                  <Link
                    href={`/gallery?category=${sub.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8B263E] hover:text-[#721D32] transition-colors"
                  >
                    <span>Open Photo Album</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openWhatsApp({ themeTitle: sub.title })}
                    className="p-2 rounded-full bg-white border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    title={`Inquire about ${sub.title}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clean Photo-Only Minimalist Grid Preview (Smartphone Gallery Style) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E5E4] text-[10px] uppercase tracking-[0.25em] text-stone-600 font-semibold mb-3">
            <Eye className="w-3.5 h-3.5 text-[#8B263E]" />
            <span>High-Resolution Photo Gallery</span>
          </div>
          <h2 className="font-serif text-3xl font-normal text-[#2D2D2D] mb-3">
            All Anniversary <span className="italic text-[#8B263E]">Event Photographs</span>
          </h2>
          <p className="text-xs text-stone-600">
            Click any image to view in fullscreen lightbox mode.
          </p>
        </div>

        {/* Clean Photo-Only Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {allAnniversaryPhotos.map((photo, i) => (
            <motion.div
              key={`${photo.slug}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
              onClick={() => setActiveLightboxIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-100 border border-[#E7E5E4] cursor-pointer shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.album}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#2D2D2D] flex items-center justify-center shadow-lg">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <Lightbox
            key="anniversary-subpage-lightbox"
            items={allAnniversaryPhotos.map((p, idx) => ({
              id: `anniv-${idx}`,
              name: p.album,
              category: p.album,
              categorySlug: p.slug,
              image: p.url,
              description: "",
            }))}
            activeIndex={activeLightboxIndex}
            isOpen={true}
            onClose={() => setActiveLightboxIndex(null)}
            onConsultation={() => setIsConsultationOpen(true)}
            onWhatsApp={(item) => openWhatsApp({ themeTitle: item.name })}
          />
        )}
      </AnimatePresence>

      <BookingModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialCategory="50th Anniversary Theme"
      />
    </main>
  );
}
