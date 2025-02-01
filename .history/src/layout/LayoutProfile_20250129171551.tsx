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
     
        <div className="flex-1 overflow-y-auto p-6">
            <Outlet />
        </div>
        </div>
 
    </div>
  );
};

export default LayoutProfile;
