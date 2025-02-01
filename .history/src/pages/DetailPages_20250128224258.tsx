import React from "react";
import ProductDetail from "../components/DetailProduk";
import NavbarUtama from "../view/NavbarUtama";

const HomePage: React.FC = () => {
  return (
    <div>
     
      <NavbarUtama />
      {/* Main Content */}
      <ProductDetail />
    
 
    </div>
  );
};

export default HomePage;
