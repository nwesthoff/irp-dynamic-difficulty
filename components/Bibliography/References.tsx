import React, { useContext } from "react";
import styled from "styled-components";
import ContentContainer from "../ContentContainer";
import { ReferenceContext } from "./ReferenceProvider";
import { theme } from "../../config/theme";
import ReferenceListItem from "./ReferenceListItem";

const ReferenceWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--color-bg-dark);
  margin: 4rem 0;
`;

const ReferenceList = styled.ul`
  column-count: 2;
  column-gap: 4rem;
  padding-left: 1rem;

  @media (max-width: ${theme.breakpoints.desktop}px) {
    column-gap: 3rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    column-count: 1;
  }
`;

export default function References() {
  const references = useContext(ReferenceContext);

  const sortedReferences = references?.sort((a, b) => {
    return a.entryTags.inBib > b.entryTags.inBib
      ? 1
      : b.entryTags.inBib > a.entryTags.inBib
      ? -1
      : 0;
  });

  const academicReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "ACADEMIC"
  );
  const tradeReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "TRADEMAG"
  );
  const trustedReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "TRUSTED"
  );
  const personalReferences = sortedReferences?.filter(
    (ref) => ref.entryType === "PERSONAL"
  );

  return (
    <ReferenceWrapper>
      <ContentContainer wide>
        <h2>References</h2>
        {academicReferences && academicReferences?.length > 0 ? (
          <div>
            <a id="academic">
              <h4>Academic</h4>
            </a>
            <ReferenceList>
              {academicReferences.map((ref) => (
                <ReferenceListItem key={ref.citationKey} reference={ref} />
              ))}
            </ReferenceList>
          </div>
        ) : null}

        {tradeReferences && tradeReferences?.length > 0 ? (
          <div>
            <a id="trademag">
              <h4>Trade magazines</h4>
            </a>
            <ReferenceList>
              {tradeReferences.map((ref) => (
                <ReferenceListItem key={ref.citationKey} reference={ref} />
              ))}
            </ReferenceList>
          </div>
        ) : null}

        {trustedReferences && trustedReferences?.length > 0 ? (
          <div>
            <a id="trusted">
              <h4>Trusted Source</h4>
            </a>
            <ReferenceList>
              {trustedReferences.map((ref) => (
                <ReferenceListItem key={ref.citationKey} reference={ref} />
              ))}
            </ReferenceList>
          </div>
        ) : null}

        {personalReferences && personalReferences?.length > 0 ? (
          <div>
            <a id="personal">
              <h4>Personal Communication</h4>
            </a>
            <ReferenceList>
              {personalReferences.map((ref) => (
                <ReferenceListItem key={ref.citationKey} reference={ref} />
              ))}
            </ReferenceList>
          </div>
        ) : null}
      </ContentContainer>
    </ReferenceWrapper>
  );
}
