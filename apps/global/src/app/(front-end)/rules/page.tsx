
import config from "@payload-config";
import { Config } from "payload";
import { Metadata } from "next";

import { AtomText, Container } from "@repo/ui/atoms";
import { generateMeta, getCollectionItem } from "@repo/ui/utils";
import { ContentType, FileType, LetterExampleType } from "@repo/ui/types";
import { RulesBlock } from "@repo/ui/organisms";
import { FilesBlock, LetterTemplate } from "@repo/ui/molecules";
import { Page } from "@payload-types";

export const revalidate = 60;

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
    <Container padding roundedBottom roundedTop fixedMargin>
      <AtomText variant="headerH1" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      <RulesBlock content={pageData.content as ContentType} />
      {pageData.file_list && <FilesBlock list={pageData.file_list as FileType[]} />}
      {pageData.letter_example && <LetterTemplate list={pageData.letter_example as LetterExampleType[]} />}
    </Container>
  );
}
