import styled from "styled-components";
import { theme } from "../config/theme";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { darken } from "polished";
import Image from "next/image";
import { FrontMatter } from "types";
import formatPath from "@utils/formatPath";

const ChapterSubTitle = styled.h3`
  position: relative;
  z-index: 2;
  color: var(--color-text-mute);
  font-size: 0.9em;
  margin: 0;
`;

const ChapterExcerpt = styled.p`
  min-width: 200px;
  max-width: 540px;
  position: relative;
  z-index: 2;
`;

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

const ChapterIndex = styled.span`
  position: absolute;
  top: -2rem;
  left: -2.5rem;
  font-size: 8rem;
  line-height: 1em;
  color: transparent;
  color: var(--color-primary);
  opacity: 0.4;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--color-secondary);

  @media (max-width: ${theme.breakpoints.tablet}px) {
    top: -1rem;
    left: -1rem;
    font-size: 4rem;
    -webkit-text-stroke-width: 1px;
  }
`;

const ChapterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8rem 2rem;

  @media (min-width: 945px) {
    flex-direction: ${(props: { reverse?: boolean }) =>
      props.reverse ? "row-reverse" : "row"};
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    flex-direction: unset;
    padding: 5rem 0;
  }
`;

const Spacer = styled.div`
  width: 5rem;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    width: 2.4rem;
  }
  @media (max-width: ${theme.breakpoints.phone}px) {
    display: none;
  }
`;

const ChapterTextContainer = styled.div`
  position: relative;
  color: #0f0f0f;
  flex-basis: 50%;
  flex-grow: 1;
  margin-bottom: 2rem;
`;

const ChapterImageContainer = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
  min-width: 300px;
  max-width: 540px;
`;

const ChapterTitle = styled.h2`
  z-index: 1;
  position: relative;
  font-size: 3.2rem;
  line-height: 1.1em;
  margin-top: 0;

  a {
    color: var(--color-fg);
    text-decoration: none;

    &:hover {
      color: var(--color-text-mute);
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

        {chapter.subtitle ? (
          <ChapterSubTitle>{chapter.subtitle}</ChapterSubTitle>
        ) : null}
        <ChapterTitle>
          <Link href={formatPath(chapter.__resourcePath)}>
            <a>{chapter.title}</a>
          </Link>
        </ChapterTitle>

        <ChapterExcerpt>{children}</ChapterExcerpt>

        <ReadChapterButton href={formatPath(chapter.__resourcePath)}>
          Read Chapter
        </ReadChapterButton>
      </ChapterTextContainer>

      {chapter?.image ? (
        <Fragment>
          <Spacer />
          <ChapterImageContainer>
            <Link href={formatPath(chapter.__resourcePath)}>
              <a>
                <Image height={400} width={600} src={chapter.image} />
              </a>
            </Link>{" "}
          </ChapterImageContainer>
        </Fragment>
      ) : null}
    </ChapterContainer>
  );
};

export default ChapterBlock;
