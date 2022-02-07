import React from "react";

import Destination from "../../components/destination";

import data from "../../data.json";
import webpImage from "../../images/destination/image-mars.webp";
import pngImage from "../../images/destination/image-mars.png";

const destinationData = data.destinations.filter(
  (destination) => destination.name.toLowerCase() === "mars"
)[0];
const images = { webp: webpImage, png: pngImage };

function MarsPage() {
  return (
    <main>
      <Destination data={destinationData} images={images} />
    </main>
  );
}

export default MarsPage;
