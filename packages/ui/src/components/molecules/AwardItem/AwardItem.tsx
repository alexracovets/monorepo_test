"use client";

import { AtomText, AtomHR, ArrowTo, AtomLink, AtomButton, AtomImage } from "@repo/ui/atoms";
import { cn, formatDate } from "@repo/ui/utils";
import { AwardType } from "@repo/ui/types";

export const AwardItem = ({ title, image, date, slug }: AwardType) => {
    return (
        <div className={cn(
            "w-full flex flex-col gap-[8px] bg-white rounded-[8px] p-[8px]",
            "outline outline-1 outline-transparent transition transition-[300ms] ease-in",
            "hover:outline-yellow"
        )}>
            {image && typeof image !== 'number' && <AtomImage src={image.url || ''} alt={image.alt || ''} className="w-full h-[150px] relative rounded-[8px] overflow-hidden" />}
            <div className="flex w-full flex-col p-[8px] pb-[48px] relative">
                {date && <AtomText variant="date" asChild><p>{formatDate(date)}</p></AtomText>}
                <AtomText variant="cardTitle" asChild>
                    <h3>{title}</h3>
                </AtomText>
                <AtomLink href={`/awards/${slug}`} variant="cardLink" className="px-[8px]">
                    <AtomHR />
                    <AtomButton variant="cardLink">
                        <AtomText variant="newsCardLink">Читати далі</AtomText>
                        <ArrowTo />
                    </AtomButton>
                </AtomLink>
            </div>
        </div>
    )
};