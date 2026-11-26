"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What types of events and parties do you plan?",
    a: "We specialise in a wide range of celebrations including baby birthdays, baby welcome ceremonies, rooftop parties, adult milestone birthdays, 25th & 50th anniversary galas, haldi & mehndi functions, couple room décor, car decoration, and corporate events. Each theme is fully customised to your vision."
  },
  {
    q: "Do you provide live artists and entertainment acts?",
    a: "Yes! We offer curated live artist bookings including professional choreographers, trained dance performers, DJs, acoustic musicians, emcees, and specialty entertainment acts. These can be bundled with any theme package or booked separately."
  },
  {
    q: "How far in advance should we book our event?",
    a: "For large-scale celebrations and corporate galas, we recommend booking 4 to 8 weeks in advance. For intimate birthday parties or room décor, a minimum of 1–2 weeks is usually sufficient. Peak seasons (festivals, year-end) require earlier booking."
  },
  {
    q: "Can you create a fully custom theme not shown in your gallery?",
    a: "Absolutely. Our designers can create bespoke themes from scratch based on your moodboard, colour preferences, venue layout, and inspiration images. Use our Configurator tool to outline your vision and send it directly via WhatsApp."
  },
  {
    q: "Do you handle everything from setup to cleanup?",
    a: "Yes — every package includes turnkey execution: venue scouting assistance, full décor setup, lighting & sound arrangement, live entertainment coordination, and post-event teardown. You simply show up and celebrate."
  },
  {
    q: "What areas do you serve?",
    a: "We currently serve all major cities and nearby areas. For destination events or outstation celebrations, please reach out via WhatsApp and our team will provide availability and logistics support."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B8A8D0] text-[#7B5EA7] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#7B5EA7]" /> Help & Guidance
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
          Frequently Asked Questions
        </h3>
        <div className="w-12 h-[1px] bg-[#7B5EA7] mx-auto mt-4" />
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-[#E7E5E4] bg-white shadow-sm overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left text-sm sm:text-base font-medium text-[#2D2D2D] hover:text-[#8B263E] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#7B5EA7] transition-transform duration-300 shrink-0 ml-4 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-xs sm:text-sm text-stone-800 font-normal leading-relaxed border-t border-[#E7E5E4] pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
