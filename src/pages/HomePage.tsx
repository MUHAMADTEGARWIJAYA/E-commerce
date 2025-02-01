import React from "react";
import PromoBanner from "../components/BanerHome";
import ProductList from "../components/ProdukHome";
import NavbarUtama from "../view/NavbarUtama";
import Footer from "../view/Footer";
const HomePage: React.FC = () => {
  return (
    <div>
      {/* Sidebar */}
      <NavbarUtama />
      {/* Main Content */}
      <PromoBanner />
      <ProductList />
    <Footer/>
 
    </div>
  );
};

export default HomePage;
