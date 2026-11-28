export const WP_API_URL = (
  process.env.NEXT_PUBLIC_WP_API_URL || "https://cms.craft4events.in/wp-json/wp/v2"
).replace(/\/+$/, "");

const WP_FETCH_HEADERS: HeadersInit = {
  "User-Agent": "Mozilla/5.0 (compatible; Craft4Events-NextJS/1.0)",
  Accept: "application/json",
};

const WP_FETCH_TIMEOUT_MS = 8000;

export const IMAGE_SHIMMER_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNGYwIi8+PC9zdmc+";

export interface SiteContent {
  hero_headline: string;
  hero_subheadline: string;
  contact_phone: string;
  primary_email: string;
  owner_email: string;
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  hero_headline: "Every Celebration Deserves Perfection.",
  hero_subheadline:
    "From Delhi & NCR to destinations nationwide, we bring your vision to life with creative concepts, premium quality and thoughtful planning — tailored to your budget.",
  contact_phone: "+91 85956 75935",
  primary_email: "hello@craft4events.in",
  owner_email: "aman@craft4events.in",
};

export interface WpGalleryAlbum {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  coverImage: string;
  photos: string[];
}

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

function decodeHtmlEntities(input: string): string {
  return input
    .replace(/&amp;/g, "&")
    .replace(/&#038;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&rsquo;|&lsquo;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&nbsp;/g, " ");
}

function cleanText(value: unknown): string {
  if (typeof value !== "string") return "";
  return decodeHtmlEntities(value.replace(/<[^>]*>/g, "")).trim();
}

function getCustomField(item: Record<string, any>, key: string): unknown {
  if (!item || typeof item !== "object") return undefined;
  return item[key] ?? item.acf?.[key] ?? item.meta?.[key] ?? item.pods?.[key];
}

function nonEmptyString(value: unknown, fallback: string): string {
  if (typeof value === "string") {
    const trimmed = cleanText(value);
    if (trimmed.length > 0) return trimmed;
  }
  return fallback;
}

/**
 * Extracts an image URL from a string URL or a Pods/WP media object ({ guid, source_url, url }).
 */
export function extractMediaUrl(media: unknown): string | null {
  if (!media) return null;

  if (typeof media === "string") {
    const trimmed = media.trim();
    return trimmed.length > 0 ? trimmed : null;
  }

  if (typeof media === "object") {
    const obj = media as Record<string, any>;
    if (typeof obj.source_url === "string" && obj.source_url.trim()) {
      return obj.source_url.trim();
    }
    if (typeof obj.guid === "string" && obj.guid.trim()) {
      return obj.guid.trim();
    }
    if (
      obj.guid &&
      typeof obj.guid === "object" &&
      typeof obj.guid.rendered === "string" &&
      obj.guid.rendered.trim()
    ) {
      return obj.guid.rendered.trim();
    }
    if (typeof obj.url === "string" && obj.url.trim()) {
      return obj.url.trim();
    }
  }

  return null;
}

/**
 * Extracts an array of image URLs from Pods gallery_photos:
 * - Array of strings or Pods media objects
 * - Single Pods media object (returned by Pods when 1 image is attached)
 * - Associative object map of Pods media objects keyed by ID
 * - Comma-separated string of URLs
 */
export function extractMediaGallery(photos: unknown): string[] {
  if (!photos) return [];

  if (Array.isArray(photos)) {
    return photos
      .map((entry) => extractMediaUrl(entry))
      .filter((url): url is string => Boolean(url));
  }

  if (typeof photos === "string" && photos.trim()) {
    return photos
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  if (typeof photos === "object") {
    const singleUrl = extractMediaUrl(photos);
    if (singleUrl) return [singleUrl];

    // Pods multi-file fields can sometimes serialize as { "22": { ... }, "23": { ... } }
    return Object.values(photos as Record<string, unknown>)
      .map((entry) => extractMediaUrl(entry))
      .filter((url): url is string => Boolean(url));
  }

  return [];
}

/**
 * Extracts image URLs from Gutenberg blocks or raw HTML inside content.rendered.
 */
export function extractImagesFromHtml(html: unknown): string[] {
  if (typeof html !== "string" || !html.trim()) return [];
  const urls: string[] = [];
  const imgSrcRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match: RegExpExecArray | null;
  while ((match = imgSrcRegex.exec(html)) !== null) {
    if (match[1]?.trim()) {
      urls.push(match[1].trim());
    }
  }
  return urls;
}

function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "curated-album"
  );
}

function extractCategory(item: Record<string, any>): string {
  const raw = getCustomField(item, "album_category");

  if (typeof raw === "string" && raw.trim()) {
    return cleanText(raw);
  }

  if (Array.isArray(raw) && raw.length > 0) {
    const first = raw[0];
    if (typeof first === "string" && first.trim()) return cleanText(first);
    if (first && typeof first === "object") {
      const label = first.name || first.label || first.title || first.slug;
      if (typeof label === "string" && label.trim()) return cleanText(label);
    }
  }

  if (raw && typeof raw === "object") {
    const obj = raw as Record<string, any>;
    const label = obj.name || obj.label || obj.title;
    if (typeof label === "string" && label.trim()) return cleanText(label);
  }

  const embeddedTerm = item._embedded?.["wp:term"]?.[0]?.[0]?.name;
  if (typeof embeddedTerm === "string" && embeddedTerm.trim()) {
    return cleanText(embeddedTerm);
  }

  return "Curated Album";
}

export function formatTelHref(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, "");
  return `tel:${cleaned || "+918595675935"}`;
}

export function formatWhatsAppHref(phone: string, text?: string): string {
  const digits = phone.replace(/\D/g, "") || "918595675935";
  return text
    ? `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${digits}`;
}

/**
 * Fetches latest dynamic site content from WordPress /site_content using ISR (revalidate: 30s).
 */
export async function fetchSiteContent(): Promise<SiteContent> {
  try {
    const res = await fetch(`${WP_API_URL}/site_content?_embed&per_page=1`, {
      headers: WP_FETCH_HEADERS,
      signal: AbortSignal.timeout(WP_FETCH_TIMEOUT_MS),
      next: { revalidate: 30, tags: ["wp-content", "site-content"] },
    });

    if (!res.ok) return DEFAULT_SITE_CONTENT;

    const data = await res.json();
    const latest = Array.isArray(data) ? data[0] : data;
    if (!latest || typeof latest !== "object") return DEFAULT_SITE_CONTENT;

    return {
      hero_headline: nonEmptyString(
        getCustomField(latest, "hero_headline"),
        DEFAULT_SITE_CONTENT.hero_headline
      ),
      hero_subheadline: nonEmptyString(
        getCustomField(latest, "hero_subheadline"),
        DEFAULT_SITE_CONTENT.hero_subheadline
      ),
      contact_phone: nonEmptyString(
        getCustomField(latest, "contact_phone"),
        DEFAULT_SITE_CONTENT.contact_phone
      ),
      primary_email: nonEmptyString(
        getCustomField(latest, "primary_email"),
        DEFAULT_SITE_CONTENT.primary_email
      ),
      owner_email: nonEmptyString(
        getCustomField(latest, "owner_email"),
        DEFAULT_SITE_CONTENT.owner_email
      ),
    };
  } catch {
    return DEFAULT_SITE_CONTENT;
  }
}

/**
 * Fetches dynamic gallery albums/folders from WordPress /gallery_album using ISR (revalidate: 30s).
 */
export async function fetchGalleryAlbums(): Promise<WpGalleryAlbum[]> {
  try {
    const res = await fetch(`${WP_API_URL}/gallery_album?_embed&per_page=100`, {
      headers: WP_FETCH_HEADERS,
      signal: AbortSignal.timeout(WP_FETCH_TIMEOUT_MS),
      next: { revalidate: 30, tags: ["wp-content", "gallery-albums"] },
    });

    if (!res.ok) return [];

    const items = await res.json();
    if (!Array.isArray(items) || items.length === 0) return [];

    const albums: WpGalleryAlbum[] = [];

    for (const item of items) {
      if (!item || typeof item !== "object") continue;

      const title = cleanText(item.title?.rendered) || "Curated Event Album";
      const category = extractCategory(item);
      const categorySlug = slugify(category);
      const description =
        cleanText(getCustomField(item, "short_description")) ||
        cleanText(item.excerpt?.rendered) ||
        "Bespoke handcrafted event setup and luxury celebration decor.";

      const podsPhotos = extractMediaGallery(getCustomField(item, "gallery_photos"));
      const contentPhotos = extractImagesFromHtml(item.content?.rendered);
      const coverFromField = extractMediaUrl(getCustomField(item, "cover_image"));
      const coverFromEmbed = extractMediaUrl(item._embedded?.["wp:featuredmedia"]?.[0]);

      const uniquePhotos = Array.from(
        new Set([
          ...podsPhotos,
          ...contentPhotos,
          ...(coverFromField ? [coverFromField] : []),
          ...(coverFromEmbed ? [coverFromEmbed] : []),
        ])
      );

      const coverImage = coverFromField || coverFromEmbed || uniquePhotos[0] || "";
      if (!coverImage && uniquePhotos.length === 0) continue;

      albums.push({
        id: `wp-album-${item.id ?? slugify(title)}`,
        slug: item.slug || slugify(title),
        title,
        category,
        categorySlug,
        description,
        coverImage: coverImage || uniquePhotos[0],
        photos: uniquePhotos.length > 0 ? uniquePhotos : [coverImage],
      });
    }

    return albums;
  } catch {
    return [];
  }
}

export async function fetchLiveThemesFromWP(): Promise<WpThemeAdapted[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=100`, {
      headers: WP_FETCH_HEADERS,
      signal: AbortSignal.timeout(WP_FETCH_TIMEOUT_MS),
      next: { revalidate: 30, tags: ["wp-content", "themes"] },
    });

    if (!res.ok) return [];

    const posts = await res.json();
    if (!Array.isArray(posts)) return [];

    return posts
      .map((post: any) => {
        const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
        const terms = post._embedded?.["wp:term"]?.[0] || [];
        const primaryCategory = terms[0]?.name || "Curated Theme";
        const primarySlug = terms[0]?.slug || "curated-theme";

        return {
          id: `wp-${post.id}`,
          name: cleanText(post.title?.rendered) || "Curated Event Theme",
          category: primaryCategory,
          categorySlug: primarySlug,
          image: featuredMedia,
          gallery: featuredMedia ? [featuredMedia] : [],
          description:
            cleanText(post.excerpt?.rendered) || "Bespoke handcrafted event setup and production.",
          priceEstimate: "Custom Quote",
          inclusions: [
            "Complete Setup Fabrication",
            "Design Blueprint",
            "Lighting & SFX Sync",
            "On-site Crew Management",
          ],
        };
      })
      .filter((t) => Boolean(t.image));
  } catch {
    return [];
  }
}
