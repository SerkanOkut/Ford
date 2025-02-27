import React from "react";
import { useHistory } from "react-router-dom";

const products = [
  { id: 89, name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg" },
  { id: 90, name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg" },
  { id: 91, name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg" },
  { id: 92, name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg" },
  { id: 93, name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg" },
  { id: 94, name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg" },
  { id: 95, name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg" },
  { id: 96, name: "Graphic Design", category: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg" },
];

const ProductCards = () => {
  const history = useHistory();

  const handleProductClick = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <section className="container mx-auto py-10 px-4">
      {/* Başlık */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900">Featured Products</h2>
      <h3 className="text-xl font-semibold text-center text-gray-800">BESTSELLER PRODUCTS</h3>
      <p className="text-gray-500 text-center mt-2">
        Problems trying to resolve the conflict between
      </p>

      {/* Mobil Görünüm (Alt Alta) */}
      <div className="flex flex-col gap-10 mt-8 md:hidden">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="relative w-full text-center cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">{product.name}</h4>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">{product.priceOld}</span>
              <span className="text-green-500 text-lg font-semibold ml-2">{product.priceNew}</span>
            </div>
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-4 h-4 rounded-full bg-blue-500 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-red-500 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 inline-block"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Web Görünüm (4x2 Grid) */}
      <div className="hidden md:grid grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative text-center cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
            <h4 className="mt-4 text-lg font-bold text-gray-900">{product.name}</h4>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <div className="mt-2">
              <span className="text-gray-400 line-through text-sm">{product.priceOld}</span>
              <span className="text-green-500 text-lg font-semibold ml-2">{product.priceNew}</span>
            </div>
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
