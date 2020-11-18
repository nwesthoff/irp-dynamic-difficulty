import Layout from "../components/Layout";
import ChapterBlock from "../components/ChapterBlock";
import PageIntroduction from "../components/PageIntroduction";
import styled from "styled-components";
import MainContent from "@components/MainContent";
import { frontMatter as chapters } from "./chapters/*.mdx";
import { FrontMatter } from "types";
import Image from "next/image";
import { Fragment } from "react";
import { theme } from "@config/theme";

const HeaderContent = styled(MainContent)`
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: 5;
  @media (prefers-color-scheme: light) {
    img {
      filter: invert(1);
    }
  }

  @media (prefers-color-scheme: dark) {
    h1 {
      filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
    }
  }
`;

const Header = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;

  &:after {
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;

    background: linear-gradient(to top, var(--color-bg), transparent 40%);
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    height: 70vh;
  }
`;

const HeaderVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.8;

  @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  }
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

  const alertNode = (
    <Fragment>
      Hi! This is a work in progress, I love{" "}
      <a href="mailto:nils@nilswesthoff.com" style={{ color: "white" }}>
        feedback
      </a>{" "}
      🚧
    </Fragment>
  );

  return (
    <Layout alert={alertNode}>
      <Header>
        <HeaderVideo src={`/video/sherlocked-bg.mp4`} autoPlay muted loop />
        <HeaderContent>
          <div className="wide-width">
            <Image
              src="/img/sherlocked-logo.png"
              priority
              width={125}
              height={138}
            />
            <h1>Dynamic Difficulty in Escape Rooms</h1>
          </div>
        </HeaderContent>
      </Header>
      <MainContent>
        <PageIntroduction className="wide-width">
          <p>
            This is an Industry Research Project on Dynamic Difficulty in Escape
            Rooms. <i>Work in progress.</i>
          </p>
          <p
            style={{
              fontSize: ".8em",
              border: "none",
              fontFamily: "Merriweather Sans, sans-serif",
              fontWeight: 300,
            }}
          >
            BY{" "}
            <NameLink href="https://nilswesthoff.com" target="blank">
              NILS WESTHOFF
            </NameLink>{" "}
            <br />
            <span style={{ opacity: 0.5, fontSize: "0.75em" }}>
              FEBRUARY 2021 | WORD COUNT: {wordCount} | READ TIME:{" "}
              {(wordCount / 150).toFixed()} MIN
            </span>
          </p>
        </PageIntroduction>

        <section className="wide-width">
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
