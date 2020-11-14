import React, { ReactNode } from "react";
import { FrontMatter } from "types/index";
import Layout from "@components/Layout";
import PageIntroduction from "@components/PageIntroduction";
import MainContent from "@components/MainContent";
import NextChapter from "@components/Navigation/NextChapter";

import { frontMatter as chapters } from "../pages/chapters/*.mdx";

interface Props {
  frontMatter: FrontMatter;
  children: ReactNode;
}

const DefaultLayout = ({ frontMatter, children }: Props) => (
  <Layout title={`${frontMatter.title} | Dynamic Difficulty`}>
    <MainContent>
      <PageIntroduction>
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.introduction}</p>
      </PageIntroduction>

      {children}
    </MainContent>

    {chapters[frontMatter.index + 1] ? (
      <NextChapter chapter={chapters[frontMatter.index + 1]} />
    ) : null}
  </Layout>
);

export default DefaultLayout;
