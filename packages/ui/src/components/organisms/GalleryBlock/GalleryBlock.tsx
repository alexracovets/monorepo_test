"use client";

import { Suspense } from "react";

import { PaginationBlock } from "@repo/ui/organisms";
import { GalleryType } from "@repo/ui/types";
import { GalleryItem } from "@repo/ui/molecules";
import { GalleryWrapper } from "@repo/ui/atoms";

interface GalleryBlockProps {
    items: GalleryType[];
};

export const GalleryBlock = ({ items }: GalleryBlockProps) => {
    const GALLERIES_PER_PAGE = 6;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items && <PaginationBlock items={items} countItemsPerPage={GALLERIES_PER_PAGE} ItemComponent={GalleryItem} WrapperItems={GalleryWrapper} />}
        </Suspense>
    );
};