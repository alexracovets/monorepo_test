"use client";

import { Suspense } from "react";

import { PaginationBlock } from "@repo/ui/organisms";
import { ResultType } from "@repo/ui/types";
import { ResultItem } from "@repo/ui/molecules";
import { ResultsWrapper } from "@repo/ui/atoms";

interface ResultsBlockProps {
    items: ResultType[];
};

export const ResultsBlock = ({ items }: ResultsBlockProps) => {
    const RESULTS_PER_PAGE = 3;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items && <PaginationBlock items={items} countItemsPerPage={RESULTS_PER_PAGE} ItemComponent={ResultItem} WrapperItems={ResultsWrapper} />}
        </Suspense>
    );
};