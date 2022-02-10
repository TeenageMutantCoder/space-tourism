import React from "react";

import Technology from "../../components/technology";

import data from "../../data.json";
import portraitImage from "../../images/technology/image-space-capsule-portrait.jpg";
import landscapeImage from "../../images/technology/image-space-capsule-landscape.jpg";

const techData = data.technology.filter(
  (tech) => tech.name.toLowerCase() === "space capsule"
)[0];
const images = { portrait: portraitImage, landscape: landscapeImage };

function SpaceCapsulePage() {
  return (
    <main>
      <Technology data={techData} images={images} />
    </main>
  );
}

export default SpaceCapsulePage;
