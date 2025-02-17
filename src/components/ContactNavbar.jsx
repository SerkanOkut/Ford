import React from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

console.log("ContactNavbar Render Oldu!");

const ContactNavbar = () => {
  return (
<div className="hidden md:flex items-center justify-between bg-gray-900 text-white py-2 px-10 text-sm fixed top-0 h-12 left-0 w-full z-50">




      {/* Left Section - Contact Info */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <FaPhone className="text-gray-400" />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-gray-400" />
          <span>michelle.rivera@example.com</span>
        </div>
      </div>

      {/* Middle Section - Promotion */}
      <div className="text-gray-300">
        Follow Us and get a chance to win 80% off
      </div>

      {/* Right Section - Social Media Icons */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-300">Follow Us :</span>
        <a href="#" className="text-white hover:text-blue-400"><FaInstagram /></a>
        <a href="#" className="text-white hover:text-blue-400"><FaYoutube /></a>
        <a href="#" className="text-white hover:text-blue-400"><FaFacebook /></a>
        <a href="#" className="text-white hover:text-blue-400"><FaTwitter /></a>
      </div>
    </div>
  );
};

export default ContactNavbar;
