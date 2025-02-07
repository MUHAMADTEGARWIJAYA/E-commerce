import React from "react";
import { useState } from "react";
import ButtonBuy from "./ButtonBuy";
import ButtonQuantity from "./ButtonQuantity";
import Desciption from "./Desciption";
import RatingPrice from "./RatingPrice";
interface LeftDetail {
name:string;
description:string ;
price: number;

rating:number;
}

const LeftDetail: React.FC<LeftDetail> = ({name,description,price,rating}) => {
      const [quantity, setQuantity] = useState(1);
return (
    <div className="space-y-16 xl:w-full w-96 py-10 px-10">
    <h1 className="text-2xl font-bold">{name}</h1>

    {/* Description */}
    <Desciption description={description}/>

    {/* Rating & Price */}
   <RatingPrice rating={rating} price={price}/>

    {/* Pilihan Jumlah */}
   <ButtonQuantity quantity={quantity} setQuantity={setQuantity}/>

    {/* Tombol Aksi */}
   <ButtonBuy quantity={quantity} name={name}/>
  </div>
)
}

export default LeftDetail 
