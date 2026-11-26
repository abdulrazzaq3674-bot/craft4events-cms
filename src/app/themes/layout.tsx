import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Celebration Themes & Decor Concepts",
  description:
    "Discover immersive celebration themes crafted by Craft4Events: luxury birthday setups, Haldi & Mehndi ceremonies, milestone anniversaries, and corporate galas across India.",
  alternates: {
    canonical: "/themes",
  },
  openGraph: {
    title: "Craft4Events Themes | Bespoke Celebration Decor Concepts",
    description:
      "Transform your venue with immersive theme decor, bespoke florals, and spatial styling by Craft4Events in India.",
    url: "https://craft4events.in/themes",
    type: "website",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Craft4Events Bespoke Celebration Themes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft4Events Themes | Bespoke Celebration Decor Concepts",
    description:
      "Transform your venue with immersive theme decor, bespoke florals, and spatial styling by Craft4Events in India.",
    images: ["/hero-poster.jpg"],
  },
};

export default function ThemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
