import React from "react";
import Sidebar from "../view/SidebarUser";
import { Outlet } from "react-router-dom";
const LayoutProfile: React.FC = () => {
  return (
    <div className="flex">
     
      
        <Sidebar />
     
        <div>
            <Outlet />
        </div>
 
    </div>
  );
};

export default LayoutProfile;
