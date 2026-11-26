export const WHATSAPP_PHONE = "918595675935";

export const THEME_STARTING_PRICES: Record<string, string> = {
  "baby-birthday-theme": "₹12,000",
  "Baby Birthday Theme": "₹12,000",
  "baby-welcome-decoration": "₹10,000",
  "Baby Welcome Decoration": "₹10,000",
  "car-decor": "₹4,500",
  "Car Decor": "₹4,500",
  "couple-room-decor": "₹6,500",
  "Couple Room Decor": "₹6,500",
  "rooftop-party-theme": "₹18,000",
  "Rooftop Party Theme": "₹18,000",
  "25th-anniversary-theme": "₹25,000",
  "25th Anniversary Theme": "₹25,000",
  "50th-anniversary-theme": "₹30,000",
  "50th Anniversary Theme": "₹30,000",
  "adult-birthday-theme": "₹15,000",
  "Adult Birthday Theme": "₹15,000",
  "haldi-decor-theme": "₹16,000",
  "Haldi Decor Theme": "₹16,000",
  "mehndi-decor-theme": "₹16,000",
  "Mehndi Decor Theme": "₹16,000",
  "corporate-party-theme": "₹35,000",
  "Corporate Party Theme": "₹35,000",
  "artist-performance": "Custom Quote",
  "Live Artists & Entertainment": "Custom Quote",
};

export interface WhatsAppOptions {
  themeTitle?: string;
  price?: string;
  packageItem?: string;
  customMessage?: string;
}

/**
 * Generates a pre-filled WhatsApp direct link matching agency format:
 * "Hello, I am interested in booking the [Theme Title] ([Package Item]). Please share more details."
 */
export function getWhatsAppBookingLink(options?: WhatsAppOptions): string {
  if (options?.customMessage) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(options.customMessage)}`;
  }

  const title = options?.themeTitle || "Bespoke Event Experience";
  const itemDetail = options?.packageItem ? ` (${options.packageItem})` : "";

  const text = `Hello, I am interested in booking the ${title}${itemDetail}. Please share more details.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

/**
 * Helper to directly trigger the pre-filled WhatsApp window
 */
export function openWhatsApp(options?: WhatsAppOptions): void {
  const link = getWhatsAppBookingLink(options);
  if (typeof window !== "undefined") {
    window.open(link, "_blank", "noopener,noreferrer");
  }
}
