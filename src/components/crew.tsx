import React from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

import BodyText from "./body-text";
import Container from "./container";
import Heading from "./heading";

import * as styles from "../styles";
import mobileBackground from "../images/crew/background-crew-mobile.jpg";
import tabletBackground from "../images/crew/background-crew-tablet.jpg";
import desktopBackground from "../images/crew/background-crew-desktop.jpg";

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
  flex: 1;
  margin-top: 32px;
  max-width: 327px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 60px;
    max-width: initial;
  }

  @media (min-width: 1024px) {
    align-items: flex-end;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-left: 8vw;
    margin-right: 8vw;
    margin-top: 0;
  }
`;

const Picture = styled.picture`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    border-bottom: none;
    width: auto;
  }

  & > img {
    height: 223px;

    @media (min-width: 768px) {
      height: 532px;
    }

    @media (min-width: 1024px) {
      object-fit: contain;
      object-position: center bottom;
      height: initial;
      max-height: 712px;
      width: 40vw;
    }
  }
`;

const InnerContainer = styled(Container)`
  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1024px) {
    align-self: stretch;
    margin-top: 154px;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  margin-top: 32px;
  width: 88px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }

  @media (min-width: 1024px) {
    width: 132px;
    margin-bottom: 94px;
    margin-top: 0;
  }
`;

const CircleLink = styled(Link).attrs({ activeClassName: "active" })`
  background-color: rgba(255, 255, 255, 0.1744);
  border-radius: 50%;
  display: block;
  height: 10px;
  width: 10px;

  @media (min-width: 1024px) {
    height: 15px;
    width: 15px;
  }

  &.active {
    background-color: ${styles.colors.white};
  }
`;

const TextContainer = styled(Container)`
  & > *:first-child {
    margin-bottom: 8px;

    @media (min-width: 1024px) {
      margin-bottom: 15px;
    }
  }
`;

const StyledBodyText = styled(BodyText)`
  margin-top: 16px;

  @media (min-width: 768px) {
    max-width: 80%;
    height: 84px;
  }

  @media (min-width: 1024px) {
    height: initial;
    margin-top: 27px;
    max-width: initial;
    width: 444px;
  }
`;

type Data = {
  name: string;
  role: string;
  bio: string;
};

type Images = {
  webp: string;
  png: string;
};

interface Props {
  data: Data;
  images: Images;
}

function Crew({ data, images }: Props) {
  return (
    <div className="Crew" style={{ display: "flex", flexDirection: "column" }}>
      <GlobalStyles />
      <Heading pageHeading level={5} as="h1">
        <b>02</b>Meet Your Crew
      </Heading>
      <OuterContainer>
        <Picture>
          <source srcSet={images.webp} type="image/webp" />
          <img src={images.png} alt={`Picture of ${data.name}`} />
        </Picture>
        <InnerContainer>
          <Nav>
            <CircleLink to="/crew/commander" />
            <CircleLink to="/crew/mission-specialist" />
            <CircleLink to="/crew/pilot" />
            <CircleLink to="/crew/flight-engineer" />
          </Nav>
          <TextContainer>
            <Heading level={4} as="h2">
              {data.role}
            </Heading>
            <Heading level={3} as="h3">
              {data.name}
            </Heading>
            <StyledBodyText>{data.bio}</StyledBodyText>
          </TextContainer>
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}

export default Crew;
