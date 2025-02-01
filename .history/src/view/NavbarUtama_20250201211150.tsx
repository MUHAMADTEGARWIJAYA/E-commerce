import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";

import { HiMenu } from "react-icons/hi"; 

const NavbarUtama: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

      <nav className="ralative w-full flex bg-white items-center justify-between px-6 py-3">
        {/* Logo Section */}
       <a href="/"> <div className="flex items-center space-x-3 object-contain">
          <img
            src="/logo1.png" // Ganti dengan path logo Anda
            alt=""
            className="h-8 rounded-3xl w-8 "
          />
          <span className="text-xl font-bold text-green-400">Inovasi MG</span>
        </div>
        </a>

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
          
            <span>Contact</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-black cursor-pointer">
           
            <span>Product</span>
          </div>
        </div>
        {isMenuOpen && (
        <div className="lg:hidden z-50 absolute top-14 right-0 w-30 bg-white p-4">
          <div className="flex flex-col space-y-4 text-gray-600">
            <div className="flex items-center space-x-1 hover:text-green-700 cursor-pointer">
             
              <span>Contact</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-green-700 cursor-pointer">
              
              <span>Product</span>
            </div>
          </div>
        </div>
      )}
      </nav>

    
    
  );
};

export default NavbarUtama;