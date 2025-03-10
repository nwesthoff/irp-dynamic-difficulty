import React, { ReactElement } from "react";
import ContentContainer from "../ContentContainer";
import { PageWrapper } from "../PageWrapper";
import styled from "styled-components";
import { theme } from "@config/theme";
import { darken } from "polished";
import { MdArrowForward } from "react-icons/md";
import { FrontMatter } from "types";
import formatPath from "@utils/formatPath";
import Link from "next/link";

const NextLinkTitle = styled.h2`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 0 1.2rem;
`;

const NextLinkArrow = styled(MdArrowForward)`
  margin-left: 0.4rem;
  opacity: 0.6;
`;

const NextLinkWrapper = styled.div`
  background-color: ${theme.colors.primary};
  margin-top: 5.2rem;

  h4 {
    margin-bottom: 0;
    font-weight: lighter;
    text-transform: uppercase;
    color: white;
    opacity: 0.75;
  }

  svg {
    transition: all 120ms ease-out;
  }

  &:hover {
    background-color: ${darken(0.05, theme.colors.primary)};

    svg {
      transform: translate3d(20%, 0, 0);
      opacity: 1;
    }
  }
`;

interface Props {
  customHref?: string;
  chapter: FrontMatter;
}

export default function NextChapter({
  customHref,
  chapter,
}: Props): ReactElement {
  return (
    <Link href={customHref || "/" + formatPath(chapter.__resourcePath)}>
      <a style={{ textDecoration: "none" }}>
        <NextLinkWrapper>
          <PageWrapper>
            <ContentContainer wide>
              <h4>To chapter {chapter.index}</h4>
              <NextLinkTitle>
                {chapter.title}
                <NextLinkArrow fontSize="inherit" />
              </NextLinkTitle>
            </ContentContainer>
          </PageWrapper>
        </NextLinkWrapper>
      </a>
    </Link>
  );
}
