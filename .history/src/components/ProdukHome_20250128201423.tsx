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
    description: "Organic Cotton, fairtrade certified",
    image: "/images/earbuds.png",
    rating: 5,
  },
  {
    id: 2,
    name: "AirPods Max",
    price: 559.0,
    description: "A perfect balance of high-fidelity audio",
    image: "/images/airpods_max.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    price: 289.0,
    description: "Table with air purifier, stained venner/black",
    image: "/images/bose_bt.png",
    rating: 5,
  },
  {
    id: 4,
    name: "VIVEFOX Headphones",
    price: 39.0,
    description: "Wired Stereo Headsets With Mic",
    image: "/images/vivefox.png",
    rating: 5,
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
      <div className="flex items-center text-green-500 text-sm">
        {"★".repeat(product.rating)} ({product.rating * 20})
      </div>
      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
};

const ProductList: React.FC = () => {
  return (
    <div className="p-6 bg-amber-300">
      <h1 className="text-2xl font-bold mb-6">Headphones For You!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
