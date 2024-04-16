"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/images/hero-photo.png";
import Image, { StaticImageData } from "next/image";

interface Props {
  heroImage: StaticImageData;
}

const HeroComponent: React.FC<Props> = ({ heroImage }) => {
  return (
    <Image
      className="max-w-full md:max-w-[60%] w-full h-auto mx-auto"
      src={heroImage.src}
      alt="computer"
    />
  );
};
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex < 5 ? prevIndex + 1 : 5));
  };

  return (
    <div className="container py-10">
      <div>
        <HeroComponent heroImage={heroImage} />
      </div>
      <div className="flex justify-between items-center mx-auto mt-8 gap-6 max-w-full sm:max-w-96 w-full">
        <button
          onClick={handlePrevClick}
          className={`${
            activeIndex === 0 ? "text-inactive-span" : "text-brand-color"
          } `}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="flex justify-around gap-3  ">
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full mx-1 transition-all ease-in-out duration-400 ${
                activeIndex === index ? "bg-brand-color" : "bg-inactive-span"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className={`${
            activeIndex === 5 ? "text-inactive-span" : "text-brand-color"
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
