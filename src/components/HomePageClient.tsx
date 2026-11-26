"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle, Sparkles, ArrowRight,
  Users, Star, Music, Mic2, PartyPopper,
  ShieldCheck, ChevronDown, Phone
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingModal from "@/components/BookingModal";
import FAQSection from "@/components/FAQSection";
import StatsBanner from "@/components/StatsBanner";
import FloatingVIPConcierge from "@/components/FloatingVIPConcierge";
import TestimonialsSection from "@/components/TestimonialsSection";
import ThemeShowcaseBanner from "@/components/ThemeShowcaseBanner";
import InteractiveCategoryCard from "@/components/InteractiveCategoryCard";
import InteractiveEntertainmentCard from "@/components/InteractiveEntertainmentCard";
import InteractiveArtistCard from "@/components/InteractiveArtistCard";
import MasterGallerySlider from "@/components/MasterGallerySlider";
import { HOMEPAGE_SERVICES_DATA } from "@/data/services";
import { openWhatsApp } from "@/utils/whatsapp";
import {
  DEFAULT_SITE_CONTENT,
  formatTelHref,
  formatWhatsAppHref,
  type SiteContent,
  type WpGalleryAlbum,
} from "@/data/wpApi";

const HERO_SLIDES = [
  {
    image: "/hero/hero-slide-1.jpg",
    alt: "Luxury Palace Ballroom Gala with Crystal Chandeliers & Botanical Architecture",
  },
  {
    image: "/hero/hero-slide-2.jpg",
    alt: "Royal Heritage Palace Night Courtyard Celebration with Starlight Pavilion",
  },
  {
    image: "/hero/hero-slide-3.jpg",
    alt: "VIP Live Entertainment Concert, Kinetic Beams & Headline Celebration Stage",
  },
  {
    image: "/hero/hero-slide-4.jpg",
    alt: "Luxury Rooftop Floral Garden Lounge at Twilight",
  },
];

interface HomePageClientProps {
  siteContent?: SiteContent;
  wpAlbums?: WpGalleryAlbum[];
}

function splitHeadline(headline: string): { prefix: string; highlight: string } {
  const trimmed = headline.trim();
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace <= 0) {
    return { prefix: trimmed, highlight: "" };
  }
  return {
    prefix: trimmed.slice(0, lastSpace),
    highlight: trimmed.slice(lastSpace + 1),
  };
}

export default function HomePageClient({
  siteContent = DEFAULT_SITE_CONTENT,
  wpAlbums = [],
}: HomePageClientProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationItem, setConsultationItem] = useState<{ category: string; name: string } | null>(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState<number>(0);

  const { prefix: headlinePrefix, highlight: headlineHighlight } = splitHeadline(
    siteContent.hero_headline || DEFAULT_SITE_CONTENT.hero_headline
  );
  const phoneDisplay = siteContent.contact_phone || DEFAULT_SITE_CONTENT.contact_phone;
  const telHref = formatTelHref(phoneDisplay);
  const whatsappHref = formatWhatsAppHref(phoneDisplay);
  const primaryEmail = siteContent.primary_email || DEFAULT_SITE_CONTENT.primary_email;
  const ownerEmail = siteContent.owner_email || DEFAULT_SITE_CONTENT.owner_email;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleOpenConsultation = (cat?: string, name?: string) => {
    if (cat && name) {
      setConsultationItem({ category: cat, name });
    } else if (cat) {
      setConsultationItem({ category: cat, name: `${cat} Package` });
    } else {
      setConsultationItem(null);
    }
    setIsConsultationOpen(true);
  };

  return (
    <main className="min-h-screen text-[#2D2D2D] selection:bg-[#8B263E] selection:text-white font-sans">

      {/* Sticky Header */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        siteContent={siteContent}
      />

      {/* ═══════════════════════ HERO — CINEMATIC LUXURY SLIDESHOW ═══════════════════════ */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0D0A10]">

        {/* Cinematic Background Cross-Fade Image Slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentHeroSlide;
            return (
              <div
                key={slide.image}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div
                  className={`w-full h-full bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
              </div>
            );
          })}

          {/* Crystal-Clear Luxury Contrast Overlay — balanced for 4K crisp visual clarity */}
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#18111D]/60 via-[#120D17]/45 to-[#0D0A10]/80 pointer-events-none" />
          <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_rgba(139,38,62,0.12)_0%,_transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 z-20 h-36 bg-gradient-to-b from-[#18111D]/75 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 z-20 h-28 bg-gradient-to-t from-[#0D0A10] to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 mb-8 shadow-2xl"
          >
            <PartyPopper className="w-3.5 h-3.5 text-[#E8E0F0]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white font-semibold">
              Premium Party Planning & Theme Décor Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] mb-6 drop-shadow-lg"
          >
            {headlinePrefix}
            {headlineHighlight && (
              <>
                {" "}
                <span className="italic font-light text-[#E8E0F0] block sm:inline">
                  {headlineHighlight}
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-[#FAF9F5]/90 font-light leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-sm tracking-wide"
          >
            {siteContent.hero_subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <button
              onClick={() => handleOpenConsultation()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] active:scale-95 text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              <span>Book Your Celebration</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#categories"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/50 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md text-white text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 text-center hover:-translate-y-0.5 shadow-sm"
            >
              Explore All Themes
            </a>

            <button
              onClick={() => openWhatsApp({ customMessage: "Hello Craft4Events, I am inquiring about booking a luxury celebration." })}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#25D366]/40 bg-black/40 hover:bg-black/60 active:scale-95 backdrop-blur-md text-white text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 text-center flex items-center justify-center gap-2 group hover:-translate-y-0.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>WhatsApp Concierge</span>
            </button>
          </motion.div>
        </div>

        {/* Subtle Slide Indicators */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentHeroSlide
                  ? "w-7 bg-[#C5A880] shadow-[0_0_8px_rgba(197,168,128,0.8)]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#showcase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll to explore themes"
        >
          <span className="text-[8.5px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-[#C5A880]" />
          </motion.div>
        </motion.a>
      </section>

      {/* ═══════════════════════ MULTI-PANEL INTERACTIVE THEME SHOWCASE BANNER ═══════════════════════ */}
      <ThemeShowcaseBanner onOpenConsultation={(theme) => handleOpenConsultation(theme)} />

      {/* ═══════════════════════ EDITORIAL MISSION HEADLINE ═══════════════════════ */}
      <section className="py-14 sm:py-18 px-6 bg-gradient-to-b from-[#F4F7F4] via-[#EBF3ED] to-[#F4F7F4] border-b border-[#D6E4D9] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2C5E3A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#2C5E3A]/20 text-[10px] uppercase tracking-[0.25em] text-[#2C5E3A] font-semibold mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2C5E3A]" />
            <span>The Art of Extraordinary Celebrations</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-normal text-[#173820] tracking-tight leading-tight mb-5">
            Designing Unforgettable Memories with{" "}
            <span className="italic font-medium text-[#2C5E3A]">
              Craft<span className="text-[#C5A880] font-semibold not-italic">4</span>Events
            </span>
          </h2>

          <div className="w-14 h-[1.5px] bg-[#2C5E3A]/25 mx-auto mb-6" />

          <p className="font-serif text-base sm:text-xl md:text-2xl font-normal leading-relaxed sm:leading-relaxed text-[#234B2E] tracking-tight max-w-3xl mx-auto">
            From dreamy birthday parties and milestone anniversaries to vibrant rooftop bashes and elegant corporate galas — we design, style, and execute immersive theme experiences with live entertainment, bespoke décor, and flawless coordination.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════ REVAMPED SERVICES GRID & CATEGORY GROUPING (REQUIREMENT 2) ═══════════════════════ */}
      <section id="categories" className="py-28 border-b border-[#E7E5E4] px-6">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A880]/40 text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Curated Experience Catalog</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-4">
              Signature Themes & <span className="italic font-light text-[#8B263E]">Experiences</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-5" />
            <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed">
              Explore our signature party and celebration themes, executive corporate styling, and professional live performance artist bookings. Every theme is completely customizable to your venue and vision.
            </p>
          </motion.div>

          {/* Grouped Services Grid: 8 Main Category Cards + 1 Live Entertainment Card at end */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOMEPAGE_SERVICES_DATA.map((cat, idx) => (
              <InteractiveCategoryCard
                key={cat.slug}
                cat={cat}
                index={idx}
                experienceTag={cat.experienceTag}
                onInquire={(title) => openWhatsApp({ themeTitle: title })}
              />
            ))}

            {/* 9th Integrated Card: Live Performance Artists & Entertainment Module (Remains at the end) */}
            <InteractiveEntertainmentCard
              onInquire={() => openWhatsApp({ themeTitle: "Live Artists & Entertainment" })}
              onBook={() => handleOpenConsultation("Live Performance Artist Booking")}
            />
          </div>
        </div>
      </section>


      {/* ═══════════════════════ LIVE ARTIST & ENTERTAINMENT SECTION ═══════════════════════ */}
      <section id="artists" className="py-28 border-b border-[#E7E5E4] px-6">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A880]/40 text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-4 shadow-xs">
              <Music className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Live Entertainment & Artist Booking</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-4">
              Live Performance Artists & <span className="italic font-light text-[#8B263E]">Entertainment</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-5" />
            <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed max-w-2xl mx-auto">
              Curate unforgettable live entertainment for your celebration. Book our elite choreographers, trained dancers, specialty acts, and celebrity DJs as standalone bookings or turnkey bundled packages.
            </p>
          </motion.div>

          {/* 4-Card Entertainment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <InteractiveArtistCard
              icon={<Music className="w-6 h-6 text-[#8B263E]" />}
              tag="01 / Choreography"
              title="Choreographers"
              description="Certified choreographers creating custom signature dance routines tailored to your celebration style and experience level."
              features={[
                "Couple Entry Choreography",
                "Sangeet Family Flash Mobs",
                "Themed Group Rehearsals",
                "Pre-recorded Step Tutorials"
              ]}
              bookButtonText="Book Choreographer"
              onBook={() => handleOpenConsultation("Professional Choreographer")}
              onWhatsApp={() => openWhatsApp({ themeTitle: "Live Artists & Entertainment", packageItem: "Professional Choreographer" })}
              delay={0}
            />

            <InteractiveArtistCard
              icon={<Users className="w-6 h-6 text-[#8B263E]" />}
              tag="02 / Dance Troupes"
              title="Professional Dancers"
              description="Dynamic performance dance troupes with synchronized choreography, customized costume aesthetics, and high-energy stage presence."
              features={[
                "LED Wing & Isis Performers",
                "Bollywood & Retro Extravaganza",
                "Classical & Sufi Fusion",
                "Grand Guest Welcome Acts"
              ]}
              bookButtonText="Book Dance Troupe"
              onBook={() => handleOpenConsultation("Professional Dance Troupe")}
              onWhatsApp={() => openWhatsApp({ themeTitle: "Live Artists & Entertainment", packageItem: "Professional Dance Troupe" })}
              delay={0.1}
            />

            <InteractiveArtistCard
              icon={<Star className="w-6 h-6 text-[#8B263E]" />}
              tag="03 / Specialty Acts"
              title="Entertainment Acts"
              description="Mesmerizing visual acts and illusionists engineered to captivate audiences and create unforgettable, shareable event moments."
              features={[
                "Fire Breathers & Pyro Flow",
                "Aerial Silk & Acrobatics",
                "Close-up Illusionists / Mentalists",
                "Mirror Men & Stilt Walkers"
              ]}
              bookButtonText="Book Specialty Acts"
              onBook={() => handleOpenConsultation("Specialty Entertainment Act")}
              onWhatsApp={() => openWhatsApp({ themeTitle: "Live Artists & Entertainment", packageItem: "Specialty Visual Acts" })}
              delay={0.2}
            />

            <InteractiveArtistCard
              icon={<Mic2 className="w-6 h-6 text-[#8B263E]" />}
              tag="04 / Music & Hosts"
              title="DJs, Emcees & Live Music"
              description="Concert-level sound engineering, high-caliber party DJs, charismatic anchors, and live percussionists to ignite the dance floor."
              features={[
                "Celebrity & Club DJs",
                "Dynamic Bilingual Emcees",
                "Live Percussionists & Dhol Troupes",
                "Acoustic Vocalists & Saxophone"
              ]}
              bookButtonText="Book Music & Host"
              onBook={() => handleOpenConsultation("DJ, Emcee & Live Music")}
              onWhatsApp={() => openWhatsApp({ themeTitle: "Live Artists & Entertainment", packageItem: "DJs, Emcees & Live Music" })}
              delay={0.3}
            />
          </div>

          {/* Turnkey Integration Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#C5A880]/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF9F5] border border-[#C5A880]/50 shadow-xs flex items-center justify-center shrink-0">
                <Sparkles className="w-7 h-7 text-[#8B263E]" />
              </div>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#8B263E] font-bold">
                  Bundle Live Entertainment with Any Theme
                </h4>
                <p className="text-xs sm:text-sm text-stone-800 font-normal mt-1">
                  Combine live artists, concert-grade acoustic engineering, and immersive backdrop staging into a single turnkey package.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenConsultation("Turnkey Theme + Artist Package")}
              className="shrink-0 px-8 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] active:scale-95 text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg flex items-center gap-2 group whitespace-nowrap hover:-translate-y-0.5"
            >
              <span>Book Turnkey Package</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════ CLIENT TESTIMONIALS & FEEDBACK SUBMISSION BOX ═══════════════════════ */}
      <TestimonialsSection />


      {/* ═══════════════════════ PHILOSOPHY / ABOUT ═══════════════════════ */}
      <section id="philosophy" className="py-24 border-b border-[#E7E5E4] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-[#B8A8D0] text-[10px] uppercase tracking-[0.3em] text-[#7B5EA7] font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7B5EA7]" />
            <span>Why Choose Craft4Events</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-6">
            Crafting Unforgettable <span className="italic font-light text-[#8B263E]">Celebrations</span>
          </h2>

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#7B5EA7] font-medium mb-6">
            DESIGN • DÉCOR • ENTERTAINMENT • COORDINATION
          </p>

          <p className="text-stone-800 font-normal text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-14">
            We believe every celebration should engage all senses. From stunning visual themes and immersive lighting to live music and bespoke floral installations — we engineer complete experiences that transform ordinary venues into extraordinary memory-making spaces.
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-white border border-[#E7E5E4] hover:border-[#7B5EA7] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <span className="text-xs font-serif italic text-[#7B5EA7] block mb-2">01 / Bespoke Theme Design</span>
              <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">Custom Décor Architecture</h3>
              <p className="text-xs text-stone-800 leading-relaxed font-normal">
                From fairy-tale balloon castles to elegant floral mandaps — every theme is hand-designed with premium materials, precision lighting, and personalised styling elements.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E7E5E4] hover:border-[#8B263E] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <span className="text-xs font-serif italic text-[#8B263E] block mb-2">02 / Turnkey Execution</span>
              <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">End-to-End Management</h3>
              <p className="text-xs text-stone-800 leading-relaxed font-normal">
                Full event production including venue styling, sound & lighting setup, live entertainment coordination, catering liaison, and post-event cleanup — you just enjoy the celebration.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E7E5E4] hover:border-[#C5A880] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <span className="text-xs font-serif italic text-[#8C7147] block mb-2">03 / Live Entertainment</span>
              <h3 className="font-serif text-lg text-[#2D2D2D] mb-2">Artists & Performance Acts</h3>
              <p className="text-xs text-stone-800 leading-relaxed font-normal">
                Curated roster of choreographers, professional dancers, DJs, live bands, emcees, and specialty performers — seamlessly integrated into your celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MASTER GALLERY CONTINUOUS ANIMATED SLIDER (REQUIREMENT 7) ═══════════════════════ */}
      <MasterGallerySlider wpAlbums={wpAlbums} />

      {/* ═══════════════════════ FAQ SECTION ═══════════════════════ */}
      <FAQSection />

      {/* ═══════════════════════ EDITORIAL CLIENT QUOTE BANNER ═══════════════════════ */}
      <section id="press" className="py-24 text-[#2D2D2D] text-center relative overflow-hidden border-b border-[#E7E5E4]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7B5EA7]/8 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#7B5EA7] font-semibold mb-6">
            WHAT OUR CLIENTS SAY
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#2D2D2D] mb-8">
            Client <span className="italic text-[#8B263E]">Stories</span>
          </h2>

          <div className="w-16 h-[1px] bg-[#7B5EA7] mx-auto mb-8" />

          <blockquote className="font-serif text-lg sm:text-2xl font-light italic text-[#7B5EA7] leading-relaxed max-w-3xl mx-auto mb-8">
            &ldquo;Craft4Events turned our daughter&rsquo;s first birthday into a fairy-tale wonderland. The balloon castle, the lighting, the live entertainment — every detail was absolutely perfect. We couldn&rsquo;t have imagined anything more magical.&rdquo;
          </blockquote>

          <p className="text-xs sm:text-sm text-stone-800 font-normal tracking-wide max-w-2xl mx-auto leading-relaxed mb-10">
            Trusted by hundreds of families and businesses across India for birthday parties, milestone anniversaries, corporate galas, and themed celebration events.
          </p>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-[#E7E5E4] flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs font-serif tracking-[0.25em] uppercase text-stone-800 font-semibold">
            <span className="hover:text-[#7B5EA7] transition-colors">500+ Events Delivered</span>
            <span>•</span>
            <span className="hover:text-[#7B5EA7] transition-colors">8 Curated Theme Divisions</span>
            <span>•</span>
            <span className="hover:text-[#7B5EA7] transition-colors">Live Artist Network</span>
            <span>•</span>
            <span className="hover:text-[#7B5EA7] transition-colors">Turnkey Execution</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ RELOCATED STATS BANNER SECTION (REQUIREMENT 1) ═══════════════════════ */}
      {/* Relocated to the very bottom of the page, positioned just before the footer */}
      <StatsBanner />

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="border-t border-[#E7E5E4] py-20 text-stone-900 text-xs bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

            {/* Column 1: Brand */}
            <div className="md:col-span-2">
              <span className="font-serif text-2xl font-normal tracking-[0.25em] text-[#2D2D2D] uppercase block mb-3">
                CRAFT<span className="font-serif italic text-[#8B263E] font-bold">4</span>EVENTS
              </span>
              <p className="text-xs text-stone-800 font-normal leading-relaxed max-w-md mb-6">
                India&rsquo;s premier party planning and theme décor agency. Bespoke celebrations for birthdays, anniversaries, corporate events, and every milestone in between.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#B8A8D0] text-[10px] text-[#7B5EA7] uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Confidential & Personalised Service</span>
              </div>
            </div>

            {/* Column 2: Theme Categories */}
            <div>
              <h4 className="font-serif text-sm font-normal text-[#2D2D2D] uppercase tracking-[0.2em] mb-4">
                Our Themes
              </h4>
              <ul className="space-y-2 text-[11px] text-stone-800 font-normal">
                {HOMEPAGE_SERVICES_DATA.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={cat.subPageHref}
                      className="hover:text-[#8B263E] transition-colors text-left"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div id="contact">
              <h4 className="font-serif text-sm font-normal text-[#2D2D2D] uppercase tracking-[0.2em] mb-4">
                Get In Touch
              </h4>
              <div className="space-y-2.5 text-[11px] text-stone-800 font-normal">
                <p className="font-medium text-[#2D2D2D]">
                  <a href={telHref} className="inline-flex items-center gap-1.5 hover:text-[#8B263E] transition-colors">
                    <Phone className="w-3 h-3 text-[#C5A880]" />
                    <span>Call: {phoneDisplay}</span>
                  </a>
                </p>
                <p className="font-medium text-[#2D2D2D]">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#8B263E] transition-colors">
                    WhatsApp: {phoneDisplay}
                  </a>
                </p>
                <p className="text-[#8B263E] font-semibold">
                  <a href={`mailto:${primaryEmail}`} className="hover:underline">
                    {primaryEmail}
                  </a>
                </p>
                <div className="pt-2.5 mt-2.5 border-t border-[#E7E5E4] space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block">
                    Founder / Owner
                  </span>
                  <p className="font-medium text-[#2D2D2D] text-xs">
                    Mohd. Noor Aman
                  </p>
                  <p>
                    <a href={`mailto:${ownerEmail}`} className="text-[#8B263E] hover:underline font-medium">
                      {ownerEmail}
                    </a>
                  </p>
                </div>
                <p className="pt-1.5 text-[10px] text-stone-800 uppercase tracking-wider font-semibold">
                  Available 7 Days a Week for Inquiries
                </p>
              </div>
            </div>
          </div>

          {/* Quick links & Copyright */}
          <div className="border-t border-[#E7E5E4] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-stone-800 text-[11px] font-normal">
            <p>© 2026 Craft4Events. All Rights Reserved. Luxury Party Planning & Theme Décor Agency.</p>

            <div className="flex flex-wrap items-center gap-6 uppercase tracking-wider text-[10px] font-semibold text-stone-900">
              <a href="#categories" className="hover:text-[#8B263E] transition-colors">Themes</a>
              <a href="#artists" className="hover:text-[#8B263E] transition-colors">Artists</a>
              <a href="#testimonials" className="hover:text-[#8B263E] transition-colors">Testimonials</a>
              <a href="#feedback" className="hover:text-[#8B263E] transition-colors">Feedback</a>
              <Link href="/gallery" className="hover:text-[#8B263E] transition-colors">Gallery</Link>
              <a href="#faq" className="hover:text-[#8B263E] transition-colors">FAQ</a>
              <button onClick={() => handleOpenConsultation()} className="text-[#8B263E] hover:underline cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════ MODALS ═══════════════════════ */}

      {/* Booking Modal */}
      <BookingModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialCategory={consultationItem?.category || "Baby Birthday Theme"}
        initialItemName={consultationItem?.name || ""}
      />


      {/* Floating VIP Concierge CTA */}
      <FloatingVIPConcierge />
    </main>
  );
}
