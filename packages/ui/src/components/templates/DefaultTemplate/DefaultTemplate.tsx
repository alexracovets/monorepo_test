"use client";

import "@repo/ui/styles/globals.scss";
import "@repo/ui/styles/tailwind.css";

import { Footer, Header } from "@repo/ui/organisms";
import { gilroy } from "@repo/ui/fonts";
import { cn } from "@repo/ui/utils";
import { NavigationItem } from "@repo/ui/types";

interface DefaultTemplateProps {
    children: React.ReactNode;
    navigation: NavigationItem[];
}

export const DefaultTemplate = ({ children, navigation }: DefaultTemplateProps) => {
    return (
        <html lang="en">
            <body className={cn(gilroy.className, "w-full bg-bg min-h-screen")}>
                <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
                    <Header navigation={navigation} />
                    <main className="grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html >
    )
}