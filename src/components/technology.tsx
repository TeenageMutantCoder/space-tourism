import React from "react";
import { createGlobalStyle } from "styled-components";

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

function Technology() {
  return (
    <div className="Technology">
      <GlobalStyles />
    </div>
  );
}

export default Technology;
