"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar as CalendarIcon, Clock, User, Phone, MapPin, 
  Building, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck,
  Sparkles, RefreshCw
} from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

const TIME_SLOTS = [
  "10:00 AM",
  "02:00 PM",
  "05:30 PM",
  "08:00 PM"
];

// Generate next 10 selectable dates
const generateAvailableDates = () => {
  const dates = [];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const today = new Date();
  for (let i = 1; i <= 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      fullDateString: d.toISOString().split("T")[0],
      dayName: days[d.getDay()],
      dayNum: d.getDate(),
      month: months[d.getMonth()]
    });
  }
  return dates;
};

export default function CommissionScheduler() {
  const availableDates = generateAvailableDates();

  const [selectedDate, setSelectedDate] = useState(availableDates[1]);
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[1]);
  
  // Clean Form Fields
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [venueType, setVenueType] = useState<string>("");

  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>("");

  const formattedDateString = `${selectedDate.dayName}, ${selectedDate.dayNum} ${selectedDate.month}`;

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `C4M-APT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsBooked(true);
  };

  const handleDirectWhatsApp = () => {
    const message = 
      `*PRIVATE APPOINTMENT RESERVATION - CREATE 4 MOMENTS*%0A%0A` +
      `*Client / Name:* ${encodeURIComponent(name || "Discerning Client")}%0A` +
      `*Contact Number:* ${encodeURIComponent(phone || "Not provided")}%0A` +
      `*Preferred Date:* ${encodeURIComponent(formattedDateString)}%0A` +
      `*Preferred Time:* ${encodeURIComponent(selectedTime)}%0A` +
      (address ? `*Physical Address:* ${encodeURIComponent(address)}%0A` : "") +
      (venueType ? `*Venue / Property Type:* ${encodeURIComponent(venueType)}%0A` : "") +
      `%0A_Hello Create 4 Moments, I would like to confirm team availability for this consultation slot._`;

    openWhatsApp({ customMessage: message });
  };

  return (
    <section id="scheduler" className="py-24 border-b border-[#E7E5E4] px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Clean Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E7E5E4] text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-semibold mb-4 shadow-sm">
            <CalendarIcon className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Private Appointment Booking</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight mb-3">
            Schedule a Private Consultation
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-stone-800 font-normal leading-relaxed">
            Select your preferred appointment date and time. Our senior design team will prepare an exclusive briefing tailored to your vision.
          </p>
        </div>

        {/* Main Clean Form Card */}
        <div className="bg-white border border-[#E7E5E4] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Subtle gold accent ribbon */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent" />

          {!isBooked ? (
            <form onSubmit={handleBookAppointment} className="space-y-8">
              
              {/* 1. Date Selection */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#8C7147] mb-3">
                  Select Appointment Date
                </label>

                {/* Horizontal Date Picker Tiles */}
                <div className="flex gap-2.5 overflow-x-auto pb-2">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate.fullDateString === item.fullDateString;
                    return (
                      <button
                        type="button"
                        key={item.fullDateString}
                        onClick={() => setSelectedDate(item)}
                        className={`min-w-[76px] p-3 rounded-2xl border text-center transition-all ${
                          isSelected
                            ? "bg-[#8B263E] text-white border-[#8B263E] shadow-md scale-105"
                            : "bg-white text-stone-700 border-[#E7E5E4] hover:border-[#C5A880]"
                        }`}
                      >
                        <span className="text-[10px] uppercase block tracking-wider text-[#C5A880] mb-0.5">
                          {item.dayName}
                        </span>
                        <span className="font-serif text-lg font-bold block leading-none mb-1">
                          {item.dayNum}
                        </span>
                        <span className="text-[10px] uppercase text-stone-700 font-medium block">
                          {item.month}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Time Slot Selection */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#8C7147] mb-3">
                  Select Time Slot
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? "bg-[#8B263E] text-white border-[#8B263E] shadow-sm"
                            : "bg-white text-stone-700 border-[#E7E5E4] hover:border-[#C5A880]"
                        }`}
                      >
                        <Clock className={`w-3.5 h-3.5 ${isSelected ? "text-[#C5A880]" : "text-stone-700"}`} />
                        <span>{slot}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Simplified Form Fields */}
              <div className="pt-2 border-t border-[#E7E5E4] space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8C7147] block">
                  Patron Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-stone-900 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-[#E7E5E4] rounded-xl px-4 py-2.5 text-xs text-[#2D2D2D] focus:outline-none focus:border-[#C5A880] transition-colors pl-9 placeholder:text-stone-400"
                      />
                      <User className="w-3.5 h-3.5 text-stone-600 absolute left-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Contact Number / WhatsApp */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-stone-900 mb-1.5">
                      Contact Number / WhatsApp *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 85956 75935"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-[#E7E5E4] rounded-xl px-4 py-2.5 text-xs text-[#2D2D2D] focus:outline-none focus:border-[#C5A880] transition-colors pl-9 placeholder:text-stone-400"
                      />
                      <Phone className="w-3.5 h-3.5 text-stone-600 absolute left-3 top-3 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Physical Address */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-stone-900 mb-1.5">
                      Physical Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Estate / Street / Suite"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-white border border-[#E7E5E4] rounded-xl px-4 py-2.5 text-xs text-[#2D2D2D] focus:outline-none focus:border-[#C5A880] transition-colors pl-9 placeholder:text-stone-400"
                      />
                      <MapPin className="w-3.5 h-3.5 text-stone-600 absolute left-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Venue Type */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-stone-900 mb-1.5">
                      Venue / Property Type
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Banquet Hall, Villa, Rooftop"
                        value={venueType}
                        onChange={(e) => setVenueType(e.target.value)}
                        className="w-full bg-white border border-[#E7E5E4] rounded-xl px-4 py-2.5 text-xs text-[#2D2D2D] focus:outline-none focus:border-[#C5A880] transition-colors pl-9 placeholder:text-stone-400"
                      />
                      <Building className="w-3.5 h-3.5 text-stone-600 absolute left-3 top-3 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Dual Action Buttons */}
              <div className="pt-6 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-[11px] text-stone-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#8C7147]" />
                  <span>Confidential Appointment • Discretion Guaranteed</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Primary: Book Appointment */}
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-8 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Prominent Secondary: Direct WhatsApp */}
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="flex-1 sm:flex-none px-6 py-3.5 rounded-full border border-[#C5A880] hover:bg-white text-[#8C7147] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#8C7147]" />
                    <span>Direct WhatsApp</span>
                  </button>
                </div>
              </div>

            </form>
          ) : (
            /* Success Confirmation State */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-[#C5A880] flex items-center justify-center mx-auto text-[#8C7147]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7147] font-bold block mb-1">
                  Appointment Confirmed
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#2D2D2D] mb-2">
                  We Look Forward to Welcoming You
                </h3>
                <div className="inline-block font-mono text-xs font-bold text-[#8C7147] bg-white px-4 py-1 rounded-full border border-[#E7E5E4]">
                  Reference: {bookingRef}
                </div>
              </div>

              {/* Clean Summary Card */}
              <div className="max-w-md mx-auto bg-white border border-[#E7E5E4] rounded-2xl p-6 text-xs text-left space-y-3">
                <div className="flex justify-between border-b border-[#EFECE6] pb-2">
                  <span className="text-stone-800 font-medium">Patron Name:</span>
                  <span className="font-semibold text-[#2D2D2D]">{name || "Valued Patron"}</span>
                </div>
                <div className="flex justify-between border-b border-[#EFECE6] pb-2">
                  <span className="text-stone-800 font-medium">Contact Number:</span>
                  <span className="font-semibold text-[#2D2D2D]">{phone}</span>
                </div>
                <div className="flex justify-between border-b border-[#EFECE6] pb-2">
                  <span className="text-stone-800 font-medium">Appointment Date:</span>
                  <span className="font-semibold text-[#2D2D2D]">{formattedDateString}</span>
                </div>
                <div className="flex justify-between border-b border-[#EFECE6] pb-2">
                  <span className="text-stone-800 font-medium">Time Slot:</span>
                  <span className="font-semibold text-[#2D2D2D]">{selectedTime}</span>
                </div>
                {venueType && (
                  <div className="flex justify-between border-b border-[#EFECE6] pb-2">
                    <span className="text-stone-800 font-medium">Venue / Property:</span>
                    <span className="font-semibold text-[#2D2D2D]">{venueType}</span>
                  </div>
                )}
                {address && (
                  <div className="flex justify-between">
                    <span className="text-stone-800 font-medium">Physical Address:</span>
                    <span className="font-semibold text-[#2D2D2D]">{address}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#721D32] text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                  <span>Connect with Concierge on WhatsApp</span>
                </button>

                <button
                  onClick={() => setIsBooked(false)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#E7E5E4] hover:bg-white text-stone-700 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>Book Another Appointment</span>
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
