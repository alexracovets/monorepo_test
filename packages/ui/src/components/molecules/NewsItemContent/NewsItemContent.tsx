"use client";

import { ApiNewsItem } from "@repo/ui/types";
import { AtomImage } from "@repo/ui/atoms";

interface NewsItemContentProps {
    content: ApiNewsItem['description'] | null;
    image?: ApiNewsItem['images']['banner'][0] | null;
}

export const NewsItemContent = ({ content, image }: NewsItemContentProps) => {
    return (
        <div className="news-item-content">
            {image && <AtomImage src={image} alt="Фото новини" variant="itemPage" />}
            {content && <div className="page-content" dangerouslySetInnerHTML={{ __html: content }} />}
            <div className="clear-both" />
        </div>
    )
}