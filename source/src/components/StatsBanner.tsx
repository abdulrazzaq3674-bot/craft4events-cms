"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Sparkles, Award, Palette, Users, Star } from "lucide-react";

interface StatItem {
  numericValue: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: StatItem[] = [
  {
    numericValue: 500,
    suffix: "+",
    title: "Elite Events Crafted",
    subtitle: "Bespoke Birthdays, Anniversaries & Galas",
    icon: Award
  },
  {
    numericValue: 10,
    suffix: "%",
    title: "Curated Artist Divisions",
    subtitle: "Top 10% Vetted Performers & Choreographers",
    icon: Users
  },
  {
    numericValue: 100,
    suffix: "%",
    title: "Bespoke Styling",
    subtitle: "Handcrafted Décor & Spatial Architecture",
    icon: Palette
  },
  {
    numericValue: 4.9,
    decimals: 1,
    suffix: "★",
    title: "Distinction Rating",
    subtitle: "Verified White-Glove Client Satisfaction",
    icon: Star
  }
];

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [displayValue, setDisplayValue] = useState<string>(
    decimals > 0 ? (0).toFixed(decimals) : "0"
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1], // Smooth luxury ease-out
      onUpdate: (latest) => {
        setDisplayValue(latest.toFixed(decimals));
      }
    });

    return () => controls.stop();
  }, [isInView, value, decimals]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}
      {displayValue}
      <span className="font-serif text-[#C5A880] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="py-14 border-y border-[#C5A880]/60 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A880]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-3xl bg-white border border-[#C5A880]/50 hover:border-[#C5A880] transition-all duration-300 shadow-xs hover:shadow-[0_12px_36px_rgba(197,168,128,0.22)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#C5A880]/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <Icon className="w-5 h-5 text-[#8B263E]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#8C7147] tracking-widest font-semibold uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8B263E] tracking-tight mb-1">
                    <AnimatedCounter
                      value={item.numericValue}
                      suffix={item.suffix}
                      prefix={item.prefix}
                      decimals={item.decimals}
                    />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#2D2D2D] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-800 font-normal leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#C5A880]/20 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-[#8C7147] font-semibold">
                  <Sparkles className="w-2.5 h-2.5 text-[#C5A880]" />
                  <span>Certified Distinction</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
