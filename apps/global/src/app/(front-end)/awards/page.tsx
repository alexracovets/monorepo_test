import { Suspense } from "react";
import { Metadata } from "next";
import { Config } from "payload";

import { generateMeta, getCollection, getCollectionItem } from "@repo/ui/utils";
import { AtomText, Container } from "@repo/ui/atoms";
import { AwardsBlock } from "@repo/ui/organisms";
import { Award, Page } from "@payload-types";
import config from "@payload-config";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const resolvedConfig = await config as Config;
  const page = await getCollectionItem({ collection: 'pages', slug: 'awards', config: resolvedConfig }) as Page;

  const meta = {
    title: page?.meta?.title || '',
    description: page?.meta?.description || '',
    image: page?.meta?.image || '',
  };

  return generateMeta({ ...meta, slug: page?.slug || '' })
}

export default async function Awards() {
  const resolvedConfig = await config as Config;
  const pageData = await getCollectionItem({ collection: 'pages', slug: 'awards', config: resolvedConfig }) as Page;

  if (!pageData) return <Container>404</Container>;

  const awards = await getCollection({ collection: 'awards', config: resolvedConfig }) as Award[];

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <AwardsBlock items={awards} />
      </Container>
    </Suspense>
  );
}
