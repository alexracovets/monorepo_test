import { MediaType } from "../MediaType";

export type ResultType = {
    id: number;
    title?: string | null;
    description?: string | null;
    image?: (number | null) | MediaType;
    slug?: string | null;
    updatedAt: string;
    createdAt: string;
}