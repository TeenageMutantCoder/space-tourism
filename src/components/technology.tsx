import React from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

import BodyText from "./body-text";
import Container from "./container";
import Heading from "./heading";
import NavText from "./nav-text";
import SrOnlyText from "./sr-only-text";

import * as styles from "../styles";
import mobileBackground from "../images/technology/background-technology-mobile.jpg";
import tabletBackground from "../images/technology/background-technology-tablet.jpg";
import desktopBackground from "../images/technology/background-technology-desktop.jpg";

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

const OuterContainer = styled(Container)`
  margin-top: 32px;

  @media (min-width: 768px) {
    margin-top: 60px;
  }

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 26px;
    margin-bottom: 101px;
  }
`;

const Picture = styled.picture`
  width: 100%;

  @media (min-width: 1024px) {
    height: 527px;
    max-width: 515px;
    order: 3;
    width: auto;
  }

  & > img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

const InnerContainer = styled(Container)`
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  margin-top: 34px;
  width: 152px;

  @media (min-width: 768px) {
    margin-bottom: 44px;
    margin-top: 56px;
    width: 210px;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    height: 304px;
    margin-bottom: 0;
    margin-left: 8vw;
    margin-right: 80px;
    margin-top: 0;
    width: auto;
  }
`;

const NumberedNavItems = styled(Link).attrs({ activeClassName: "active" })`
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  color: ${styles.colors.white};
  display: flex;
  font-family: ${styles.heading4.fontFamily};
  font-size: ${styles.heading4.fontSize.mobile};
  height: 40px;
  justify-content: center;
  text-decoration: none;
  width: 40px;

  @media (min-width: 768px) {
    font-family: ${styles.heading4.fontFamily};
    font-size: ${styles.heading4.fontSize.tablet};
    height: 58px;
    width: 58px;
  }

  @media (min-width: 1024px) {
    font-family: ${styles.heading4.fontFamily};
    font-size: ${styles.heading4.fontSize.desktop};
    height: 80px;
    transition: border-color 0.3s ease-in-out;
    width: 80px;

    &:not(.active):hover {
      border-color: ${styles.colors.white};
    }
  }

  &.active {
    color: ${styles.colors.dark};
    background-color: ${styles.colors.white};
  }
`;

const StyledNavText = styled(NavText)`
  font-weight: normal;
  margin: 0;
  margin-bottom: 9px;
  padding: 0;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const StyledBodyText = styled(BodyText)`
  margin-bottom: 81px;
  margin-top: 16px;
  max-width: 327px;

  @media (min-width: 768px) {
    max-width: initial;
    width: 458px;
    margin-bottom: 97px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 444px;
  }
`;

type Data = {
  name: string;
  description: string;
};

type Images = {
  portrait: string;
  landscape: string;
};

interface Props {
  data: Data;
  images: Images;
}

function Technology({ data, images }: Props) {
  return (
    <div className="Technology">
      <GlobalStyles />
      <Heading pageHeading level={5} as="h1">
        <b>03</b>Space Launch 101
      </Heading>
      <OuterContainer>
        <Picture>
          <source
            srcSet={images.portrait}
            media="(min-width: 1024px)"
            type="image/png"
          />
          <img src={images.landscape} alt={`Picture of ${data.name}`} />
        </Picture>
        <InnerContainer>
          <Nav>
            <NumberedNavItems to="/technology/launch-vehicle">
              1 <SrOnlyText>Launch Vehicle</SrOnlyText>
            </NumberedNavItems>
            <NumberedNavItems to="/technology/spaceport">
              2 <SrOnlyText>Spaceport</SrOnlyText>
            </NumberedNavItems>
            <NumberedNavItems to="/technology/space-capsule">
              3<SrOnlyText>Space Capsule</SrOnlyText>
            </NumberedNavItems>
          </Nav>
          <Container>
            <StyledNavText as="h2">The Terminology...</StyledNavText>
            <Heading level={3} as="h3">
              {data.name}
            </Heading>
            <StyledBodyText>{data.description}</StyledBodyText>
          </Container>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}

export default Technology;
