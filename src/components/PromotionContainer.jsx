import React from "react";

const PromotionContainer = () => {
  return (
    <section className="container mx-auto py-16 px-6">
      
      {/* 📌 Webde İçeriği Yan Yana Getiriyoruz */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* 📌 Sol Taraf: Görsel (Web için sola alındı) */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/promotion-container.jpg"
            alt="Promotional"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>

        {/* 📌 Sağ Taraf: Metin İçeriği (Webde sağda olacak) */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
          <p className="text-gray-500 uppercase tracking-wide">SUMMER 2020</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Part of the Neural Universe
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* 📌 Webde Butonlar Aynı Hizaya Getirildi */}
          <div className="mt-6 flex flex-col md:flex-row md:space-x-4 justify-center md:justify-start">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600">
              BUY NOW
            </button>
            <button className="border border-green-500 text-green-500 px-6 py-3 rounded-md font-semibold hover:bg-green-100">
              READ MORE
            </button>
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default PromotionContainer;
