import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Social Media and Logo */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <h2 className="text-xl font-bold">Bandage</h2>
          <div className="flex space-x-4 mt-4 md:mt-0 md:self-start">
            <a href="#" className="text-blue-500 text-xl"><FaFacebook /></a>
            <a href="#" className="text-pink-500 text-xl"><FaInstagram /></a>
            <a href="#" className="text-blue-400 text-xl"><FaTwitter /></a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 mt-8 text-gray-700">
          <div className="text-left">
            <h3 className="font-semibold">Company Info</h3>
            <ul className="mt-2 space-y-1">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-2 space-y-1">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-semibold">Features</h3>
            <ul className="mt-2 space-y-1">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-semibold">Get In Touch</h3>
            <div className="mt-2 flex border border-gray-300 rounded-md overflow-hidden w-full">
              <input type="email" placeholder="Your Email" className="p-2 flex-grow w-2/3" />
              <button className="bg-blue-500 text-white px-6 py-2 w-1/3 text-center">Subscribe</button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Lorem imp sum dolor Amit</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

