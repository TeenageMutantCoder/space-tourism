import React from "react";

import Technology from "../../components/technology";

import data from "../../data.json";
import portraitImage from "../../images/technology/image-spaceport-portrait.jpg";
import landscapeImage from "../../images/technology/image-spaceport-landscape.jpg";

const techData = data.technology.filter(
  (tech) => tech.name.toLowerCase() === "spaceport"
)[0];
const images = { portrait: portraitImage, landscape: landscapeImage };

function SpaceportPage() {
  return (
    <main>
      <Technology data={techData} images={images} />
    </main>
  );
}

export default SpaceportPage;
