import { theme } from "@config/theme";
import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const CalloutTitle = styled.h4`
  font-size: 1em;
  font-weight: bold;
  margin: 1.2rem 0 0;
  @media (max-width: ${theme.breakpoints.tablet}px) {
    margin: 0.4rem 0 0;
  }
`;

const CalloutEmoji = styled.div`
  font-size: 1.5em;
`;

const StyledCallout = styled.div`
  padding: 0.4rem 2rem 0.8rem;
  margin: 1.2rem 0;
  background-color: var(--color-bg-dark);
  border-radius: var(--border-radius);
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  p {
    margin: 0.4rem 0;
    font-size: 0.9em;
    max-width: 580px;
    min-width: 240px;
  }

  ul {
    margin: 0 0 0.4rem;
  }

  li {
    font-size: 0.9em;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 1.2rem;
    gap: 0.8rem;
  }
`;

interface Props {
  children: ReactNode;
  emoji?: string;
  title?: string;
}

export default function Callout({
  children,
  emoji = "💡",
  title = "Insight",
}: Props): ReactElement {
  return (
    <StyledCallout>
      <CalloutEmoji>{emoji}</CalloutEmoji>
      <div>
        <CalloutTitle>{title}</CalloutTitle>
        {children}
      </div>
    </StyledCallout>
  );
}
