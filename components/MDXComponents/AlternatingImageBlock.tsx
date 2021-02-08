import styled from "styled-components";
import { theme } from "../../config/theme";
import Image from "next/image";

const ChapterExcerpt = styled.p`
  min-width: 220px;
  max-width: 540px;
  position: relative;
  z-index: 2;
`;

const ChapterTextContainer = styled.div`
  position: relative;
  color: #0f0f0f;
  flex-basis: 50%;
  flex-grow: 1;

  @media (max-width: ${theme.breakpoints.phone}px) {
    margin-bottom: 1.2rem;
  }
`;

const ChapterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3.2rem 0;
  flex-direction: row wrap;

  @media (max-width: ${theme.breakpoints.phone}px) {
    flex-direction: unset;
    padding: 2rem 0;
  }

  &:nth-child(even) {
    ${ChapterTextContainer} {
      margin-right: 3.2rem;

      @media (max-width: ${theme.breakpoints.tablet}px) {
        margin-right: 2rem;
      }

      @media (max-width: ${theme.breakpoints.phone}px) {
        margin-right: 0;
      }
    }
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    ${ChapterTextContainer} {
      margin-left: 3.2rem;

      @media (max-width: ${theme.breakpoints.tablet}px) {
        margin-left: 2rem;
      }

      @media (max-width: ${theme.breakpoints.phone}px) {
        margin-left: 0;
      }
    }
  }
`;

const ChapterImageContainer = styled.div`
  flex-basis: 35%;
  flex-grow: 1;
  min-width: 260px;
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
        <ChapterImageContainer>
          <Image layout="responsive" height={300} width={300} src={src} />
        </ChapterImageContainer>
      ) : null}
    </ChapterContainer>
  );
};

export default AlternatingImageBlock;
