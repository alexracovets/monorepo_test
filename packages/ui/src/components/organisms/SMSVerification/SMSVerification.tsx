"use client";

import { SignForm } from "@repo/ui/molecules";
import { AtomText } from "@repo/ui/atoms";

import { useUserInfo } from "@repo/ui/store";

export const SMSVerification = () => {
    const { isPhoneFilled } = useUserInfo();

    return (
        <>
            <AtomText variant="cardTitle" asChild className="mt-[60px] text-[28px]">
                <p>Код підтвердження відправлено на номер {isPhoneFilled}</p>
            </AtomText>
            <SignForm />
        </>
    );
};