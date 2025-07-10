import { MediaType } from "../MediaType";

export type GalleryType = {
    id: number;
    image?: (number | null) | MediaType;
    alt?: string | null;
    title?: string | null;
    slug?: string | null;
    meta?: {
        title?: string | null;
        description?: string | null;
        /**
         * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
         */
        image?: (number | null) | MediaType;
    };
    updatedAt: string;
    createdAt: string;
}