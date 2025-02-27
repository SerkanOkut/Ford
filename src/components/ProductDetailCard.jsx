import React from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProductDetailCard = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.product.productList);

  // Seçili ürünü bul
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <p className="text-center text-red-500">Ürün bulunamadı</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sol: Ürün Görselleri */}
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full rounded-lg" />
          <div className="flex mt-4 space-x-2">
            {/* Küçük görseller (Varsayılan) */}
            <img src={product.image} alt={product.name} className="w-20 h-20 rounded-md" />
            <img src={product.image} alt={product.name} className="w-20 h-20 rounded-md" />
          </div>
        </div>

        {/* Sağ: Ürün Bilgileri */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <div className="flex items-center space-x-1 mt-2">
            <span className="text-yellow-400 text-lg">⭐ ⭐ ⭐ ⭐ ☆</span>
            <span className="text-gray-600 text-sm">10 Reviews</span>
          </div>

          <p className="text-2xl font-bold mt-4">{product.priceNew}</p>
          <p className="text-gray-500">
            Availability: <span className="text-green-600">In Stock</span>
          </p>

          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo
            interdum, facilisis libero et, feugiat libero.
          </p>

          {/* Renk Seçenekleri */}
          <div className="flex space-x-2 mt-4">
            <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
            <button className="w-6 h-6 bg-green-500 rounded-full"></button>
            <button className="w-6 h-6 bg-orange-500 rounded-full"></button>
            <button className="w-6 h-6 bg-gray-900 rounded-full"></button>
          </div>

          {/* Butonlar */}
          <div className="flex items-center space-x-4 mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Select Options
            </button>
            <FaHeart className="text-gray-600 text-xl cursor-pointer hover:text-red-500" />
            <FaShoppingCart className="text-gray-600 text-xl cursor-pointer hover:text-blue-500" />
            <FaEye className="text-gray-600 text-xl cursor-pointer hover:text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
