import React, { ReactElement, ReactNode } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { AcademicRef } from "../../config/MyReferences";

export const ReferenceContext = React.createContext<AcademicRef[] | undefined>(
  undefined
);

const StyledReactTooltip = styled(ReactTooltip)`
  max-width: 650px;
  line-height: 1.6em;
`;

interface Props {
  children: ReactNode;
  references: AcademicRef[];
}

export default function ReferenceProvider({
  children,
  references,
}: Props): ReactElement {
  return (
    <ReferenceContext.Provider value={references}>
      <StyledReactTooltip
        wrapper="span"
        data-multiline="true"
        backgroundColor="#161616"
      />
      {children}
    </ReferenceContext.Provider>
  );
}
