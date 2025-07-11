import { Suspense } from "react";
import { Metadata } from "next";
import { Config } from "payload";

import { generateMeta, getCollectionItem, getGalleriesNext, getNeighborGalleries, getCollection } from "@repo/ui/utils";
import { Container, AtomText, FullscreenImage } from "@repo/ui/atoms";
import { Gallery, Media } from "@payload-types";
import { ShowCaseGallery } from "@repo/ui/organisms";
import config from "@payload-config";

type PageProps = {
  params: Promise<{
    gallery_page: string;
  }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gallery_page } = await params;
  const resolvedConfig = await config as Config;
  const page = await getCollectionItem({ collection: 'gallery', slug: gallery_page, config: resolvedConfig }) as Gallery;

  const meta = {
    title: page?.meta?.title || '',
    description: page?.meta?.description || '',
    image: page?.meta?.image || '',
  };

  return generateMeta({ ...meta, slug: page?.slug || '' });
}

export async function generateStaticParams() {
  try {
    const resolvedConfig = await config as Config;
    const galleries = await getCollection({ collection: 'gallery', config: resolvedConfig }) as Gallery[];

    return galleries.map((gallery) => ({
      gallery_page: gallery.slug,
    }));
  } catch (error) {
    console.error('Помилка при генерації статичних параметрів:', error);
    return [];
  }
}

export default async function GalleryPage({ params }: PageProps) {
  const { gallery_page } = await params;
  const resolvedConfig = await config as Config;
  const pageData = await getCollectionItem({ collection: 'gallery', slug: gallery_page, config: resolvedConfig }) as Gallery;
  if (!pageData) return <Container>404</Container>;

  const { nextPage, prevPage } = await getNeighborGalleries({ slug: pageData.slug || '', config: resolvedConfig });
  const nextGalleriesResult = await getGalleriesNext({ currentGallery: gallery_page, limit: 4, config: resolvedConfig });
  const nextGalleries = nextGalleriesResult.success ? nextGalleriesResult.data : [];

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <FullscreenImage
        image={pageData.image as Media}
        alt={pageData.alt || ''}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <AtomText variant="galleryDescription" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      <ShowCaseGallery galleries={nextGalleries} />
    </Suspense>
  );
};