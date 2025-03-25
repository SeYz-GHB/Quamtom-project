// src/AutoCarousel.jsx
import React, { useState, useEffect } from 'react';
import HeaderImage from '../assets/HeaderImage/Quantom.png'; // Correctly import your image
import hoodies1 from '../assets/HeaderImage/hoodies1.jpg'
import AncientGrece from '../assets/HeaderImage/AncientGrece.jpg'
const AutoCarousel = () => {
  const images = [
    AncientGrece,
    hoodies1,
    hoodies1,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-lg  md:h-[300px] lg:h-[450px] md:inline-flex items-center justify-center hidden ">
      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex}`}
        className="w-[90%] h-full transition-transform duration-500 ease-in-out"
      />
    </div>
  );
};

export default AutoCarousel;
