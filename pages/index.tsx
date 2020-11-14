import Layout from "../components/Layout";
import ChapterBlock from "../components/ChapterBlock";
import PageIntroduction from "../components/PageIntroduction";
import { theme } from "../config/theme";
import styled from "styled-components";
import MainContent from "@components/MainContent";
import { frontMatter as chapters } from "./chapters/*.mdx";
import { FrontMatter } from "types";
import Image from "next/image";
import AlertBar from "@components/AlertBar";

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  z-index: 5;
`;

const Header = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 6rem;
    line-height: 1.1em;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    h1 {
      font-size: 4rem;
      line-height: 1em;
    }
  }

  &:after {
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background: linear-gradient(to top, var(--color-bg), transparent 40%);
  }
`;

const HeaderVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.7;
`;

const NameLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage = () => {
  const wordCount = chapters
    .map((chapter) => chapter.time.words || 0)
    .reduce((words: number, totalWords: number) => {
      return words + totalWords;
    });

  return (
    <Layout>
      <AlertBar />
      <Header>
        <HeaderVideo src={`/video/sherlocked-bg.mp4`} autoPlay muted loop />
        <HeaderContent>
          <Image src="/img/sherlocked-logo.png" width={125} height={138} />
          <h1>Dynamic Difficulty in Escape Rooms</h1>
        </HeaderContent>
      </Header>
      <MainContent>
        <PageIntroduction>
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
              FEBRUARY 2021 | WORD COUNT: {wordCount} | READ TIME:{" "}
              {(wordCount / 150).toFixed()} MIN
            </span>
          </p>
        </PageIntroduction>

        <section className="small-width">
          {chapters.map((chapter: FrontMatter, i: number) => (
            <ChapterBlock
              key={chapter.title}
              chapter={chapter}
              reverse={i % 2 === 1}
            >
              {chapter.introduction}
            </ChapterBlock>
          ))}
        </section>
      </MainContent>
    </Layout>
  );
};

export default IndexPage;
