"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Calendar, Clock, MapPin, Users, Sparkles, MessageCircle, 
  CheckCircle2, ArrowRight, ChevronRight, Layers, Eye
} from "lucide-react";
import { LandmarkCaseStudy, CaseStudyDay } from "@/data/caseStudies";

interface CaseStudyModalProps {
  caseStudy: LandmarkCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  const [activeDayIdx, setActiveDayIdx] = useState<number>(0);

  if (!caseStudy) return null;

  const currentDay: CaseStudyDay = caseStudy.timeline[activeDayIdx] || caseStudy.timeline[0];

  const handleInquireCaseStudy = () => {
    const text = encodeURIComponent(
      `*LANDMARK COMMISSION INQUIRY - CREATE 4 MOMENTS*%0A%0A` +
      `*Case Study:* ${caseStudy.title}%0A` +
      `*Category:* ${caseStudy.category}%0A` +
      `*Scale:* ${caseStudy.guestCount}%0A` +
      `*Focus Day:* Day ${currentDay.dayNumber}: ${currentDay.title}%0A%0A` +
      `_Hello Create 4 Moments Concierge, I am inspired by the "${caseStudy.title}" editorial commission. Please connect us with your senior spatial architect to explore similar staging._`
    );
    window.open(`https://api.whatsapp.com/send?phone=918595675935&text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2D2D2D]/75 backdrop-blur-xl"
        />

        {/* Modal Window mimicking high-end architectural publication */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-[#2D2D2D] border border-[#E7E5E4] max-h-[92vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors border border-white/20"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header / Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black shrink-0">
            <img
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2D2D2D] text-[10px] font-bold uppercase tracking-widest">
                  {caseStudy.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[#EFE6D8] border border-white/20 text-[10px] uppercase font-semibold tracking-wider">
                  {caseStudy.year}
                </span>
                <span className="text-[10px] uppercase text-white/90 font-medium">
                  ✦ {caseStudy.locationType}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-normal leading-tight drop-shadow-md mb-1">
                {caseStudy.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-200 font-light drop-shadow">
                {caseStudy.subtitle}
              </p>
            </div>
          </div>

          {/* Metrics Ribbon */}
          <div className="bg-white border-b border-[#E7E5E4] px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center shrink-0">
            {caseStudy.metrics.map((m, i) => (
              <div key={i} className="border-r border-[#EFECE6] last:border-none">
                <span className="text-[10px] uppercase tracking-wider text-[#8C7147] font-bold block">
                  {m.label}
                </span>
                <span className="font-serif text-base font-semibold text-[#2D2D2D]">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Scrollable Body Content */}
          <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-8 bg-white">
            
            {/* Editorial Quote & Curator Note */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-8 border-b border-[#E7E5E4]">
              <div className="md:col-span-8">
                <blockquote className="font-serif text-base sm:text-lg italic text-[#8C7147] leading-relaxed mb-3">
                  {caseStudy.editorialQuote}
                </blockquote>
                <p className="text-xs text-stone-800 font-normal leading-relaxed">
                  {caseStudy.curatorNote}
                </p>
              </div>

              <div className="md:col-span-4 bg-white p-5 rounded-2xl border border-[#E7E5E4] space-y-2 text-xs">
                <span className="text-[10px] uppercase font-bold text-[#8C7147] tracking-widest block">
                  Production Overview
                </span>
                <div className="flex items-center gap-2 text-stone-900 font-medium">
                  <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{caseStudy.guestCount}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-900 font-medium">
                  <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span className="text-[11px] leading-tight">{caseStudy.productionScale}</span>
                </div>
              </div>
            </div>

            {/* Multi-Day Timeline Navigation Tabs */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7147] font-bold block mb-1">
                    Chronological Itinerary
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#2D2D2D]">
                    Multi-Day Timeline Architecture
                  </h3>
                </div>
                <span className="text-xs font-serif italic text-stone-700 font-medium">
                  Select Day to Preview Staging
                </span>
              </div>

              {/* Day Tabs */}
              <div className="flex gap-2 border-b border-[#E7E5E4] pb-2 overflow-x-auto">
                {caseStudy.timeline.map((day, idx) => {
                  const isActive = activeDayIdx === idx;
                  return (
                    <button
                      key={day.dayNumber}
                      onClick={() => setActiveDayIdx(idx)}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 flex items-center gap-2 ${
                        isActive
                          ? "bg-[#8B263E] text-white shadow-md scale-105"
                          : "bg-white text-stone-700 border border-[#E7E5E4] hover:border-[#C5A880] hover:text-[#2D2D2D]"
                      }`}
                    >
                      <span className="text-[#C5A880] font-serif italic">Day {day.dayNumber}</span>
                      <span>•</span>
                      <span>{day.title.split(" ")[1] || `Act ${day.dayNumber}`}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Day Content Display */}
            <motion.div
              key={currentDay.dayNumber}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E5E4] space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Day Image (5 Cols) */}
                <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm border border-[#E7E5E4]">
                  <img
                    src={currentDay.image}
                    alt={currentDay.title}
                    className="w-full h-full object-cover filter brightness-[0.95]"
                  />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-medium">
                    Day {currentDay.dayNumber} Live Staging
                  </span>
                </div>

                {/* Day Details (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-white border border-[#C5A880] text-[10px] uppercase font-bold tracking-wider text-[#8C7147]">
                    Theme: {currentDay.theme}
                  </div>

                  <h4 className="font-serif text-2xl font-normal text-[#2D2D2D]">
                    Day {currentDay.dayNumber}: {currentDay.title}
                  </h4>
                  <p className="text-xs uppercase font-semibold tracking-wider text-stone-800">
                    {currentDay.subtitle}
                  </p>

                  <p className="text-xs text-stone-800 font-normal leading-relaxed">
                    {currentDay.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C7147] block">
                      Architectural Highlights:
                    </span>
                    {currentDay.architecturalHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-stone-900 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C7147] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Atmospheric notes */}
                  <div className="pt-2 text-[11px] text-stone-800 italic bg-white p-3 rounded-xl border border-[#E7E5E4]">
                    <span className="font-semibold text-stone-900">Sensory Ambiance: </span>
                    {currentDay.atmosphericNotes}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Modal Footer / Actions */}
          <div className="bg-white border-t border-[#E7E5E4] px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <span className="text-xs text-stone-800 font-medium italic">
              Commissioned under strict non-disclosure agreement.
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleInquireCaseStudy}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md group"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                <span>Inquire About This Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
