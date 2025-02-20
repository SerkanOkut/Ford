import React, { useState } from "react";
import { FaUser, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { useHistory } from "react-router-dom"; // Sayfa yönlendirme için

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory(); // Sayfa yönlendirme fonksiyonu

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full top-0 left-0 z-50 md:hidden">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Bandage</h1>

        {/* Icons & Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Kullanıcı ikonuna basınca signup sayfasına yönlendirme */}
          <button
            onClick={() => history.push("/signup")}
            className="text-gray-700 text-xl hover:text-blue-500"
          >
            <FaUser />
          </button>
          <FaSearch className="text-gray-700 text-xl" />
          <FaShoppingCart className="text-gray-700 text-xl" />
          <button
            className="text-gray-700 text-xl focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <ul className="text-center py-6 space-y-4 text-gray-700 text-lg font-medium">
          <li><a href="#" className="block">Home</a></li>
          <li><a href="#" className="block">Product</a></li>
          <li><a href="#" className="block">Pricing</a></li>
          <li><a href="#" className="block">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
