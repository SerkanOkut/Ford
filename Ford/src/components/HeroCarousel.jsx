import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const HeroCarousel = () => {
  return (
    <section className="relative">
      <Carousel controls={true} indicators={false} interval={3000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-blue-500">
            <img
              src="https://via.placeholder.com/414x753" // Gerçek görseli buraya koy
              alt="New Collection"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative text-center text-white px-6">
              <p className="text-sm uppercase tracking-wide">Summer 2020</p>
              <h1 className="text-3xl md:text-5xl font-bold uppercase">New Collection</h1>
              <p className="mt-2 max-w-xs mx-auto md:max-w-md">
                We know how large objects will act, but things on a small scale.
              </p>
              <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
                SHOP NOW
              </button>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-pink-500">
            <img
              src="https://via.placeholder.com/414x753" // Farklı bir görsel ekleyebilirsin
              alt="Second Slide"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative text-center text-white px-6">
              <p className="text-sm uppercase tracking-wide">Exclusive Sale</p>
              <h1 className="text-3xl md:text-5xl font-bold uppercase">Limited Time Offer</h1>
              <p className="mt-2 max-w-xs mx-auto md:max-w-md">
                Get amazing discounts on your favorite products!
              </p>
              <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
                SHOP NOW
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
