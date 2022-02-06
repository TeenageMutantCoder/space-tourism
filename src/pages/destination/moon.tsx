import React from "react";

import Destination from "../../components/destination";

import data from "../../data.json";
import webpImage from "../../images/destination/image-moon.webp";
import pngImage from "../../images/destination/image-moon.png";

const destinationData = data.destinations.filter(
  (destination) => destination.name.toLowerCase() === "moon"
)[0];
const images = { webp: webpImage, png: pngImage };

function Moon() {
  return (
    <main>
      <Destination data={destinationData} images={images} />
    </main>
  );
}

export default Moon;
