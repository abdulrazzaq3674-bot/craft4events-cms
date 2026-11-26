export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  scale?: string;
  features?: string[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  items: ServiceItem[];
  allPhotos: string[];
}

export interface SubAlbumInfo {
  slug: string;
  title: string;
  photoCount: number;
  coverImage: string;
  subtitle: string;
  description: string;
}

export interface GroupedServiceCategory {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  experienceTag: string;
  isGrouped: boolean;
  subPageHref: string;
  subAlbums?: SubAlbumInfo[];
  allPhotosCount: number;
}

export const MAIN_CATEGORIES = [
  { slug: "all", label: "All Themes" },
  { slug: "baby-birthday-theme", label: "Baby Birthday Theme" },
  { slug: "baby-welcome-decoration", label: "Baby Welcome Decoration" },
  { slug: "car-decor", label: "Car Decor" },
  { slug: "couple-room-decor", label: "Couple Room Decor" },
  { slug: "rooftop-party-theme", label: "Rooftop Party Theme" },
  { slug: "25th-anniversary-theme", label: "25th Anniversary Theme" },
  { slug: "50th-anniversary-theme", label: "50th Anniversary Theme" },
  { slug: "adult-birthday-theme", label: "Adult Birthday Theme" },
  { slug: "haldi-decor-theme", label: "Haldi Decor Theme" },
  { slug: "mehndi-decor-theme", label: "Mehndi Decor Theme" },
  { slug: "corporate-party-theme", label: "Corporate Party Theme" },
] as const;

export const HOMEPAGE_SERVICES_DATA: GroupedServiceCategory[] = [
  {
    slug: "birthday-theme",
    title: "Birthday Theme",
    subtitle: "Whimsical balloon castles, charming baby welcomes, and sophisticated adult birthday celebrations.",
    description: "Explore our 3 signature birthday collections tailored for children, newborn arrivals, and milestone adult celebrations.",
    coverImage: "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM (1).jpeg",
    experienceTag: "Birthdays",
    isGrouped: true,
    subPageHref: "/themes/birthday-theme",
    subAlbums: [
      {
        slug: "baby-birthday-theme",
        title: "Baby Birthday Theme",
        photoCount: 66,
        coverImage: "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM (1).jpeg",
        subtitle: "Whimsical wonderland balloon castles, storybook stages, and pastel celebratory styling.",
        description: "Immersive children's celebrations engineered with fairytale castle facades, organic balloon art, kinetic lighting, and candy pavilions."
      },
      {
        slug: "baby-welcome-decoration",
        title: "Baby Welcome Decoration",
        photoCount: 11,
        coverImage: "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.50 PM (1).jpeg",
        subtitle: "Auspicious pastel clouds, botanical cradles, and delicate heirloom floral arches.",
        description: "Heartwarming homecoming décor featuring plush cradle styling, soft cloud balloon canopies, and fragrant floral arrangements."
      },
      {
        slug: "adult-birthday-theme",
        title: "Adult Birthday Theme",
        photoCount: 8,
        coverImage: "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.56 PM.jpeg",
        subtitle: "Moody black-tie galas, customized champagne towers, and high-energy celebration lounges.",
        description: "Sophisticated milestone adult birthdays with neon signs, shimmer wall backdrops, cocktail lounge seating, and dramatic illumination."
      }
    ],
    allPhotosCount: 85
  },
  {
    slug: "anniversary-theme",
    title: "Anniversary Theme",
    subtitle: "Milestone golden 50th jubilees and silver 25th banquets designed with grand architectural floral arches.",
    description: "Celebrate enduring love with custom chandeliers, memory lane archival walks, and bespoke anniversary styling.",
    coverImage: "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM (1).jpeg",
    experienceTag: "Anniversaries",
    isGrouped: true,
    subPageHref: "/themes/anniversary-theme",
    subAlbums: [
      {
        slug: "50th-anniversary-theme",
        title: "50th Anniversary Theme",
        photoCount: 9,
        coverImage: "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM (1).jpeg",
        subtitle: "Golden jubilee grandeur, 24k leaf accents, acoustic string quartets, and archival photo walkways.",
        description: "Honoring half a century of devotion with regal champagne gold arches, crystal chandeliers, and heartfelt photo archives."
      },
      {
        slug: "25th-anniversary-theme",
        title: "25th Anniversary Theme",
        photoCount: 7,
        coverImage: "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.38 PM.jpeg",
        subtitle: "Silver jubilee architectural banquets, cascading crystal chandeliers, and mirrored dancefloors.",
        description: "Silver elegance featuring mirrored staging, monochrome crystal drape installations, and romantic candlelight."
      }
    ],
    allPhotosCount: 16
  },
  {
    slug: "car-decor",
    title: "Car Decor",
    subtitle: "Monumental floral bonnet styling, satin ribbons, and luxury exotic getaway vehicles.",
    description: "Custom botanical styling and luxury ribbon decorations for wedding getaways, celebratory reveals, and VIP transports.",
    coverImage: "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.29 PM (1).jpeg",
    experienceTag: "Media & Event Support",
    isGrouped: false,
    subPageHref: "/gallery?category=car-decor",
    allPhotosCount: 6
  },
  {
    slug: "couple-room-decor",
    title: "Couple Room Decor",
    subtitle: "Intimate candlelit suites, rose petal carpet trails, and ethereal balloon canopy surprises.",
    description: "Surprise suite transformations featuring ambient fairy illumination, imported rose petals, and bespoke celebratory backdrops.",
    coverImage: "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.45 PM (1).jpeg",
    experienceTag: "Weddings",
    isGrouped: false,
    subPageHref: "/gallery?category=couple-room-decor",
    allPhotosCount: 18
  },
  {
    slug: "rooftop-party-theme",
    title: "Rooftop Party Theme",
    subtitle: "Panoramic open-sky cocktail lounges, mirror dancefloors, and kinetic starlight illumination.",
    description: "High-elevation soirees with structural overhead lighting, customized bar counters, and open-air ambient lounge pods.",
    coverImage: "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.24 PM.jpeg",
    experienceTag: "Signature Experiences",
    isGrouped: false,
    subPageHref: "/gallery?category=rooftop-party-theme",
    allPhotosCount: 14
  },
  {
    slug: "haldi-decor-theme",
    title: "Haldi Decor",
    subtitle: "Traditional vibrant marigold architecture, hand-carved brass urulis, and bohemian festive seating.",
    description: "Luminous traditional turmeric celebrations featuring artisanal urlis, yellow botanicals, and bespoke photo corners.",
    coverImage: "/photos/Haldi Decor Theme/Courtyard_Haldi_setup_decorated_20260927174533.jpg",
    experienceTag: "Haldi & Traditions",
    isGrouped: false,
    subPageHref: "/gallery?category=haldi-decor-theme",
    allPhotosCount: 8
  },
  {
    slug: "mehndi-decor-theme",
    title: "Mehndi Decor",
    subtitle: "Ethereal garden lounges, artisan seating cabanas, floral swings, and ambient sufi evening lighting.",
    description: "Bohemian lounge rugs, hanging botanical spheres, and intimate performance stages for memorable festive evenings.",
    coverImage: "/photos/Mehndi Decor Theme/Bohemian_Mehndi_lounge_with_rugs_20260927174533.jpg",
    experienceTag: "Mehndi & Festive",
    isGrouped: false,
    subPageHref: "/gallery?category=mehndi-decor-theme",
    allPhotosCount: 4
  },
  {
    slug: "corporate-party-theme",
    title: "Corporate Party Theme",
    subtitle: "Elegant corporate galas, brand launch events, team celebrations, and executive milestone summits.",
    description: "Precision audiovisual staging, modern corporate branding architecture, and VIP executive gala styling.",
    coverImage: "/photos/Corporate Decor Theme/Corporate_annual_celebration_sta…_2K_20260927172904.jpg",
    experienceTag: "Corporate & Galas",
    isGrouped: false,
    subPageHref: "/gallery?category=corporate-party-theme",
    allPhotosCount: 2
  }
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    slug: "baby-birthday-theme",
    title: "Baby Birthday Theme",
    subtitle: "Whimsical wonderland balloon castles, storybook stages, and pastel celebratory styling.",
    description: "Immersive children’s celebrations engineered with three-dimensional fairytale castle facades, organic balloon art, kinetic lighting, and gourmet confectionery pavilions.",
    coverImage: "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM (1).jpeg",
    allPhotos: ["/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.26 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.27 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.27 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.29 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.29 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.30 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.30 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.32 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.33 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.33 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.34 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.34 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.35 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.35 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.35 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.36 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.36 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.38 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.38 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.38 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.39 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.39 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.40 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.41 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.43 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.45 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.45 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.45 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.46 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.46 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.46 PM (3).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.46 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.47 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.47 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.48 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.48 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.48 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.50 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.50 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.51 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.52 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.52 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.53 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.54 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.54 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.54 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.55 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.55 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.55 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.56 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.56 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.20.40 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.20.40 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.20.40 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.20.41 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.21.46 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.21.46 PM (2).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.21.46 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.21.47 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.22.22 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.22.23 PM (1).jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.22.23 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.22.24 PM.jpeg","/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.22.25 PM.jpeg"],
    items: [
      {
            "id": "baby-birthday-theme-1",
            "name": "Baby Birthday Theme — Blueprint 01",
            "category": "Baby Birthday Theme",
            "categorySlug": "baby-birthday-theme",
            "image": "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM (1).jpeg",
            "description": "Immersive children’s celebrations engineered with three-dimensional fairytale castle facades, organic balloon art, kinetic lighting, and gourmet confectionery pavilions. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Children’s Kingdom",
            "features": [
                  "Architectural 3D Scenery",
                  "Organic Pastel Sculptures",
                  "Themed Stage Architecture",
                  "Custom Dessert Risers"
            ]
      },
      {
            "id": "baby-birthday-theme-2",
            "name": "Baby Birthday Theme — Blueprint 02",
            "category": "Baby Birthday Theme",
            "categorySlug": "baby-birthday-theme",
            "image": "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM.jpeg",
            "description": "Immersive children’s celebrations engineered with three-dimensional fairytale castle facades, organic balloon art, kinetic lighting, and gourmet confectionery pavilions. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Children’s Kingdom",
            "features": [
                  "Architectural 3D Scenery",
                  "Organic Pastel Sculptures",
                  "Themed Stage Architecture",
                  "Custom Dessert Risers"
            ]
      },
      {
            "id": "baby-birthday-theme-3",
            "name": "Baby Birthday Theme — Blueprint 03",
            "category": "Baby Birthday Theme",
            "categorySlug": "baby-birthday-theme",
            "image": "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.26 PM.jpeg",
            "description": "Immersive children’s celebrations engineered with three-dimensional fairytale castle facades, organic balloon art, kinetic lighting, and gourmet confectionery pavilions. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Children’s Kingdom",
            "features": [
                  "Architectural 3D Scenery",
                  "Organic Pastel Sculptures",
                  "Themed Stage Architecture",
                  "Custom Dessert Risers"
            ]
      },
      {
            "id": "baby-birthday-theme-4",
            "name": "Baby Birthday Theme — Blueprint 04",
            "category": "Baby Birthday Theme",
            "categorySlug": "baby-birthday-theme",
            "image": "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.27 PM (1).jpeg",
            "description": "Immersive children’s celebrations engineered with three-dimensional fairytale castle facades, organic balloon art, kinetic lighting, and gourmet confectionery pavilions. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Children’s Kingdom",
            "features": [
                  "Architectural 3D Scenery",
                  "Organic Pastel Sculptures",
                  "Themed Stage Architecture",
                  "Custom Dessert Risers"
            ]
      },
      {
            "id": "baby-birthday-theme-5",
            "name": "Baby Birthday Theme — Blueprint 05",
            "category": "Baby Birthday Theme",
            "categorySlug": "baby-birthday-theme",
            "image": "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.27 PM.jpeg",
            "description": "Immersive children’s celebrations engineered with three-dimensional fairytale castle facades, organic balloon art, kinetic lighting, and gourmet confectionery pavilions. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Children’s Kingdom",
            "features": [
                  "Architectural 3D Scenery",
                  "Organic Pastel Sculptures",
                  "Themed Stage Architecture",
                  "Custom Dessert Risers"
            ]
      },
      {
            "id": "baby-birthday-theme-6",
            "name": "Baby Birthday Theme — Blueprint 06",
            "category": "Baby Birthday Theme",
            "categorySlug": "baby-birthday-theme",
            "image": "/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.29 PM (1).jpeg",
            "description": "Immersive children’s celebrations engineered with three-dimensional fairytale castle facades, organic balloon art, kinetic lighting, and gourmet confectionery pavilions. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Children’s Kingdom",
            "features": [
                  "Architectural 3D Scenery",
                  "Organic Pastel Sculptures",
                  "Themed Stage Architecture",
                  "Custom Dessert Risers"
            ]
      }
]
  },
  {
    slug: "baby-welcome-decoration",
    title: "Baby Welcome Decoration",
    subtitle: "Auspicious pastel clouds, botanical cradles, and delicate heirloom ceremonial entrances.",
    description: "Welcoming new life with ethereal floral cradles, gentle ambient illumination, organic mist scenting, and personalized monogrammed family archives.",
    coverImage: "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.50 PM (1).jpeg",
    allPhotos: ["/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.50 PM (1).jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.50 PM.jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.51 PM (1).jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.51 PM (2).jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.51 PM.jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.52 PM (1).jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.52 PM (2).jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.52 PM.jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.53 PM (1).jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.53 PM (2).jpeg","/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.53 PM.jpeg"],
    items: [
      {
            "id": "baby-welcome-decoration-1",
            "name": "Baby Welcome Decoration — Blueprint 01",
            "category": "Baby Welcome Decoration",
            "categorySlug": "baby-welcome-decoration",
            "image": "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.50 PM (1).jpeg",
            "description": "Welcoming new life with ethereal floral cradles, gentle ambient illumination, organic mist scenting, and personalized monogrammed family archives. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Heirloom Welcome Ceremony",
            "features": [
                  "Handcrafted Floral Cradle",
                  "Auspicious Entrance Arches",
                  "Gentle Ambient Lighting",
                  "Bespoke Welcome Portals"
            ]
      },
      {
            "id": "baby-welcome-decoration-2",
            "name": "Baby Welcome Decoration — Blueprint 02",
            "category": "Baby Welcome Decoration",
            "categorySlug": "baby-welcome-decoration",
            "image": "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.50 PM.jpeg",
            "description": "Welcoming new life with ethereal floral cradles, gentle ambient illumination, organic mist scenting, and personalized monogrammed family archives. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Heirloom Welcome Ceremony",
            "features": [
                  "Handcrafted Floral Cradle",
                  "Auspicious Entrance Arches",
                  "Gentle Ambient Lighting",
                  "Bespoke Welcome Portals"
            ]
      },
      {
            "id": "baby-welcome-decoration-3",
            "name": "Baby Welcome Decoration — Blueprint 03",
            "category": "Baby Welcome Decoration",
            "categorySlug": "baby-welcome-decoration",
            "image": "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.51 PM (1).jpeg",
            "description": "Welcoming new life with ethereal floral cradles, gentle ambient illumination, organic mist scenting, and personalized monogrammed family archives. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Heirloom Welcome Ceremony",
            "features": [
                  "Handcrafted Floral Cradle",
                  "Auspicious Entrance Arches",
                  "Gentle Ambient Lighting",
                  "Bespoke Welcome Portals"
            ]
      },
      {
            "id": "baby-welcome-decoration-4",
            "name": "Baby Welcome Decoration — Blueprint 04",
            "category": "Baby Welcome Decoration",
            "categorySlug": "baby-welcome-decoration",
            "image": "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.51 PM (2).jpeg",
            "description": "Welcoming new life with ethereal floral cradles, gentle ambient illumination, organic mist scenting, and personalized monogrammed family archives. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Heirloom Welcome Ceremony",
            "features": [
                  "Handcrafted Floral Cradle",
                  "Auspicious Entrance Arches",
                  "Gentle Ambient Lighting",
                  "Bespoke Welcome Portals"
            ]
      },
      {
            "id": "baby-welcome-decoration-5",
            "name": "Baby Welcome Decoration — Blueprint 05",
            "category": "Baby Welcome Decoration",
            "categorySlug": "baby-welcome-decoration",
            "image": "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.51 PM.jpeg",
            "description": "Welcoming new life with ethereal floral cradles, gentle ambient illumination, organic mist scenting, and personalized monogrammed family archives. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Heirloom Welcome Ceremony",
            "features": [
                  "Handcrafted Floral Cradle",
                  "Auspicious Entrance Arches",
                  "Gentle Ambient Lighting",
                  "Bespoke Welcome Portals"
            ]
      },
      {
            "id": "baby-welcome-decoration-6",
            "name": "Baby Welcome Decoration — Blueprint 06",
            "category": "Baby Welcome Decoration",
            "categorySlug": "baby-welcome-decoration",
            "image": "/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.24.52 PM (1).jpeg",
            "description": "Welcoming new life with ethereal floral cradles, gentle ambient illumination, organic mist scenting, and personalized monogrammed family archives. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Heirloom Welcome Ceremony",
            "features": [
                  "Handcrafted Floral Cradle",
                  "Auspicious Entrance Arches",
                  "Gentle Ambient Lighting",
                  "Bespoke Welcome Portals"
            ]
      }
]
  },
  {
    slug: "car-decor",
    title: "Car Decor",
    subtitle: "Monumental floral bonnet styling, satin ribbons, and luxury exotic getaway arrangements.",
    description: "High-end exotic and vintage automobile floral styling, crafted with imported blooms, non-damaging magnetic mounts, and cascading satin drapery.",
    coverImage: "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.29 PM (1).jpeg",
    allPhotos: ["/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.29 PM (1).jpeg","/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.29 PM.jpeg","/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.30 PM (1).jpeg","/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.30 PM.jpeg","/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.31 PM (1).jpeg","/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.31 PM.jpeg"],
    items: [
      {
            "id": "car-decor-1",
            "name": "Car Decor — Blueprint 01",
            "category": "Car Decor",
            "categorySlug": "car-decor",
            "image": "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.29 PM (1).jpeg",
            "description": "High-end exotic and vintage automobile floral styling, crafted with imported blooms, non-damaging magnetic mounts, and cascading satin drapery. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Exotic & Luxury Getaway Staging",
            "features": [
                  "Imported Fresh Rose Bonnets",
                  "Protective Non-Marking Mounts",
                  "Double-Face Satin Ribbons",
                  "Door Handle Floral Accents"
            ]
      },
      {
            "id": "car-decor-2",
            "name": "Car Decor — Blueprint 02",
            "category": "Car Decor",
            "categorySlug": "car-decor",
            "image": "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.29 PM.jpeg",
            "description": "High-end exotic and vintage automobile floral styling, crafted with imported blooms, non-damaging magnetic mounts, and cascading satin drapery. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Exotic & Luxury Getaway Staging",
            "features": [
                  "Imported Fresh Rose Bonnets",
                  "Protective Non-Marking Mounts",
                  "Double-Face Satin Ribbons",
                  "Door Handle Floral Accents"
            ]
      },
      {
            "id": "car-decor-3",
            "name": "Car Decor — Blueprint 03",
            "category": "Car Decor",
            "categorySlug": "car-decor",
            "image": "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.30 PM (1).jpeg",
            "description": "High-end exotic and vintage automobile floral styling, crafted with imported blooms, non-damaging magnetic mounts, and cascading satin drapery. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Exotic & Luxury Getaway Staging",
            "features": [
                  "Imported Fresh Rose Bonnets",
                  "Protective Non-Marking Mounts",
                  "Double-Face Satin Ribbons",
                  "Door Handle Floral Accents"
            ]
      },
      {
            "id": "car-decor-4",
            "name": "Car Decor — Blueprint 04",
            "category": "Car Decor",
            "categorySlug": "car-decor",
            "image": "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.30 PM.jpeg",
            "description": "High-end exotic and vintage automobile floral styling, crafted with imported blooms, non-damaging magnetic mounts, and cascading satin drapery. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Exotic & Luxury Getaway Staging",
            "features": [
                  "Imported Fresh Rose Bonnets",
                  "Protective Non-Marking Mounts",
                  "Double-Face Satin Ribbons",
                  "Door Handle Floral Accents"
            ]
      },
      {
            "id": "car-decor-5",
            "name": "Car Decor — Blueprint 05",
            "category": "Car Decor",
            "categorySlug": "car-decor",
            "image": "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.31 PM (1).jpeg",
            "description": "High-end exotic and vintage automobile floral styling, crafted with imported blooms, non-damaging magnetic mounts, and cascading satin drapery. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Exotic & Luxury Getaway Staging",
            "features": [
                  "Imported Fresh Rose Bonnets",
                  "Protective Non-Marking Mounts",
                  "Double-Face Satin Ribbons",
                  "Door Handle Floral Accents"
            ]
      },
      {
            "id": "car-decor-6",
            "name": "Car Decor — Blueprint 06",
            "category": "Car Decor",
            "categorySlug": "car-decor",
            "image": "/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.31 PM.jpeg",
            "description": "High-end exotic and vintage automobile floral styling, crafted with imported blooms, non-damaging magnetic mounts, and cascading satin drapery. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Exotic & Luxury Getaway Staging",
            "features": [
                  "Imported Fresh Rose Bonnets",
                  "Protective Non-Marking Mounts",
                  "Double-Face Satin Ribbons",
                  "Door Handle Floral Accents"
            ]
      }
]
  },
  {
    slug: "couple-room-decor",
    title: "Couple Room Decor",
    subtitle: "Intimate candlelit suites, rose petal carpet trails, and ethereal balloon canopy staging.",
    description: "Romantic private sanctuary transformations featuring thousands of fragrant rose petals, warm ambient candlelight, customized ceiling balloon drops, and chilled champagne staging.",
    coverImage: "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.45 PM (1).jpeg",
    allPhotos: ["/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.45 PM (1).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.45 PM.jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.46 PM.jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.48 PM.jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.51 PM (1).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.51 PM.jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.52 PM (1).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.52 PM.jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.53 PM (1).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.53 PM (2).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.53 PM.jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.54 PM (1).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.54 PM (2).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.54 PM.jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.55 PM (1).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.55 PM (2).jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.55 PM.jpeg","/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.56 PM.jpeg"],
    items: [
      {
            "id": "couple-room-decor-1",
            "name": "Couple Room Decor — Blueprint 01",
            "category": "Couple Room Decor",
            "categorySlug": "couple-room-decor",
            "image": "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.45 PM (1).jpeg",
            "description": "Romantic private sanctuary transformations featuring thousands of fragrant rose petals, warm ambient candlelight, customized ceiling balloon drops, and chilled champagne staging. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Private Sanctuary Staging",
            "features": [
                  "Velvet Rose Petal Pathways",
                  "Flameless Architectural Candles",
                  "Helium Mirror Ceiling Canopies",
                  "Personalized Monogram Lighting"
            ]
      },
      {
            "id": "couple-room-decor-2",
            "name": "Couple Room Decor — Blueprint 02",
            "category": "Couple Room Decor",
            "categorySlug": "couple-room-decor",
            "image": "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.45 PM.jpeg",
            "description": "Romantic private sanctuary transformations featuring thousands of fragrant rose petals, warm ambient candlelight, customized ceiling balloon drops, and chilled champagne staging. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Private Sanctuary Staging",
            "features": [
                  "Velvet Rose Petal Pathways",
                  "Flameless Architectural Candles",
                  "Helium Mirror Ceiling Canopies",
                  "Personalized Monogram Lighting"
            ]
      },
      {
            "id": "couple-room-decor-3",
            "name": "Couple Room Decor — Blueprint 03",
            "category": "Couple Room Decor",
            "categorySlug": "couple-room-decor",
            "image": "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.46 PM.jpeg",
            "description": "Romantic private sanctuary transformations featuring thousands of fragrant rose petals, warm ambient candlelight, customized ceiling balloon drops, and chilled champagne staging. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Private Sanctuary Staging",
            "features": [
                  "Velvet Rose Petal Pathways",
                  "Flameless Architectural Candles",
                  "Helium Mirror Ceiling Canopies",
                  "Personalized Monogram Lighting"
            ]
      },
      {
            "id": "couple-room-decor-4",
            "name": "Couple Room Decor — Blueprint 04",
            "category": "Couple Room Decor",
            "categorySlug": "couple-room-decor",
            "image": "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.48 PM.jpeg",
            "description": "Romantic private sanctuary transformations featuring thousands of fragrant rose petals, warm ambient candlelight, customized ceiling balloon drops, and chilled champagne staging. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Private Sanctuary Staging",
            "features": [
                  "Velvet Rose Petal Pathways",
                  "Flameless Architectural Candles",
                  "Helium Mirror Ceiling Canopies",
                  "Personalized Monogram Lighting"
            ]
      },
      {
            "id": "couple-room-decor-5",
            "name": "Couple Room Decor — Blueprint 05",
            "category": "Couple Room Decor",
            "categorySlug": "couple-room-decor",
            "image": "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.51 PM (1).jpeg",
            "description": "Romantic private sanctuary transformations featuring thousands of fragrant rose petals, warm ambient candlelight, customized ceiling balloon drops, and chilled champagne staging. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Private Sanctuary Staging",
            "features": [
                  "Velvet Rose Petal Pathways",
                  "Flameless Architectural Candles",
                  "Helium Mirror Ceiling Canopies",
                  "Personalized Monogram Lighting"
            ]
      },
      {
            "id": "couple-room-decor-6",
            "name": "Couple Room Decor — Blueprint 06",
            "category": "Couple Room Decor",
            "categorySlug": "couple-room-decor",
            "image": "/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.51 PM.jpeg",
            "description": "Romantic private sanctuary transformations featuring thousands of fragrant rose petals, warm ambient candlelight, customized ceiling balloon drops, and chilled champagne staging. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Private Sanctuary Staging",
            "features": [
                  "Velvet Rose Petal Pathways",
                  "Flameless Architectural Candles",
                  "Helium Mirror Ceiling Canopies",
                  "Personalized Monogram Lighting"
            ]
      }
]
  },
  {
    slug: "rooftop-party-theme",
    title: "Rooftop Party Theme",
    subtitle: "Panoramic open-sky cocktail lounges, mirror dancefloors, and kinetic starlit neon illuminations.",
    description: "Elevated open-air celebrations with 360-degree skyline views, modern industrial trussing, bespoke mixology bars, and wireless acoustic sound arrays.",
    coverImage: "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.24 PM.jpeg",
    allPhotos: ["/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.24 PM.jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.25 PM.jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.26 PM (1).jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.26 PM.jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.27 PM (1).jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.27 PM (2).jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.27 PM.jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.28 PM (1).jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.28 PM (2).jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.28 PM.jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.29 PM (1).jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.29 PM (2).jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.29 PM.jpeg","/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.30 PM.jpeg"],
    items: [
      {
            "id": "rooftop-party-theme-1",
            "name": "Rooftop Party Theme — Blueprint 01",
            "category": "Rooftop Party Theme",
            "categorySlug": "rooftop-party-theme",
            "image": "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.24 PM.jpeg",
            "description": "Elevated open-air celebrations with 360-degree skyline views, modern industrial trussing, bespoke mixology bars, and wireless acoustic sound arrays. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Skyline Terrace Soiree",
            "features": [
                  "Panoramic Skyline Staging",
                  "Mirror LED Infinity Floors",
                  "Artisanal Cocktail Bar Pods",
                  "Acoustic Directional Sound"
            ]
      },
      {
            "id": "rooftop-party-theme-2",
            "name": "Rooftop Party Theme — Blueprint 02",
            "category": "Rooftop Party Theme",
            "categorySlug": "rooftop-party-theme",
            "image": "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.25 PM.jpeg",
            "description": "Elevated open-air celebrations with 360-degree skyline views, modern industrial trussing, bespoke mixology bars, and wireless acoustic sound arrays. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Skyline Terrace Soiree",
            "features": [
                  "Panoramic Skyline Staging",
                  "Mirror LED Infinity Floors",
                  "Artisanal Cocktail Bar Pods",
                  "Acoustic Directional Sound"
            ]
      },
      {
            "id": "rooftop-party-theme-3",
            "name": "Rooftop Party Theme — Blueprint 03",
            "category": "Rooftop Party Theme",
            "categorySlug": "rooftop-party-theme",
            "image": "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.26 PM (1).jpeg",
            "description": "Elevated open-air celebrations with 360-degree skyline views, modern industrial trussing, bespoke mixology bars, and wireless acoustic sound arrays. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Skyline Terrace Soiree",
            "features": [
                  "Panoramic Skyline Staging",
                  "Mirror LED Infinity Floors",
                  "Artisanal Cocktail Bar Pods",
                  "Acoustic Directional Sound"
            ]
      },
      {
            "id": "rooftop-party-theme-4",
            "name": "Rooftop Party Theme — Blueprint 04",
            "category": "Rooftop Party Theme",
            "categorySlug": "rooftop-party-theme",
            "image": "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.26 PM.jpeg",
            "description": "Elevated open-air celebrations with 360-degree skyline views, modern industrial trussing, bespoke mixology bars, and wireless acoustic sound arrays. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Skyline Terrace Soiree",
            "features": [
                  "Panoramic Skyline Staging",
                  "Mirror LED Infinity Floors",
                  "Artisanal Cocktail Bar Pods",
                  "Acoustic Directional Sound"
            ]
      },
      {
            "id": "rooftop-party-theme-5",
            "name": "Rooftop Party Theme — Blueprint 05",
            "category": "Rooftop Party Theme",
            "categorySlug": "rooftop-party-theme",
            "image": "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.27 PM (1).jpeg",
            "description": "Elevated open-air celebrations with 360-degree skyline views, modern industrial trussing, bespoke mixology bars, and wireless acoustic sound arrays. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Skyline Terrace Soiree",
            "features": [
                  "Panoramic Skyline Staging",
                  "Mirror LED Infinity Floors",
                  "Artisanal Cocktail Bar Pods",
                  "Acoustic Directional Sound"
            ]
      },
      {
            "id": "rooftop-party-theme-6",
            "name": "Rooftop Party Theme — Blueprint 06",
            "category": "Rooftop Party Theme",
            "categorySlug": "rooftop-party-theme",
            "image": "/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.27 PM (2).jpeg",
            "description": "Elevated open-air celebrations with 360-degree skyline views, modern industrial trussing, bespoke mixology bars, and wireless acoustic sound arrays. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Skyline Terrace Soiree",
            "features": [
                  "Panoramic Skyline Staging",
                  "Mirror LED Infinity Floors",
                  "Artisanal Cocktail Bar Pods",
                  "Acoustic Directional Sound"
            ]
      }
]
  },
  {
    slug: "25th-anniversary-theme",
    title: "25th Anniversary Theme",
    subtitle: "Silver jubilee architectural banquets, cascading crystal chandeliers, and imperial floral styling.",
    description: "Celebrating 25 years of enduring love with mirrored dining long-tables, silver foliage accents, suspended Venetian crystal, and bespoke retrospective galleries.",
    coverImage: "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.38 PM.jpeg",
    allPhotos: ["/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.38 PM.jpeg","/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.39 PM (1).jpeg","/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.39 PM (2).jpeg","/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.39 PM.jpeg","/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.40 PM (1).jpeg","/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.40 PM (2).jpeg","/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.40 PM.jpeg"],
    items: [
      {
            "id": "25th-anniversary-theme-1",
            "name": "25th Anniversary Theme — Blueprint 01",
            "category": "25th Anniversary Theme",
            "categorySlug": "25th-anniversary-theme",
            "image": "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.38 PM.jpeg",
            "description": "Celebrating 25 years of enduring love with mirrored dining long-tables, silver foliage accents, suspended Venetian crystal, and bespoke retrospective galleries. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Silver Jubilee Landmark Gala",
            "features": [
                  "Mirrored Long Table Settings",
                  "Suspended Crystal Chandeliers",
                  "25-Year Memoir Photo Tunnel",
                  "Acoustic String Quartet Rig"
            ]
      },
      {
            "id": "25th-anniversary-theme-2",
            "name": "25th Anniversary Theme — Blueprint 02",
            "category": "25th Anniversary Theme",
            "categorySlug": "25th-anniversary-theme",
            "image": "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.39 PM (1).jpeg",
            "description": "Celebrating 25 years of enduring love with mirrored dining long-tables, silver foliage accents, suspended Venetian crystal, and bespoke retrospective galleries. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Silver Jubilee Landmark Gala",
            "features": [
                  "Mirrored Long Table Settings",
                  "Suspended Crystal Chandeliers",
                  "25-Year Memoir Photo Tunnel",
                  "Acoustic String Quartet Rig"
            ]
      },
      {
            "id": "25th-anniversary-theme-3",
            "name": "25th Anniversary Theme — Blueprint 03",
            "category": "25th Anniversary Theme",
            "categorySlug": "25th-anniversary-theme",
            "image": "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.39 PM (2).jpeg",
            "description": "Celebrating 25 years of enduring love with mirrored dining long-tables, silver foliage accents, suspended Venetian crystal, and bespoke retrospective galleries. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Silver Jubilee Landmark Gala",
            "features": [
                  "Mirrored Long Table Settings",
                  "Suspended Crystal Chandeliers",
                  "25-Year Memoir Photo Tunnel",
                  "Acoustic String Quartet Rig"
            ]
      },
      {
            "id": "25th-anniversary-theme-4",
            "name": "25th Anniversary Theme — Blueprint 04",
            "category": "25th Anniversary Theme",
            "categorySlug": "25th-anniversary-theme",
            "image": "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.39 PM.jpeg",
            "description": "Celebrating 25 years of enduring love with mirrored dining long-tables, silver foliage accents, suspended Venetian crystal, and bespoke retrospective galleries. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Silver Jubilee Landmark Gala",
            "features": [
                  "Mirrored Long Table Settings",
                  "Suspended Crystal Chandeliers",
                  "25-Year Memoir Photo Tunnel",
                  "Acoustic String Quartet Rig"
            ]
      },
      {
            "id": "25th-anniversary-theme-5",
            "name": "25th Anniversary Theme — Blueprint 05",
            "category": "25th Anniversary Theme",
            "categorySlug": "25th-anniversary-theme",
            "image": "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.40 PM (1).jpeg",
            "description": "Celebrating 25 years of enduring love with mirrored dining long-tables, silver foliage accents, suspended Venetian crystal, and bespoke retrospective galleries. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Silver Jubilee Landmark Gala",
            "features": [
                  "Mirrored Long Table Settings",
                  "Suspended Crystal Chandeliers",
                  "25-Year Memoir Photo Tunnel",
                  "Acoustic String Quartet Rig"
            ]
      },
      {
            "id": "25th-anniversary-theme-6",
            "name": "25th Anniversary Theme — Blueprint 06",
            "category": "25th Anniversary Theme",
            "categorySlug": "25th-anniversary-theme",
            "image": "/photos/25th anniversary theme/WhatsApp Image 2026-09-26 at 11.36.40 PM (2).jpeg",
            "description": "Celebrating 25 years of enduring love with mirrored dining long-tables, silver foliage accents, suspended Venetian crystal, and bespoke retrospective galleries. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Silver Jubilee Landmark Gala",
            "features": [
                  "Mirrored Long Table Settings",
                  "Suspended Crystal Chandeliers",
                  "25-Year Memoir Photo Tunnel",
                  "Acoustic String Quartet Rig"
            ]
      }
]
  },
  {
    slug: "50th-anniversary-theme",
    title: "50th Anniversary Theme",
    subtitle: "Golden jubilee grandeur, 24k leaf accents, acoustic string quartets, and royal ivory seating.",
    description: "A monument to half a century of devotion. Engineered with warm champagne gold drapery, 24k gold leaf table runners, vintage brass candelabras, and royal family protocol.",
    coverImage: "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM (1).jpeg",
    allPhotos: ["/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM (1).jpeg","/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM.jpeg","/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.59 PM (1).jpeg","/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.59 PM (2).jpeg","/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.59 PM.jpeg","/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.36.00 PM (1).jpeg","/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.36.00 PM (2).jpeg","/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.36.00 PM.jpeg","/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.36.01 PM.jpeg"],
    items: [
      {
            "id": "50th-anniversary-theme-1",
            "name": "50th Anniversary Theme — Blueprint 01",
            "category": "50th Anniversary Theme",
            "categorySlug": "50th-anniversary-theme",
            "image": "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM (1).jpeg",
            "description": "A monument to half a century of devotion. Engineered with warm champagne gold drapery, 24k gold leaf table runners, vintage brass candelabras, and royal family protocol. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Golden Jubilee Royal Banquet",
            "features": [
                  "24k Gold Leaf Candelabras",
                  "Imperial Ivory Silk Linens",
                  "Live Symphony Stage Architecture",
                  "Royal Family Protocol Support"
            ]
      },
      {
            "id": "50th-anniversary-theme-2",
            "name": "50th Anniversary Theme — Blueprint 02",
            "category": "50th Anniversary Theme",
            "categorySlug": "50th-anniversary-theme",
            "image": "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.58 PM.jpeg",
            "description": "A monument to half a century of devotion. Engineered with warm champagne gold drapery, 24k gold leaf table runners, vintage brass candelabras, and royal family protocol. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Golden Jubilee Royal Banquet",
            "features": [
                  "24k Gold Leaf Candelabras",
                  "Imperial Ivory Silk Linens",
                  "Live Symphony Stage Architecture",
                  "Royal Family Protocol Support"
            ]
      },
      {
            "id": "50th-anniversary-theme-3",
            "name": "50th Anniversary Theme — Blueprint 03",
            "category": "50th Anniversary Theme",
            "categorySlug": "50th-anniversary-theme",
            "image": "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.59 PM (1).jpeg",
            "description": "A monument to half a century of devotion. Engineered with warm champagne gold drapery, 24k gold leaf table runners, vintage brass candelabras, and royal family protocol. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Golden Jubilee Royal Banquet",
            "features": [
                  "24k Gold Leaf Candelabras",
                  "Imperial Ivory Silk Linens",
                  "Live Symphony Stage Architecture",
                  "Royal Family Protocol Support"
            ]
      },
      {
            "id": "50th-anniversary-theme-4",
            "name": "50th Anniversary Theme — Blueprint 04",
            "category": "50th Anniversary Theme",
            "categorySlug": "50th-anniversary-theme",
            "image": "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.59 PM (2).jpeg",
            "description": "A monument to half a century of devotion. Engineered with warm champagne gold drapery, 24k gold leaf table runners, vintage brass candelabras, and royal family protocol. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Golden Jubilee Royal Banquet",
            "features": [
                  "24k Gold Leaf Candelabras",
                  "Imperial Ivory Silk Linens",
                  "Live Symphony Stage Architecture",
                  "Royal Family Protocol Support"
            ]
      },
      {
            "id": "50th-anniversary-theme-5",
            "name": "50th Anniversary Theme — Blueprint 05",
            "category": "50th Anniversary Theme",
            "categorySlug": "50th-anniversary-theme",
            "image": "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.35.59 PM.jpeg",
            "description": "A monument to half a century of devotion. Engineered with warm champagne gold drapery, 24k gold leaf table runners, vintage brass candelabras, and royal family protocol. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Golden Jubilee Royal Banquet",
            "features": [
                  "24k Gold Leaf Candelabras",
                  "Imperial Ivory Silk Linens",
                  "Live Symphony Stage Architecture",
                  "Royal Family Protocol Support"
            ]
      },
      {
            "id": "50th-anniversary-theme-6",
            "name": "50th Anniversary Theme — Blueprint 06",
            "category": "50th Anniversary Theme",
            "categorySlug": "50th-anniversary-theme",
            "image": "/photos/50 Anniversary Theme/WhatsApp Image 2026-09-26 at 11.36.00 PM (1).jpeg",
            "description": "A monument to half a century of devotion. Engineered with warm champagne gold drapery, 24k gold leaf table runners, vintage brass candelabras, and royal family protocol. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Golden Jubilee Royal Banquet",
            "features": [
                  "24k Gold Leaf Candelabras",
                  "Imperial Ivory Silk Linens",
                  "Live Symphony Stage Architecture",
                  "Royal Family Protocol Support"
            ]
      }
]
  },
  {
    slug: "adult-birthday-theme",
    title: "Adult Birthday Theme",
    subtitle: "Moody black-tie galas, customized champagne towers, and high-energy luxury stage production.",
    description: "Dramatic black-tie milestone evenings featuring curved LED visual backdrops, custom 7-tier champagne waterfalls, mood-lighting pin spots, and celebrity DJ acoustics.",
    coverImage: "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.56 PM.jpeg",
    allPhotos: ["/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.56 PM.jpeg","/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.57 PM (1).jpeg","/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.57 PM (2).jpeg","/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.57 PM.jpeg","/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.38.18 PM (1).jpeg","/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.38.18 PM (2).jpeg","/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.38.18 PM.jpeg","/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.38.19 PM.jpeg"],
    items: [
      {
            "id": "adult-birthday-theme-1",
            "name": "Adult Birthday Theme — Blueprint 01",
            "category": "Adult Birthday Theme",
            "categorySlug": "adult-birthday-theme",
            "image": "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.56 PM.jpeg",
            "description": "Dramatic black-tie milestone evenings featuring curved LED visual backdrops, custom 7-tier champagne waterfalls, mood-lighting pin spots, and celebrity DJ acoustics. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "VIP Milestone Gala",
            "features": [
                  "7-Tier Champagne Tower",
                  "Curved Visual LED Backdrops",
                  "Customized Neon Monograms",
                  "VIP Private Mixology Enclave"
            ]
      },
      {
            "id": "adult-birthday-theme-2",
            "name": "Adult Birthday Theme — Blueprint 02",
            "category": "Adult Birthday Theme",
            "categorySlug": "adult-birthday-theme",
            "image": "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.57 PM (1).jpeg",
            "description": "Dramatic black-tie milestone evenings featuring curved LED visual backdrops, custom 7-tier champagne waterfalls, mood-lighting pin spots, and celebrity DJ acoustics. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "VIP Milestone Gala",
            "features": [
                  "7-Tier Champagne Tower",
                  "Curved Visual LED Backdrops",
                  "Customized Neon Monograms",
                  "VIP Private Mixology Enclave"
            ]
      },
      {
            "id": "adult-birthday-theme-3",
            "name": "Adult Birthday Theme — Blueprint 03",
            "category": "Adult Birthday Theme",
            "categorySlug": "adult-birthday-theme",
            "image": "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.57 PM (2).jpeg",
            "description": "Dramatic black-tie milestone evenings featuring curved LED visual backdrops, custom 7-tier champagne waterfalls, mood-lighting pin spots, and celebrity DJ acoustics. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "VIP Milestone Gala",
            "features": [
                  "7-Tier Champagne Tower",
                  "Curved Visual LED Backdrops",
                  "Customized Neon Monograms",
                  "VIP Private Mixology Enclave"
            ]
      },
      {
            "id": "adult-birthday-theme-4",
            "name": "Adult Birthday Theme — Blueprint 04",
            "category": "Adult Birthday Theme",
            "categorySlug": "adult-birthday-theme",
            "image": "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.23.57 PM.jpeg",
            "description": "Dramatic black-tie milestone evenings featuring curved LED visual backdrops, custom 7-tier champagne waterfalls, mood-lighting pin spots, and celebrity DJ acoustics. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "VIP Milestone Gala",
            "features": [
                  "7-Tier Champagne Tower",
                  "Curved Visual LED Backdrops",
                  "Customized Neon Monograms",
                  "VIP Private Mixology Enclave"
            ]
      },
      {
            "id": "adult-birthday-theme-5",
            "name": "Adult Birthday Theme — Blueprint 05",
            "category": "Adult Birthday Theme",
            "categorySlug": "adult-birthday-theme",
            "image": "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.38.18 PM (1).jpeg",
            "description": "Dramatic black-tie milestone evenings featuring curved LED visual backdrops, custom 7-tier champagne waterfalls, mood-lighting pin spots, and celebrity DJ acoustics. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "VIP Milestone Gala",
            "features": [
                  "7-Tier Champagne Tower",
                  "Curved Visual LED Backdrops",
                  "Customized Neon Monograms",
                  "VIP Private Mixology Enclave"
            ]
      },
      {
            "id": "adult-birthday-theme-6",
            "name": "Adult Birthday Theme — Blueprint 06",
            "category": "Adult Birthday Theme",
            "categorySlug": "adult-birthday-theme",
            "image": "/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.38.18 PM (2).jpeg",
            "description": "Dramatic black-tie milestone evenings featuring curved LED visual backdrops, custom 7-tier champagne waterfalls, mood-lighting pin spots, and celebrity DJ acoustics. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "VIP Milestone Gala",
            "features": [
                  "7-Tier Champagne Tower",
                  "Curved Visual LED Backdrops",
                  "Customized Neon Monograms",
                  "VIP Private Mixology Enclave"
            ]
      }
]
  },
  {
    slug: "haldi-decor-theme",
    title: "Haldi Decor Theme",
    subtitle: "Traditional vibrant marigold architecture, hand-carved brass urlis, and bohemian floral canopies.",
    description: "Rich ceremonial color palettes brought to life with hand-carved brass urlis, marigold flower curtains, sun-drenched courtyard layouts, and organic petal shower cannons.",
    coverImage: "/photos/Haldi Decor Theme/Courtyard_Haldi_setup_decorated_20260927174533.jpg",
    allPhotos: ["/photos/Haldi Decor Theme/Courtyard_Haldi_setup_decorated_20260927174533.jpg","/photos/Haldi Decor Theme/Floral_archway_entrance_for_event_2K_20260927172614.jpg","/photos/Haldi Decor Theme/Haldi_ceremony_outdoor_decoratio…_20260927174533.jpg","/photos/Haldi Decor Theme/Haldi_ceremony_outdoor_decoratio…_2K_20260927172626.jpg","/photos/Haldi Decor Theme/Haldi_stage_with_floral_backdrop_20260927174533.jpg","/photos/Haldi Decor Theme/Haldi_stage_with_floral_backdrop_2K_20260927172619.jpg","/photos/Haldi Decor Theme/Mehndi_floral_stage_setup_2K_20260927172742.jpg","/photos/Haldi Decor Theme/Poolside_Haldi_decoration_at_resort_20260927174533.jpg"],
    items: [
      {
            "id": "haldi-decor-theme-1",
            "name": "Haldi Decor Theme — Blueprint 01",
            "category": "Haldi Decor Theme",
            "categorySlug": "haldi-decor-theme",
            "image": "/photos/Haldi Decor Theme/Courtyard_Haldi_setup_decorated_20260927174533.jpg",
            "description": "Rich ceremonial color palettes brought to life with hand-carved brass urlis, marigold flower curtains, sun-drenched courtyard layouts, and organic petal shower cannons. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Grand Ceremonial Courtyard",
            "features": [
                  "Solid Carved Brass Urli",
                  "Fresh Marigold Floral Walls",
                  "Artisan Cane & Jute Lounges",
                  "Organic Petal Rain FX"
            ]
      },
      {
            "id": "haldi-decor-theme-2",
            "name": "Haldi Decor Theme — Blueprint 02",
            "category": "Haldi Decor Theme",
            "categorySlug": "haldi-decor-theme",
            "image": "/photos/Haldi Decor Theme/Floral_archway_entrance_for_event_2K_20260927172614.jpg",
            "description": "Rich ceremonial color palettes brought to life with hand-carved brass urlis, marigold flower curtains, sun-drenched courtyard layouts, and organic petal shower cannons. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Grand Ceremonial Courtyard",
            "features": [
                  "Solid Carved Brass Urli",
                  "Fresh Marigold Floral Walls",
                  "Artisan Cane & Jute Lounges",
                  "Organic Petal Rain FX"
            ]
      },
      {
            "id": "haldi-decor-theme-3",
            "name": "Haldi Decor Theme — Blueprint 03",
            "category": "Haldi Decor Theme",
            "categorySlug": "haldi-decor-theme",
            "image": "/photos/Haldi Decor Theme/Haldi_ceremony_outdoor_decoratio…_20260927174533.jpg",
            "description": "Rich ceremonial color palettes brought to life with hand-carved brass urlis, marigold flower curtains, sun-drenched courtyard layouts, and organic petal shower cannons. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Grand Ceremonial Courtyard",
            "features": [
                  "Solid Carved Brass Urli",
                  "Fresh Marigold Floral Walls",
                  "Artisan Cane & Jute Lounges",
                  "Organic Petal Rain FX"
            ]
      },
      {
            "id": "haldi-decor-theme-4",
            "name": "Haldi Decor Theme — Blueprint 04",
            "category": "Haldi Decor Theme",
            "categorySlug": "haldi-decor-theme",
            "image": "/photos/Haldi Decor Theme/Haldi_ceremony_outdoor_decoratio…_2K_20260927172626.jpg",
            "description": "Rich ceremonial color palettes brought to life with hand-carved brass urlis, marigold flower curtains, sun-drenched courtyard layouts, and organic petal shower cannons. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Grand Ceremonial Courtyard",
            "features": [
                  "Solid Carved Brass Urli",
                  "Fresh Marigold Floral Walls",
                  "Artisan Cane & Jute Lounges",
                  "Organic Petal Rain FX"
            ]
      },
      {
            "id": "haldi-decor-theme-5",
            "name": "Haldi Decor Theme — Blueprint 05",
            "category": "Haldi Decor Theme",
            "categorySlug": "haldi-decor-theme",
            "image": "/photos/Haldi Decor Theme/Haldi_stage_with_floral_backdrop_20260927174533.jpg",
            "description": "Rich ceremonial color palettes brought to life with hand-carved brass urlis, marigold flower curtains, sun-drenched courtyard layouts, and organic petal shower cannons. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Grand Ceremonial Courtyard",
            "features": [
                  "Solid Carved Brass Urli",
                  "Fresh Marigold Floral Walls",
                  "Artisan Cane & Jute Lounges",
                  "Organic Petal Rain FX"
            ]
      },
      {
            "id": "haldi-decor-theme-6",
            "name": "Haldi Decor Theme — Blueprint 06",
            "category": "Haldi Decor Theme",
            "categorySlug": "haldi-decor-theme",
            "image": "/photos/Haldi Decor Theme/Haldi_stage_with_floral_backdrop_2K_20260927172619.jpg",
            "description": "Rich ceremonial color palettes brought to life with hand-carved brass urlis, marigold flower curtains, sun-drenched courtyard layouts, and organic petal shower cannons. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Grand Ceremonial Courtyard",
            "features": [
                  "Solid Carved Brass Urli",
                  "Fresh Marigold Floral Walls",
                  "Artisan Cane & Jute Lounges",
                  "Organic Petal Rain FX"
            ]
      }
]
  },
  {
    slug: "mehndi-decor-theme",
    title: "Mehndi Decor Theme",
    subtitle: "Ethereal garden lounges, artisan seating cabanas, floral swings, and ambient acoustic music.",
    description: "Bohemian luxury garden atmospheres styled with suspended floral swings (jhulas), Moroccan rug lounges, hand-painted umbrellas, and festive acoustic soundscapes.",
    coverImage: "/photos/Mehndi Decor Theme/Bohemian_Mehndi_lounge_with_rugs_20260927174533.jpg",
    allPhotos: ["/photos/Mehndi Decor Theme/Bohemian_Mehndi_lounge_with_rugs_20260927174533.jpg","/photos/Mehndi Decor Theme/Mehndi_floral_stage_setup_20260927174533.jpg","/photos/Mehndi Decor Theme/Mehndi_seating_area_with_canopies_20260927174533.jpg","/photos/Mehndi Decor Theme/Outdoor_garden_Mehndi_setup_20260927174533.jpg"],
    items: [
      {
            "id": "mehndi-decor-theme-1",
            "name": "Mehndi Decor Theme — Blueprint 01",
            "category": "Mehndi Decor Theme",
            "categorySlug": "mehndi-decor-theme",
            "image": "/photos/Mehndi Decor Theme/Bohemian_Mehndi_lounge_with_rugs_20260927174533.jpg",
            "description": "Bohemian luxury garden atmospheres styled with suspended floral swings (jhulas), Moroccan rug lounges, hand-painted umbrellas, and festive acoustic soundscapes. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Garden Lounge",
            "features": [
                  "Suspended Floral Jhula",
                  "Moroccan Rug Seating Enclaves",
                  "Macrame & Tassel Canopies",
                  "Artisanal Henna Bar Staging"
            ]
      },
      {
            "id": "mehndi-decor-theme-2",
            "name": "Mehndi Decor Theme — Blueprint 02",
            "category": "Mehndi Decor Theme",
            "categorySlug": "mehndi-decor-theme",
            "image": "/photos/Mehndi Decor Theme/Mehndi_floral_stage_setup_20260927174533.jpg",
            "description": "Bohemian luxury garden atmospheres styled with suspended floral swings (jhulas), Moroccan rug lounges, hand-painted umbrellas, and festive acoustic soundscapes. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Garden Lounge",
            "features": [
                  "Suspended Floral Jhula",
                  "Moroccan Rug Seating Enclaves",
                  "Macrame & Tassel Canopies",
                  "Artisanal Henna Bar Staging"
            ]
      },
      {
            "id": "mehndi-decor-theme-3",
            "name": "Mehndi Decor Theme — Blueprint 03",
            "category": "Mehndi Decor Theme",
            "categorySlug": "mehndi-decor-theme",
            "image": "/photos/Mehndi Decor Theme/Mehndi_seating_area_with_canopies_20260927174533.jpg",
            "description": "Bohemian luxury garden atmospheres styled with suspended floral swings (jhulas), Moroccan rug lounges, hand-painted umbrellas, and festive acoustic soundscapes. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Garden Lounge",
            "features": [
                  "Suspended Floral Jhula",
                  "Moroccan Rug Seating Enclaves",
                  "Macrame & Tassel Canopies",
                  "Artisanal Henna Bar Staging"
            ]
      },
      {
            "id": "mehndi-decor-theme-4",
            "name": "Mehndi Decor Theme — Blueprint 04",
            "category": "Mehndi Decor Theme",
            "categorySlug": "mehndi-decor-theme",
            "image": "/photos/Mehndi Decor Theme/Outdoor_garden_Mehndi_setup_20260927174533.jpg",
            "description": "Bohemian luxury garden atmospheres styled with suspended floral swings (jhulas), Moroccan rug lounges, hand-painted umbrellas, and festive acoustic soundscapes. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
            "scale": "Bespoke Garden Lounge",
            "features": [
                  "Suspended Floral Jhula",
                  "Moroccan Rug Seating Enclaves",
                  "Macrame & Tassel Canopies",
                  "Artisanal Henna Bar Staging"
            ]
      }
]
  },
  {
    slug: "corporate-party-theme",
    title: "Corporate Party Theme",
    subtitle: "Elegant corporate galas, brand launch events, team celebrations, and executive networking soirées.",
    description: "Professional yet stunning corporate event styling featuring branded stage backdrops, executive lounge setups, LED screen integrations, and premium cocktail bar installations for corporate milestones and annual celebrations.",
    coverImage: "/photos/Corporate Decor Theme/Corporate_annual_celebration_sta…_2K_20260927172904.jpg",
    allPhotos: ["/photos/Corporate Decor Theme/Corporate_annual_celebration_sta…_2K_20260927172904.jpg","/photos/Corporate Decor Theme/Corporate_gala_in_hotel_ballroom_2K_20260927172923.jpg"],
    items: [
      {
        "id": "corporate-party-theme-1",
        "name": "Corporate Party Theme — Blueprint 01",
        "category": "Corporate Party Theme",
        "categorySlug": "corporate-party-theme",
        "image": "/photos/Corporate Decor Theme/Corporate_annual_celebration_sta…_2K_20260927172904.jpg",
        "description": "Professional yet stunning corporate event styling featuring branded stage backdrops, executive lounge setups, LED screen integrations, and premium cocktail bar installations. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
        "scale": "Executive Gala Production",
        "features": [
          "Branded Stage Backdrop",
          "LED Screen Integration",
          "Executive Lounge Setup",
          "Premium Cocktail Bar"
        ]
      },
      {
        "id": "corporate-party-theme-2",
        "name": "Corporate Party Theme — Blueprint 02",
        "category": "Corporate Party Theme",
        "categorySlug": "corporate-party-theme",
        "image": "/photos/Corporate Decor Theme/Corporate_gala_in_hotel_ballroom_2K_20260927172923.jpg",
        "description": "Professional yet stunning corporate event styling featuring branded stage backdrops, executive lounge setups, LED screen integrations, and premium cocktail bar installations. Bespoke turnkey event architecture, handcrafted staging, and white-glove coordination.",
        "scale": "Executive Gala Production",
        "features": [
          "Branded Stage Backdrop",
          "LED Screen Integration",
          "Executive Lounge Setup",
          "Premium Cocktail Bar"
        ]
      }
    ]
  },
];

export interface EventServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export const eventServices: EventServiceItem[] = [
  { id: 'baby-birthday', title: 'Baby Birthday Theme', category: 'Birthday', description: 'Magical and colorful theme setups specially crafted for unforgettable kids birthday celebrations.', price: 'From ₹12,000', image: '/photos/Baby Birthday Theme/WhatsApp Image 2026-09-26 at 11.19.25 PM (1).jpeg' },
  { id: 'baby-welcome', title: 'Baby Welcome Decoration', category: 'Welcome', description: 'Delicate pastel and floral decorations to welcome the newest member home with warmth.', price: 'From ₹10,000', image: '/photos/Baby Welcome Decoration/WhatsApp Image 2026-09-26 at 11.23.08 PM (1).jpeg' },
  { id: 'car-decor', title: 'Car Decor', category: 'Special', description: 'Stunning floral and ribbon arrangements designed for special occasion vehicles and arrivals.', price: 'From ₹4,500', image: '/photos/Car Decor/WhatsApp Image 2026-09-26 at 11.34.29 PM.jpeg' },
  { id: 'couple-room', title: 'Couple Room Decor', category: 'Romance', description: 'Intimate candle-lit and rose petal room transformations for anniversaries and special nights.', price: 'From ₹6,500', image: '/photos/Couple Room Decor/WhatsApp Image 2026-09-26 at 11.23.45 PM (1).jpeg' },
  { id: 'rooftop-party', title: 'Rooftop Party Theme', category: 'Party', description: 'Vibrant fairy-light setups, lounge seating, and elegant ambiance for rooftop celebrations.', price: 'From ₹18,000', image: '/photos/Rooftop Party Theme/WhatsApp Image 2026-09-26 at 11.28.24 PM.jpeg' },
  { id: '25th-anniversary', title: '25th Anniversary Theme', category: 'Anniversary', description: 'Silver and white milestone decor featuring sparkling backdrops and marquee numbers.', price: 'From ₹25,000', image: '/photos/25th Anniversary Theme/WhatsApp Image 2026-09-26 at 11.29.13 PM (1).jpeg' },
  { id: '50th-anniversary', title: '50th Anniversary Theme', category: 'Anniversary', description: 'Luxurious champagne gold and floral setups honoring half a century of togetherness.', price: 'From ₹30,000', image: '/photos/50th Anniversary Theme/WhatsApp Image 2026-09-26 at 11.29.35 PM.jpeg' },
  { id: 'adult-birthday', title: 'Adult Birthday Theme', category: 'Party', description: 'Sophisticated party themes with elegant balloon arches, backdrops, and modern styling.', price: 'From ₹15,000', image: '/photos/Adult Birthday Theme/WhatsApp Image 2026-09-26 at 11.31.25 PM (1).jpeg' },
  { id: 'haldi-decor', title: 'Haldi Decor Theme', category: 'Traditional', description: 'Bright marigold, yellow drape setups, and traditional seating for vibrant pre-wedding rituals.', price: 'From ₹16,000', image: '/photos/Haldi Decor Theme/Courtyard_Haldi_setup_decorated_20260927174533.jpg' },
  { id: 'mehndi-decor', title: 'Mehndi Decor Theme', category: 'Traditional', description: 'Colorful bohemian and traditional setups with cushions, canopies, and vibrant floral styling.', price: 'From ₹16,000', image: '/photos/Mehndi Decor Theme/Bohemian_Mehndi_lounge_with_rugs_20260927174533.jpg' },
  { id: 'corporate-party', title: 'Corporate Party Theme', category: 'Corporate', description: 'Professional stage branding, premium lighting, and elite decor for corporate milestones and galas.', price: 'From ₹35,000', image: '/photos/Corporate Decor Theme/Corporate_annual_celebration_sta…_2K_20260927172904.jpg' },
  { id: 'artist-performance', title: 'Live Artists & Entertainment', category: 'Artist Booking', description: 'Professional choreographers, live musicians, and dance performers to electrify your party.', price: 'On Request', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80' }
];

