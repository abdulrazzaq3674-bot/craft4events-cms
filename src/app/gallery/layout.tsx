import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Lookbook & Portfolio Gallery",
  description:
    "Explore Craft4Events' signature celebration lookbook. Browse high-resolution photographs of luxury birthday parties, Haldi & Mehndi setups, destination weddings, and corporate galas across India.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Craft4Events Gallery | Luxury Event Portfolio & Lookbook",
    description:
      "Browse our curated lookbook featuring luxury theme decor, floral architecture, and celebration staging across India.",
    url: "https://craft4events.in/gallery",
    type: "website",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Craft4Events Event Portfolio Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft4Events Gallery | Luxury Event Portfolio & Lookbook",
    description:
      "Explore signature event setups, milestone celebrations, and bespoke theme styling across India.",
    images: ["/hero-poster.jpg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
