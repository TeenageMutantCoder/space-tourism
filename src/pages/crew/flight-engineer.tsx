import React from "react";

import Crew from "../../components/crew";

import data from "../../data.json";
import webpImage from "../../images/crew/image-anousheh-ansari.webp";
import pngImage from "../../images/crew/image-anousheh-ansari.png";

const crewData = data.crew.filter(
  (crewMember) => crewMember.role.toLowerCase() === "flight engineer"
)[0];
const images = { webp: webpImage, png: pngImage };

function FlightEngineerPage() {
  return (
    <main>
      <Crew data={crewData} images={images} />
    </main>
  );
}

export default FlightEngineerPage;
