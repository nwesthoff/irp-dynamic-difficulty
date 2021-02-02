import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledVideo = styled.video`
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export default function MDXVideo(props: any): ReactElement {
  return (
    <figure>
      <StyledVideo {...props} />
      {props.title ? <figcaption>{props.title}</figcaption> : null}
    </figure>
  );
}
