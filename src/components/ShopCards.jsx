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
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900">EDITOR’S PICK</h2>
      <p className="text-gray-500 text-center mt-2">
        Problems trying to resolve the conflict between
      </p>

      {/* Mobil Görünüm (Alt Alta) */}
      <div className="flex flex-col gap-6 mt-8 md:hidden">
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

      {/* Web Görünüm (Grid) */}
      <div className="hidden md:grid grid-cols-4 gap-6 mt-10">
        <div className="col-span-2 relative">
          <img src={categories[0].image} alt={categories[0].name} className="w-full h-full object-cover rounded-lg shadow-md" />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-lg shadow-md">
            <span className="text-gray-900 font-semibold text-sm">{categories[0].name}</span>
          </div>
        </div>

        <div className="col-span-1 relative">
          <img src={categories[1].image} alt={categories[1].name} className="w-full h-full object-cover rounded-lg shadow-md" />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-lg shadow-md">
            <span className="text-gray-900 font-semibold text-sm">{categories[1].name}</span>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          <div className="relative">
            <img src={categories[2].image} alt={categories[2].name} className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-lg shadow-md">
              <span className="text-gray-900 font-semibold text-sm">{categories[2].name}</span>
            </div>
          </div>

          <div className="relative">
            <img src={categories[3].image} alt={categories[3].name} className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-lg shadow-md">
              <span className="text-gray-900 font-semibold text-sm">{categories[3].name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCards;
