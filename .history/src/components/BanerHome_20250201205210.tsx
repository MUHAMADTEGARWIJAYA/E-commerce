import React, { useState, useEffect } from "react";

const images = [
  "/public/bg3.png", 
  "/public/bg6.png",
  "/public/bg7.png",
];

const PromoBanner: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-96 flex justify-center items-center">
    <div
      className="xl:w-7xl w-md bg-white h-72 bg-cover bg-center flex items-center justify-start px-10 transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="  p-5 ">
        <h2 className="text-green-800 xl:text-4xl xl:w-xl w-10 font-bold">
          Jasa Bikin Website Profesional🚀🚀🚀🚀
        </h2>
        <button className="mt-4 px-5 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800">
          Buy Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default PromoBanner;
