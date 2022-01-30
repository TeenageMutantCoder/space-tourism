import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./header";

import * as styles from "../styles";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    @media (prefers-reduced-motion: reduce) {
      transition: initial !important;
      animation: initial !important;
    }
  }

  html {
    min-height: 100vh;
  }

  body {
    background: black;
    color: ${styles.colors.white};
    height: 100%;
  }

  main {
    padding-left: 24px;
    padding-right: 24px;
  }

  p {
    color: ${styles.bodyText.color};
    text-align: center;
  }

  a {
    color: ${styles.colors.white};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    text-transform: uppercase;
  }

  h1 {
    color: ${styles.heading1.color};
    font-family: ${styles.heading1.font};
    font-size: ${styles.heading1.fontSize};
  }

  h2 {
    color: ${styles.heading2.color};
    font-family: ${styles.heading2.font};
    font-size: ${styles.heading2.fontSize};
  }

  h3 {
    color: ${styles.heading3.color};
    font-family: ${styles.heading3.font};
    font-size: ${styles.heading3.fontSize};
  }

  h4 {
    color: ${styles.heading4.color};
    font-family: ${styles.heading4.font};
    font-size: ${styles.heading4.fontSize};
  }

  h5 {
    color: ${styles.heading5.color};
    font-family: ${styles.heading5.font};
    font-size: ${styles.heading5.fontSize};
    letter-spacing: ${styles.heading5.characterSpace};
  }
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}

export default Layout;
