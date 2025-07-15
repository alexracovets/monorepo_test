"use client";

import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import { LetterExampleType } from "@repo/ui/types";
import { AtomLink, AtomText } from "@repo/ui/atoms";

export const LetterTemplate = ({ list }: { list: LetterExampleType[] }) => {
    return (
        <div className="w-full flex flex-col gap-y-[16px]">
            <div className="flex gap-x-[16px] items-center">
                <div className="bg-yellow rounded-full p-[8px]">
                    <HiOutlineClipboardDocumentList className="text-[20px]" />
                </div>
                <AtomText variant="fileTitle">Шаблони листів-звернень</AtomText>
            </div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {typeof item.file === 'object' && (
                            <AtomText variant="regularList" asChild >
                                <AtomLink variant="fileLink" href={item.file?.url || ''} target="_blank">
                                    {item.file?.name}
                                </AtomLink>
                            </AtomText>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}