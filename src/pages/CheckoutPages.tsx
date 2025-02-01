import React from "react";
import CheckoutProduk from "../components/CheckoutProduk";
import NavbarUtama from "../view/NavbarUtama";

const CheckoutPage: React.FC = () => {
  return (
    <div>
     
      <NavbarUtama />
      {/* Main Content */}
      <CheckoutProduk />
    
 
    </div>
  );
};

export default CheckoutPage;
