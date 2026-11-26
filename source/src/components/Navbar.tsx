"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { getWhatsAppBookingLink } from "@/utils/whatsapp";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

function FacebookIcon({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Event Themes", href: "/#categories" },
    { label: "Live Artists", href: "/#artists" },
    { label: "Configurator", href: "/#configurator" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* ─── Top Utility Bar ─── */}
      <div className="bg-[#FAF9F5] border-b border-[#E7E5E4] text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Hotline & Support Email */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-[#2D2D2D]">
            <a
              href="tel:+918595675935"
              className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium hover:text-[#8B263E] transition-colors"
            >
              <Phone size={12} className="text-[#C5A880]" />
              <span>+91 85956 75935 (Call Anytime)</span>
            </a>

            <span className="hidden md:inline text-stone-300">|</span>

            <a
              href="mailto:hello@craft4events.in"
              className="hidden md:flex items-center gap-1.5 text-[11px] sm:text-xs font-medium hover:text-[#8B263E] transition-colors"
            >
              <Mail size={12} className="text-[#C5A880]" />
              <span>hello@craft4events.in</span>
            </a>

            <span className="hidden lg:inline text-stone-300">|</span>

            <span className="hidden lg:inline text-[10.5px] text-[#7B5EA7] font-semibold">
              ✦ Luxury Party Planning & Theme Booking Agency
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3 text-[#2D2D2D]">
            <span className="text-[10px] uppercase tracking-wider text-[#8C7147] font-bold hidden sm:inline">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/craft4events"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-5 h-5 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center text-stone-800 hover:text-[#8B263E] hover:border-[#8B263E] transition-all hover:scale-110"
              >
                <InstagramIcon size={11} />
              </a>
              <a
                href={getWhatsAppBookingLink({ customMessage: "Hello Craft4Events, I would like to inquire about booking an event theme." })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-5 h-5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all hover:scale-110"
              >
                <MessageCircle size={11} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-5 h-5 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center text-stone-800 hover:text-[#8B263E] hover:border-[#8B263E] transition-all hover:scale-110"
              >
                <FacebookIcon size={11} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-5 h-5 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center text-stone-800 hover:text-[#8B263E] hover:border-[#8B263E] transition-all hover:scale-110"
              >
                <YoutubeIcon size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Navigation Menu (Glassmorphism & Dynamic Scroll) ─── */}
      <div 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-[#E7E5E4] py-2.5" 
            : "bg-white border-[#E7E5E4] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-3">
          {/* Brand Logo with Signature Maroon '4' Emblem */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 shrink-0 group select-none">
            <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-2xl bg-white border-2 border-[#C5A880]/70 shadow-[0_4px_16px_rgba(139,38,62,0.10)] flex items-center justify-center shrink-0 group-hover:border-[#8B263E] group-hover:shadow-[0_6px_20px_rgba(139,38,62,0.22)] transition-all relative overflow-hidden">
              <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#C5A880]/60" />
              <span className="font-serif font-black text-3xl sm:text-4xl text-[#8B263E] leading-none transform group-hover:scale-108 transition-transform select-none">
                4
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <div className="font-serif tracking-[0.14em] uppercase leading-tight flex items-baseline">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-[#2D2D2D] group-hover:text-[#8B263E] transition-colors">
                  CRAFT
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#8B263E] mx-1 sm:mx-1.5 leading-none inline-block transform translate-y-0.5">
                  4
                </span>
                <span className="text-base sm:text-lg lg:text-xl font-bold text-[#2D2D2D] group-hover:text-[#8B263E] transition-colors">
                  EVENTS
                </span>
              </div>
              <span className="text-[8px] sm:text-[8.5px] uppercase tracking-[0.28em] text-[#7B5EA7] font-semibold mt-0.5">
                Party Planning & Theme Décor
              </span>
            </div>
          </Link>

          {/* Streamlined Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-semibold text-[11px] xl:text-[12px] uppercase tracking-[0.12em] text-[#2D2D2D]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 text-stone-700 hover:text-[#8B263E] transition-colors whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8B263E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA Actions: Lift on hover, tactile press */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
            <a
              href={getWhatsAppBookingLink({ customMessage: "Hello Craft4Events, I want to book an event theme. Please share details and availability." })}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B263E] hover:bg-[#721D32] active:scale-95 text-white px-3.5 sm:px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap group"
            >
              <MessageCircle size={14} className="group-hover:scale-110 transition-transform text-[#25D366]" />
              <span>WhatsApp Booking</span>
            </a>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="border border-[#C5A880] hover:border-[#8B263E] hover:text-[#8B263E] active:scale-95 text-[#8C7147] px-3 sm:px-3.5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shadow-xs hover:shadow-sm hover:-translate-y-0.5"
              >
                <Sparkles size={12} className="text-[#C5A880]" />
                <span>Book Consultation</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-[#E7E5E4] text-[#2D2D2D] hover:text-[#8B263E] hover:border-[#8B263E] active:scale-95 transition-all shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#2D2D2D]" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Drawer Menu with AnimatePresence ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#E7E5E4] px-6 py-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#2D2D2D] hover:text-[#8B263E] py-2.5 border-b border-[#E7E5E4]/60 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={getWhatsAppBookingLink({ customMessage: "Hello Craft4Events, I want to book an event theme. Please share details and availability." })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#8B263E] hover:bg-[#721D32] active:scale-98 text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle size={15} />
                <span>Direct WhatsApp Booking</span>
              </a>

              {onOpenConsultation && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 rounded-full border border-[#C5A880] text-[#8C7147] hover:border-[#8B263E] hover:text-[#8B263E] active:scale-98 text-xs font-semibold uppercase tracking-wider text-center transition-all"
                >
                  Book Private Consultation
                </button>
              )}

              <div className="pt-3 border-t border-[#E7E5E4] flex items-center justify-between text-xs text-stone-800 font-medium">
                <a href="tel:+918595675935" className="flex items-center gap-1.5 font-medium text-[#2D2D2D] hover:text-[#8B263E]">
                  <Phone size={12} className="text-[#C5A880]" />
                  <span>+91 85956 75935</span>
                </a>
                <a href="mailto:hello@craft4events.in" className="hover:text-[#8B263E]">
                  hello@craft4events.in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
