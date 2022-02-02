import React from "react";
import { createGlobalStyle } from "styled-components";

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

function Destination() {
  return (
    <div>
      <GlobalStyles />
    </div>
  );
}

export default Destination;
