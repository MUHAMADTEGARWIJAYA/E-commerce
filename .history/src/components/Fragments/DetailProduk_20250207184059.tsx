import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products, Product } from "../../data/products";


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const product: Product | undefined = products.find((p) => p.id === Number(id));
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
    
    </div>
  );
};

export default ProductDetail;
