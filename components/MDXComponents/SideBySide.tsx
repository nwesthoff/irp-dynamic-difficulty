import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const StyledSideBySide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  gap: 2rem;

  & > figure {
    flex-basis: 30%;
    min-width: 280px;
    flex-grow: 1;
  }
`;

interface Props {
  children: ReactNode;
}

export default function SideBySide({ children }: Props): ReactElement {
  return <StyledSideBySide>{children}</StyledSideBySide>;
}
