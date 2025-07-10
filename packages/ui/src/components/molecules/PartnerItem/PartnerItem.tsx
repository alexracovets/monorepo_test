"use client";

import { AtomText, AtomImage } from "@repo/ui/atoms";
import { PartnerType } from "@repo/ui/types";

export const PartnerItem = ({ name, image }: PartnerType) => {
    return (
        <div className="flex flex-col justify-center items-center">
            {
                image &&
                typeof image !== 'number' &&
                <AtomImage
                    src={image.url || ''}
                    alt={name || ''}
                    className="w-full h-[220px] rounded-t-[8px] overflow-hidden"
                />
            }
            <AtomText variant="cardTitle" className={"bg-white rounded-b-[8px] p-[8px] w-full text-center"}>
                {name}
            </AtomText>
        </div>
    )
};