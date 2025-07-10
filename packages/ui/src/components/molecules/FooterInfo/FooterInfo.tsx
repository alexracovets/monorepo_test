"use client";

import { FooterNavigation, FooterQuestions } from "@repo/ui/molecules";

export const FooterInfo = () => {
    return (
        <div
            className="flex items-start pt-[30px] gap-x-[40px]"
        >
            <FooterNavigation />
            <FooterQuestions />
        </div>
    )
}