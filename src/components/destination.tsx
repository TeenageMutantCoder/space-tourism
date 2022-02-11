import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import BodyText from "./body-text";
import Container from "./container";
import Heading from "./heading";
import NavText, { navHoverAnimation } from "./nav-text";
import Subheading from "./subheading";

import * as styles from "../styles";
import mobileBackground from "../images/destination/background-destination-mobile.jpg";
import tabletBackground from "../images/destination/background-destination-tablet.jpg";
import desktopBackground from "../images/destination/background-destination-desktop.jpg";

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
  margin-bottom: 58px;
  margin-top: 32px;

  @media (min-width: 1024px) {
    align-items: end;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 62px;
    margin-top: 64px;
  }
`;

const Picture = styled.picture`
  img {
    width: 170px;
    height: 170px;

    @media (min-width: 768px) {
      width: 300px;
      height: 300px;
    }

    @media (min-width: 1024px) {
      width: 445px;
      height: 445px;
    }
  }
`;

const TextContainer = styled(Container)`
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    width: 573px;
  }
`;

const Nav = styled.nav`
  display: flex;
  height: max-content;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 26px;
  width: 237.5px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 53px;
    width: 285.5px;
  }
`;

const StyledNavText = styled(NavText).attrs({ partiallyActive: true })`
  color: ${styles.colors.lightBlue};
  line-height: initial;
  margin-bottom: 0;
  padding-bottom: 12px;
  padding-left: 0;

  media (min-width: 1024px) {
    ${navHoverAnimation};
  }

  &.active {
    color: ${styles.navText.color};
    ::before {
      display: block;
      width: 100%;
      height: 3px;
      right: initial;
      bottom: 0;
    }
  }
`;

const StyledBodyText = styled(BodyText)`
  @media (min-width: 768px) {
    height: 128px;
    margin-top: 8px;
  }
`;

const DistanceTravelContainer = styled(Container)`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  justify-content: space-evenly;
  margin-top: 35px;
  padding-top: 33px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 49px;
    padding-top: 28px;
  }

  @media (min-width: 1024px) {
    justify-content: initial;
  }
`;

const InfoContainer = styled(Container)`
  &:first-child {
    margin-bottom: 32px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }

    @media (min-width: 1024px) {
      margin-right: 68px;
    }
  }
`;

const StyledSubheading = styled(Subheading)`
  flex: 1;

  &:first-child {
    margin-bottom: 12px;
  }
`;

type Data = {
  name: string;
  description: string;
  distance: string;
  travel: string;
};

type Images = {
  webp: string;
  png: string;
};

interface Props {
  data: Data;
  images: Images;
}

function Destination({ data, images }: Props) {
  return (
    <div className="Destination">
      <GlobalStyles />
      <Heading pageHeading level={5} as="h1">
        <b>01</b>Pick Your Destination
      </Heading>
      <OuterContainer>
        <Picture>
          <source srcSet={images.webp} type="image/webp" />
          <img src={images.png} alt={`Picture of ${data.name}`} />
        </Picture>
        <TextContainer>
          <Nav>
            <StyledNavText to="/destination/moon">Moon</StyledNavText>
            <StyledNavText to="/destination/mars">Mars</StyledNavText>
            <StyledNavText to="/destination/europa">Europa</StyledNavText>
            <StyledNavText to="/destination/titan">Titan</StyledNavText>
          </Nav>
          <Heading level={2} as="h2">
            {data.name}
          </Heading>
          <StyledBodyText>{data.description}</StyledBodyText>
          <DistanceTravelContainer>
            <InfoContainer>
              <StyledSubheading level={2} as="h3">
                Avg. Distance
              </StyledSubheading>
              <StyledSubheading level={1} as="p">
                {data.distance}
              </StyledSubheading>
            </InfoContainer>
            <InfoContainer>
              <StyledSubheading level={2} as="h3">
                Est. Travel Time
              </StyledSubheading>
              <StyledSubheading level={1} as="p">
                {data.travel}
              </StyledSubheading>
            </InfoContainer>
          </DistanceTravelContainer>
        </TextContainer>
      </OuterContainer>
    </div>
  );
}

export default Destination;
