import React, { useState, useEffect } from "react";

const images = [
  "/image1.png", // Ganti dengan path gambar yang sesuai
  "/image2.png",
  "/image3.png",
];

const PromoBanner: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-96 bg-black flex justify-center items-center">
    <div
      className="w-7xl bg-white h-72 bg-cover bg-center flex items-center justify-start px-10 transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="bg-white bg-opacity-70 p-5 rounded-lg shadow-lg">
        <h2 className="text-green-900 text-4xl w-96 font-bold">
          Grab Up to 50% Off On Selected Headphone
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
