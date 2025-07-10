"use server";

import { Config, getPayload, SanitizedConfig } from "payload";

import { GalleryType } from "@repo/ui/types";


type GalleriesResult = {
    success: true;
    data: GalleryType[];
} | {
    success: false;
    error: string;
};

interface GetGalleriesNextProps {
    currentGallery: string;
    limit: number;
    config: Config;
}


export async function getGalleriesNext({ currentGallery, limit = 4, config }: GetGalleriesNextProps): Promise<GalleriesResult> {
    try {
        const resolvedConfig = await config as SanitizedConfig;
        const payload = await getPayload({
            config: resolvedConfig,
        });

        // Спочатку знаходимо поточну галерею за slug
        const currentGalleryData = await payload.find({
            collection: "gallery",
            where: {
                slug: { equals: currentGallery },
            },
            limit: 1,
        });

        if (!currentGalleryData.docs.length) {
            return { success: false, error: "Поточну галерею не знайдено" };
        }

        const currentGalleryId = currentGalleryData.docs[0]?.id;

        let galleries = [];
        // Тепер отримуємо галереї з більшим ID
        const galleriesNext = await payload.find({
            collection: "gallery",
            where: {
                id: { less_than: currentGalleryId },
            },
            sort: "-id",
            limit: limit,
        });

        const nextLength = galleriesNext.docs.length;
        if (nextLength < limit) {
            const needPrev = limit - nextLength;
            const galleriesPrev = await payload.find({
                collection: "gallery",
                where: {
                    id: { greater_than: currentGalleryId },
                },
                sort: "-id",
                limit: needPrev,
            });
            galleries = [...galleriesPrev.docs, ...galleriesNext.docs];
        } else {
            galleries = galleriesNext.docs;
        }

        return { success: true, data: galleries as GalleryType[] };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Невідома помилка"
        };
    }
};