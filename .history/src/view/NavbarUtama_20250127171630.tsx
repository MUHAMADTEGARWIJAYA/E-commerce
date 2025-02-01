import React from "react";

const NavbarUtama: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png" // Ganti dengan path logo Anda
          alt="Shopcart Logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-bold text-green-700">Shopcart</span>
      </div>

      {/* Menu Section */}
      <ul className="flex items-center space-x-6 text-gray-600">
        <li className="hover:text-black cursor-pointer">
          Categories <span className="text-sm">▼</span>
        </li>
        <li className="hover:text-black cursor-pointer">Deals</li>
        <li className="hover:text-black cursor-pointer">What's New</li>
        <li className="hover:text-black cursor-pointer">Delivery</li>
      </ul>

      {/* Search Section */}
      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Search Product"
          className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="text-gray-500 hover:text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65l4.35 4.35z"
            />
          </svg>
        </button>
      </div>

      {/* Account and Cart Section */}
      <div className="flex items-center space-x-6 text-gray-600">
        <div className="flex items-center space-x-1 hover:text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A8 8 0 1118.879 6.196a8 8 0 01-13.758 11.608zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Account</span>
        </div>
        <div className="flex items-center space-x-1 hover:text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l1.35 6.44A1 1 0 009.35 20h5.3a1 1 0 00.98-.76L17 13M7 13h10m-5 8v-8"
            />
          </svg>
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUtama;
