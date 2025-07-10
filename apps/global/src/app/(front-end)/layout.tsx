"use server";

import { DefaultTemplate } from "@repo/ui/templates";
import { getNavigation } from "@repo/ui/utils";
import { NavigationItem } from "@repo/ui/types";

import "./globals.css";
import config from "@payload-config";
import { Config } from "payload";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const resolvedConfig = await config as Config;
  
  // Отримуємо навігацію з Payload
  let navigation: NavigationItem[] = [];
  try {
    const navData = await getNavigation({ config: resolvedConfig });
    if (navData?.page) {
      const pages = Array.isArray(navData.page) 
        ? navData.page 
        : [navData.page];
      
      navigation = pages
        .filter((page: any) => page && typeof page === 'object')
        .map((page: any) => ({
          id: page.id,
          name: page.name || page.title || '',
          slug: page.slug || ''
        }));
    }
  } catch (error) {
    console.error('Помилка завантаження навігації:', error);
  }
  
  // Fallback навігація, якщо дані не завантажилися
  if (navigation.length === 0) {
    navigation = [
      { id: 7, name: 'Новини', slug: 'news' },
      { id: 3, name: 'Результати роботи', slug: 'results' },
      { id: 4, name: 'Відзнаки', slug: 'awards' },
      { id: 5, name: 'Партнери', slug: 'partners' },
      { id: 6, name: 'Фото', slug: 'gallery' },
      { id: 2, name: 'Правила', slug: 'rules' }
    ];
  }
  
  return <DefaultTemplate navigation={navigation}>{children}</DefaultTemplate>;
}
