import React from "react";
import Sidebar from "../view/SidebarUser";
import NavbarUtama from "../view/NavbarUtama";
import { Outlet } from "react-router-dom";
const LayoutProfile: React.FC = () => {
  return (
    <div className="flex">
     
       <NavbarUtama/>
        <Sidebar />
     
        <div>
            <Outlet />
        </div>
 
    </div>
  );
};

export default LayoutProfile;
