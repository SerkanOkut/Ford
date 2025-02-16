import React from "react";

const PromotionContainer = () => {
  return (
    <section className="container mx-auto py-16 px-6 text-center">
      {/* Başlık ve Açıklama */}
      <p className="text-gray-500 uppercase tracking-wide">SUMMER 2020</p>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Part of the Neural Universe</h2>
      <p className="text-gray-600 max-w-md mx-auto mt-4">
        We know how large objects will act, but things on a small scale.
      </p>
      
      {/* Butonlar */}
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
          BUY NOW
        </button>
        <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100">
          Learn More
        </button>
      </div>
      
      {/* Görsel */}
      <img
        src="/images/promotion-container.jpg"
        alt="Promotional"
        className="w-full max-w-sm mx-auto mt-10"
      />
    </section>
  );
};

export default PromotionContainer;