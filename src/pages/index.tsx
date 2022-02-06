import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

import BodyText from "../components/body-text";
import Container from "../components/container";
import Heading from "../components/heading";
import * as styles from "../styles";

import mobileBackground from "../images/home/background-home-mobile.jpg";
import tabletBackground from "../images/home/background-home-tablet.jpg";
import desktopBackground from "../images/home/background-home-desktop.jpg";

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${mobileBackground});
  
    @media (min-width: 768px) {
      background-image: url(${tabletBackground});
    }
  
    @media (min-width: 1024px) {
      background-image: url(${desktopBackground});
    }
  }
`;

const TextContainer = styled(Container)`
  @media (min-width: 768px) {
    width: 450px;
  }
`;

const StyledContainer = styled(Container)`
  justify-content: space-around;
  margin-top: 25px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    margin-top: 106px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: end;
    margin-top: 251px;
  }
`;

const StyledHeading = styled(Heading)`
  &[data-h1] {
    margin-bottom: 16px;
    margin-top: 16px;

    @media (min-width: 768px) {
      margin-bottom: 24px;
      margin-top: 24px;
    }
  }
`;

const CircleButton = styled(Link)`
  align-items: center;
  background-color: ${styles.colors.white};
  border-radius: 50%;
  color: ${styles.colors.dark};
  display: flex;
  font-family: Bellefair, serif;
  font-size: 20px;
  height: 150px;
  justify-content: center;
  letter-spacing: 1.25px;
  margin-top: 81px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 150px;

  @media (min-width: 768px) {
    font-size: 32px;
    height: 242px;
    letter-spacing: 2px;
    margin-top: 156px;
    width: 242px;
  }

  @media (min-width: 1024px) {
    height: 274px;
    margin-top: 0;
    width: 274px;
  }
`;

const IndexPage = () => {
  return (
    <main>
      <GlobalStyles />
      <StyledContainer>
        <TextContainer>
          <StyledHeading level={5} as="p" data-h5>
            So, you want to travel to
          </StyledHeading>
          <StyledHeading level={1} as="h1" data-h1>
            Space
          </StyledHeading>
          <BodyText>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </BodyText>
        </TextContainer>
        <CircleButton to="/destination">Explore</CircleButton>
      </StyledContainer>
    </main>
  );
};

export default IndexPage;
