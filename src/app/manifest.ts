import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Craft4Events | Luxury Party Planning & Theme Decor Agency",
    short_name: "Craft4Events",
    description:
      "India's premier luxury event planning, bespoke theme decor, and live artist agency for milestone birthdays, destination weddings, and corporate galas.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F5",
    theme_color: "#8B263E",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
