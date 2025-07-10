"use client";

import { useNavigationStore } from "@repo/ui/store";
import { useCheckPage } from "@repo/ui/hooks";
import { AtomLink } from "@repo/ui/atoms";
import { cn } from "@repo/ui/utils";

export const HeaderNavigation = () => {
    const activePage = useCheckPage();
    const { navigation } = useNavigationStore();

    return (
        <nav className="flex">
            <ul className="flex items-center gap-x-[4px]">
                {navigation.map((nav, idx) => (
                    <li key={idx}>
                        <AtomLink key={idx} href={`/${nav.slug}`} variant="navigation" className={cn(activePage === nav.slug && "bg-bage")}>
                            {nav.name}
                        </AtomLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};