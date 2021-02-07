import styled from "styled-components";
import { theme } from "../../config/theme";
import { Fragment } from "react";
import Image from "next/image";

const ChapterExcerpt = styled.p`
  min-width: 200px;
  max-width: 540px;
  position: relative;
  z-index: 2;
`;

const ChapterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3.2rem 0;

  @media (min-width: ${theme.breakpoints.phone}px) {
    flex-direction: row;

    & :nth-child(odd) {
      flex-direction: row-reverse;
    }
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    flex-direction: unset;
    padding: 2rem 0;
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

  @media (max-width: ${theme.breakpoints.phone}px) {
    margin-bottom: 1.2rem;
  }
`;

const ChapterImageContainer = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
  min-width: 300px;
  max-width: 540px;
`;

const ChapterTitle = styled.h3`
  z-index: 1;
  color: var(--color-fg);
  font-weight: bold;
  position: relative;
  line-height: 1.1em;
  margin-top: 0;
`;

interface Props {
  src: string;
  title: string;
  desc: string;
}

const AlternatingImageBlock = ({ src, title, desc }: Props) => {
  return (
    <ChapterContainer>
      <ChapterTextContainer>
        <ChapterTitle>{title}</ChapterTitle>

        <ChapterExcerpt>{desc}</ChapterExcerpt>
      </ChapterTextContainer>

      {src ? (
        <Fragment>
          <Spacer />
          <ChapterImageContainer>
            <Image layout="responsive" height={300} width={300} src={src} />
          </ChapterImageContainer>
        </Fragment>
      ) : null}
    </ChapterContainer>
  );
};

export default AlternatingImageBlock;
