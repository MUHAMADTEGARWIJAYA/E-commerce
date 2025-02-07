import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products, Product } from "../data/products";
import ButtonBuy from "./Elements/ButtonBuy";
import ButtonQuantity from "./Elements/ButtonQuantity";
import Desciption from "./Elements/Desciption";
import RatingPrice from "./Elements/RatingPrice";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const product: Product | undefined = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [mainImage] = useState(product ? product.image : "");

 

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
        {/* Description */}
        <Desciption description={product.description}/>

        {/* Rating & Price */}
       <RatingPrice rating={product.rating} price={product.price}/>

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
