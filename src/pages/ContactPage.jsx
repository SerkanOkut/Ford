import React from "react";
import Navbar from "../components/Navbar";
import WebNavbar from "../components/WebNavbar";
import Footer from "../components/Footer";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactNavbar from "../components/ContactNavbar";

const ContactPage = () => {
  return (
    <>
    <ContactNavbar />
    <Navbar /> 
    <WebNavbar/>
    <div className="w-full min-h-screen">
   

      {/* Contact Info Section */}
      <section className="py-12 px-6 text-center bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get answers to all your questions.</h2>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          Problems trying to resolve the conflict between the two major realms of Classical physics.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md font-bold text-sm md:text-base">
          CONTACT OUR COMPANY
        </button>
           {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Questions & Answers</h1>
        <p className="text-gray-700 mt-4 text-sm md:text-lg max-w-xl">
          Problems trying to resolve the conflict between the two major realms of Classical physics.
        </p>
        <a href="#contact" className="text-blue-500 font-bold mt-4 text-sm md:text-base">CONTACT US</a>
      </section>
        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center gap-4 mt-6 text-gray-700 text-xl">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </section>

      {/* Footer (Eğer ayrı bileşen varsa eklemene gerek yok) */}
    </div>

    <Footer />
    </>
  );
};

export default ContactPage;
