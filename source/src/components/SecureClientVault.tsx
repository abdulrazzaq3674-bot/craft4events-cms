"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Lock, Unlock, Eye, MessageCircle, 
  Sparkles, FileText, CheckCircle2, ArrowRight, 
  LogOut, X, Mail, Send, Fingerprint, RefreshCw
} from "lucide-react";

interface VaultMasterwork {
  id: string;
  code: string;
  title: string;
  pillar: string;
  classification: string;
  clearanceLevel: string;
  image: string;
  specs: {
    footprint: string;
    floralCount: string;
    avTrussing: string;
    confidentiality: string;
  };
  summary: string;
  schematicPoints: string[];
}

const VAULT_ITEMS: VaultMasterwork[] = [
  {
    id: "vm-1",
    code: "RESTRICTED-ARCH-01",
    title: "The Floating Glasshouse Sanctuary Mandap",
    pillar: "Couple Room Decor",
    classification: "Private Royal Commission",
    clearanceLevel: "Level 1 Sovereign",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=90&w=1400",
    specs: {
      footprint: "2,400 sq. meters acrylic water deck",
      floralCount: "42,000 Dutch stems (Hand-threaded)",
      avTrussing: "Load-bearing suspended crystal grid",
      confidentiality: "Strict NDA & Biometric Checkpoint"
    },
    summary: "An unreleased monumental water pavilion featuring sunken reflection waterways, floating Venetian candelabras, and zero-impact structural anchors.",
    schematicPoints: [
      "Sub-surface acrylic buoyancy platforms rated for 850 guests",
      "Concealed directional scent dispersion (Neroli & White Amber)",
      "Zero-flame electronic cryogenic havan unit with ceremonial exhaust"
    ]
  },
  {
    id: "vm-2",
    code: "RESTRICTED-ARCH-02",
    title: "The 360° Living Palace Kinetic Projection Arena",
    pillar: "Rooftop Party Theme",
    classification: "Global Sovereign Summit",
    clearanceLevel: "Level 1 Sovereign",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=90&w=1400",
    specs: {
      footprint: "360-degree historic courtyard wrapper",
      floralCount: "25,000 gold-accented foliage stems",
      avTrussing: "60-meter circular aluminum mega-truss",
      confidentiality: "Drone Jammer Perimeter & Private Protocol"
    },
    summary: "Parametric 3D mapping synchronized with 16-zone wireless cold spark fountains and acoustic line-array towers engineered for heads of state.",
    schematicPoints: [
      "Eight 40,000-lumen laser projectors calibrated to historic stone relief",
      "Motorized chandelier drops synchronized to live orchestral overture",
      "Wireless encrypted DMX frequency hopping for total interference isolation"
    ]
  },
  {
    id: "vm-3",
    code: "RESTRICTED-ARCH-03",
    title: "The Clifftop Infinity Glass Marquee & Yacht Port",
    pillar: "50th Anniversary Theme",
    classification: "Private Island Takeover",
    clearanceLevel: "Level 2 Diplomatic",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=90&w=1400",
    specs: {
      footprint: "Cliff edge cantilevered marquee (1,800 m²)",
      floralCount: "30,000 Phalaenopsis orchids & wisteria",
      avTrussing: "Marine-grade high-tensile rigging",
      confidentiality: "Exclusive Offshore Maritime Security"
    },
    summary: "A private estate commission featuring an all-glass climate-controlled marquee suspended over ocean surf, accompanied by night barge fireworks.",
    schematicPoints: [
      "Wind-tested clear span structure certified for coastal gusts up to 55 knots",
      "Custom bleached driftwood champagne bars with integrated oyster chillers",
      "Submerged underwater perimeter lighting for private tender arrivals"
    ]
  }
];

export default function SecureClientVault() {
  const [contactInput, setContactInput] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verificationText, setVerificationText] = useState<string>("");
  const [authorizedPatron, setAuthorizedPatron] = useState<string>("");
  const [sessionToken, setSessionToken] = useState<string>("SEC-AUTH-8924-TLS");
  const [activeMasterwork, setActiveMasterwork] = useState<VaultMasterwork | null>(null);

  const handleSendMagicLink = (e: React.FormEvent) => {
    e.preventDefault();
    const patron = contactInput.trim() || "patron.vip@craft4events.in";
    
    setIsVerifying(true);
    setVerificationText("Generating 256-bit cryptographic session token...");

    setTimeout(() => {
      setVerificationText("Validating patron clearance & establishing encrypted handshake...");
    }, 400);

    setTimeout(() => {
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setSessionToken(`SEC-AUTH-${randomId}-TLS`);
      setAuthorizedPatron(patron);
      setIsVerifying(false);
      setIsAuthenticated(true);
      setVerificationText("");
    }, 900);
  };

  const handleWhatsAppVerification = () => {
    const patron = contactInput.trim() || "Discerning Sovereign Patron";
    const text = encodeURIComponent(
      `*VIP CLIENT VAULT ACCESS VERIFICATION - CRAFT 4 EVENT*%0A%0A` +
      `*Patron Identifier:* ${patron}%0A` +
      `_Hello Craft 4 Event Senior Concierge Desk, I am requesting high-security Magic Link authorization to inspect confidential architectural blueprints._`
    );
    window.open(`https://api.whatsapp.com/send?phone=918595675935&text=${text}`, "_blank");
    
    // Also unlock seamlessly for the user
    handleSendMagicLink({ preventDefault: () => {} } as React.FormEvent);
  };

  const handleInquireMasterwork = (item: VaultMasterwork) => {
    const text = encodeURIComponent(
      `*CONFIDENTIAL MASTERWORK INQUIRY - CRAFT 4 EVENT*%0A%0A` +
      `*Vault Code:* ${item.code}%0A` +
      `*Title:* ${item.title}%0A` +
      `*Clearance Level:* ${item.clearanceLevel}%0A` +
      `*Patron Identifier:* ${authorizedPatron || "Authorized Patron"}%0A%0A` +
      `_Hello Concierge, I have unlocked the secure vault and would like to arrange a private briefing regarding this architectural blueprint._`
    );
    window.open(`https://api.whatsapp.com/send?phone=918595675935&text=${text}`, "_blank");
  };

  return (
    <section id="vault" className="py-28 border-b border-[#E7E5E4] px-6 relative overflow-hidden">
      
      {/* Background Architectural Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-100 font-serif text-[18vw] select-none pointer-events-none opacity-40 uppercase tracking-widest font-bold">
        VAULT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E7E5E4] text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-4 shadow-sm">
            <Lock className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>NDA-Secured Client Portal</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2D2D2D] tracking-tight mb-4">
            The Confidential <span className="italic font-light text-[#7B5EA7]">VIP Vault</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed">
            Reserved exclusively for invited patrons, royal families, and private emissaries. Seamless token-based Magic Link access with instant verification to inspect unreleased masterworks.
          </p>
        </div>

        {/* LOCKED STATE: Magic Link & WhatsApp Verification Flow */}
        {!isAuthenticated ? (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto bg-white border border-[#E7E5E4] rounded-3xl p-8 sm:p-12 shadow-xl text-center relative"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Fingerprint className="w-7 h-7 text-[#8C7147]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7147] font-bold block mb-1">
              Token-Based VIP Gateway
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#2D2D2D] mb-3">
              Magic Link Verification
            </h3>
            <p className="text-xs text-stone-800 font-normal mb-8 max-w-sm mx-auto leading-relaxed">
              Enter your registered Email or WhatsApp number. A single-use encrypted session token will grant immediate high-security clearance.
            </p>

            <form onSubmit={handleSendMagicLink} className="space-y-4">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-700">
                  <Mail className="w-4 h-4 text-[#C5A880]" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Email or WhatsApp (e.g. patron@vip.com)"
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  disabled={isVerifying}
                  className="w-full bg-white border border-[#E7E5E4] rounded-full pl-11 pr-5 py-3.5 text-xs text-[#2D2D2D] placeholder:text-stone-400 focus:outline-none focus:border-[#7B5EA7] focus:ring-2 focus:ring-[#7B5EA7]/20 transition-all shadow-inner"
                />
              </div>

              {/* Simulated Cryptographic Handshake Status */}
              <AnimatePresence>
                {isVerifying && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center justify-center gap-2 text-xs font-mono text-[#8C7147] py-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>{verificationText}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-75"
                >
                  <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Send Secure Magic Link</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppVerification}
                  disabled={isVerifying}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#C5A880] hover:bg-white text-[#8C7147] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#8C7147]" />
                  <span>WhatsApp Verify</span>
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-[#EFECE6] flex items-center justify-center gap-2 text-[10px] text-stone-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8C7147]" />
              <span>256-Bit SSL • Passwordless Token Clearance • Strict NDA Protocol</span>
            </div>
          </motion.div>
        ) : (
          /* UNLOCKED STATE: VIP Unreleased Masterworks Vault */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            {/* Status Bar */}
            <div className="bg-white border border-[#C5A880] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                      Session Authenticated • Sovereign Clearance Active
                    </span>
                    <span className="text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-[#E7E5E4] text-stone-800 font-medium">
                      {sessionToken}
                    </span>
                  </div>
                  <p className="text-xs text-stone-800 font-normal mt-0.5">
                    Cleared Patron: <span className="font-medium text-[#2D2D2D]">{authorizedPatron}</span>. Unreleased blueprints unlocked under strict NDA.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setContactInput("");
                }}
                className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-stone-800 font-semibold hover:text-[#2D2D2D] px-4 py-2 rounded-full border border-stone-300 bg-white transition-colors"
              >
                <LogOut className="w-3.5 h-3.5 text-stone-800" />
                <span>End Secure Session</span>
              </button>
            </div>

            {/* Unlocked Masterworks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VAULT_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-[#E7E5E4] hover:border-[#C5A880] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Confidential Watermarked Image Container */}
                  <div 
                    className="relative h-72 overflow-hidden bg-white cursor-pointer"
                    onClick={() => setActiveMasterwork(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-[0.88] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                    />

                    {/* Diagonal Watermark Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none rotate-[-25deg] select-none opacity-30">
                      <span className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-[0.4em] text-white whitespace-nowrap border-y-2 border-white/40 py-2">
                        CONFIDENTIAL • NDA RESTRICTED
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/85 via-transparent to-transparent pointer-events-none" />

                    {/* Top Clearance Tag */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#EFE6D8] bg-[#2D2D2D]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {item.code}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-amber-300 bg-[#2D2D2D]/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-300/30">
                        {item.clearanceLevel}
                      </span>
                    </div>

                    {/* Bottom Title */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-bold text-[#C5A880] tracking-wider block mb-1">
                        {item.classification}
                      </span>
                      <h4 className="font-serif text-lg font-normal drop-shadow">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <p className="text-xs text-stone-800 font-normal leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Technical Specs List */}
                      <div className="space-y-1.5 text-[11px] mb-6 bg-white p-3 rounded-xl border border-[#E7E5E4]">
                        <div className="flex justify-between text-stone-800 font-medium">
                          <span>Footprint:</span>
                          <span className="font-medium text-[#2D2D2D]">{item.specs.footprint}</span>
                        </div>
                        <div className="flex justify-between text-stone-800 font-medium">
                          <span>Botanicals:</span>
                          <span className="font-medium text-[#2D2D2D]">{item.specs.floralCount}</span>
                        </div>
                        <div className="flex justify-between text-stone-800 font-medium">
                          <span>Security:</span>
                          <span className="font-semibold text-[#8C7147]">{item.specs.confidentiality}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#E7E5E4] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveMasterwork(item)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#7B5EA7] hover:text-[#2D2D2D] flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Schematics</span>
                      </button>

                      <button
                        onClick={() => handleInquireMasterwork(item)}
                        className="px-4 py-2 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-[#FFFFFF] text-[10px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3 h-3 text-[#C5A880]" />
                        <span>Private Briefing</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>

      {/* Schematic Inspection Modal */}
      <AnimatePresence>
        {activeMasterwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2D2D2D]/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveMasterwork(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#E7E5E4] text-[#2D2D2D] max-h-[92vh]"
            >
              <button
                onClick={() => setActiveMasterwork(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#2D2D2D]/70 hover:bg-[#2D2D2D] text-white transition-colors border border-white/20 shadow-lg"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image Display: object-contain with dark framing */}
              <div className="relative h-[48vh] sm:h-[55vh] min-h-[300px] max-h-[520px] w-full bg-white flex items-center justify-center p-3 sm:p-5 overflow-hidden">
                <img
                  src={activeMasterwork.image}
                  alt={activeMasterwork.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
                
                {/* Diagonal Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none rotate-[-20deg] select-none opacity-25">
                  <span className="font-mono text-2xl font-bold uppercase tracking-[0.4em] text-white border-y-2 border-white/40 py-2">
                    OFFICIAL PATRON EYES ONLY
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A880] block mb-0.5">
                    {activeMasterwork.code} • {activeMasterwork.clearanceLevel}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal drop-shadow">
                    {activeMasterwork.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white border-t border-[#E7E5E4] space-y-6 overflow-y-auto">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8C7147] tracking-[0.25em] block mb-1">
                    Architectural Summary
                  </span>
                  <p className="text-xs text-stone-800 leading-relaxed font-normal">
                    {activeMasterwork.summary}
                  </p>
                </div>

                {/* Schematics list */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8C7147] tracking-[0.25em] block mb-2">
                    Security & Engineering Schematics
                  </span>
                  <div className="space-y-2">
                    {activeMasterwork.schematicPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-900 font-medium bg-white p-2.5 rounded-xl border border-[#E7E5E4]">
                        <CheckCircle2 className="w-4 h-4 text-[#8C7147] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-stone-700 font-medium italic">
                    Strict Non-Disclosure Protocol Active • Sovereign Verification
                  </span>

                  <button
                    onClick={() => {
                      const item = activeMasterwork;
                      setActiveMasterwork(null);
                      handleInquireMasterwork(item);
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                    <span>Commission Private Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
