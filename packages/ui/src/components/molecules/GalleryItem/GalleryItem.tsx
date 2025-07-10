"use client";

import Link from "next/link";

import { AtomText, AtomImage } from "@repo/ui/atoms";
import { GalleryType } from "@repo/ui/types";

export const GalleryItem = ({ title, image, alt, slug }: GalleryType) => {

    return (
        <Link href={`/gallery/${slug}`}>
            <div className="flex flex-col justify-center items-center">
                {
                    image &&
                    typeof image !== 'number' &&
                    <AtomImage
                        src={image.url || ''}
                        alt={alt || ''}
                        className="w-full h-[220px] rounded-t-[8px] overflow-hidden"
                    />
                }
                <AtomText variant="cardTitle" className={"bg-white rounded-b-[8px] p-[8px] w-full text-center"}>
                    {title}
                </AtomText>
            </div>
        </Link>
    )
}