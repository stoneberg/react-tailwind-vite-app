import React from "react";
import EmblaCarousel from "../components/carousel/EmblaCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const About = () => {
  return (
    <>
      <h1 className="text-4xl mb-4">About Content</h1>
      <EmblaCarousel slides={slides} />
    </>
  );
};

export default About;
