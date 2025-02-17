import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroCarousel = () => {
  return (
    <section className="relative">
      <Carousel controls={false} indicators={false} interval={3000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="relative w-full h-[80vh] flex items-center justify-center bg-blue-500">
            {/* Mobil İçin Görsel */}
            <div className="absolute inset-0 w-full h-full object-cover opacity-50 md:hidden">
              <img
                src="/images/carouselmobile.jpg"
                alt="New Collection"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Web İçin Görsel */}
            <div
              className="hidden md:flex w-full h-full items-center bg-cover bg-center pl-20 pr-10"
              style={{ backgroundImage: "url('/images/carouselweb.jpg')" }}
            >
              {/* Yazılar */}
              <div className="text-white max-w-lg">
                <p className="text-sm uppercase tracking-wide">Summer 2020</p>
                <h1 className="text-6xl font-bold mt-2">NEW COLLECTION</h1>
                <p className="mt-4 text-lg">
                  We know how large objects will act, but things on a small scale.
                </p>
                <button className="mt-6 bg-green-500 text-white text-lg py-3 px-6 rounded-md hover:bg-green-600 transition">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* Mobil İçerik */}
            <div className="relative text-center text-white px-6 md:hidden">
              <p className="text-sm uppercase tracking-wide">Summer 2020</p>
              <h1 className="text-3xl font-bold uppercase">New Collection</h1>
              <p className="mt-2 max-w-xs mx-auto">
                We know how large objects will act, but things on a small scale.
              </p>
              <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
                SHOP NOW
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Navigasyon Okları (Tek Versiyon) */}
      <button className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-white/20 p-4 rounded-full hover:bg-white/40 transition">
        <FaChevronLeft className="text-white text-2xl" />
      </button>

      <button className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-white/20 p-4 rounded-full hover:bg-white/40 transition">
        <FaChevronRight className="text-white text-2xl" />
      </button>
    </section>
  );
};

export default HeroCarousel;

