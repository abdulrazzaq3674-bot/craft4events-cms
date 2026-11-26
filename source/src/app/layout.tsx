import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://craft4events.in"),
  title: {
    default: "Craft 4 Event | Luxury Party Planning & Theme Décor Agency",
    template: "%s | Craft 4 Event",
  },
  description:
    "India's premier party planning and luxury theme décor agency. Bespoke celebrations for birthdays, anniversaries, weddings, haldi, mehndi, intimate suites, rooftop parties, and corporate galas with live entertainment bookings.",
  keywords: [
    "Craft 4 Event",
    "Luxury Party Planning",
    "Theme Décor Agency",
    "Birthday Theme Decoration",
    "25th Anniversary Decor",
    "50th Anniversary Decor",
    "Haldi Decor Theme",
    "Mehndi Decor Theme",
    "Rooftop Party Styling",
    "Couple Room Decor",
    "Baby Welcome Decoration",
    "Corporate Party Gala",
    "Live Artist Booking",
    "Event Stage Architecture",
  ],
  authors: [{ name: "Craft 4 Event Event Architecture Team" }],
  creator: "Craft 4 Event",
  publisher: "Craft 4 Event",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Craft 4 Event | Luxury Party Planning & Theme Décor Agency",
    description:
      "India's premier party planning and luxury theme décor agency. Bespoke celebrations for birthdays, anniversaries, weddings, rooftop parties, and corporate galas with turnkey live artist bookings.",
    url: "https://craft4events.in",
    siteName: "Craft 4 Event",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Craft 4 Event — Luxury Party Planning & Theme Décor Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft 4 Event | Luxury Party Planning & Theme Décor Agency",
    description:
      "India's premier party planning and luxury theme décor agency. Turnkey celebration blueprints, bespoke floral styling, and live artist coordination.",
    images: ["/hero-poster.jpg"],
    creator: "@craft4event",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/craft4event-logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans text-[#2D2D2D] antialiased selection:bg-white selection:text-[#2D2D2D]">
        {children}
      </body>
    </html>
  );
}
