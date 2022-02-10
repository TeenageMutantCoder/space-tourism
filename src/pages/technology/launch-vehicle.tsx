import React from "react";

import Technology from "../../components/technology";

import data from "../../data.json";
import portraitImage from "../../images/technology/image-launch-vehicle-portrait.jpg";
import landscapeImage from "../../images/technology/image-launch-vehicle-landscape.jpg";

const techData = data.technology.filter(
  (tech) => tech.name.toLowerCase() === "launch vehicle"
)[0];
const images = { portrait: portraitImage, landscape: landscapeImage };

function LaunchVehiclePage() {
  return (
    <main>
      <Technology data={techData} images={images} />
    </main>
  );
}

export default LaunchVehiclePage;
