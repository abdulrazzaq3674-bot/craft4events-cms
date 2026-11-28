import GalleryClient from "@/components/GalleryClient";
import { fetchGalleryAlbums, fetchSiteContent } from "@/data/wpApi";

export const revalidate = 30;

export default async function GalleryPage() {
  const [siteContent, wpAlbums] = await Promise.all([
    fetchSiteContent(),
    fetchGalleryAlbums(),
  ]);

  return <GalleryClient siteContent={siteContent} wpAlbums={wpAlbums} />;
}
