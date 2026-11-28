import { NextResponse } from "next/server";
import { WP_API_URL } from "@/data/wpApi";

export async function GET() {
  try {
    const res = await fetch(`${WP_API_URL}/gallery_album?_embed&per_page=100`, {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 30, tags: ["wp-content", "gallery-albums"] },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Craft4Events-NextJS/1.0)",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return NextResponse.json({ success: false, items: [], status: res.status });
    }

    const posts = await res.json();
    if (!Array.isArray(posts)) {
      return NextResponse.json({ success: false, items: [] });
    }

    const items = posts.map((post: any) => {
      const media = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
      return {
        id: String(post.id),
        name: post.title?.rendered || "Curated Theme",
        category: post.album_category || "Live WP CMS",
        image: media,
        description:
          post.short_description ||
          post.content?.rendered?.replace(/<[^>]+>/g, "").trim() ||
          post.excerpt?.rendered?.replace(/<[^>]+>/g, "").trim() ||
          "Exclusive turnkey event styling.",
        priceEstimate: "Custom Package",
        setupTime: "4-6 Hours",
        inclusions: ["Complete Turnkey Setup", "Site Supervisor", "Premium Audio/Lighting"],
      };
    });

    return NextResponse.json({ success: true, items });
  } catch (error: any) {
    return NextResponse.json({ success: false, items: [], error: error.message });
  }
}
