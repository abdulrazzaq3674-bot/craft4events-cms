export interface WpThemeAdapted {
  id: string | number;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  gallery: string[];
  description: string;
  priceEstimate?: string;
  inclusions?: string[];
}

export async function fetchLiveThemesFromWP(): Promise<WpThemeAdapted[]> {
  const wpBaseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://your-wordpress-site.com";

  try {
    // 1. Fetch Posts with embedded media and category terms
    const res = await fetch(`${wpBaseUrl}/wp-json/wp/v2/posts?_embed&per_page=100`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const posts = await res.json();

    return posts.map((post: any) => {
      // Extract featured image or fallback gallery images
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
                            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200";

      // Extract categories
      const terms = post._embedded?.["wp:term"]?.[0] || [];
      const primaryCategory = terms[0]?.name || "Baby Birthday Theme";
      const primarySlug = terms[0]?.slug || "baby-birthday-theme";

      // Extract additional media gallery if available in content or custom fields
      const gallery = [featuredMedia];

      return {
        id: `wp-${post.id}`,
        name: post.title?.rendered || "Curated Event Theme",
        category: primaryCategory,
        categorySlug: primarySlug,
        image: featuredMedia,
        gallery: gallery,
        description: post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "Bespoke handcrafted event setup and production.",
        priceEstimate: "Custom Quote",
        inclusions: ["Complete Setup Fabrication", "Design Blueprint", "Lighting & SFX Sync", "On-site Crew Management"]
      };
    });
  } catch (error) {
    console.warn("WordPress Sync notice: using local curated theme repository.");
    return [];
  }
}
