"use client";

import { Suspense } from "react";

import { PaginationBlock } from "@repo/ui/organisms";
import { PartnerType } from "@repo/ui/types";
import { PartnerItem } from "@repo/ui/molecules";
import { PartnersWrapper } from "@repo/ui/atoms";

interface PartnersBlockProps {
    items: PartnerType[];
};

export const PartnersBlock = ({ items }: PartnersBlockProps) => {
    const PARTNERS_PER_PAGE = 6;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items && <PaginationBlock items={items} countItemsPerPage={PARTNERS_PER_PAGE} ItemComponent={PartnerItem} WrapperItems={PartnersWrapper} />}
        </Suspense>
    );
}