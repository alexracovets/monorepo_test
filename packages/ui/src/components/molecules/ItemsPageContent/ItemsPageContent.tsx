"use client";

import { RichTextItemType, MediaType, ContentType } from "@repo/ui/types";
import { RichTextFilter } from "@repo/ui/molecules";
import { AtomImage } from "@repo/ui/atoms";

import "@repo/ui/styles/news_content.scss";

interface ItemsPageContentProps {
    content: ContentType;
    image: MediaType;
}

export const ItemsPageContent = ({ content, image }: ItemsPageContentProps) => {
    if (!content) return null;

    const contentData = content.root?.children;
    if (!contentData) return null;

    return (
        <div className="block mb-[40px]">
            {image && (
                <AtomImage
                    src={image.url || ''}
                    alt={image.alt || ''}
                    variant="itemPage"
                />
            )}
            {contentData.map((item: RichTextItemType, idx: number) => {
                return <RichTextFilter item={item} key={idx} />
            })}
        </div>
    )
}