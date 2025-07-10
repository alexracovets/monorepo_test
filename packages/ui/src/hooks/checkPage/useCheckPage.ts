"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useCheckPage = () => {
  const pathname = usePathname();
  
  return useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    return segments[0] || '/';
  }, [pathname]);
};