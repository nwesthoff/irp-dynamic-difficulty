import React, { ReactElement } from "react";

interface Props {}

export default function AlertBar({}: Props): ReactElement {
  return (
    <section
      style={{
        backgroundColor: "var(--color-primary-dark)",
        color: "white",
        position: "static",
        top: 0,
        zIndex: 30,
        width: "100%",
        textAlign: "center",
        fontSize: ".8em",
        fontFamily: "Merriweather Sans, sans-serif",
        padding: ".4rem 2rem",
      }}
    >
      🚧 Hi! This is <i>very</i> much a work in progress. If you have any
      feedback, send me an{" "}
      <a href="mailto:nils@nilswesthoff.com" style={{ color: "white" }}>
        email
      </a>{" "}
      ✉️.
    </section>
  );
}
