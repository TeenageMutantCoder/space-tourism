import React from "react";

import Crew from "../../components/crew";

import data from "../../data.json";
import webpImage from "../../images/crew/image-victor-glover.webp";
import pngImage from "../../images/crew/image-victor-glover.png";

const crewData = data.crew.filter(
  (crewMember) => crewMember.role.toLowerCase() === "pilot"
)[0];
const images = { webp: webpImage, png: pngImage };

function PilotPage() {
  return (
    <main>
      <Crew data={crewData} images={images} />
    </main>
  );
}

export default PilotPage;
