"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, Eye, FolderOpen, X, Images } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Lightbox, { LightboxPhotoItem } from "@/components/Lightbox";
import Navbar from "@/components/Navbar";
import { openWhatsApp } from "@/utils/whatsapp";
import {
  DEFAULT_SITE_CONTENT,
  IMAGE_SHIMMER_BLUR_DATA_URL,
  type SiteContent,
  type WpGalleryAlbum,
} from "@/data/wpApi";

interface PhotoEntry extends LightboxPhotoItem {
  id: string;
  image: string;
  category: string;
  categorySlug: string;
  albumId: string;
}

interface GalleryClientProps {
  siteContent?: SiteContent;
  wpAlbums?: WpGalleryAlbum[];
}

export default function GalleryClient({
  siteContent = DEFAULT_SITE_CONTENT,
  wpAlbums = [],
}: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const dynamicFilters = useMemo(() => {
    const seen = new Map<string, string>();
    for (const album of wpAlbums) {
      if (!seen.has(album.categorySlug)) {
        seen.set(album.categorySlug, album.category);
      }
    }

    return [
      { slug: "all", label: "All Albums" },
      ...Array.from(seen.entries()).map(([slug, label]) => ({ slug, label })),
    ];
  }, [wpAlbums]);

  // Sync category filter from URL query param
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat && dynamicFilters.some((c) => c.slug === cat)) {
        setActiveCategory(cat);
      }
    }
  }, [dynamicFilters]);

  const filteredAlbums = useMemo(() => {
    if (activeCategory === "all") return wpAlbums;
    return wpAlbums.filter((album) => album.categorySlug === activeCategory);
  }, [wpAlbums, activeCategory]);

  // Aggregate all high-resolution event photographs strictly from WordPress albums
  const allPhotos: PhotoEntry[] = useMemo(() => {
    return wpAlbums.flatMap((album) => {
      const urls = album.photos.length > 0 ? album.photos : album.coverImage ? [album.coverImage] : [];
      return urls.map((photoUrl, idx) => ({
        id: `${album.id}-photo-${idx}`,
        image: photoUrl,
        name: album.title,
        category: album.category,
        categorySlug: album.categorySlug,
        albumId: album.id,
      }));
    });
  }, [wpAlbums]);

  // Filtered photos based on active tab and optional selected album folder
  const filteredPhotos = useMemo(() => {
    if (selectedAlbumId) {
      return allPhotos.filter((p) => p.albumId === selectedAlbumId);
    }
    if (activeCategory === "all") return allPhotos;
    return allPhotos.filter((p) => p.categorySlug === activeCategory);
  }, [selectedAlbumId, activeCategory, allPhotos]);

  const selectedAlbum = useMemo(
    () => (selectedAlbumId ? wpAlbums.find((a) => a.id === selectedAlbumId) || null : null),
    [selectedAlbumId, wpAlbums]
  );

  const currentTitle = useMemo(() => {
    if (selectedAlbum) return selectedAlbum.title;
    if (activeCategory === "all") return "Master Portfolio Archive";
    const found = dynamicFilters.find((f) => f.slug === activeCategory);
    return found ? `${found.label} Gallery` : "Event Portfolio";
  }, [selectedAlbum, activeCategory, dynamicFilters]);

  return (
    <main className="min-h-screen text-[#2D2D2D] selection:bg-[#8B263E] selection:text-white font-sans bg-[#FAF9F5]/40">
      <Navbar siteContent={siteContent} />

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
          Showing {filteredPhotos.length} high-resolution photograph{filteredPhotos.length === 1 ? "" : "s"} from our live WordPress event portfolio. Click any photo to view in fullscreen.
        </p>

        {/* Dynamic Category Filter Pills */}
        {dynamicFilters.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {dynamicFilters.map((tab) => {
              const isActive = activeCategory === tab.slug && !selectedAlbumId;
              return (
                <button
                  key={tab.slug}
                  onClick={() => {
                    setSelectedAlbumId(null);
                    setActiveCategory(tab.slug);
                  }}
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
        )}
      </section>

      {/* Dynamic WordPress Album Folders Showcase */}
      {filteredAlbums.length > 0 && (
        <section className="pt-12 pb-4 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C7147] font-semibold">
              <FolderOpen className="w-4 h-4 text-[#8B263E]" />
              <span>Curated Event Folders ({filteredAlbums.length})</span>
            </div>
            {selectedAlbum && (
              <button
                onClick={() => setSelectedAlbumId(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C5A880] text-[11px] font-semibold text-[#8B263E] hover:bg-[#8B263E] hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
                <span>Show All Photos</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlbums.map((album) => {
              const isSelected = selectedAlbumId === album.id;
              return (
                <button
                  key={album.id}
                  type="button"
                  onClick={() => setSelectedAlbumId(isSelected ? null : album.id)}
                  className={`group text-left rounded-3xl overflow-hidden bg-white border transition-all duration-300 shadow-xs hover:shadow-xl ${
                    isSelected
                      ? "border-[#8B263E] ring-2 ring-[#8B263E]/20"
                      : "border-[#E7E5E4] hover:border-[#C5A880]"
                  }`}
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={IMAGE_SHIMMER_BLUR_DATA_URL}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C7147] bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#C5A880]/40">
                        {album.category}
                      </span>
                      <span className="text-[10px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                        {album.photos.length} {album.photos.length === 1 ? "Photo" : "Photos"}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="font-serif text-lg text-[#2D2D2D] group-hover:text-[#8B263E] transition-colors mb-1.5">
                      {album.title}
                    </h2>
                    <p className="text-xs text-stone-700 leading-relaxed line-clamp-2">
                      {album.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Photo Grid or Clean Empty State */}
      <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
        {filteredPhotos.length === 0 ? (
          <div className="max-w-lg mx-auto text-center py-16 px-6 rounded-3xl bg-white border border-[#E7E5E4] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] border border-[#C5A880]/40 flex items-center justify-center mx-auto mb-4">
              <Images className="w-6 h-6 text-[#8B263E]" />
            </div>
            <h2 className="font-serif text-2xl text-[#2D2D2D] mb-2">
              No Photos in This Category Yet
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
              New event albums and photographs published in WordPress will appear here automatically.
            </p>
            {activeCategory !== "all" && (
              <button
                onClick={() => {
                  setSelectedAlbumId(null);
                  setActiveCategory("all");
                }}
                className="px-6 py-2.5 rounded-full bg-[#8B263E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#721D32] transition-colors"
              >
                View All Albums
              </button>
            )}
          </div>
        ) : (
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
                <Image
                  src={photo.image}
                  alt={photo.name || photo.category}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL={IMAGE_SHIMMER_BLUR_DATA_URL}
                  className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out select-none"
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
        )}
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
                customMessage: `Hello Craft4Events, I am inquiring about this event decor photo from your gallery (${item.category}).`,
              })
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}
