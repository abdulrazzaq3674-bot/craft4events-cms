"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sparkles, CheckCircle2, MessageCircle, Send, Check, Download, QrCode } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  role: string;
  category: "all" | "anniversaries" | "weddings" | "birthdays" | "corporate";
  themeTitle: string;
  badge: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
  tags?: string[];
}

const DEFAULT_SEO_TAGS = [
  "Best birthday party decoration in Delhi NCR",
  "Magical fairytale balloon castle setup",
  "Luxury anniversary event planner",
  "Professional dancers & high-energy DJ",
  "Romantic couple room surprise decor",
  "Flawless corporate gala management",
  "Vibrant traditional haldi floral decor",
  "Authentic bohemian mehndi lounge",
  "Punctual, stress-free & white-glove service",
  "Highly recommended celebration planners",
  "Instagram-worthy photo backdrops",
  "100% transparent pricing & coordination",
];

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Vikram & Ananya Singhania",
    initials: "VS",
    role: "Private Heritage Estate Celebration",
    category: "anniversaries",
    themeTitle: "25th Anniversary Theme",
    badge: "Verified Milestone Client",
    rating: 5,
    date: "Silver Jubilee Gala",
    highlight: "Silver & crystal archway looked even better than the 3D render",
    quote: "Craft4Events made our 25th anniversary truly memorable. The silver archway and crystal lights were stunning in person, and the team handled setup quietly and professionally.",
  },
  {
    id: "review-2",
    name: "Devika Mehra & Kabir Malhotra",
    initials: "DM",
    role: "Destination Pre-Wedding Celebrations",
    category: "weddings",
    themeTitle: "Haldi Decor Theme",
    badge: "Verified Wedding Client",
    rating: 5,
    date: "Courtyard Festivities",
    highlight: "Felt straight out of a royal Udaipur palace",
    quote: "From the marigold canopies to the brass urlis with fresh flowers, our Haldi setup felt authentically royal. They arrived well ahead of time so our family could relax and enjoy the rituals.",
  },
  {
    id: "review-3",
    name: "Rohit Oberoi",
    initials: "RO",
    role: "Chief Experience Officer, Apex FinTech",
    category: "corporate",
    themeTitle: "Corporate Party Theme",
    badge: "Verified Corporate Client",
    rating: 5,
    date: "Annual Excellence Gala",
    highlight: "World-class stage design with zero technical glitches",
    quote: "We hired Craft4Events for our annual company awards night with 400 attendees. The stage design, acoustics, and laser reveal for our CEO entrance were world-class throughout the evening.",
  },
  {
    id: "review-4",
    name: "Pooja & Sameer Deshmukh",
    initials: "PD",
    role: "Private Residence Lawn Celebration",
    category: "birthdays",
    themeTitle: "Baby Birthday Theme",
    badge: "Verified Birthday Client",
    rating: 5,
    date: "1st Birthday Kingdom",
    highlight: "Our daughter's 1st birthday photos look like a magazine spread",
    quote: "Finding someone who could execute an organic pastel balloon castle with sophisticated elegance was tough until we found Craft4Events. Every detail was whimsical and spotless.",
  },
  {
    id: "review-5",
    name: "Dr. Aarav & Sanjana Kapoor",
    initials: "AK",
    role: "Golden Jubilee Family Soirée",
    category: "anniversaries",
    themeTitle: "50th Anniversary Theme",
    badge: "Verified Milestone Client",
    rating: 5,
    date: "50th Wedding Anniversary",
    highlight: "Memory lane photo walkway brought tears of joy",
    quote: "We planned a surprise 50th golden jubilee for our parents. The custom memory walkway with vintage photos framed in warm starlight lighting made the entire family emotional.",
  },
  {
    id: "review-6",
    name: "Rhea Chawla",
    initials: "RC",
    role: "Penthouse Terrace Celebration",
    category: "birthdays",
    themeTitle: "Rooftop Party Theme",
    badge: "Verified Rooftop Client",
    rating: 5,
    date: "30th Milestone Birthday",
    highlight: "Turned our rooftop terrace into an upscale VIP lounge",
    quote: "Booked them for my 30th rooftop birthday bash. The fairy-light canopy, velvet lounge seating, and DJ sound setup turned our terrace into an upscale private club. Highly recommended!",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Reviews" },
  { id: "birthdays", label: "Birthday Milestones" },
  { id: "anniversaries", label: "Anniversaries & Romance" },
  { id: "weddings", label: "Weddings & Traditional" },
  { id: "corporate", label: "Corporate Galas" },
] as const;

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<typeof CATEGORIES[number]["id"]>("all");
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  // Form State
  const [clientName, setClientName] = useState("");
  const [celebrationType, setCelebrationType] = useState("Baby Birthday Theme");
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Load any previously saved user reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("c4m_user_reviews_v2");
      if (saved) {
        const parsed: Testimonial[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          queueMicrotask(() => {
            setTestimonials([...parsed, ...INITIAL_TESTIMONIALS]);
          });
        }
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Tag click handler: inserts/appends or toggles the SEO keyword tag
  const handleToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prev) => prev.filter((t) => t !== tag));
    } else {
      setSelectedTags((prev) => [...prev, tag]);
      setFeedbackText((prev) => {
        if (!prev.trim()) return tag;
        if (prev.includes(tag)) return prev;
        return `${prev.trim()}. ${tag}`;
      });
    }
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !feedbackText.trim()) return;

    const names = clientName.trim().split(" ").filter(Boolean);
    const initials = names.length > 1
      ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
      : (names[0]?.slice(0, 2).toUpperCase() || "VIP");

    let cat: "birthdays" | "anniversaries" | "weddings" | "corporate" = "birthdays";
    const lowerType = celebrationType.toLowerCase();
    if (lowerType.includes("anniversary") || lowerType.includes("couple")) {
      cat = "anniversaries";
    } else if (lowerType.includes("haldi") || lowerType.includes("mehndi") || lowerType.includes("wedding")) {
      cat = "weddings";
    } else if (lowerType.includes("corporate")) {
      cat = "corporate";
    } else {
      cat = "birthdays";
    }

    const trimmedFeedback = feedbackText.trim();
    const derivedHighlight = selectedTags.length > 0
      ? selectedTags[0]
      : trimmedFeedback.length > 55
        ? `${trimmedFeedback.slice(0, 52)}...`
        : trimmedFeedback;

    const newReview: Testimonial = {
      id: `user-${Date.now()}`,
      name: clientName.trim(),
      initials,
      role: `Verified Client • ${celebrationType}`,
      category: cat,
      themeTitle: celebrationType,
      badge: "Verified Community Review",
      rating,
      date: "Just now",
      highlight: derivedHighlight,
      quote: trimmedFeedback,
      tags: [...selectedTags],
    };

    const updated = [newReview, ...testimonials];
    setTestimonials(updated);
    setActiveTab("all");

    try {
      const saved = localStorage.getItem("c4m_user_reviews_v2");
      const existing: Testimonial[] = saved ? JSON.parse(saved) : [];
      localStorage.setItem("c4m_user_reviews_v2", JSON.stringify([newReview, ...existing]));
    } catch {
      // Ignore storage errors
    }

    setSubmissionSuccess(true);
    setClientName("");
    setFeedbackText("");
    setSelectedTags([]);
    setRating(5);

    setTimeout(() => {
      setSubmissionSuccess(false);
    }, 5000);
  };

  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#feedback") {
      const el = document.getElementById("feedback");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

  const handleDownloadQR = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "/craft4events-feedback-qr.png";
    link.download = "craft4events-feedback-qr.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 1200);
  };

  const filteredTestimonials = activeTab === "all"
    ? testimonials
    : testimonials.filter((t) => t.category === activeTab);

  return (
    <section id="feedback" className="py-28 border-b border-[#E7E5E4] px-6 scroll-mt-20 relative">
      {/* Anchor for backward compatibility with #testimonials */}
      <div id="testimonials" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C5A880]/50 text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Client Feedback & Testimonials</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-4">
            Celebrated Moments, <span className="italic font-light text-[#8B263E]">Enduring Impressions</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-5" />

          <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            Read authentic reviews from families, couples, and organizations across India who trusted Craft4Events to bring their hallmark celebrations to life.
          </p>

          {/* Social Proof Aggregate Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-[#C5A880]/40 shadow-xs">
            <div className="flex items-center gap-1 text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#2D2D2D]">
              4.97 / 5.0 Rating
            </span>
            <span className="text-stone-400">|</span>
            <span className="text-xs text-stone-800 font-medium">
              500+ Verified Celebrations
            </span>
          </div>
        </div>

        {/* ═══════════════════════ INTERACTIVE FEEDBACK SUBMISSION BOX & STATIC QR CARD ═══════════════════════ */}
        <div className="max-w-6xl mx-auto mb-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Interactive Feedback Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#C5A880]/50 p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-[#E7E5E4]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8C7147] block mb-1">
                  Share Your Celebration Story
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#8B263E]">
                  Leave Your Experience & Feedback
                </h3>
              </div>

              {/* Interactive Star Rating Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-stone-700">Your Rating:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-115 transition-transform cursor-pointer"
                      title={`${star} Stars`}
                      aria-label={`Rate ${star} Stars`}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= rating
                            ? "fill-[#C5A880] text-[#C5A880]"
                            : "text-stone-300 hover:text-[#C5A880]"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Default Clickable SEO Keyword Phrases / Tags */}
            <div className="mb-6">
              <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wider block mb-2.5">
                ✦ Click Quick Review Tags (Auto-Fills Below):
              </span>
              <div className="flex flex-wrap gap-2">
                {DEFAULT_SEO_TAGS.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleToggleTag(tag)}
                      className={`text-[11px] px-3.5 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-1.5 active:scale-95 cursor-pointer ${
                        isSelected
                          ? "bg-[#8B263E] text-white border-[#8B263E] shadow-xs font-medium"
                          : "bg-[#FAF9F5] text-stone-800 border-[#E7E5E4] hover:border-[#C5A880] hover:bg-white"
                      }`}
                    >
                      {isSelected ? <Check className="w-3 h-3 text-[#E8E0F0]" /> : <span>+</span>}
                      <span>{tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSubmitFeedback} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider block mb-1">
                    Your Name / Couple / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Neha & Kunal Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] text-xs text-[#2D2D2D] outline-none transition-all bg-[#FAF9F5]/40"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider block mb-1">
                    Event Type / Celebration Theme *
                  </label>
                  <select
                    value={celebrationType}
                    onChange={(e) => setCelebrationType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] text-xs text-[#2D2D2D] outline-none transition-all bg-white"
                  >
                    <option value="Baby Birthday Theme">Baby Birthday Theme</option>
                    <option value="Baby Welcome Decoration">Baby Welcome Decoration</option>
                    <option value="Adult Birthday Theme">Adult Birthday Theme</option>
                    <option value="25th Anniversary Theme">25th Anniversary Theme</option>
                    <option value="50th Anniversary Theme">50th Anniversary Theme</option>
                    <option value="Car Decor">Car Decor</option>
                    <option value="Couple Room Decor">Couple Room Decor</option>
                    <option value="Rooftop Party Theme">Rooftop Party Theme</option>
                    <option value="Haldi Decor Theme">Haldi Decor Theme</option>
                    <option value="Mehndi Decor Theme">Mehndi Decor Theme</option>
                    <option value="Corporate Party Theme">Corporate Party Theme</option>
                    <option value="Live Artists & Entertainment">Live Artists & Entertainment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider block mb-1">
                  Your Detailed Review / Feedback *
                </label>
                <textarea
                  required
                  rows={3}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Share details of your experience, decor aesthetics, punctual execution, or select the tags above..."
                  className="w-full p-4 rounded-xl border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] text-xs text-[#2D2D2D] outline-none transition-all bg-[#FAF9F5]/40 leading-relaxed resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-[11px] text-stone-600">
                  ✦ Your review helps future clients plan extraordinary celebrations
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#8B263E] hover:bg-[#721D32] active:scale-95 text-white text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Feedback</span>
                </button>
              </div>

              {/* Instant Success Alert */}
              <AnimatePresence>
                {submissionSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Thank you for your valuable feedback!</strong> Your authentic review has been recorded and is now featured in the testimonials list below.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            </div>

            {/* Right: Sleek Static QR Code Card (Dark & Gold Luxury Theme) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-between bg-gradient-to-b from-[#18111D] via-[#120D17] to-[#0D0A10] rounded-3xl border border-[#C5A880]/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center text-white group hover:border-[#C5A880] transition-all duration-300">
              
              {/* Ambient Gold Radial Glow */}
              <div className="absolute top-0 inset-x-0 h-44 bg-[radial-gradient(ellipse_at_top,_rgba(197,168,128,0.22)_0%,_transparent_70%)] pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8B263E]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 w-full flex flex-col items-center">
                
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A880]/50 backdrop-blur-md mb-4 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#C5A880]" />
                  <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#E8E0F0] font-semibold">
                    Visiting Card QR &amp; Client Access
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal tracking-tight text-white mb-2">
                  Scan to Share <span className="italic font-light text-[#C5A880]">Feedback</span>
                </h3>
                
                <p className="text-xs text-stone-300 font-light leading-relaxed max-w-xs mb-6">
                  Visiting our studio or celebrating with us? Point your smartphone camera at this QR code to instantly open our review form.
                </p>

                {/* QR Code Container with Luxury Gold Double Frame & Corner Accents */}
                <div className="relative p-4 sm:p-5 bg-white rounded-2xl border-2 border-[#C5A880] shadow-[0_0_35px_rgba(197,168,128,0.3)] transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Decorative Corner Brackets */}
                  <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#8B263E]" />
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#8B263E]" />
                  <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#8B263E]" />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#8B263E]" />

                  {/* Static Crisp Vector SVG QR Code */}
                  <img
                    src="/feedback-qr.svg"
                    alt="Scan to Share Your Feedback - https://craft4events.in/#feedback"
                    className="w-44 h-44 sm:w-48 sm:h-48 object-contain select-none"
                    width={192}
                    height={192}
                  />

                  {/* Micro branding watermark below QR inside frame */}
                  <div className="pt-2 border-t border-stone-200 mt-2 flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-wider font-bold text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B263E]" />
                    <span>CRAFT4EVENTS.IN</span>
                  </div>
                </div>

                {/* Caption (Requirement 3) */}
                <div className="mt-5 mb-5 text-center">
                  <p className="font-serif text-base sm:text-lg text-white font-medium tracking-wide">
                    Scan to Share Your Feedback
                  </p>
                  <p className="text-[11px] font-mono text-[#C5A880] tracking-wider mt-1">
                    https://craft4events.in/#feedback
                  </p>
                </div>

                {/* Download High-Res QR (PNG) Button (Requirement 3) */}
                <button
                  type="button"
                  onClick={handleDownloadQR}
                  disabled={isDownloading}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#C5A880] via-[#D8C5A8] to-[#C5A880] hover:from-[#B89B74] hover:to-[#C5A880] text-[#16111C] font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  <Download className={`w-4 h-4 text-[#16111C] ${isDownloading ? "animate-bounce" : ""}`} />
                  <span>{isDownloading ? "Downloading Asset..." : "Download High-Res QR (PNG)"}</span>
                </button>

                <p className="text-[10px] text-stone-400 font-light mt-3">
                  ✦ Ultra-sharp 300 DPI PNG formatted for visiting cards, letterheads &amp; print media.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#8B263E] text-white shadow-sm"
                    : "bg-white text-stone-800 hover:text-[#8B263E] border border-[#E7E5E4] hover:border-[#C5A880]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTestimonials.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl bg-white border border-[#C5A880]/40 hover:border-[#C5A880] p-7 transition-all duration-500 shadow-xs hover:shadow-[0_12px_36px_rgba(197,168,128,0.20)] hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Row: Stars + Category Theme Pill */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#C5A880]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C7147] bg-[#FAF9F5] border border-[#C5A880]/30 px-2.5 py-0.5 rounded-full">
                      {t.themeTitle}
                    </span>
                  </div>

                  {/* Highlight statement */}
                  <h4 className="font-serif text-base font-bold text-[#8B263E] mb-2 leading-snug">
                    &ldquo;{t.highlight}&rdquo;
                  </h4>

                  {/* Quote Body */}
                  <p className="text-xs text-stone-800 font-normal leading-relaxed mb-6">
                    {t.quote}
                  </p>
                </div>

                {/* Footer: Client Info + Distinction Badge + WhatsApp Booking */}
                <div className="pt-4 border-t border-[#E7E5E4]">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#8B263E] text-white font-serif font-bold text-xs flex items-center justify-center border border-[#C5A880]/50 shadow-xs shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <h5 className="font-serif text-sm font-bold text-[#2D2D2D] leading-tight">
                          {t.name}
                        </h5>
                        <p className="text-[11px] text-stone-600 font-medium">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-dashed border-[#E7E5E4]">
                    <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#8C7147]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>{t.badge}</span>
                    </div>

                    <button
                      onClick={() => openWhatsApp({ themeTitle: t.themeTitle })}
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#7B5EA7] hover:text-[#8B263E] transition-colors cursor-pointer"
                      title={`Book ${t.themeTitle} on WhatsApp`}
                    >
                      <span>Inquire Theme</span>
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom VIP CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-[#C5A880]/50 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8C7147] block mb-1">
              Begin Your Commission
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B263E]">
              Ready to Design Your Next Unforgettable Milestone?
            </h3>
            <p className="text-xs text-stone-800 font-normal mt-1">
              Join hundreds of delighted clients. Let our senior event designers draft your bespoke celebration blueprint today.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openWhatsApp({ customMessage: "Hello Craft 4 Event, I would like to schedule a consultation with your senior event designer for an upcoming celebration." })}
              className="px-6 py-3 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-all shadow-xs flex items-center gap-2 group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Event Designer</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
