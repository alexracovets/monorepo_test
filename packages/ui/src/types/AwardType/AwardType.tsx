import { MediaType } from "../MediaType";

export type AwardType = {
    id: number;
    title?: string | null;
    description?: string | null;
    content?: {
        root: {
            type: string;
            children: {
                type: string;
                version: number;
                [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
        };
        [k: string]: unknown;
    } | null;
    image?: (number | null) | MediaType;
    slug?: string | null;
    date?: string | null;
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