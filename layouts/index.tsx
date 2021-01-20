import React, { ReactNode } from "react";
import { FrontMatter } from "types/index";
import Layout from "@components/Layout";
import PageIntroduction from "@components/PageIntroduction";
import MainContent from "@components/MainContent";
import NextChapter from "@components/Navigation/NextChapter";
import { MDXProvider } from "@mdx-js/react";

import { frontMatter as chapters } from "../pages/chapters/*.mdx";
import MDXImage from "@components/MDXComponents/MDXImage";

interface Props {
  frontMatter: FrontMatter;
  children: ReactNode;
}

const components = {
  img: MDXImage,
};

const DefaultLayout = ({ frontMatter, children }: Props) => (
  <Layout title={`${frontMatter.title} | Dynamic Difficulty`}>
    <MainContent>
      <PageIntroduction className="wide-width">
        <h2>{frontMatter.subtitle}</h2>
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.introduction}</p>
      </PageIntroduction>

      <MDXProvider components={components}>{children}</MDXProvider>
    </MainContent>

    {chapters[frontMatter.index + 1] ? (
      <NextChapter
        chapter={
          chapters.sort((chapter, chapterNext) => {
            if (chapter.index < chapterNext.index) {
              return -1;
            }
            if (chapter.index > chapterNext.index) {
              return 1;
            }
            return 0;
          })[frontMatter.index + 1]
        }
      />
    ) : null}
  </Layout>
);

export default DefaultLayout;
