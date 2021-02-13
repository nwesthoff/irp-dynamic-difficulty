import Layout from "@components/Layout";
import MainContent from "@components/MainContent";
import MDXImage from "@components/MDXComponents/MDXImage";
import MDXVideo from "@components/MDXComponents/MDXVideo";
import NextChapter from "@components/Navigation/NextChapter";
import PageIntroduction from "@components/PageIntroduction";
import { MDXProvider } from "@mdx-js/react";
import React, { ReactNode } from "react";
import { FrontMatter } from "types/index";
import { frontMatter as chapters } from "../pages/chapters/*.mdx";

interface Props {
  frontMatter: FrontMatter;
  children: ReactNode;
}

const components = {
  img: MDXImage,
  video: MDXVideo,
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
