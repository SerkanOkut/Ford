import React, { useState } from "react";
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">Bandage</h1>

        {/* Sağdaki ikonlar */}
        <div className="flex items-center space-x-4 md:hidden">
          <FaUser className="text-gray-600 text-lg cursor-pointer" />
          <FaSearch className="text-gray-600 text-lg cursor-pointer" />
          <FaShoppingCart className="text-gray-600 text-lg cursor-pointer" />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-gray-900 text-xl" />
            ) : (
              <FaBars className="text-gray-900 text-xl" />
            )}
          </button>
        </div>

        {/* Mobil Menü Açıkken Gözükecek */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-4 transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <a href="#" className="text-gray-700 text-lg font-medium">Home</a>
          <a href="#" className="text-gray-700 text-lg font-medium">Product</a>
          <a href="#" className="text-gray-700 text-lg font-medium">Pricing</a>
          <a href="#" className="text-gray-700 text-lg font-medium">Contact</a>
        </div>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 font-medium hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 font-medium hover:text-gray-900">Product</a>
          <a href="#" className="text-gray-700 font-medium hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-700 font-medium hover:text-gray-900">Contact</a>
          <FaUser className="text-gray-600 text-lg cursor-pointer" />
          <FaSearch className="text-gray-600 text-lg cursor-pointer" />
          <FaShoppingCart className="text-gray-600 text-lg cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
