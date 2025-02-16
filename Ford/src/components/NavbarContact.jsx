import React from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const NavbarContact = () => {
  return (
    <div className="bg-gray-900 text-white py-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Sol Kısım - Telefon ve E-posta */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-gray-400" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-400" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Orta Kısım - Promosyon */}
        <div className="hidden md:block text-sm text-gray-300">
          Follow Us and get a chance to win <span className="text-white font-bold">80% off</span>
        </div>

        {/* Sağ Kısım - Sosyal Medya */}
        <div className="flex items-center space-x-4 text-white text-lg">
          <span className="text-sm">Follow Us :</span>
          <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
          <FaYoutube className="cursor-pointer hover:text-gray-400 transition" />
          <FaFacebook className="cursor-pointer hover:text-gray-400 transition" />
          <FaTwitter className="cursor-pointer hover:text-gray-400 transition" />
        </div>
      </div>
    </div>
  );
};

export default NavbarContact;
