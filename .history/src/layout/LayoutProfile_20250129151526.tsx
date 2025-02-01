import React from "react";
import Sidebar from "../view/SidebarUser";
import { Outlet } from "react-router-dom";
const DetailPages: React.FC = () => {
  return (
    <div className="flex">
     
      
        <Sidebar />
     
        <div>
            <Outlet />
        </div>
 
    </div>
  );
};

export default DetailPages;
