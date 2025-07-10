import { MediaType } from "../MediaType";

export type PartnerType = {
    id: number;
    name?: string | null;
    image?: (number | null) | MediaType;
    updatedAt: string;
    createdAt: string;
};