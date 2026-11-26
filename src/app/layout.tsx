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
    default: "Craft4Events | Luxury Party Planning & Bespoke Theme Decor Agency India",
    template: "%s | Craft4Events",
  },
  description:
    "India's premier luxury event planning and bespoke theme decor agency. We design immersive birthday parties, destination weddings, Haldi & Mehndi setups, corporate galas, and live artist & entertainment experiences across India.",
  keywords: [
    "Craft4Events",
    "Luxury Party Planning",
    "Bespoke Theme Decor",
    "Live Artists & Entertainment",
    "Haldi Mehndi Setups",
    "Luxury Birthday Parties",
    "Corporate Galas",
    "Destination Weddings India",
    "Premium Event Designers India",
    "Celebrity Artist Booking",
    "Turnkey Event Architecture",
    "Luxury Floral & Stage Styling",
    "Rooftop Party Decor",
    "Bespoke Anniversary Decor",
    "Couple Room & Suite Decor",
  ],
  authors: [{ name: "Craft4Events Luxury Planning Team", url: "https://craft4events.in" }],
  creator: "Craft4Events",
  publisher: "Craft4Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Craft4Events | Luxury Party Planning & Bespoke Theme Decor Agency India",
    description:
      "Craft4Events designs immersive luxury celebrations across India. Specializing in bespoke theme decor, destination weddings, Haldi & Mehndi setups, milestone birthdays, corporate galas, and live artist bookings.",
    url: "https://craft4events.in",
    siteName: "Craft4Events",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Craft4Events — Luxury Party Planning, Bespoke Theme Decor & Live Artists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft4Events | Luxury Party Planning & Bespoke Theme Decor Agency",
    description:
      "India's premier event planning agency for immersive theme decor, destination weddings, VIP birthday galas, and curated live entertainment.",
    images: ["/hero-poster.jpg"],
    creator: "@craft4events",
    site: "@craft4events",
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
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  category: "Event Planning & Entertainment",
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
