import React from "react";

const PromotionContainer = () => {
  return (
    <section className="container mx-auto py-16 px-6 text-center md:text-left">
      <div className="flex flex-col md:flex-row-reverse items-center md:items-center">
        {/* Webde metin sağda, görsel solda - Mobilde metin üstte, görsel altta */}
        <div className="md:w-1/2">
          <p className="text-gray-500 uppercase tracking-wide">SUMMER 2020</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Part of the Neural Universe
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Butonlar */}
          <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start gap-4 px-30">
            <button className="bg-blue-500 md:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 md:hover:bg-green-600">
              BUY NOW
            </button>
            <button className="border border-blue-500 md:border-green-500 text-blue-500 md:text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 md:hover:bg-green-100">
              READ MORE
            </button>
          </div>
        </div>

        {/* Görsel */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/images/promotion-container.jpg"
            alt="Promotional"
            className="w-full max-w-xs md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionContainer;
