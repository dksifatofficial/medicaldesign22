"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [transitionDelay, setTransitionDelay] = useState(false);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (!hovered) {
        goToNextImage();
      }
    }, 5000);

    return () => {
      clearInterval(sliderInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  const goToNextImage = () => {
    setTransitionDelay(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitionDelay(false);
    }, 50);
  };

  const goToPreviousImage = () => {
    setTransitionDelay(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTransitionDelay(false);
    }, 50);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const translateX = -currentImageIndex * 100;

  const sliderStyles = {
    transform: `translateX(${translateX}%)`,
    transition: transitionDelay ? "transform 0.5s ease" : "transform 0.5s ease",
  };

  return (
    <div
      className="h-[400px] relative overflow-hidden shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex items-center w-full h-full transition-transform duration-[1s] ease-[ease]"
        style={sliderStyles}
      >
        {[...images, images[0]].map((image, index) => (
          <Link
            className="h-[400px] relative flex-[0_0_100%] w-full flex justify-center
            items-center transition-transform duration-[1s] ease-[ease] overflow-hidden"
            key={index}
            href={image.link}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute z-[1] p-[10px] top-0 left-0 w-full h-full">
              <div
                className="max-w-screen-xl mx-auto px-4 xl:px-0 py-10 flex flex-col gap-y-2 
                justify-center h-full ml-16"
              >
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-slate-700"
                >
                  {image.header}
                </motion.h2>
                <motion.p
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-base m-0 text-slate-600"
                >
                  {image.description}
                </motion.p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="flex justify-between w-full px-5 py-0 absolute top-0 transform transition-opacity
      opacity-1 hover:opacity-[1] duration-300 ease-in-out h-[400px]"
      >
        <button
          className="text-white text-2xl cursor-pointer px-1 py-3 bg-[#969595a2]
           absolute left-0 top-2/4 -translate-y-2/4 "
          onClick={goToPreviousImage}
        >
          &lt;
        </button>
        <button
          className="text-white text-2xl cursor-pointer px-1 py-3 bg-[#969595a2]
           absolute right-0 top-2/4 -translate-y-2/4"
          onClick={goToNextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
