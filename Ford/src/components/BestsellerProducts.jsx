import React from 'react';

const products = [
  { id: 1, name: "Graphic Design Shirt", price: "$16.48", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Classic Jeans", price: "$19.99", image: "https://via.placeholder.com/200" },
  { id: 3, name: "Stylish Jacket", price: "$25.99", image: "https://via.placeholder.com/200" },
  { id: 4, name: "Casual Sneakers", price: "$14.99", image: "https://via.placeholder.com/200" }
];

const BestsellerProducts = () => {
  return (
    <section className="container mx-auto py-16">
      <h3 className="text-2xl font-bold text-center">Bestseller Products</h3>
      <p className="text-gray-500 text-center mt-2">Problems trying to resolve the conflict.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h4 className="mt-2 text-lg font-semibold">{product.name}</h4>
            <p className="text-gray-500">{product.price}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestsellerProducts;
