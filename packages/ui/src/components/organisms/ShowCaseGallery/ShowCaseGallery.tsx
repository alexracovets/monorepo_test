"use client";

import Link from "next/link";

import { AtomText, AtomImage } from "@repo/ui/atoms";
import { GalleryType } from "@repo/ui/types";

interface ShowCaseGalleryProps {
    galleries: GalleryType[];
}

export const ShowCaseGallery = ({ galleries }: ShowCaseGalleryProps) => {

    return (
        <div className="grid grid-cols-4 gap-[20px]">
            {galleries.map((item: GalleryType) => (
                <Link key={item.id} href={`/gallery/${item.slug}`} className="flex flex-col gap-[4px] bg-white rounded-[8px] overflow-hidden">
                    {item.image && typeof item.image === 'object' && (
                        <AtomImage src={item.image.url || ""} alt={item.alt || ""} variant="showCaseGallery" />
                    )}
                    <AtomText variant="galleryShowCaseTitle">
                        {item.title}
                    </AtomText>
                </Link>
            ))}
        </div>
    );
};