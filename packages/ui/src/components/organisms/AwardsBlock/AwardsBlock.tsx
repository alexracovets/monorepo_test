"use client";

import { Suspense } from "react";

import { PaginationBlock } from "@repo/ui/organisms";
import { AwardItem } from "@repo/ui/molecules";
import { AwardsWrapper } from "@repo/ui/atoms";
import { AwardType } from "@repo/ui/types";

interface AwardsBlockProps {
    items:  AwardType[];
};

export const AwardsBlock = ({ items }: AwardsBlockProps) => {
    const AWARDS_PER_PAGE = 8;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items && <PaginationBlock items={items} countItemsPerPage={AWARDS_PER_PAGE} ItemComponent={AwardItem} WrapperItems={AwardsWrapper} />}
        </Suspense>
    );
};