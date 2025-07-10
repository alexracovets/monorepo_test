import Link from "next/link";
import { Metadata } from "next";
import { Config } from "payload";

import { AtomButton, AtomText, Container, ArrowTo } from "@repo/ui/atoms";
import { generateMeta, getCollectionItem } from "@repo/ui/utils";
import { RulesBlock } from "@repo/ui/organisms";
import { Page } from "@payload-types";
import { ContentType } from "@repo/ui/types";
import config from "@payload-config";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const resolvedConfig = await config as Config;
  const page = await getCollectionItem({ collection: 'pages', slug: 'rules', config: resolvedConfig }) as Page;

  const meta = {
    title: page?.meta?.title || '',
    description: page?.meta?.description || '',
    image: page?.meta?.image || '',
  };

  return generateMeta({ ...meta, slug: page?.slug || '' })
}

export default async function Rules() {
  const resolvedConfig = await config as Config;
  const pageData = await getCollectionItem({ collection: 'pages', slug: 'rules', config: resolvedConfig }) as Page;

  if (!pageData) return <Container>404</Container>;

  return (
    <Container padding roundedBottom fixHeader>
      <AtomText variant="headerH1" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      <RulesBlock content={pageData.content as ContentType} />
      <AtomButton variant="destructive_secondary" asChild className="text-[20px] font-semibold gap-x-[40px] w-max" >
        <Link href={"/"}>
          Переглянути шаблони описів та листів
          <ArrowTo />
        </Link>
      </AtomButton>
    </Container>
  );
}
