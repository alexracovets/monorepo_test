"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Container, Logo } from "@repo/ui/atoms";
import { HeaderNavigation, Login } from "@repo/ui/molecules";
import { cn } from "@repo/ui/utils";
import { NavigationItemType } from "@repo/ui/types";

interface HeaderProps {
    navigation: NavigationItemType[] | null;
}

export const Header = ({ navigation }: HeaderProps) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(true);
    const [isShadow, setIsShadow] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (!scrollY) return null;

        const previous = scrollY.getPrevious();

        if (previous !== undefined) {
            const headerHeight = headerRef.current?.clientHeight || 60;
            const scrollThreshold = headerHeight + 40;
            const scrollDelta = latest - previous;
            setIsShadow(latest > headerHeight);
            setIsSticky(scrollDelta < 0 || latest < scrollThreshold);
        }
    });

    return (
        <motion.header
            ref={headerRef}
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            initial="visible"
            animate={isSticky ? "visible" : "hidden"}
            transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
            }}
            className={cn(
                "fixed w-full z-10 translate-y-0 bg-white",
                isShadow ? "shadow-md" : "shadow-none"
            )}
        >
            <Container
                transparent
                padding
                className={cn(
                    "grid grid-cols-[auto_1fr_auto] items-center gap-x-[16px] py-0 my-0",
                )}
            >
                <Link href="/">
                    <Logo />
                </Link>
                <HeaderNavigation navigation={navigation} />
                <div>
                    <Login />
                </div>
            </Container>
        </motion.header>
    )
}; 