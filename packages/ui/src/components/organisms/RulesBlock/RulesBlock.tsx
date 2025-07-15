"use client";

import { RichTextFilter } from '@repo/ui/molecules';
import { ContentType } from '@repo/ui/types';

interface RulesBlockProps {
    content: ContentType;
}

export const RulesBlock = ({ content }: RulesBlockProps) => {
    if (!content) return null;
    const contentData = content?.root?.children;

    return (
        <div className='flex flex-col pt-[16px]'>
            {contentData.map((item, idx) => {
                return <RichTextFilter item={item} key={idx} />
            })}
        </div>
    );
};