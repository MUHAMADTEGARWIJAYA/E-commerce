import React from "react";
import CheckoutProduk from "../components/CheckoutProduk";
import NavbarUtama from "../view/NavbarUtama";

const DetailPages: React.FC = () => {
  return (
    <div>
     
      <NavbarUtama />
      {/* Main Content */}
      <CheckoutProduk />
    
 
    </div>
  );
};

export default DetailPages;
