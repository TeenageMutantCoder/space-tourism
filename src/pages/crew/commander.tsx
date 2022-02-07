import React from "react";

import Crew from "../../components/crew";

import data from "../../data.json";
import webpImage from "../../images/crew/image-douglas-hurley.webp";
import pngImage from "../../images/crew/image-douglas-hurley.png";

const crewData = data.crew.filter(
  (crewMember) => crewMember.role.toLowerCase() === "commander"
)[0];
const images = { webp: webpImage, png: pngImage };

function CommanderPage() {
  return (
    <main>
      <Crew data={crewData} images={images} />
    </main>
  );
}

export default CommanderPage;
