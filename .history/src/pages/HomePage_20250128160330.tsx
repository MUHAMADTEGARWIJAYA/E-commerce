import React from "react";
import PromoBanner from "../components/BanerHome";

import NavbarUtama from "../view/NavbarUtama";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Sidebar */}
      <NavbarUtama />
      {/* Main Content */}
      <PromoBanner />
    
 
    </div>
  );
};

export default HomePage;
