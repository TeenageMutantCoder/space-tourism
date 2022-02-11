import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header";

import * as styles from "../styles";
import favicon from "../images/favicon-32x32.png";
import socialCardImage from "../images/social-card-image.jpg";

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
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            name: `description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:title`,
            content: site.siteMetadata.title,
          },
          {
            property: `og:description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:url`,
            content: site.siteMetadata?.siteUrl || ``,
          },
          {
            property: `og:image`,
            content: socialCardImage,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: site.siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: site.siteMetadata.description,
          },
        ]}
      >
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
