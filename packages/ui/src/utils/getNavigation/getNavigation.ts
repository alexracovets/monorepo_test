"use server";

import { Config, getPayload, SanitizedConfig, } from "payload";
import { NavigationItemType } from "@repo/ui/types";

interface GetNavigationProps {
    config: Config;
}

export const getNavigation = async ({ config }: GetNavigationProps): Promise<NavigationItemType[] | null> => {
    const payload = await getPayload({ config: config as SanitizedConfig });
    const navigation = await payload.findGlobal({
        slug: 'header',
    });
    if (!navigation.page) {
        return null;
    }
    return navigation.page as NavigationItemType[];
};