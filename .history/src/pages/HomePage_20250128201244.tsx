import React from "react";
import PromoBanner from "../components/BanerHome";
import ProductList from "../components/ProdukHome";
import NavbarUtama from "../view/NavbarUtama";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Sidebar */}
      <NavbarUtama />
      {/* Main Content */}
      <PromoBanner />
      <ProductList />
    
 
    </div>
  );
};

export default HomePage;
