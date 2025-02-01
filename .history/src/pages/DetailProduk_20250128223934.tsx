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
  "/public/2.png",
  "/public/4.png",
  "/public/p1.png",

 
];

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mainImage, setMainImage] = useState(images[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };


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
      </div>


  {/* sidekanan */}
      <div className="space-y-10 py-10 px-10">
        <h1 className="text-2xl font-bold">AirPods Max</h1>
        <div className="max-w-md mx-auto p-4">
      <p className={`text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae cum asperiores provident deserunt, accusamus quisquam facere expedita sit fuga, fugiat velit unde! Reiciendis, dolorum quidem nostrum iusto ducimus fugiat! A perfect balance of high-fidelity audio and effortless magic.
      </p>
      <button
        onClick={toggleReadMore}
        className="text-blue-500 hover:text-blue-700 mt-2 focus:outline-none"
      >
        {isExpanded ? 'Tutup' : 'Baca Selengkapnya'}
      </button>
    </div>
        <div className="flex items-center mt-2">
        <span className="text-green-500 text-2xl">★★★★★</span>
        <span className="ml-2 text-gray-600">(4.9)</span>
      </div>
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
        <div className="flex bg-gray-100 w-28 rounded-3xl items-center mt-2">

          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="px-3 py-2 font-bold text-2xl">-</button>

          <span className="px-4 text-green-700 font-bold text-xl">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-1 text-green-700 font-bold text-2xl py-2">+</button>
        </div>
       
        <div className="flex gap-4 mt-4">
          <button className="bg-white text-green-700 font-bold border px-6 py-3 rounded-3xl w-96 hover:bg-green-700 border-green-600 hover:text-white">Buy Now</button>
          <button className="border bg-white border-green-600 font-bold text-green-700 px-6 py-3 rounded-3xl w-96 hover:bg-green-700 hover:text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
