import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import { logoutUser } from '../redux/actions/clientActions';
import { FaUser, FaSearch, FaShoppingCart, FaHeart, FaChevronDown } from "react-icons/fa";
import SignupPage from "../pages/SignupPage";

const WebNavbar = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const history = useHistory();
  const user = useSelector(state => state.client.user);
  const dispatch = useDispatch();

  const getGravatarUrl = (email) => {
    const hash = md5(email.toLowerCase().trim());
    return `https://www.gravatar.com/avatar/${hash}?d=mp`;
  };

  return (
    <nav className="hidden md:flex flex-col bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Main Navbar */}
      <div className="flex items-center justify-between py-4 px-10 bg-white relative z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">SeCom</div>

        {/* Menu */}
        <ul className="md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-500"><a href="#">Home</a></li>
          <li className="relative hover:text-blue-500">
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => setIsShopOpen(!isShopOpen)}
            >
              <span>Shop</span>
              <FaChevronDown className="text-xs" />
            </div>
            {isShopOpen && (
              <div className="absolute left-0 top-full mt-1 w-96 bg-white shadow-lg border border-gray-300 p-6 transition-all duration-300 ease-in-out z-50">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 ">Kadın</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="hover:text-blue-500"><a href="#">Bags</a></li>
                      <li className="hover:text-blue-500"><a href="#">Belts</a></li>
                      <li className="hover:text-blue-500"><a href="#">Cosmetics</a></li>
                      <li className="hover:text-blue-500"><a href="#">Hats</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Erkek</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="hover:text-blue-500"><a href="#">Bags</a></li>
                      <li className="hover:text-blue-500"><a href="#">Belts</a></li>
                      <li className="hover:text-blue-500"><a href="#">Cosmetics</a></li>
                      <li className="hover:text-blue-500"><a href="#">Hats</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="hover:text-blue-500"><a href="#">About</a></li>
          <li className="hover:text-blue-500"><a href="#">Blog</a></li>
          <li className="hover:text-blue-500"><a href="#">Contact</a></li>
          <li className="hover:text-blue-500"><a href="#">Pages</a></li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                className="h-8 w-8 rounded-full"
                src={getGravatarUrl(user.email)}
                alt={user.name}
              />
              <span className="text-gray-700">{user.name}</span>
              <button
                onClick={() => dispatch(logoutUser())}
                className="text-gray-700 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => history.push("/signup")}
              className="flex items-center text-gray-900 hover:text-blue-700"
            >
              <FaUser className="mr-1" /> Login / Register
            </button>
          )}
          <FaSearch className="text-gray-700 text-lg cursor-pointer hover:text-blue-500" />
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-gray-700 text-lg hover:text-blue-500" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">1</span>
          </div>
          <FaHeart className="text-gray-700 text-lg cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </nav>
  );
};

export default WebNavbar;
