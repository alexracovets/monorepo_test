"use client";

import { AtomLink, ItemsPageWrapper, ArrowTo } from "@repo/ui/atoms";

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return (
        <ItemsPageWrapper>
            <AtomLink variant="toBack" href={`/news`}>
                <ArrowTo back /> Назад
            </AtomLink>
            {children}
        </ItemsPageWrapper>
    );
};