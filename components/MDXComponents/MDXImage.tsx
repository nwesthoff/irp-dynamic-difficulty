import React, { ReactElement } from "react";

export default function NextImage(props: any): ReactElement {
  return (
    <figure>
      <img {...props} />
      {props.title ? <figcaption>{props.title}</figcaption> : null}
    </figure>
  );
}
