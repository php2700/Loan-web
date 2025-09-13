import React, { useEffect, useState } from "react";
import heroBanner from "../../assets/hero_img.jpg";
import bgImg from "../../assets/h1_hero.jpg";
import { useNavigate } from "react-router-dom";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.jpg";

const images = [banner1, banner2, banner3];

const Banner = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleStarted = () => {
    navigate("/apply");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
     <div className="relative grid grid-cols-1 min-h-[80vh] overflow-hidden">
  <img
    src={images[currentIndex]}
    alt="Business professional"
    className="w-full h-[100vh] object-cover transition-all duration-1000 ease-in-out"
  />

  <div className="absolute bottom-1 w-full flex justify-center">
    <button onClick={handleStarted} className="text-xl px-6 py-2 rounded-xl text-white bg-blue-500 hover:bg-blue-600 transition cursor-pointer">
      GET STARTED
    </button>
  </div>
</div>

    </>
  );
};

export default Banner;
