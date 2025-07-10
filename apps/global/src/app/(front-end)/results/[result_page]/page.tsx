import { Suspense } from "react";
import { Metadata } from "next";
import { Config } from "payload";

import { formatDate, generateMeta, getCollection, getCollectionItem } from "@repo/ui/utils";
import { Container, AtomText, ItemsPageWrapper, ArrowTo, AtomLink } from "@repo/ui/atoms";
import { ItemsPageContent } from "@repo/ui/molecules";
import { Media, Result } from "@payload-types";
import config from "@payload-config";
import { ContentType } from "@repo/ui/types";

type PageProps = {
  params: Promise<{
    result_page: string;
  }>;
};

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { result_page } = await params;
  const resolvedConfig = await config as Config;
  const page = await getCollectionItem({ collection: 'results', slug: result_page, config: resolvedConfig }) as Result;

  const meta = {
    title: page?.meta?.title || '',
    description: page?.meta?.description || '',
    image: page?.meta?.image || '',
  };

  return generateMeta({ ...meta, slug: page?.slug || '' })
};

export async function generateStaticParams() {
  try {
    const resolvedConfig = await config as Config;
    const results = await getCollection({ collection: 'results', config: resolvedConfig }) as Result[];

    return results.map((result) => ({
      result_page: result.slug,
    }));
  } catch (error) {
    console.error('Помилка при генерації статичних параметрів:', error);
    return [];
  }
};

export default async function ResultPage({ params }: PageProps) {
  const { result_page } = await params;
  const resolvedConfig = await config as Config;
  const pageData = await getCollectionItem({ collection: 'results', slug: result_page, config: resolvedConfig }) as Result;

  if (!pageData) return <Container>404</Container>;

  return (
    <ItemsPageWrapper>
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
    </ItemsPageWrapper>
  );
};