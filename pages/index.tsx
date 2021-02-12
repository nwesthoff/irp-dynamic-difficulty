import References from "@components/Bibliography/References";
import MainContent from "@components/MainContent";
import { theme } from "@config/theme";
import Image from "next/image";
import styled from "styled-components";
import { FrontMatter } from "types";
import ChapterBlock from "../components/ChapterBlock";
import Layout from "../components/Layout";
import PageIntroduction from "../components/PageIntroduction";
import { frontMatter as chapters } from "./chapters/*.mdx";

const PageTitle = styled.h1`
  font-size: 6rem;
  line-height: 1.2em;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 4.8rem;
    line-height: 1.1em;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 3rem;
  }
`;

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

  return (
    <Layout>
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
            <PageTitle>Dynamic Difficulty in Escape Rooms</PageTitle>
          </div>
        </HeaderContent>
      </Header>
      <MainContent>
        <PageIntroduction className="wide-width">
          <h2 style={{ fontSize: "1.4em" }}>Abstract</h2>
          <p style={{ maxWidth: "768px" }}>
            This industry-based research project explores how dynamic difficulty
            can offer a better experience to a select group of escape room
            visitors. It discusses the necessity of a correctly moderated
            difficulty level, and explores several technical implementations.
            Literature shows that sentiment analysis through physiological
            measurement (HR, HRV & GSR) as well as facial analysis show
            insufficient reliability to determine the desired difficulty of an
            individual. Additionally, it describes a method to determine the
            desired difficulty for a group as a whole with more potential.
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
              {/* MDX Wordcount + abstract */}
              FEBRUARY 2021 | WORD COUNT: {wordCount + 82} | READ TIME:{" "}
              {(wordCount / 120).toFixed()} MIN
            </span>
          </p>
        </PageIntroduction>

        <section className="wide-width">
          {chapters
            .sort((chapter, chapterNext) => {
              if (chapter.index < chapterNext.index) {
                return -1;
              }
              if (chapter.index > chapterNext.index) {
                return 1;
              }
              return 0;
            })
            .map((chapter: FrontMatter, i: number) => (
              <ChapterBlock
                key={chapter.title}
                chapter={chapter}
                reverse={i % 2 === 1}
              >
                {chapter.introduction}
              </ChapterBlock>
            ))}
        </section>

        <References />
      </MainContent>
    </Layout>
  );
};

export default IndexPage;
