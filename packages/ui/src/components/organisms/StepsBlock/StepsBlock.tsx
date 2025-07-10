"use client";

import { StepsColumn } from "@repo/ui/molecules";
import { cn } from '@repo/ui/utils';
import { StepType } from "@repo/ui/types";

export const StepsBlock = ({ steps }: { steps: StepType[] }) => {
    if (!steps) return null;

    return (
        <div className="w-full grow grid grid-cols-2 gap-[1.6rem]">
            {steps.map((step, idx) => {
                return (
                    <div
                        key={idx}
                        className={cn(
                            "grid grid-cols-1 bg-white p-[1.6rem] rounded-[1rem] gap-x-[1.6rem]",
                            step.width === "1/2" && "grid-cols-2"
                        )}
                    >
                        {step.width === "1/1" && (
                            <StepsColumn content={step.content?.root.children ?? []} />
                        )}

                        {step.width === "1/2" && (
                            <>
                                <StepsColumn content={step.contentLeft?.root.children ?? []} />
                                <StepsColumn content={step.contentRight?.root.children ?? []} center />
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    );
};