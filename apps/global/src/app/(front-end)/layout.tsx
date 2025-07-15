"use server";

import { Config } from "payload";

import { DefaultTemplate } from "@repo/ui/templates";
import { getNavigation } from "@repo/ui/utils";
import config from "@payload-config";

import "@repo/ui/styles.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const resolvedConfig = await config as Config;

  const navigation = await getNavigation({ config: resolvedConfig });

  return <DefaultTemplate navigation={navigation}>{children}</DefaultTemplate>;
}
