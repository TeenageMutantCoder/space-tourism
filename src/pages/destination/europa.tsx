import React from "react";

import Destination from "../../components/destination";

import data from "../../data.json";
import webpImage from "../../images/destination/image-europa.webp";
import pngImage from "../../images/destination/image-europa.png";

const destinationData = data.destinations.filter(
  (destination) => destination.name.toLowerCase() === "europa"
)[0];
const images = { webp: webpImage, png: pngImage };

function Europa() {
  return (
    <main>
      <Destination data={destinationData} images={images} />
    </main>
  );
}

export default Europa;
