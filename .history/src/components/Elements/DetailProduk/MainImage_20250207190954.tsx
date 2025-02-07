import React from "react";
interface Product {
    name: string;
   
    image: string;
}
const MainImage : React.FC<Product> = ({ name, image: mainImage }) => {
return (
    <div>
    <img src={mainImage} alt={name} className="xl:w-full xl:h-[600px] w-[400px] object-cover mb-4" />
  </div>
)

}

export default MainImage