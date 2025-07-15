"use client";

import { HiOutlineClipboardList } from "react-icons/hi";

import { RichTextFilter } from "@repo/ui/molecules";
import { AtomLink, AtomText } from "@repo/ui/atoms";
import { FileType } from "@repo/ui/types";

interface FilesBlockProps {
    list: FileType[] | null;
}

export const FilesBlock = ({ list }: FilesBlockProps) => {
    return (
        <div className="flex flex-col w-full gap-y-[16px] my-[24px]">
            {list?.map((item) => (
                <div key={item.id} className="flex flex-col w-full gap-y-[16px]">
                    {
                        typeof item.file === 'object' && (
                            <>
                                <div className="flex gap-x-[16px] items-center" >
                                    <div className="bg-yellow rounded-full p-[8px]" >
                                        <HiOutlineClipboardList className="text-[20px]" />
                                    </div>
                                    <AtomText variant="fileTitle"> {item.file?.name}</AtomText>
                                </div>
                                {item.file?.url && (
                                    <AtomLink variant="fileLink" href={item.file?.url} target="_blank">
                                        {item.file?.link_to_file}
                                    </AtomLink>
                                )}
                                {item.file?.description_file?.root?.children?.map((child, index) => (
                                    <RichTextFilter key={index} item={child} />
                                ))}
                            </>

                        )
                    }
                </div>
            ))}
        </div>
    )
}