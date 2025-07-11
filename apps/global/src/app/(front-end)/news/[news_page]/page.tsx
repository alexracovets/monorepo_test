import { Suspense } from "react";
import { Metadata } from "next";
import { Config } from "payload";

import { generateMeta, getCollectionItem, getNews, getNewsItem } from "@repo/ui/utils";
import { NewsItemContent } from "@repo/ui/molecules";
import { Page } from "@payload-types";
import { ApiNewsItem } from "@repo/ui/types";
import { formatDate } from "@repo/ui/utils";
import { AtomText } from "@repo/ui/atoms";
import config from "@payload-config";

import "@repo/ui/styles/news_content.scss";

export const revalidate = 60;

interface ExampleStepsProps {
  params: Promise<{ news_page: string; }>
}

export async function generateMetadata(): Promise<Metadata> {
  const resolvedConfig = await config as Config;
  const page = await getCollectionItem({ collection: 'pages', slug: 'news', config: resolvedConfig }) as Page;

  const meta = {
    title: page?.meta?.title || '',
    description: page?.meta?.description || '',
    image: page?.meta?.image || '',
  };

  return generateMeta({ ...meta, slug: page?.slug || '' })
}

export async function generateStaticParams() {
  try {
    const news = await getNews();
    return news.map((news: ApiNewsItem) => ({
      news_page: news.slug,
    }));
  } catch (error) {
    console.error('Помилка при генерації статичних параметрів:', error);
    return [];
  }
}

export default async function NewsPage({ params }: ExampleStepsProps) {
  const { news_page } = await params;
  const pageData = await getNewsItem(news_page) as ApiNewsItem;

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <AtomText variant="headerH1" asChild >
        <h1> {pageData.title}</h1>
      </AtomText >
      {pageData.date && <AtomText variant="pageDate" asChild><p>{formatDate(pageData.date)}</p></AtomText>}
      <div className="page-content mb-[32px]" dangerouslySetInnerHTML={{ __html: pageData.short_description ?? "" }} />
      <NewsItemContent content={pageData.description} image={pageData.images.banner[0]} />
    </Suspense>
  );
}