import React, { useState } from "react";

const colors = [
  { name: "Red", code: "#FF3B30" },
  { name: "Black", code: "#1C1C1E" },
  { name: "Green", code: "#A8E6CF" },
  { name: "Silver", code: "#D1D1D6" },
  { name: "Blue", code: "#007AFF" },
];

const images = [
  "/images/airpods_max_1.png",
  "/images/airpods_max_2.png",
  "/images/airpods_max_3.png",
  "/images/airpods_max_4.png",
];

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <div>
        <img src={mainImage} alt="AirPods Max" className="w-full h-64 object-cover mb-4" />
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
      </div>
      <div>
        <h1 className="text-2xl font-bold">AirPods Max</h1>
        <p className="text-gray-600">A perfect balance of high-fidelity audio and effortless magic.</p>
        <p className="text-xl font-bold mt-2">$549.00 or $99.99/month</p>
        <p className="text-sm text-gray-500">Suggested payments with 6 months special financing.</p>
        <p className="mt-4 font-semibold">Choose a Color</p>
        <div className="flex items-center mt-2">
          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="px-4 py-2 border">-</button>
          <span className="px-4">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border">+</button>
        </div>
        <p className="text-red-500 mt-2">Only 12 Items Left! Don’t miss it</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700">Buy Now</button>
          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg w-full hover:bg-green-100">Add to Cart</button>
        </div>
        <div className="mt-6">
          <p className="font-semibold">Free Delivery</p>
          <p className="text-gray-500 text-sm">Enter your postal code for delivery availability</p>
          <p className="font-semibold mt-2">Return Delivery</p>
          <p className="text-gray-500 text-sm">Free 30 days delivery returns.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
