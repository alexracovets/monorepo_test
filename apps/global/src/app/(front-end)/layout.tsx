import { DefaultTemplate } from "@repo/ui/templates";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}
