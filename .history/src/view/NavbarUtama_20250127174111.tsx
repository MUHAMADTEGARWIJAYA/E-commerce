import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { HiMenu } from "react-icons/hi";

const NavbarUtama: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-blue-900 w-full">
      <nav className="flex items-center justify-between w-full bg-red-900 px-6 py-3 shadow-md">
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
        <div className="relative flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
          />
          <button className="absolute right-2 text-gray-500 text-2xl hover:text-green-700">
            <CiSearch />
          </button>
        </div>

        {/* Account and Cart Section */}
        <div className="relative flex items-center space-x-6 text-gray-200">
          <div className="hidden md:flex items-center space-x-1 hover:text-white cursor-pointer">
            <MdOutlineAccountCircle className="text-2xl" />
            <span>Account</span>
          </div>
          <div className="hidden md:flex items-center space-x-1 hover:text-white cursor-pointer">
            <TiShoppingCart className="text-2xl" />
            <span>Cart</span>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiMenu />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-11 left-2 bg-white shadow-lg rounded-lg w-40 py-2 z-50">
              <div
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => console.log("Account clicked")}
              >
                <MdOutlineAccountCircle className="text-xl text-gray-700" />
                <span className="text-gray-700">Account</span>
              </div>
              <div
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => console.log("Cart clicked")}
              >
                <TiShoppingCart className="text-xl text-gray-700" />
                <span className="text-gray-700">Cart</span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarUtama;
