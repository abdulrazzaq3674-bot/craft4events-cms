export interface CaseStudyDay {
  dayNumber: number;
  title: string;
  subtitle: string;
  theme: string;
  image: string;
  description: string;
  architecturalHighlights: string[];
  atmosphericNotes: string;
}

export interface LandmarkCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  locationType: string;
  year: string;
  coverImage: string;
  guestCount: string;
  productionScale: string;
  editorialQuote: string;
  curatorNote: string;
  metrics: {
    label: string;
    value: string;
  }[];
  timeline: CaseStudyDay[];
}

export const LANDMARK_COMMISSIONS: LandmarkCaseStudy[] = [
  {
    id: "lakefront-citadel",
    title: "The Floating Citadel & Crystal Mirror Mandap",
    subtitle: "A 3-Day Regal Takeover of Historic Lakeside Palaces",
    category: "Mehndi Decor Theme",
    locationType: "Private Palace Island & Courtyards",
    year: "Autumn Commission",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=90&w=1400",
    guestCount: "650 Royal Guests",
    productionScale: "Turnkey Heavy Production & Botanical Architecture",
    editorialQuote: "“An emotional tour-de-force where ancient stone ramparts dissolve into kinetic waterfalls of crystal and white blooms.” — Vogue Weddings",
    curatorNote: "Engineered over 14 weeks of custom 3D parametric rendering, featuring zero ground-impact rigging across 400-year-old historic stone architecture.",
    metrics: [
      { label: "Imported Dutch Carnations", value: "35,000+ Stems" },
      { label: "Suspended Chandeliers", value: "48 Venetian Units" },
      { label: "Special Effects Console", value: "32-Zone DMX Pyro" },
      { label: "Hospitality Crew", value: "120 Concierge Liaisons" }
    ],
    timeline: [
      {
        dayNumber: 1,
        title: "The Sunset Water Pavilion Soiree",
        subtitle: "Acoustic Sufi Symphony & Candlelit Scented Cabanas",
        theme: "Blush Champagne & Brass Urli Illuminations",
        image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=1200",
        description: "Guests arrived via private mahogany boats to an island illuminated by 4,000 floating brass candles. The evening unfolded with bespoke botanical perfumes infused into warm mist coolers and a 24-piece Sufi symphony on velvet risers.",
        architecturalHighlights: [
          "Floating 60-meter water walkway framed by golden marigold cascades",
          "Custom velvet low-seating diwans with embroidered heirloom silks",
          "Artisanal saffron & rosewater sensory misting stations"
        ],
        atmosphericNotes: "Fragrant night-blooming jasmine, warm 2200K filament glow, and gentle water reflections."
      },
      {
        dayNumber: 2,
        title: "The Royal Mirror Mandap Architecture",
        subtitle: "Sacred Vedic Ceremony with Heavy Low-Fog Cloud",
        theme: "Alabaster Ivory, Platinum & Crystal Glass",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1200",
        description: "A monumental 4-pillar mirror pavilion floating atop an acrylic water stage. Synchronized dry-ice cloud fog enveloped the sacred havan as live Vedic chants were amplified with acoustic isolation arrays.",
        architecturalHighlights: [
          "Hydraulic revolving lotus podium with concealed cold pyro spark jets",
          "Suspended crystal dome with 10,000 hand-threaded white carnations",
          "Zero-smoke ceremonial havan filtration with certified safety clearance"
        ],
        atmosphericNotes: "Sandalwood incense, chilled crystal mist, and resonant orchestral brass fanfare."
      },
      {
        dayNumber: 3,
        title: "The Grand Reception & Kinetic Light Symphony",
        subtitle: "Black-Tie Gala Banquet, Curved P2.9 LED & Headline Concert",
        theme: "Midnight Onyx, Liquid Champagne & Kinetic Beam Rigging",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=85&w=1200",
        description: "The finale transformed an expansive courtyard into a modern opera house. A curved 40-meter LED tunnel guided guests into a ballroom equipped with intelligent sharpy moving lights, line-array acoustics, and an 8-tier champagne waterfall.",
        architecturalHighlights: [
          "Concert-grade load-bearing aluminum mega-truss with 120 intelligent moving heads",
          "Mirrored infinity dancefloor with custom monogram projection mapping",
          "Automated gold mylar confetti waterfalls and synchronized cold fireworks"
        ],
        atmosphericNotes: "Liquid champagne cascades, crisp stadium acoustic dispersion, and starlit sky reveals."
      }
    ]
  },
  {
    id: "coastal-riviera",
    title: "The Clifftop Ocean Estate Gala",
    subtitle: "A 3-Day Barefoot Luxury & Modernist Glasshouse Commission",
    category: "Rooftop Party Theme",
    locationType: "Private Clifftop Oceanfront Estate",
    year: "Winter Commission",
    coverImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=90&w=1400",
    guestCount: "420 International Patrons",
    productionScale: "Full Panoramic Glass Marquee & Sunset Acoustics",
    editorialQuote: "“Colin Cowie sensibility at its zenith—where the horizon of the ocean becomes the backdrop for couture floral geometry.” — Architectural Digest",
    curatorNote: "Engineered on a secluded ocean bluff featuring a temporary 1,200 sq. meter climate-controlled transparent glass marquee overlooking the tides.",
    metrics: [
      { label: "Exotic White Orchids", value: "20,000+ Stems" },
      { label: "Panoramic Glass Marquee", value: "1,200 m² Area" },
      { label: "Mixology & Oyster Bars", value: "4 Artisanal Stations" },
      { label: "Drone Cine Fleet", value: "3 4K Aerial Units" }
    ],
    timeline: [
      {
        dayNumber: 1,
        title: "The Sunset Driftwood Cocktail Soiree",
        subtitle: "Barefoot Chic Champagne & Acoustic Sunset Strings",
        theme: "Natural Teak, Driftwood & Ivory Linen",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=85&w=1200",
        description: "A breezy twilight reception framed by natural bleached driftwood arches, private cabana lounges, and live French gypsy jazz.",
        architecturalHighlights: [
          "Bespoke teak cocktail bars with crushed oyster shell terrazzo finish",
          "Custom low-profile linen lounge pods embedded into seaside sand lawns",
          "Overhead warm bistro fairy light canopy extending 80 meters"
        ],
        atmosphericNotes: "Salt air, vintage Dom Pérignon, and warm amber sunset reflections."
      },
      {
        dayNumber: 2,
        title: "The Ethereal Ocean-View Glasshouse Mandap",
        subtitle: "Sunken Water Stage with Horizon Infinity Line",
        theme: "Clear Acrylic, White Phalaenopsis & Sea Breeze",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=85&w=1200",
        description: "Designed with an invisible acrylic stage seamlessly merging with the ocean horizon. 20,000 cascading white orchids fluttered in coastal winds under a transparent canopy.",
        architecturalHighlights: [
          "Sunken reflection pond surrounding the mandap with water lilies",
          "High-tensile clear glass marquee engineered for 50-knot coastal breezes",
          "Concealed acoustic sound dispersion under guest chairs"
        ],
        atmosphericNotes: "Crisp ocean breezes, fragrant white gardenias, and acoustic classical sitar fusion."
      },
      {
        dayNumber: 3,
        title: "The Starlit Riviera Gala & Yacht Afterparty",
        subtitle: "Laser Mapping, Live Electronic Symphony & Beach Fireworks",
        theme: "Emerald Velvet, Mirror Gold & Pyrotechnic Spectacle",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=85&w=1200",
        description: "The cliffside transformed into a chic European nightclub with custom laser mapping across ocean rocks and an offshore barge pyrotechnics display.",
        architecturalHighlights: [
          "Water-resistant LED dancefloor suspended over the cliff edge",
          "Multi-beam spatial laser show synchronized to live electronic cello",
          "Barge-launched safe nautical fireworks over the open bay"
        ],
        atmosphericNotes: "Electrifying live strings, sea mist, and midnight champagne."
      }
    ]
  },
  {
    id: "monumental-pavilion",
    title: "The Imperial Glasshouse Summit & Milestone Gala",
    subtitle: "A 2-Day Private Estate Transformation for 800 Global Dignitaries",
    category: "50th Anniversary Theme",
    locationType: "Private 20-Acre Country Estate",
    year: "Spring Commission",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=90&w=1400",
    guestCount: "800 Global Dignitaries",
    productionScale: "Architectural 3D Projection & 50m Botanical Walkway",
    editorialQuote: "“A masterclass in spatial theatre. Guests stepped into a realm where botanical architecture and cutting-edge digital mapping merged seamlessly.” — Harper’s Bazaar",
    curatorNote: "Constructed over 10 days on a 20-acre estate, featuring our signature 50-meter sensory floral tunnel and 40,000-lumen laser facade projection.",
    metrics: [
      { label: "Fresh Dutch Botanicals", value: "50,000+ Stems" },
      { label: "Floral Tunnel Length", value: "50 Meters" },
      { label: "Laser Projection Power", value: "40,000 Lumens" },
      { label: "Private Butler Team", value: "85 Professionals" }
    ],
    timeline: [
      {
        dayNumber: 1,
        title: "The Sensory Floral Tunnel Walkthrough",
        subtitle: "Bespoke Perfume Misting & Venetian Chandelier Walkway",
        theme: "Ivory, Warm Brass & Living Moss",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200",
        description: "An awe-inspiring arrival experience where guests walked through 50 meters of suspended white wisteria, imported hydrangeas, and automatic ambient scent diffusers.",
        architecturalHighlights: [
          "50-meter continuous botanical tunnel with 30 suspended Venetian chandeliers",
          "Integrated sub-floor velvet cushioning for effortless walking in couture",
          "Concealed directional spatial audio playing bespoke acoustic scores"
        ],
        atmosphericNotes: "Delicate neroli scent, soft glowing candelabras, and plush velvet footsteps."
      },
      {
        dayNumber: 2,
        title: "The Architectural Projection Mapping & Gala",
        subtitle: "Dynamic Living Facades & 8-Course Michelin-Level Banqueting",
        theme: "Black Tie, Royal Gold & Holographic Illumination",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=85&w=1200",
        description: "The estate facade came alive with bespoke 3D animated historical narratives mapped to the stone pillars, followed by a multi-tiered gala dinner with private violin serenades.",
        architecturalHighlights: [
          "40,000-lumen high-contrast laser mapping with zero structural anchoring",
          "Bespoke tiered banqueting with gold-leaf charger plates and Baccarat crystal",
          "Indoor low-smoke atmospheric cloud reveal for keynote moments"
        ],
        atmosphericNotes: "Acoustic orchestral crescendos, gold-leaf reflections, and timeless grandeur."
      }
    ]
  }
];
