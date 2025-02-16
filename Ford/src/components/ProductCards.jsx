import React from "react";

const products = [
  { name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg" },
  { name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg" },
  { name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg" },
  { name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg" },
  { name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg" },
  { name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg" },
  { name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg" },
  { name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg" },
];

const ProductCards = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      {/* Başlık */}
      <h2 className="text-2xl font-bold text-center text-gray-900">Featured Products</h2>
      <h3 className="text-xl font-semibold text-center text-gray-800">BESTSELLER PRODUCTS</h3>
      <p className="text-gray-500 text-center mt-2">
        Problems trying to resolve the conflict between
      </p>

      {/* Ürünler */}
      <div className="flex flex-col gap-10 mt-8">
        {products.map((product, index) => (
          <div key={index} className="relative w-full text-center">
            {/* Ürün Görseli */}
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
            {/* Ürün Bilgileri */}
            <h4 className="mt-4 text-lg font-bold text-gray-900">{product.name}</h4>
            <p className="text-gray-500 text-sm">{product.category}</p>
            {/* Fiyat Bilgisi */}
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">{product.priceOld}</span>
              <span className="text-green-500 text-lg font-semibold ml-2">{product.priceNew}</span>
            </div>
            {/* Renk Seçenekleri */}
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-4 h-4 rounded-full bg-blue-500 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-red-500 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 inline-block"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;

