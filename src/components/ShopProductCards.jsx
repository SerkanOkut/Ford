import React from "react";



const shopProducts = [
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "man"},
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "man" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "man" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "man" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "man" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "man" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "man" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "man" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "woman"},
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "woman" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "woman" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "woman" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "woman" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "woman" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "woman" },
    { name: "Black Tshirt", category: "Tshirt", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "woman" },
    { name: "Blue Jeans", category: "Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "man"},
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "man" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "man" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "man" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "man" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "man" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "man" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "man" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "woman"},
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "woman" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "woman" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "woman" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "woman" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "woman" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "woman" },
    { name: "Blue Jeans", category: " Jeans", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "woman" },
    { name: "Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "kids"},
    { name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "kids" },
    { name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "kids" },
    { name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "kids" },
    { name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "kids" },
    { name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "kids" },
    { name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "kids" },
    { name: " Kids Hat", category: "Hats", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "kids" },
    { name: " Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "men"},
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "men" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "men" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "men" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "men" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "men" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "men" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "men" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "woman"},
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "woman" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "woman" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "woman" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "woman" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "woman" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "woman" },
    { name: "Love Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "woman" },
    { name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "kids"},
    { name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "kids" },
    { name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "kids" },
    { name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "kids" },
    { name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "kids" },
    { name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "kids" },
    { name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "kids" },
    { name: "Caillou Jackets", category: "Jackets", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "kids" },
    { name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "woman"},
    { name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "woman" },
    { name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "woman"},
    { name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "woman"},
    { name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "woman"},
    { name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "woman"},
    { name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "woman"},
    { name: "Charm Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "woman"},
    { name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "man"},
    { name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "man" },
    { name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "man"},
    { name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "man"},
    { name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "man"},
    { name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "man"},
    { name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "man"},
    { name: "Car Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "man"},
    { name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards1.jpg", gender: "kids"},
    { name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards2.jpg", gender: "kids" },
    { name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards3.jpg", gender: "kids"},
    { name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards4.jpg", gender: "kids"},
    { name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards5.jpg", gender: "kids"},
    { name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards6.jpg", gender: "kids"},
    { name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards7.jpg", gender: "kids"},
    { name: "Birds Necklaces", category: "Jewellery", priceOld: "$16.48", priceNew: "$6.48", image: "/images/productcards8.jpg", gender: "kids"},
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
    <div className="container mx-auto px-4 py-8">
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

