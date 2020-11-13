import React, { ReactNode } from "react";
import { FrontMatter } from "types/index";
import Layout from "@components/Layout";
import PageIntroduction from "@components/PageIntroduction";
import { PageWrapper } from "@components/PageWrapper";
import ContentContainer from "@components/ContentContainer";
import NextChapter from "@components/Navigation/NextChapter";

interface Props {
  frontMatter: FrontMatter;
  children: ReactNode;
}

const DefaultLayout = ({ frontMatter, children }: Props) => (
  <Layout title={`${frontMatter.title} | Dynamic Difficulty`}>
    <PageWrapper>
      <PageIntroduction>
        <h1>Introduction</h1>
        <p>
          Escape rooms are more so about escaping reality for an hour or two,
          than to break free from a small claustrophobic room.
        </p>
      </PageIntroduction>

      <ContentContainer>{children}</ContentContainer>
    </PageWrapper>
    <NextChapter title="Discover" index={1} />
  </Layout>
);

export default DefaultLayout;
