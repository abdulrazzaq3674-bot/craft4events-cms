import HomePageClient from "@/components/HomePageClient";
import { fetchGalleryAlbums, fetchSiteContent } from "@/data/wpApi";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [siteContent, wpAlbums] = await Promise.all([
    fetchSiteContent(),
    fetchGalleryAlbums(),
  ]);

  return <HomePageClient siteContent={siteContent} wpAlbums={wpAlbums} />;
}
