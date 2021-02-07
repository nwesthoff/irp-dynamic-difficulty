import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const StyledSideBySide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: ${(props: { align: string }) =>
    props.align ? props.align : "flex-start"};
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
  align: "flex-start" | "flex-end" | "center";
}

export default function SideBySide({ children, align }: Props): ReactElement {
  return <StyledSideBySide align={align}>{children}</StyledSideBySide>;
}
