import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products, Product } from "../data/products";
import ButtonBuy from "./Elements/ButtonBuy";
import ButtonQuantity from "./Elements/ButtonQuantity";
const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const product: Product | undefined = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [mainImage] = useState(product ? product.image : "");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

 

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 grid justify-center md:grid-cols-2 gap-6">
      <div>
        <img src={mainImage} alt={product.name} className="xl:w-full xl:h-[600px] w-[400px] object-cover mb-4" />
      </div>
      <div className="space-y-8 xl:w-full w-96 py-10 px-10">
        <h1 className="text-2xl font-bold">{product.name}</h1>

        <p className={`text-gray-600 ${isExpanded ? "" : "line-clamp-1"}`}>
          {product.description}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-green-500 hover:text-green-700 focus:outline-none"
        >
          {isExpanded ? "Tutup" : "Baca Selengkapnya"}
        </button>

        <div className="flex items-center mt-2">
          <span className="text-green-500 text-2xl">
            {"★".repeat(product.rating)}
          </span>
          <span className="ml-2 text-gray-600">({product.rating})</span>
        </div>
        
        <div className="w-full h-px bg-gray-600 my-4"></div>
        <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>

        <div className="w-full h-px bg-gray-600 my-4"></div>

        {/* Pilihan Jumlah */}
       <ButtonQuantity quantity={quantity} setQuantity={setQuantity}/>

        {/* Tombol Aksi */}
       <ButtonBuy quantity={quantity} name={product.name}/>
      </div>
    </div>
  );
};

export default ProductDetail;
