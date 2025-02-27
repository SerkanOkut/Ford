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
      <WebNavbar />
      <div className="w-full min-h-screen">

        {/* 📌 1. Bölüm - Contact Info Section */}
        <section className="py-12 px-6 text-center bg-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get answers to all your questions.
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-lg">
            Problems trying to resolve the conflict between the two major realms of Classical physics.
          </p>
          <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md font-bold text-sm md:text-base">
            CONTACT OUR COMPANY
          </button>
          {/* 📌 Sosyal Medya İkonları */}
          <div className="flex justify-center py-6 gap-4 mt-6 text-gray-700 text-xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </section>

        <section className="py-16 px-6 text-center md:text-left bg-cover bg-center text-white relative flex flex-col md:flex-row items-center"
  style={{ backgroundImage: "url('/images/carouselweb.jpg')" }}>
  
  {/* Sol taraftaki başlık ve açıklama */}
  <div className="md:w-1/3 z-10">
    <h2 className="text-3xl md:text-5xl font-bold">CONTACT US</h2>
    <p className="text-gray-300 text-lg mt-4 max-w-md">
      Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
    </p>
    <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md font-bold">
      CONTACT US
    </button>
  </div>

  {/* Sağ tarafta şehir bilgileri */}
  <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 md:mt-0 md:ml-20">
    {[
      { city: "Paris", address: "1901 Thorn ridge Cir.", zip: "75000 Paris" },
      { city: "Berlin", address: "4140 Parker Rd.", zip: "75000 Berlin" },
      { city: "New York", address: "2715 Ash Dr, San Jose", zip: "75000 NY" },
      { city: "London", address: "3517 W. Gray St. Utica", zip: "75000 London" }
    ].map((place, index) => (
      <div key={index} className="text-left">
        <h3 className="text-xl font-bold">{place.city}</h3>
        <p className="mt-2">{place.address}</p>
        <p>{place.zip}</p>
        <p className="text-gray-300 text-sm mt-1">Phone: +451 215 215</p>
        <p className="text-gray-300 text-sm">Fax: +451 215 215</p>
        <div className="w-10 h-1 bg-blue-500 mt-2"></div>
      </div>
    ))}
  </div>

  {/* Sağ alttaki model fotoğrafı */}
  
</section>


        {/* 📌 4. Bölüm - Work With Us */}
        <section className="py-16 px-4 text-center md:text-left bg-black text-white" style={{ backgroundImage: "url('/images/contactimage2.jpg')" }} >
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-400">WORK WITH US</h2>
              <h3 className="text-3xl md:text-5xl font-bold mt-4">Now Let's grow Yours</h3>
              <p className="text-lg mt-4 max-w-lg">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
              </p>
              <button className="mt-6 border-2 border-white px-6 py-3 font-semibold rounded-md">
                Button
              </button>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img src="/images/contactimage2.jpg" alt="Work With Us" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;

