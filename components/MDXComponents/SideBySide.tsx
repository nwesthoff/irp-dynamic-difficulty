import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const StyledSideBySide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: ${(props: { align: string; justify: string }) =>
    props.align ? props.align : "flex-start"};
  justify-content: ${(props: { align: string; justify: string }) =>
    props.justify ? props.justify : "flex-start"};
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
  justify: "flex-start" | "flex-end" | "center";
}

export default function SideBySide({
  children,
  align,
  justify,
}: Props): ReactElement {
  return (
    <StyledSideBySide align={align} justify={justify}>
      {children}
    </StyledSideBySide>
  );
}
