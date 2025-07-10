"use client";

import { ItemsPageWrapper } from "@repo/ui/atoms";

export default function AwardLayout({ children }: { children: React.ReactNode }) {
    return (
        <ItemsPageWrapper>
            {children}
        </ItemsPageWrapper>
    );
};