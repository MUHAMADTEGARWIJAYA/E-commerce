import React from "react";
import PromoBanner from "../components/BanerHome";

import NavbarUtama from "../view/NavbarUtama";

const LayoutHome: React.FC = () => {
  return (
    <div>
      {/* Sidebar */}
      <NavbarUtama />
      {/* Main Content */}
      <PromoBanner />
    
 
    </div>
  );
};

export default LayoutHome;
