import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../config/theme";
import ReferenceProvider from "../components/Bibliography/ReferenceProvider";
import myReferences from "../config/MyReferences";
import "../styles/Global.scss";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <NextThemeProvider defaultTheme="system">
          <ReferenceProvider references={myReferences}>
            <Component {...pageProps} />
          </ReferenceProvider>
        </NextThemeProvider>
      </ThemeProvider>
    );
  }
}
