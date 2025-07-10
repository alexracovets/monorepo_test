import { Suspense } from "react";
import { Metadata } from "next";
import { Config } from "payload";

import { generateMeta, getCollection, getCollectionItem } from "@repo/ui/utils";
import { AtomText, Container } from "@repo/ui/atoms";
import { PartnersBlock } from "@repo/ui/organisms";
import { Page, Partner } from "@payload-types";
import config from "@payload-config";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const resolvedConfig = await config as Config;
  const page = await getCollectionItem({ collection: 'pages', slug: 'partners', config: resolvedConfig }) as Page;

  const meta = {
    title: page?.meta?.title || '',
    description: page?.meta?.description || '',
    image: page?.meta?.image || '',
  };

  return generateMeta({ ...meta, slug: page?.slug || '' })
}

export default async function Partners() {
  const resolvedConfig = await config as Config;
  const pageData = await getCollectionItem({ collection: 'pages', slug: 'partners', config: resolvedConfig }) as Page;
  if (!pageData) return <Container>404</Container>;
  const partners = await getCollection({ collection: 'partners', config: resolvedConfig }) as Partner[];

  return (
    <Suspense fallback={<Container>Завантаження...</Container>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <PartnersBlock items={partners} />
      </Container>
    </Suspense>
  );
}
