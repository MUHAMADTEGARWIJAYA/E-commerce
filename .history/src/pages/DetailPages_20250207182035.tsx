import React from "react";
import ProductDetail from "../components/Fragments/DetailProduk";
import NavbarUtama from "../view/NavbarUtama";

const DetailPages: React.FC = () => {
  return (
    <div>
     
      <NavbarUtama />
      {/* Main Content */}
      <ProductDetail />
    
 
    </div>
  );
};

export default DetailPages;
