"use client"

import { PaginationBlock } from "@repo/ui/organisms";
import { NewsItem } from "@repo/ui/molecules";
import { NewsWrapper } from "@repo/ui/atoms";
import { ApiNewsItem } from "@repo/ui/types";

const RESULTS_PER_PAGE = 6;

interface NewsBlockProps {
    items: ApiNewsItem[];
}

export const NewsBlock = ({ items }: NewsBlockProps) => {
    return (
        <div className="flex flex-col w-full gap-y-[16px]">
            <PaginationBlock
                items={items}
                countItemsPerPage={RESULTS_PER_PAGE}
                ItemComponent={NewsItem}
                WrapperItems={NewsWrapper}
            />
        </div>
    );
};