"use server";

import { CollectionSlug, Config, getPayload } from "payload";
import { SanitizedConfig } from "payload";

interface getCollectionProps {
    collection: CollectionSlug;
    config: Config;
}

export async function getCollection({ collection, config }: getCollectionProps) {
    const payload = await getPayload({ config: config as SanitizedConfig });
    const collectionData = await payload.find({
        collection: collection,
        limit: -1,
    });
    return collectionData.docs;
}