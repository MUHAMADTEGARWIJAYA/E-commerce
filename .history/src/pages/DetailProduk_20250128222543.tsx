import React, { useState } from "react";

const colors = [
  { name: "Red", code: "#FF3B30" },
  { name: "Black", code: "#1C1C1E" },
  { name: "Green", code: "#A8E6CF" },
  { name: "Silver", code: "#D1D1D6" },
  { name: "Blue", code: "#007AFF" },
];

const images = [
  "/public/3.png",
  "/public/3.png",
  "/public/3.png",
  "/public/3.png",

 
];

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <div>
        <img src={mainImage} alt="AirPods Max" className="w-full h-[600px] object-cover mb-4" />
        <div className="flex gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`AirPods Max ${index + 1}`}
              className="w-1/4 h-16 object-cover cursor-pointer border-2 border-transparent hover:border-black"
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
       
       {/* sidekanan */}
      </div>
      <div className="space-y-10 py-10 px-10">
        <h1 className="text-2xl font-bold">AirPods Max</h1>
        <p className="text-gray-600">A perfect balance of high-fidelity audio and effortless magic.</p>
        <div className="w-full h-px bg-gray-600 my-4"></div>
        <p className="text-xl font-bold mt-2">$549.00</p>
        <div className="w-full h-px bg-gray-600 my-4"></div>
        <p className="mt-4 font-semibold">Choose a Color</p>
        <div className="flex gap-2 mt-4">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-full border-2 ${
                selectedColor.code === color.code ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.code }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <div className="w-full h-px bg-gray-600 my-4"></div>
        <div className="flex bg-gray-100 w-24 border rounded-3xl items-center mt-2">

          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="px-2 py-2 font-bold text-2xl">-</button>

          <span className="px-4">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-4 text-green-900 font-bold text-2xl py-2">+</button>
        </div>
       
        <div className="flex gap-4 mt-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700">Buy Now</button>
          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg w-full hover:bg-green-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
