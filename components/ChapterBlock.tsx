import styled from "styled-components";
import { theme } from "../config/theme";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { darken } from "polished";
import Image from "next/image";
import { FrontMatter } from "types";
import formatPath from "@utils/formatPath";

const ReadChapterButton = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 0.8rem;
  background: ${theme.colors.primary};
  color: white;
  padding: 0.8rem 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    background: ${darken(0.05, theme.colors.primary)};
  }
`;

const Spacer = styled.div`
  width: 5rem;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 2rem;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    display: none;
  }
`;

const ChapterIndex = styled.span`
  position: absolute;
  top: -2rem;
  left: -2rem;
  font-size: 8rem;
  line-height: 1em;
  color: transparent;
  color: var(--color-primary);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--color-secondary);

  @media (max-width: ${theme.breakpoints.tablet}px) {
    top: 0.5rem;
    left: -1rem;
    font-size: 4rem;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    -webkit-text-stroke-width: 1px;
  }
`;

const ChapterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props: { reverse?: boolean }) =>
    props.reverse ? "row-reverse" : "row"};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 8rem 0;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin: 2rem 0;
  }
`;

const ChapterTextContainer = styled.div`
  position: relative;
  color: #0f0f0f;
  flex-basis: 55%;
  flex-grow: 1;

  p {
    min-width: 200px;
    max-width: 540px;
  }
`;

const ChapterImageContainer = styled.div`
  flex-basis: 30%;
  flex-grow: 1;
  min-width: 200px;
  max-width: 350px;
`;

const ChapterTitle = styled.h1`
  z-index: 1;
  position: relative;
  font-size: 4rem;
  line-height: 1em;
  margin-top: 0;

  a {
    color: var(--color-fg);
    text-decoration: none;

    &:hover {
      color: var(--color-text-muted);
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 2rem;
  }
`;

interface Props {
  chapter: FrontMatter;
  children?: ReactNode;
  reverse?: boolean;
}

const ChapterBlock = ({ reverse, children, chapter }: Props) => {
  return (
    <ChapterContainer reverse={reverse}>
      <ChapterTextContainer>
        <ChapterIndex>{chapter.index}</ChapterIndex>

        <ChapterTitle>
          <Link href={formatPath(chapter.__resourcePath)}>
            <a>{chapter.title}</a>
          </Link>
        </ChapterTitle>

        <p>{children}</p>

        <ReadChapterButton href={formatPath(chapter.__resourcePath)}>
          Read Chapter
        </ReadChapterButton>
      </ChapterTextContainer>

      {chapter?.image ? (
        <Fragment>
          <Spacer />
          <ChapterImageContainer>
            <Image
              layout="responsive"
              height={250}
              width={350}
              src={chapter.image}
            />
          </ChapterImageContainer>
        </Fragment>
      ) : null}
    </ChapterContainer>
  );
};

export default ChapterBlock;
