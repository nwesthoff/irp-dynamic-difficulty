import Layout from "../components/Layout";
import ChapterBlock from "../components/ChapterBlock";
import PageIntroduction from "../components/PageIntroduction";
import { PageWrapper } from "../components/PageWrapper";
import { theme } from "../config/theme";
import styled from "styled-components";

import { frontMatter as chapters } from "./chapters/*.mdx";
import { FrontMatter } from "types";

const NameLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage = () => (
  <Layout title="Dynamic Difficulty">
    <PageWrapper>
      <PageIntroduction>
        <h1>Dynamic Difficulty in escape rooms</h1>
        <p>
          This is an Industry Research Project on Dynamic Difficulty in Escape
          Rooms. <i>Work in progress.</i>
        </p>
        <p
          style={{
            fontSize: ".8em",
            border: "none",
            fontFamily: "Merriweather Sans",
          }}
        >
          BY{" "}
          <NameLink href="https://nilswesthoff.com" target="blank">
            NILS WESTHOFF
          </NameLink>{" "}
          <br />
          <span style={{ opacity: 0.5 }}>
            FEBRUARY 2021 | WORD COUNT:{" "}
            {chapters?.reduce(
              (chapter: FrontMatter, nextChapter: FrontMatter) =>
                chapter.time.words + nextChapter.time.words
            )}
          </span>
        </p>
      </PageIntroduction>

      {chapters.map((chapter: FrontMatter, i: number) => (
        <ChapterBlock
          key={chapter.title}
          title={chapter.title || ""}
          index={i}
          reverse={i % 2 === 1}
        >
          {chapter.introduction}
        </ChapterBlock>
      ))}
    </PageWrapper>
  </Layout>
);

export default IndexPage;
