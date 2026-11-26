import HomePageClient from "@/components/HomePageClient";
import { fetchGalleryAlbums, fetchSiteContent } from "@/data/wpApi";

export const revalidate = 60;

export default async function HomePage() {
  const [siteContent, wpAlbums] = await Promise.all([
    fetchSiteContent(),
    fetchGalleryAlbums(),
  ]);

  return <HomePageClient siteContent={siteContent} wpAlbums={wpAlbums} />;
}
