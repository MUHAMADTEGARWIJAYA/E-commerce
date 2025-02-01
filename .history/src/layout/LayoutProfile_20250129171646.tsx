import React from "react";
import Sidebar from "../view/SidebarUser";
import NavbarUtama from "../view/NavbarUtama";
import { Outlet } from "react-router-dom";
const LayoutProfile: React.FC = () => {
  return (
    <div >
     <NavbarUtama/>
       <div className="flex">
        <Sidebar />
     
     
        </div>
 
    </div>
  );
};

export default LayoutProfile;
