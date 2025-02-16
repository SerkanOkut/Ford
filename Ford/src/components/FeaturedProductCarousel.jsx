import React from "react";
import { Carousel } from "react-bootstrap";

const featuredProducts = [
  { name: "Vita Classic Product", description: "We know how large objects will act, but things on a small scale.", price: "$16.48", image: "/images/carousel1.jpg" },
  { name: "Limited Edition Product", description: "Experience exclusive designs with top quality materials.", price: "$19.99", image: "/images/carousel1.jpg" },
  { name: "Trendsetter Item", description: "Stay ahead of fashion trends with our new arrivals.", price: "$22.99", image: "/images/carousel1.jpg" },
];

const FeaturedProductCarousel = () => {
  return (
    <section className="relative py-10 px-4">
      <Carousel controls={true} indicators={true} interval={3000} className="w-full">
        {featuredProducts.map((product, index) => (
          <Carousel.Item key={index}>
            <div className="relative w-full h-[800px]" style={{ backgroundColor: "#23856D" }} >
              <div className="absolute top-30 left-0 right-0 text-white px-6 text-center">
                <p className="text-sm uppercase tracking-wide">SUMMER 2020</p>
                <h1 className="text-3xl md:text-5xl font-bold uppercase">{product.name}</h1>
                <p className="mt-2 max-w-xs mx-auto md:max-w-md">{product.description}</p>
                <span className="block mt-4 text-lg font-semibold">{product.price}</span>
                <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
                  ADD TO CART
                </button>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-auto h-96 object-contain"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedProductCarousel;

