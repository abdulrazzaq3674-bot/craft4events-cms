"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MessageCircle, ShieldCheck, ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialItemName?: string;
}

const OCCASIONS = [
  "Baby Birthday Theme",
  "Baby Welcome Decoration",
  "Adult Birthday Theme",
  "25th Anniversary Theme",
  "50th Anniversary Theme",
  "Car Decor",
  "Couple Room Decor",
  "Rooftop Party Theme",
  "Haldi Decor Theme",
  "Mehndi Decor Theme",
  "Corporate Party Theme",
  "Live Artists & Entertainment"
];

export default function BookingModal({
  isOpen,
  onClose,
  initialCategory = "Baby Birthday Theme",
  initialItemName = ""
}: BookingModalProps) {
  const [occasion, setOccasion] = useState(initialCategory);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState(initialItemName ? `Inquiring specifically for: ${initialItemName}` : "");

  useEffect(() => {
    if (initialCategory) {
      setOccasion(initialCategory);
    }
    if (initialItemName) {
      setNotes(`Inquiring specifically for: ${initialItemName}`);
    }
  }, [initialCategory, initialItemName]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customMessage = 
      `*EVENT INQUIRY - CRAFT 4 EVENTS*%0A%0A` +
      `*What is Occasion:* ${encodeURIComponent(occasion)}%0A` +
      `*Client Name:* ${encodeURIComponent(name || "Guest")}%0A` +
      `*WhatsApp / Phone Number:* ${encodeURIComponent(phone || "Not provided")}%0A` +
      (email ? `*Email Address:* ${encodeURIComponent(email)}%0A` : "") +
      (location ? `*State / City:* ${encodeURIComponent(location)}%0A` : "") +
      `*Preferred Event Date:* ${encodeURIComponent(date || "Flexible / To Be Decided")}%0A` +
      (notes ? `*Custom Vision & Requirements:* ${encodeURIComponent(notes)}%0A` : "") +
      `%0A_Hello Craft 4 Events! I would like to inquire about booking our celebration. Please check availability and share a quote._`;

    openWhatsApp({ customMessage });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2D2D2D]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-white rounded-3xl border border-[#C5A880]/50 shadow-2xl p-6 sm:p-9 z-10 my-8 text-[#2D2D2D]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-[#737373] hover:text-[#2D2D2D] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#7B5EA7] font-semibold block mb-1.5">
              Book Your Celebration
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D2D2D] tracking-tight">
              Event Inquiry
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-2.5 mb-2.5" />
            <p className="text-xs text-stone-700 max-w-md mx-auto leading-relaxed">
              Tell us about your dream celebration. We'll craft a bespoke theme package tailored to your vision and venue.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-xs">
            
            {/* Occasion / Theme & Event Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-stone-900 uppercase tracking-wider font-bold mb-1.5 text-[10px]">
                  What is Occasion *
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-white border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] rounded-xl px-3.5 py-2.5 text-[#2D2D2D] font-medium outline-none transition-colors cursor-pointer"
                >
                  {OCCASIONS.map((occ) => (
                    <option key={occ} value={occ}>{occ}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-900 uppercase tracking-wider font-bold mb-1.5 text-[10px]">
                  Preferred Event Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] rounded-xl px-3.5 py-2.5 text-[#2D2D2D] font-medium outline-none transition-colors"
                  />
                  <Calendar className="w-4 h-4 text-[#8B263E] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-stone-900 uppercase tracking-wider font-bold mb-1.5 text-[10px]">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mr. & Mrs. Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] rounded-xl px-3.5 py-2.5 text-[#2D2D2D] outline-none transition-colors placeholder:text-stone-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-stone-900 uppercase tracking-wider font-bold mb-1.5 text-[10px]">
                  WhatsApp Number / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] rounded-xl px-3.5 py-2.5 text-[#2D2D2D] outline-none transition-colors placeholder:text-stone-400 font-medium"
                />
              </div>
            </div>

            {/* Email Address & State / City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-stone-900 uppercase tracking-wider font-bold mb-1.5 text-[10px]">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="e.g. sharma.events@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] rounded-xl pl-3.5 pr-9 py-2.5 text-[#2D2D2D] outline-none transition-colors placeholder:text-stone-400 font-medium"
                  />
                  <Mail className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-stone-900 uppercase tracking-wider font-bold mb-1.5 text-[10px]">
                  State / City *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi NCR, Mumbai, Jaipur..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] rounded-xl pl-3.5 pr-9 py-2.5 text-[#2D2D2D] outline-none transition-colors placeholder:text-stone-400 font-medium"
                  />
                  <MapPin className="w-3.5 h-3.5 text-[#8B263E] absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Custom Notes */}
            <div>
              <label className="block text-stone-900 uppercase tracking-wider font-bold mb-1.5 text-[10px]">
                Your Vision & Custom Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your dream theme, venue preferences, colour nuances, or special décor requests..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white border border-[#E7E5E4] focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E] rounded-xl px-3.5 py-2.5 text-[#2D2D2D] outline-none transition-colors resize-none placeholder:text-stone-400 font-medium leading-relaxed"
              />
            </div>

            {/* Footer actions */}
            <div className="pt-3 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[11px] text-stone-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#8B263E]" />
                <span>100% Confidential • Personalised Quotes</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#8B263E] hover:bg-[#721D32] active:scale-95 text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.18em] transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Send via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
