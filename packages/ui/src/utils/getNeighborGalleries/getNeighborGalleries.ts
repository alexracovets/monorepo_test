"use server";

import { Config, getPayload, SanitizedConfig } from "payload";
import { GalleryType } from "@repo/ui/types";

type NeighborGalleriesResult = {
    nextPage: GalleryType | null;
    prevPage: GalleryType | null;
};

interface GetNeighborGalleriesProps {
    slug: string;
    config: Config;
}

export async function getNeighborGalleries({ slug, config }: GetNeighborGalleriesProps): Promise<NeighborGalleriesResult> {
    try {
        const resolvedConfig = await config as SanitizedConfig;
        const payload = await getPayload({ config: resolvedConfig });

        // Знаходимо поточну галерею
        const currentGallery = await payload.find({
            collection: 'gallery',
            where: {
                slug: {
                    equals: slug
                }
            },
            limit: 1,
        });

        if (!currentGallery.docs.length) {
            return {
                nextPage: null,
                prevPage: null
            };
        }

        const currentGalleryId = currentGallery.docs[0]?.id;

        // Знаходимо наступну галерею (з меншим ID)
        const nextPage = await payload.find({
            collection: 'gallery',
            where: {
                id: {
                    less_than: currentGalleryId
                }
            },
            limit: 1,
            sort: '-id'
        });

        // Знаходимо попередню галерею (з більшим ID)
        const prevPage = await payload.find({
            collection: 'gallery',
            where: {
                id: {
                    greater_than: currentGalleryId
                }
            },
            limit: 1,
            sort: 'id'
        });

        return {
            nextPage: nextPage.docs[0] as GalleryType | null,
            prevPage: prevPage.docs[0] as GalleryType | null
        };
    } catch (error) {
        console.error('Помилка при отриманні сусідніх галерей:', error);
        return {
            nextPage: null,
            prevPage: null
        };
    }
} 