import React from "react";
import { Helmet } from "react-helmet";
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
    background-color: ${styles.colors.dark};
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
  }
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Space tourism website</title>
      </Helmet>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}

export default Layout;
