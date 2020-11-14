import * as React from "react";
import Head from "next/head";
import { PageWrapper } from "./PageWrapper";
import Nav from "./Navigation/Nav";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 2rem 0;
`;

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Dynamic Difficulty in Escape Rooms",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#FF3F56" />
        <meta name="theme-color" content="#FF3F56" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Industry Research Project on Dynamic Difficulty in Escape Rooms."
        />
        <meta property="og:url" content="https://irp.nilswesthoff.com" />
        <meta
          property="og:image"
          content="https://irp.nilswesthoff.com/img/og-image.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      {children}
      <PageWrapper>
        <StyledFooter>
          Made by{" "}
          <a href="https://nilswesthoff.com" target="blank">
            Nils
          </a>{" "}
          in close collaboration with{" "}
          <a href="https://sherlocked.nl" target="blank">
            Sherlocked
          </a>{" "}
          🗝
        </StyledFooter>
      </PageWrapper>
    </div>
  );
};

export default Layout;
