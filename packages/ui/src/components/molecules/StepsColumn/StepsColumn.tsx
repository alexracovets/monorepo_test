"use client";

import { RichTextFilter } from "@repo/ui/molecules";
import { cn } from "@repo/ui/utils";
import { StepTypeColumn } from "@repo/ui/types";

export const StepsColumn = ({ content, center }: StepTypeColumn) => {
    return (
        <div className={cn(
            "flex w-full flex-col gap-[1rem]",
            center && "justify-center"
        )}>
            {
                content.map((item, idx) => {
                    return <RichTextFilter item={item} key={idx} steps />
                })
            }
        </div>
    )
}