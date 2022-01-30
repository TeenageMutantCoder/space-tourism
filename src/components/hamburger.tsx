import React from "react";
import styled from "styled-components";

import * as styles from "../styles";

const hamburgerBarMargin = 6;
const hamburgerBarSize = 3;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledHamburger = styled.label`
  cursor: pointer;
  display: block;
  width: 24px;
  z-index: 10000;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerBar = styled.span`
  background-color: ${styles.colors.lightBlue};
  display: block;
  height: ${hamburgerBarSize}px;
  transition-duration: 0.3s;
  transition-property: transform, opacity;
  transition-timing-function: ease-in-out;
  transform-origin: center;

  :not(:last-child) {
    margin-bottom: ${hamburgerBarMargin}px;
  }

  ${Checkbox}:checked + ${StyledHamburger} & {
    :first-child {
      transform: translateY(${hamburgerBarSize + hamburgerBarMargin}px)
        rotateZ(45deg);
    }

    :nth-child(2) {
      transform: rotateZ(-45deg);
    }

    :last-child {
      opacity: 0;
    }
  }
`;

function Hamburger() {
  return (
    <>
      <Checkbox id="Hamburger-checkbox" />
      <StyledHamburger className="Hamburger" htmlFor="Hamburger-checkbox">
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </StyledHamburger>
    </>
  );
}

export default Hamburger;
