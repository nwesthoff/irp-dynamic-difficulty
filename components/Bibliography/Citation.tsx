import React, {
  ReactElement,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ReferenceContext } from "./ReferenceProvider";
import styled from "styled-components";
import { theme } from "@config/theme";
import { transparentize } from "polished";
import Link from "next/link";

const TooltipWrapper = styled(Link)`
  color: ${transparentize(0.5, theme.colors.secondary)};
  font-size: 0.7em;
  transition: all 150ms ease-out;

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.secondary};
  }
`;

const CitationStyled = styled.span`
  margin-left: 0.2rem;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  display: inline-block;
  text-decoration: none;
`;

interface Props {
  id: string;
  children?: ReactNode;
  page?: string;
  hideAuthor?: boolean;
}

export default function Citation({
  id,
  page,
  children,
  hideAuthor,
}: Props): ReactElement {
  const references = useContext(ReferenceContext);

  const currentRef = references?.find((ref) => {
    return ref.citationKey === id;
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return currentRef ? (
    <CitationStyled>
      <TooltipWrapper
        href={{
          pathname: `/`,
          hash: currentRef.entryType.toLowerCase(),
          query: { ref: currentRef.citationKey },
        }}
      >
        <a data-tip={currentRef.entryTags.inBib}>
          {children ||
            `(${hideAuthor !== true ? currentRef.entryTags.author + ", " : ""}${
              currentRef.entryTags.year
            }${page ? `, pp. ${page}` : ""})`}
        </a>
      </TooltipWrapper>
    </CitationStyled>
  ) : (
    <span style={{ color: "red" }}>[FIX SOURCE]</span>
  );
}
