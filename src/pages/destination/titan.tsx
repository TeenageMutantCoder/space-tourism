import React from "react";

import Destination from "../../components/destination";

import data from "../../data.json";
import webpImage from "../../images/destination/image-titan.webp";
import pngImage from "../../images/destination/image-titan.png";

const destinationData = data.destinations.filter(
  (destination) => destination.name.toLowerCase() === "titan"
)[0];
const images = { webp: webpImage, png: pngImage };

function TitanPage() {
  return (
    <main>
      <Destination data={destinationData} images={images} />
    </main>
  );
}

export default TitanPage;
