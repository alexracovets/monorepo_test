import { Suspense } from "react";
import { Metadata } from "next";
import { Config } from "payload";

import { AtomLink, AtomText, Container, ArrowTo } from "@repo/ui/atoms";
import { ItemsPageContent } from "@repo/ui/molecules";
import { Award, Media } from "@payload-types";
import { formatDate, generateMeta, getCollection, getCollectionItem } from "@repo/ui/utils";
import { ContentType } from "@repo/ui/types";
import config from "@payload-config";

type PageProps = {
  params: Promise<{
    award_page: string;
  }>;
};

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { award_page } = await params;
  const resolvedConfig = await config as Config;
  const page = await getCollectionItem({ collection: 'awards', slug: award_page, config: resolvedConfig }) as Award;

  const meta = {
    title: page?.meta?.title || '',
    description: page?.meta?.description || '',
    image: page?.meta?.image || '',
  };

  return generateMeta({ ...meta, slug: page?.slug || '' })
}

export async function generateStaticParams() {
  try {
    const resolvedConfig = await config as Config;
    const awards = await getCollection({ collection: 'awards', config: resolvedConfig }) as Award[];
    return awards.map((award: Award) => ({
      award_page: award.slug,
    }));
  } catch (error) {
    console.error('Помилка при генерації статичних параметрів:', error);
    return [];
  }
}

export default async function AwardPage({ params }: PageProps) {
  const { award_page } = await params;
  const resolvedConfig = await config as Config;
  const pageData = await getCollectionItem({ collection: 'awards', slug: award_page, config: resolvedConfig }) as Award;

  if (!pageData) return <Container>404</Container>;

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <AtomLink variant="toBack" href={`/results`}>
        <ArrowTo back /> Назад
      </AtomLink>
      <AtomText variant="headerH1" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      {
        pageData.date && (
          <AtomText variant="pageDate" asChild>
            <p>{formatDate(pageData.date)}</p>
          </AtomText>
        )
      }
      {pageData.description && (
        <AtomText variant="pageDescription" asChild>
          <p>{pageData.description}</p>
        </AtomText>
      )}
      <ItemsPageContent content={pageData.content as ContentType} image={pageData.image as Media} />
    </Suspense>
  );
}