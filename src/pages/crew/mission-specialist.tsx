import React from "react";

import Crew from "../../components/crew";

import data from "../../data.json";
import webpImage from "../../images/crew/image-mark-shuttleworth.webp";
import pngImage from "../../images/crew/image-mark-shuttleworth.png";

const crewData = data.crew.filter(
  (crewMember) => crewMember.role.toLowerCase() === "mission specialist"
)[0];
const images = { webp: webpImage, png: pngImage };

function MissionSpecialistPage() {
  return (
    <main>
      <Crew data={crewData} images={images} />
    </main>
  );
}

export default MissionSpecialistPage;
