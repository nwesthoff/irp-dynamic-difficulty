import { theme } from "@config/theme";
import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const Alert = styled.div`
  background-color: var(--color-primary-dark);
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.3em;
  padding: 0.8rem 2rem;
  font-family: Merriweather Sans, sans-serif;
  height: 60px;
  font-weight: 300;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    font-size: 0.9em;
    padding: 0.4rem 1.2rem;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    font-size: 0.75em;
    height: 40px;
  }
`;

interface Props {
  alertText: ReactNode | string;
}

export default function AlertBar({ alertText }: Props): ReactElement {
  return (
    <Alert>
      <span>{alertText}</span>
    </Alert>
  );
}
