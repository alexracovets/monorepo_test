"use server";

import { Config, getPayload, SanitizedConfig, } from "payload";

interface GetNavigationProps {
    config: Config;
}

export const revalidate = 60;

export const getNavigation = async ({ config }: GetNavigationProps) => {
    const payload = await getPayload({ config: config as SanitizedConfig });
    const navigation = await payload.findGlobal({
        slug: 'header',
    });
    return navigation;
}
