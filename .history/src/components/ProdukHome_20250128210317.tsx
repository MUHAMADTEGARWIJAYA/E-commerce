import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds, IPX8",
    price: 89.0,
    description: "A perfect balance of high-fidelity audio",
    image: "/public/p1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "AirPods Max",
    price: 559.0,
    description: "A perfect balance of high-fidelity audio",
    image: "/public/2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    price: 289.0,
    description: "A perfect balance of high-fidelity audio",
    image: "/public/3.png",
    rating: 5,
  },
  {
    id: 4,
    name: "VIVEFOX Headphones",
    price: 39.0,
    description: "A perfect balance of high-fidelity audio",
    image: "/public/4.png",
    rating: 5,
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg">
        
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover mb-4 bg-amber-300" />

      <div className="flex w-full gap-3 h-36">
      <div>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <div className="flex items-center text-green-500 text-sm">
        {"★".repeat(product.rating)} ({product.rating * 20})
      </div>
      <button className="mt-3 bg-white text-black border px-1 py-1 rounded-2xl w-28 hover:bg-green-700 hover:text-white">
        Add to Cart
      </button>
      </div>
     
      <p className="text-lg text-black font-bold mt-2">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const ProductList: React.FC = () => {
  return (
    <div className="h-screen">
    <div className="flex w-full justify-center  bg-red-400">
    <h1 className=" text-center bg-blue-900 w-4xl text-black text-2xl font-bold mb-6">Headphones For You!</h1>
    </div>
   
    <div className="p-6 flex justify-center items-center bg-white">
      <div className="grid w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductList;
