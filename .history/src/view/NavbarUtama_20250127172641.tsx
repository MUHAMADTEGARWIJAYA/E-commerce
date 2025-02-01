import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
const NavbarUtama: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png" // Ganti dengan path logo Anda
          alt=""
          className="h-8 w-8"
        />
        <span className="text-xl font-bold text-green-700">Shopcart</span>
      </div>

    

      {/* Search Section */}
      <div className="flex items-center space-x-3 ">
        <input
          type="text"
          placeholder="Search Product"
          className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="text-gray-500 text-3xl hover:text-green-700">
          <CiSearch />
        </button>
      </div>

      {/* Account and Cart Section */}
      <div className="flex items-center space-x-6 text-gray-600">
        <div className="flex items-center space-x-1 hover:text-black cursor-pointer">
          <MdOutlineAccountCircle />
          <span>Account</span>
        </div>
        <div className="flex items-center space-x-1 hover:text-black cursor-pointer">
            <TiShoppingCart />
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUtama;
