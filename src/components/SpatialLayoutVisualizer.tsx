"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, Map, Sparkles, MessageCircle, Check, 
  Layers, Volume2, Flower2, Maximize2, Shield, ArrowRight,
  Download, Eye, Sliders
} from "lucide-react";

interface VenueEnvironment {
  id: string;
  name: string;
  categoryTag: string;
  description: string;
  image: string;
  totalArea: string;
  maxGuestCapacity: string;
  acousticRating: string;
  botanicalVolume: string;
}

interface SpatialZone {
  id: string;
  name: string;
  shortLabel: string;
  coordinates: { x: number; y: number }; // percentage on floorplan
  footprint: string;
  sightlines: string;
  engineeringSpec: string;
  botanicalStyling: string;
  lightingSpec: string;
}

const VENUE_ENVIRONMENTS: VenueEnvironment[] = [
  {
    id: "palatial-glasshouse",
    name: "Palatial Glasshouse Conservatory",
    categoryTag: "High-Tensile Clear Span",
    description: "Climate-controlled transparent architectural marvel designed for grand floral chandeliers and starlit banquets.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200",
    totalArea: "2,200 sq. meters",
    maxGuestCapacity: "750 Guests",
    acousticRating: "Double-Glazed Sound Dampened",
    botanicalVolume: "35,000+ Dutch Stems"
  },
  {
    id: "floating-lakeside",
    name: "Floating Lakeside Water Pavilion",
    categoryTag: "Cantilevered Water Stage",
    description: "Ethereal submerged acrylic buoyancy decks surrounded by water lily moats and floating candelabras.",
    image: "https://images.unsplash.com/photo-1615836245347-ac2950529d2b?auto=format&fit=crop&q=85&w=1200",
    totalArea: "1,800 sq. meters",
    maxGuestCapacity: "550 Guests",
    acousticRating: "Acoustic Reflection Optimized",
    botanicalVolume: "28,000+ Dutch Stems"
  },
  {
    id: "clifftop-sanctuary",
    name: "Clifftop Oceanfront Sanctuary",
    categoryTag: "Panoramic Riviera Terraces",
    description: "Tiered multi-level sea-facing lawns engineered for marine breezes, sunset viewing, and offshore fireworks.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=85&w=1200",
    totalArea: "2,600 sq. meters",
    maxGuestCapacity: "650 Guests",
    acousticRating: "Open-Air Directional Array",
    botanicalVolume: "22,000+ Exotic Stems"
  },
  {
    id: "fortress-courtyard",
    name: "Heritage Fortress Courtyard",
    categoryTag: "Centuries-Old Historic Citadel",
    description: "Monumental stone ramparts illuminated by thousands of traditional mashaals with 3D projection mapped walls.",
    image: "https://images.unsplash.com/photo-1599661046289-e3189878fe45?auto=format&fit=crop&q=85&w=1200",
    totalArea: "3,100 sq. meters",
    maxGuestCapacity: "900 Guests",
    acousticRating: "Historic Amphitheater Isolation",
    botanicalVolume: "40,000+ Heritage Blooms"
  }
];

const SPATIAL_ZONES: SpatialZone[] = [
  {
    id: "mandap-stage",
    name: "Mandap / Main Stage Arena",
    shortLabel: "Stage & Mandap",
    coordinates: { x: 50, y: 24 },
    footprint: "480 sq. meters (Tiered Hydraulic)",
    sightlines: "360° Unobstructed from all guest tiers",
    engineeringSpec: "Certified load-bearing mega-truss with wireless DMX cold spark fireworks and low-lying cloud fog",
    botanicalStyling: "Hand-threaded white carnations, cascading phalaenopsis orchids & 24k gold leaf accents",
    lightingSpec: "2200K warm pin-spotting with intelligent beam tracking"
  },
  {
    id: "vip-dining",
    name: "VIP Banqueting & Dining Enclave",
    shortLabel: "VIP Dining",
    coordinates: { x: 26, y: 64 },
    footprint: "650 sq. meters (Imperial Long Tables)",
    sightlines: "Direct line of sight to main stage and projection facades",
    engineeringSpec: "Acoustically tuned for intimate private conversation with sub-floor cable isolation",
    botanicalStyling: "Suspended floral wisteria canopies and crystal candelabras with ivory linen",
    lightingSpec: "Warm ambient candelabras with low-voltage table accents"
  },
  {
    id: "kinetic-dancefloor",
    name: "Kinetic Dance Floor & Symphony Arena",
    shortLabel: "Dance Floor",
    coordinates: { x: 50, y: 58 },
    footprint: "380 sq. meters (Mirror Infinity Floor)",
    sightlines: "Central focal arena with panoramic amphitheater risers",
    engineeringSpec: "High-impact acoustic dampening sub-floor with motorized kinetic chandelier winches",
    botanicalStyling: "Perimeter botanical columns with tropical greenery and metallic gold palm fronds",
    lightingSpec: "Curved visual LED video walls with laser mapped beam fixtures"
  },
  {
    id: "lounge-sanctuary",
    name: "Private Cocktail Lounge Sanctuary",
    shortLabel: "Lounge Bar",
    coordinates: { x: 74, y: 64 },
    footprint: "420 sq. meters (Custom Velvet Booths)",
    sightlines: "Relaxed panoramic vista of water reflections and gardens",
    engineeringSpec: "Dedicated artisanal mixology chillers, oyster shucking bars, and private butler stations",
    botanicalStyling: "Fragrant gardenia arrangements and organic driftwood accents",
    lightingSpec: "Soft amber recessed glow and illuminated onyx bar facade"
  },
  {
    id: "perimeter-draping",
    name: "Perimeter Living Floral Draping",
    shortLabel: "Floral Perimeter",
    coordinates: { x: 50, y: 90 },
    footprint: "Continuous 120-meter sensory walkthrough perimeter",
    sightlines: "Seamless structural concealment creating an ethereal botanical cocoon",
    engineeringSpec: "Integrated automatic scent diffusers (Neroli & Amber) and soft velvet carpet runner",
    botanicalStyling: "30,000+ imported Dutch roses, hydrangeas, and trailing Italian ruscus",
    lightingSpec: "Concealed floor uplighting casting gentle organic shadows"
  }
];

export default function SpatialLayoutVisualizer() {
  const [selectedEnv, setSelectedEnv] = useState<VenueEnvironment>(VENUE_ENVIRONMENTS[0]);
  const [selectedZone, setSelectedZone] = useState<SpatialZone>(SPATIAL_ZONES[0]);
  const [blueprintCode] = useState<string>("SPATIAL-ENV-9024");

  const handleExportSpatialDossier = () => {
    const text = encodeURIComponent(
      `*SPATIAL BLUEPRINT DOSSIER - CREATE 4 MOMENTS*%0A%0A` +
      `*Blueprint Code:* ${blueprintCode}%0A` +
      `*Venue Architecture:* ${selectedEnv.name}%0A` +
      `*Category Classification:* ${selectedEnv.categoryTag}%0A` +
      `*Total Footprint:* ${selectedEnv.totalArea} (${selectedEnv.maxGuestCapacity})%0A` +
      `*Focus Zone:* ${selectedZone.name}%0A` +
      `*Zone Footprint:* ${selectedZone.footprint}%0A` +
      `*Engineering Spec:* ${selectedZone.engineeringSpec}%0A%0A` +
      `_Hello Craft 4 Event Private Concierge, I have configured a custom spatial layout. Please connect us with your senior spatial architect to review venue feasibility._`
    );
    window.open(`https://api.whatsapp.com/send?phone=918595675935&text=${text}`, "_blank");
  };

  return (
    <section id="spatial" className="py-28 border-b border-[#E7E5E4] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E7E5E4] text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Interactive Spatial Architecture</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-4">
            Spatial Venue & <span className="italic font-light text-[#7B5EA7]">Blueprint Visualizer</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed">
            Configure monumental architectural layouts across four elite venue environments. Toggle spatial zones to inspect engineering tolerances, acoustic isolation, and botanical stem density.
          </p>
        </div>

        {/* Step 1: Venue Environment Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {VENUE_ENVIRONMENTS.map((env) => {
            const isSelected = selectedEnv.id === env.id;
            return (
              <div
                key={env.id}
                onClick={() => setSelectedEnv(env)}
                className={`group p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#C5A880] shadow-md ring-1 ring-[#C5A880]/30 scale-[1.02]"
                    : "bg-white border-[#E7E5E4] hover:border-stone-400"
                }`}
              >
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#8C7147] tracking-wider block mb-1">
                    {env.categoryTag}
                  </span>
                  <h3 className="font-serif text-base font-normal text-[#2D2D2D] mb-2">
                    {env.name}
                  </h3>
                  <p className="text-[11px] text-stone-800 font-normal leading-relaxed mb-4">
                    {env.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E5E4] flex items-center justify-between text-[10px] text-stone-800 font-medium">
                  <span>{env.totalArea}</span>
                  <span className="text-[#8C7147] font-semibold">{env.maxGuestCapacity}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step 2: Interactive Blueprint Grid (Floorplan Visualizer + Zone Specs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Floorplan Visualizer Canvas (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E4] mb-6">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C7147] font-bold block">
                  Interactive Spatial Blueprint
                </span>
                <h4 className="font-serif text-lg font-normal text-[#2D2D2D]">
                  {selectedEnv.name}
                </h4>
              </div>
              <span className="font-mono text-[10px] text-stone-800 font-medium bg-white border border-[#E7E5E4] px-2.5 py-1 rounded-full">
                {selectedEnv.totalArea}
              </span>
            </div>

            {/* Interactive Floorplan Map */}
            <div className="relative w-full aspect-[4/3] bg-white rounded-2xl border-2 border-dashed border-[#E7E5E4] overflow-hidden flex items-center justify-center p-4">
              
              {/* Architectural Grid Lines */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#8C7147 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />

              {/* Venue Boundary Layout Outline */}
              <div className="absolute inset-8 rounded-3xl border border-[#C5A880]/40 pointer-events-none flex flex-col justify-between p-4">
                <div className="flex justify-between text-[8px] font-mono uppercase text-[#8C7147]/70">
                  <span>NORTH PERIMETER</span>
                  <span>ACOUSTIC ISOLATION AXIS</span>
                </div>
                <div className="flex justify-between text-[8px] font-mono uppercase text-[#8C7147]/70">
                  <span>CEREMONIAL ENTRANCE</span>
                  <span>VIP SERVICE ENCLAVE</span>
                </div>
              </div>

              {/* Interactive Zone Pins / Nodes */}
              {SPATIAL_ZONES.map((zone) => {
                const isSelected = selectedZone.id === zone.id;
                return (
                  <motion.div
                    key={zone.id}
                    onClick={() => setSelectedZone(zone)}
                    className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 z-20 group"
                    style={{ left: `${zone.coordinates.x}%`, top: `${zone.coordinates.y}%` }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <div className="relative flex flex-col items-center">
                      {/* Pulse circle when selected */}
                      {isSelected && (
                        <span className="absolute -inset-2 rounded-full bg-[#C5A880]/30 animate-ping" />
                      )}
                      
                      <div className={`px-3 py-1.5 rounded-full border text-[10px] font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-[#8B263E] text-white border-[#8B263E] scale-105 shadow-md"
                          : "bg-white text-stone-700 border-[#E7E5E4] hover:border-[#C5A880]"
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#C5A880]" : "bg-stone-700"}`} />
                        <span>{zone.shortLabel}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Watermark / Floorplan compass */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[9px] font-mono text-stone-700 font-semibold pointer-events-none">
                <Compass className="w-3 h-3 text-[#C5A880]" />
                <span>N 0° ELEVATION</span>
              </div>
            </div>

            {/* Quick Zone Navigation Buttons below map */}
            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#E7E5E4]">
              <span className="text-[10px] uppercase font-bold text-[#8C7147] tracking-wider self-center mr-1">
                Select Zone:
              </span>
              {SPATIAL_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold transition-all ${
                    selectedZone.id === zone.id
                      ? "bg-[#8B263E] text-white shadow-sm"
                      : "bg-white text-stone-800 hover:text-[#2D2D2D] border border-[#E7E5E4]"
                  }`}
                >
                  {zone.shortLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Zone Engineering & Architectural Specs (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E7E5E4] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="pb-4 border-b border-[#E7E5E4]">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C7147] font-bold block mb-1">
                Zone Architectural Blueprint
              </span>
              <h4 className="font-serif text-2xl font-normal text-[#2D2D2D]">
                {selectedZone.name}
              </h4>
            </div>

            {/* Metrics List */}
            <div className="space-y-4 text-xs">
              <div className="bg-white p-3.5 rounded-2xl border border-[#E7E5E4] space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C7147] block">
                  Area Footprint & Scale
                </span>
                <p className="font-medium text-[#2D2D2D]">{selectedZone.footprint}</p>
                <p className="text-[11px] text-stone-800 font-normal">{selectedZone.sightlines}</p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#E7E5E4] space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C7147] block">
                  Structural & Production Engineering
                </span>
                <p className="text-[11px] text-stone-800 font-normal leading-relaxed">
                  {selectedZone.engineeringSpec}
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#E7E5E4] space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C7147] block">
                  Living Botanical Geometry
                </span>
                <p className="text-[11px] text-stone-800 font-normal leading-relaxed">
                  {selectedZone.botanicalStyling}
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#E7E5E4] space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C7147] block">
                  Lighting & Photometric Spec
                </span>
                <p className="text-[11px] text-stone-800 font-normal leading-relaxed">
                  {selectedZone.lightingSpec}
                </p>
              </div>
            </div>

            {/* Export Actions */}
            <div className="pt-4 border-t border-[#E7E5E4] space-y-2.5">
              <button
                onClick={handleExportSpatialDossier}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md group"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                <span>Export Spatial Dossier to Concierge</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-stone-700 font-medium text-center">
                Blueprint Code: <span className="font-mono font-medium text-[#2D2D2D]">{blueprintCode}</span> • Zero third-party markups
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
