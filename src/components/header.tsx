import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Hamburger from "./hamburger";
import * as styles from "../styles";

import logoSvg from "../images/shared/logo.svg";

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  height: 88px;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  position: sticky;
  top: 0;

  @media (min-width: 768px) {
    padding-left: 39px;
    padding-right: 0;
  }

  @media (min-width: 1024px) {
    margin-top: 40px;
    padding-left: 55px;
  }
`;

const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.55px);
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 70vw;
  padding-top: 118px;
  position: fixed;
  right: -100%;
  top: 0;
  transition: right 0.3s ease-in-out, visibility 0.3s ease-in-out;
  visibility: hidden;
  width: 254px;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
    position: sticky;
    visibility: visible;
    width: 450px;
  }

  @media (min-width: 768px) {
    width: 830px;
  }

  #Hamburger-checkbox:checked ~ & {
    right: 0;
    visibility: visible;
  }
`;

const StyledLink = styled(Link)`
  font-family: ${styles.navText.font};
  font-size: ${styles.navText.fontSize};
  letter-spacing: ${styles.navText.characterSpace};
  line-height: 1.5em;
  margin-bottom: 32px;
  opacity: 1;
  padding-left: 32px;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: 0;
    padding: 32px 0;
    letter-spacing: 2.36px;
  }

  @media (min-width: 1024px) {
    letter-spacing: ${styles.navText.characterSpace};
  }

  b {
    @media (min-width: 768px) {
      display: none;
    }

    ::after {
      content: " ";
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.active::before {
    background-color: ${styles.colors.white};
    content: "";
    display: block;
    height: 1.5em;
    position: absolute;
    right: 0;
    width: 4px;

    @media (min-width: 768px) {
      width: 100%;
      height: 3px;
      right: initial;
      bottom: 0;
    }
  }
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
`;

const LogoLink = styled(Link)`
  height: 40px;
  width: 40px;
  z-index: 10000;

  @media (min-width: 768px) {
    height: 48px;
    width: 48px;
  }
`;

const Spacer = styled.span`
  background-color: ${styles.colors.white};
  display: none;
  flex: 1;
  height: 1px;
  left: 2em;
  opacity: 0.2515;
  position: relative;
  z-index: 100000;

  @media (min-width: 1024px) {
    display: block;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <LogoLink to="/">
        <Logo src={logoSvg} alt="Logo" />
      </LogoLink>
      <Hamburger />
      <Spacer />
      <Nav>
        <StyledLink to="/" activeClassName="active">
          <b>00</b>Home
        </StyledLink>
        <StyledLink to="/destination/moon" activeClassName="active">
          <b>01</b>Destination
        </StyledLink>
        <StyledLink to="/crew/commander" activeClassName="active">
          <b>02</b>Crew
        </StyledLink>
        <StyledLink to="/technology/launch-vehicle" activeClassName="active">
          <b>03</b>Technology
        </StyledLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
