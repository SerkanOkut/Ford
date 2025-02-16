import React from "react";

const categories = [
    { name: "MEN", image: "/images/men.jpg" },
    { name: "WOMEN", image: "/images/women.jpg" },
    { name: "ACCESSORIES", image: "/images/accessories.jpg" },
    { name: "KIDS", image: "/images/kids.jpg" },
  ];

const ShopCards = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      {/* Başlık */}
      <h2 className="text-2xl font-bold text-center text-gray-900">EDITOR’S PICK</h2>
      <p className="text-gray-500 text-center mt-2">
        Problems trying to resolve the conflict between
      </p>

      {/* Kategoriler */}
      <div className="flex flex-col gap-6 mt-8">
        {categories.map((category, index) => (
          <div key={index} className="relative w-full">
            {/* Kategori Görseli */}
            <img src={category.image} alt={category.name} className="w-full h-auto rounded-lg shadow-md" />
            {/* Kategori İsmi */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-lg shadow-md text-center">
              <span className="text-gray-900 font-semibold text-sm">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopCards;
