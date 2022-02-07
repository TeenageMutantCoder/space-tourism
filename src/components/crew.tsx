import React from "react";
import { createGlobalStyle } from "styled-components";

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

function Crew() {
  return (
    <div className="Crew">
      <GlobalStyles />
    </div>
  );
}

export default Crew;
