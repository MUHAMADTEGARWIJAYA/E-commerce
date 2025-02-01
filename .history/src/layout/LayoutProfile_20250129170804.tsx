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
     
        <div className="flex-1 ml-64 overflow-y-auto h-screen p-6 bg-gray-100">
            <Outlet />
        </div>
        </div>
 
    </div>
  );
};

export default LayoutProfile;
