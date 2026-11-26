import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#ffffff",
          cream: "#ffffff",
          ivory: "#ffffff",
          surface: "#ffffff",
          charcoal: "#2D2D2D",
          charcoalLight: "#3D3D3D",
          text: "#2D2D2D",
          muted: "#737373",
          gold: "#C5A880",
          goldLight: "#EFE6D8",
          goldDark: "#8C7147",
          champagne: "#D8C5A8",
          border: "#E7E5E4",
          borderGold: "rgba(197, 168, 128, 0.4)",
          lavender: "#E8E0F0",
          lavenderDeep: "#7B5EA7",
          lavenderMuted: "#B8A8D0",
          maroon: "#8B263E",
          maroonLight: "#A83350",
          maroonDark: "#721D32",
          maroonSoft: "#F0E4E6",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        'gold-subtle': "0 4px 20px -2px rgba(197, 168, 128, 0.15)",
        'gold-glow': "0 10px 30px -4px rgba(197, 168, 128, 0.25)",
        'luxury': "0 20px 40px -15px rgba(0, 0, 0, 0.05)",
        'lavender-glow': "0 10px 30px -4px rgba(123, 94, 167, 0.18)",
        'maroon-glow': "0 10px 30px -4px rgba(122, 45, 58, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
