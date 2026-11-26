import { NextResponse } from "next/server";

export async function GET() {
  const wpBase = process.env.NEXT_PUBLIC_WORDPRESS_URL || "http://create4moments.local";

  try {
    const res = await fetch(`${wpBase}/wp-json/wp/v2/c4m-themes?_embed&per_page=50`, {
      cache: "no-store",
      headers: {
        "Accept": "application/json",
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
      const media = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      return {
        id: String(post.id),
        name: post.title?.rendered || "Curated Theme",
        category: "Live WP CMS",
        image: media || "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
        description:
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
