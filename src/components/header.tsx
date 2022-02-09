import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Hamburger from "./hamburger";
import NavText from "./nav-text";
import * as styles from "../styles";

import logoSvg from "../images/shared/logo.svg";

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  height: 88px;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;

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
  z-index: 1000;

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
        <NavText to="/" headerNav>
          <b>00</b>Home
        </NavText>
        <NavText to="/destination" partiallyActive={true} headerNav>
          <b>01</b>Destination
        </NavText>
        <NavText to="/crew" partiallyActive={true} headerNav>
          <b>02</b>Crew
        </NavText>
        <NavText to="/technology" partiallyActive={true} headerNav>
          <b>03</b>Technology
        </NavText>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
