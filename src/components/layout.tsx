import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

import Header from "./header";

import * as styles from "../styles";
import favicon from "../images/favicon-32x32.png";

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

  body {
    background-color: ${styles.colors.dark};
    background-size: cover;
    background-repeat: no-repeat;
  }

  html {
    min-height: 100vh;
  }

  html, body, #___gatsby, #___gatsby > div, main {
    display: flex;
    flex-direction: column;
  }

  body, #___gatsby, #___gatsby > div, main, main > * {
    flex: 1;
  }
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
      </Helmet>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}

export default Layout;
