
import { Outlet } from "react-router-dom";
import NavbarUtama from "../view/NavbarUtama";

const Layout = () => {
  return (
    <div>
      {/* Sidebar */}
      <NavbarUtama />
      {/* Main Content */}
    
        <Outlet />
 
    </div>
  );
};

export default Layout;
