import React from "react";
import { Outlet } from "react-router-dom";
import NavbarUtama from "../view/NavbarUtama";

const LayoutHome: React.FC = () => {
  return (
    <div>
      {/* Sidebar */}
      <NavbarUtama />
      {/* Main Content */}
    
        <Outlet />
 
    </div>
  );
};

export default LayoutHome;
