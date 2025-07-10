"use client";

import { useCheckPage } from "@repo/ui/hooks";
import { AtomLink } from "@repo/ui/atoms";
import { cn } from "@repo/ui/utils";
import { NavigationItem } from "@repo/ui/types";

interface HeaderNavigationProps {
    navigation: NavigationItem[];
}

export const HeaderNavigation = ({ navigation }: HeaderNavigationProps) => {
    const activePage = useCheckPage();

    return (
        <nav className="flex">
            <ul className="flex items-center gap-x-[4px]">
                {navigation.map((nav, idx) => (
                    <li key={nav.id || idx}>
                        <AtomLink 
                            href={`/${nav.slug}`} 
                            variant="navigation" 
                            className={cn(activePage === nav.slug && "bg-bage")}
                        >
                            {nav.name}
                        </AtomLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};