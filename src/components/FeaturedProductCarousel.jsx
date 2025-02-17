import React from "react";
import { Carousel } from "react-bootstrap";

const featuredProducts = [
  { 
    name: "Vita Classic Product", 
    description: "We know how large objects will act, but things on a small scale.", 
    price: "$16.48", 
    image: "/images/carousel1.jpg" 
  },
  { 
    name: "Limited Edition Product", 
    description: "Experience exclusive designs with top quality materials.", 
    price: "$19.99", 
    image: "/images/carousel1.jpg" 
  },
  { 
    name: "Trendsetter Item", 
    description: "Stay ahead of fashion trends with our new arrivals.", 
    price: "$22.99", 
    image: "/images/carousel1.jpg" 
  },
];

const FeaturedProductCarousel = () => {
  return (
    <section className="relative py-10 px-4">
      <Carousel controls={true} indicators={true} interval={3000} className="w-full">
        {featuredProducts.map((product, index) => (
          <Carousel.Item key={index}>
            <div className="relative w-full h-[900px] md:h-[90vh] bg-[#23856D] flex items-center md:justify-between md:px-40">

              {/* 📌 **Mobil için hiçbir şey değişmedi** */}
              <div className="absolute top-1/4 left-0 right-0 text-white px-6 text-center md:hidden">
                <p className="text-sm uppercase tracking-wide">SUMMER 2020</p>
                <h1 className="text-3xl font-bold uppercase">{product.name}</h1>
                <p className="mt-2 max-w-xs mx-auto">{product.description}</p>
                <span className="block mt-4 text-lg font-semibold">{product.price}</span>
                <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
                  ADD TO CART
                </button>
              </div>

              {/* 📌 **Web İçin: Metin sola, resim sağa eklendi** */}
              <div className="hidden md:flex w-full h-full items-center justify-between">
                {/* Sol Taraf: Metin */}
                <div className="text-white max-w-lg">
                  <p className="text-sm uppercase tracking-wide">SUMMER 2020</p>
                  <h1 className="text-6xl font-bold mt-2">{product.name}</h1>
                  <p className="mt-4 text-lg">{product.description}</p>
                  <span className="block mt-4 text-2xl font-semibold">{product.price}</span>
                  <button className="mt-6 bg-green-500 text-white text-lg py-3 px-6 rounded-md hover:bg-green-600 transition">
                    ADD TO CART
                  </button>
                </div>

                {/* 📌 **Web İçin Resim - Sağda Yer Alacak** */}
                <div className="h-full flex items-end">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[90%] object-contain"
                  />
                </div>
              </div>

              {/* 📌 **Mobildeki Resim Yerini KORUDUK!** */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-auto h-96 object-contain md:hidden"
              />

            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedProductCarousel;


