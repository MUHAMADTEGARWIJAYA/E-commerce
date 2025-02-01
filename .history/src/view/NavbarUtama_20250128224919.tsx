import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { HiMenu } from "react-icons/hi"; 

const NavbarUtama: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

      <nav className="ralative w-full flex bg-white items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 object-contain">
          <img
            src="../../public/logo.png" // Ganti dengan path logo Anda
            alt=""
            className="h-8 rounded-3xl w-8 "
          />
          <span className="text-xl font-bold text-green-700">ShopAc</span>
        </div>

        {/* Search Section */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search Product"
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="text-gray-500 text-3xl hover:text-green-700">
            <CiSearch />
          </button>
        </div>

        {/* Hamburger Menu Icon (Visible on Mobile) */}
        <div className="lg:hidden text-gray-600 text-3xl cursor-pointer" onClick={toggleMenu}>
          <HiMenu />
        </div>

        {/* Account and Cart Section (Hidden on Mobile, Visible on Desktop) */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-600">
          <div className="flex items-center space-x-1 hover:text-black cursor-pointer">
            <MdOutlineAccountCircle />
            <span>Account</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-black cursor-pointer">
            <TiShoppingCart />
            <span>Cart</span>
          </div>
        </div>
        {isMenuOpen && (
        <div className="lg:hidden z-50 absolute top-14 right-0 w-30 bg-white p-4">
          <div className="flex flex-col space-y-4 text-gray-600">
            <div className="flex items-center space-x-1 hover:text-green-700 cursor-pointer">
              <MdOutlineAccountCircle />
              <span>Account</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-green-700 cursor-pointer">
              <TiShoppingCart />
              <span>Cart</span>
            </div>
          </div>
        </div>
      )}
      </nav>

    
    
  );
};

export default NavbarUtama;