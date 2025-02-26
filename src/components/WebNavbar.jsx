import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import md5 from 'md5';
import { logoutUser } from '../redux/actions/clientActions';
import { FaUser, FaSearch, FaShoppingCart, FaHeart, FaChevronDown } from "react-icons/fa";

const WebNavbar = () => {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
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
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li 
            className="relative"
            onMouseEnter={() => setIsShopMenuOpen(true)}
            onMouseLeave={() => setIsShopMenuOpen(false)}
          >
            <div className="flex items-center cursor-pointer">
              <Link 
                to="/shop" 
                className="hover:text-blue-500 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  history.push('/shop');
                  setIsShopMenuOpen(false);
                }}
              >
                Shop
                <FaChevronDown className="ml-1" />
              </Link>
            </div>

            {/* Shop Dropdown Menu */}
            {isShopMenuOpen && (
              <div className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-lg p-6 mt-2">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Kadın</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="hover:text-blue-500"><Link to="/shop?category=tshirt&gender=women">Tshirt</Link></li>
                      <li className="hover:text-blue-500"><Link to="/shop?category=jeans&gender=women">Jeans</Link></li>
                      <li className="hover:text-blue-500"><Link to="/shop?category=hats&gender=women">Hats</Link></li>
                      <li className="hover:text-blue-500"><Link to="/shop?category=jewellery&gender=women">Jewellery</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Erkek</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="hover:text-blue-500"><Link to="/shop?category=tshirt&gender=men">Tshirt</Link></li>
                      <li className="hover:text-blue-500"><Link to="/shop?category=jeans&gender=men">Jeans</Link></li>
                      <li className="hover:text-blue-500"><Link to="/shop?category=hats&gender=men">Hats</Link></li>
                      <li className="hover:text-blue-500"><Link to="/shop?category=jewellery&gender=men">Jewellery</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="hover:text-blue-500"><Link to="/about">About</Link></li>
          <li className="hover:text-blue-500"><Link to="/blog">Blog</Link></li>
          <li className="hover:text-blue-500"><Link to="/contact">Contact</Link></li>
          <li className="hover:text-blue-500"><Link to="/pages">Pages</Link></li>
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
