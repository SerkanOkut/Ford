import React, { useState } from "react";



const shopProducts = [
    {id: 1, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "man"},
    { id: 2, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "man" },
    { id: 3, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "man" },
    { id: 4, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "man" },
    { id: 5, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "man" },
    { id: 6, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "man" },
    { id: 7, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "man" },
    { id: 8, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "man" },
    { id: 9, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "woman"},
    { id: 10, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "woman" },
    { id: 11, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "woman" },
    { id: 12, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "woman" },
    { id: 13, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "woman" },
    { id: 14, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "woman" },
    { id: 15, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "woman" },
    { id: 16, name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "woman" },
    { id: 17, name: "Blue Jeans", category: "Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "man"},
    { id: 18, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "man" },
    { id: 19, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "man" },
    { id: 20, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "man" },
    { id: 21, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "man" },
    { id: 22, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "man" },
    { id: 23, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "man" },
    { id: 24, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "man" },
    { id: 25,name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "woman"},
    { id: 26, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "woman" },
    { id: 27, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "woman" },
    { id: 28, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "woman" },
    { id: 29, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "woman" },
    { id: 30, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "woman" },
    { id: 31, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "woman" },
    { id: 32, name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "woman" },
    { id: 33,name: "Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "kids"},
    { id: 34, name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "kids" },
    { id: 35, name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "kids" },
    { id: 36, name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "kids" },
    { id: 37, name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "kids" },
    { id: 38, name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "kids" },
    { id: 39, name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "kids" },
    { id: 40, name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "kids" },
    { id: 41,name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "men"},
    { id: 42, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "men" },
    { id: 43, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "men" },
    { id: 44, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "men" },
    { id: 45, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "men" },
    { id: 46, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "men" },
    { id: 47, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "men" },
    { id: 48, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "men" },
    { id: 49, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "woman"},
    { id: 50, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "woman" },
    { id: 51, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "woman" },
    { id: 52, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "woman" },
    { id: 53, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "woman" },
    { id: 54, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "woman" },
    { id: 55, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "woman" },
    { id: 56, name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "woman" },
    { id: 57, name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "kids"},
    { id: 58, name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "kids" },
    { id: 59, name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "kids" },
    { id: 60, name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "kids" },
    { id: 61, name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "kids" },
    { id: 62, name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "kids" },
    { id: 63, name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "kids" },
    { id: 64, name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "kids" },
    { id: 65, name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "woman"},
    { id: 66, name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "woman" },
    { id: 67, name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "woman"},
    { id: 68, name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "woman"},
    { id: 69, name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "woman"},
    { id: 70, name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "woman"},
    { id: 71, name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "woman"},
    { id: 72, name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "woman"},
    { id: 73, name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "man"},
    { id: 74, name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "man" },
    { id: 75, name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "man"},
    { id: 76, name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "man"},
    { id: 77, name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "man"},
    { id: 78, name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "man"},
    { id: 79, name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "man"},
    { id: 80, name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "man"},
    { id: 81, name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "kids"},
    { id: 82, name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "kids" },
    { id: 83, name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "kids"},
    { id: 84, name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "kids"},
    { id: 85, name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "kids"},
    { id: 86, name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "kids"},
    { id: 87, name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "kids"},
    { id: 88, name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "kids"},
];


const ShopProductCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");

  // Ürünleri kategori ve cinsiyete göre filtrele
  const filteredProducts = shopProducts.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedGender === "All" || product.gender === selectedGender)
    );
  });

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Filtreleme Alanı */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <select
          className="p-2 border rounded w-full sm:w-auto"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Tshirt">Tshirt</option>
          <option value="Jeans">Jeans</option>
          <option value="Jewellery">Jewellery</option>
          <option value="Jackets">Jackets</option>
          <option value="Hats">Hats</option>
        </select>

        <select
          className="p-2 border rounded w-full sm:w-auto"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="All">All Genders</option>
          <option value="man">Men</option>
          <option value="woman">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
            <h3 className="text-lg font-bold mt-4">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <div className="mt-2 flex justify-center gap-2">
              <span className="text-gray-400 line-through">{product.priceOld}</span>
              <span className="text-green-600 font-semibold">{product.priceNew}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProductCards;

