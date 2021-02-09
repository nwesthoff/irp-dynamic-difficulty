import { AcademicRef } from "@config/MyReferences";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ReactLinkify from "react-linkify";
import { theme } from "@config/theme";
import { useRouter } from "next/dist/client/router";

const ReferenceLink = styled.a`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  max-width: 280px;
  vertical-align: baseline;
  margin-bottom: -8px;
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    max-width: 200px;
  }
`;

const StyledReferenceListItem = styled.li`
  font-size: 0.9rem;
  color: var(--color-text-mute);
  margin-bottom: 0.8rem;
  /* for Chrome and Edge */
  break-inside: avoid-column;
  -webkit-column-break-inside: avoid;
  /* for Firefox */
  page-break-inside: avoid;

  border: ${(props: { highlight?: boolean }) =>
    props.highlight ? "2px solid var(--color-primary)" : "none"};
  border-radius: var(--border-radius);
`;

interface Props {
  reference: AcademicRef;
}

export default function ReferenceListItem({ reference }: Props): ReactElement {
  const router = useRouter();

  return (
    <StyledReferenceListItem
      id={`ref-${reference.citationKey}`}
      highlight={router.query.ref === reference.citationKey}
    >
      <ReactLinkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <ReferenceLink target="blank" href={decoratedHref} key={key}>
            {decoratedText
              .replace("https://", "")
              .replace("http://", "")
              .replace("www.", "")}
          </ReferenceLink>
        )}
      >
        {reference.entryTags.inBib}
      </ReactLinkify>
    </StyledReferenceListItem>
  );
}
