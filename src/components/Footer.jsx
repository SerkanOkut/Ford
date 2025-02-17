import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 px-6">
      <div className="container mx-auto text-left">
        {/* Logo & Social Media */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Bandage</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-500 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-blue-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-blue-500 text-2xl"><FaTwitter /></a>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Business Marketing</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">User Analytics</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Live Chat</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Unlimited Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">IOS & Android</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">Customers</a></li>
              <li><a href="#" className="text-gray-700 no-underline hover:text-gray-900">API</a></li>
            </ul>
          </div>
        </div>

        {/* Get In Touchs */}
        <div className="mt-10 max-w-md">
          <h3 className="text-lg font-bold text-gray-900">Get In Touch</h3>
          <div className="mt-4 flex border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 focus:outline-none border-r"
            />
            <button className="bg-blue-500 text-white px-6 py-2 font-semibold hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">Lore imp sum dolor Amit</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 pt-6 text-gray-500 text-sm text-center">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
