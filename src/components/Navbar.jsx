import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const history = useHistory();

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full top-0 left-0 z-50 md:hidden">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">SeCom</h1>

        {/* Icons & Menu Button */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-700 text-lg" />
          <FaShoppingCart className="text-gray-700 text-lg" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 text-xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <div 
                  className="relative"
                  onMouseEnter={() => setIsShopMenuOpen(true)}
                  onMouseLeave={() => setIsShopMenuOpen(false)}
                >
                  <Link
                    to="/shop"
                    className="text-gray-700 hover:text-blue-500 block"
                    onClick={(e) => {
                      e.preventDefault();
                      history.push('/shop');
                      setIsMenuOpen(false);
                      setIsShopMenuOpen(false);
                    }}
                  >
                    Shop
                  </Link>
                  {isShopMenuOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Kadın</h4>
                        <ul className="space-y-2 pl-2">
                          <li className="hover:text-blue-500">
                            <Link 
                              to="/shop?category=tshirt&gender=women"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              Tshirt
                            </Link>
                          </li>
                          <li className="hover:text-blue-500">
                            <Link 
                              to="/shop?category=jeans&gender=women"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              Jeans
                            </Link>
                          </li>
                          <li className="hover:text-blue-500">
                            <Link 
                              to="/shop?category=hats&gender=women"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              Hats
                            </Link>
                          </li>
                          <li className="hover:text-blue-500">
                            <Link 
                              to="/shop?category=jewellery&gender=women"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              Jewellery
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Erkek</h4>
                        <ul className="space-y-2 pl-2">
                          <li className="hover:text-blue-500">
                            <Link 
                              to="/shop?category=tshirt&gender=men"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              Tshirt
                            </Link>
                          </li>
                          <li className="hover:text-blue-500">
                            <Link 
                              to="/shop?category=jeans&gender=men"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              Jeans
                            </Link>
                          </li>
                          <li className="hover:text-blue-500">
                            <Link 
                              to="/shop?category=hats&gender=men"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              Hats
                            </Link>
                          </li>
                          <li className="hover:text-blue-500">
                            <Link 
                              to="/shop?category=jewellery&gender=men"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              Jewellery
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
