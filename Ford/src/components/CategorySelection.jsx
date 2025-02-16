import React from 'react';

const categories = [
  { name: "Man", image: "https://via.placeholder.com/200" },
  { name: "Women", image: "https://via.placeholder.com/200" },
  { name: "Accessories", image: "https://via.placeholder.com/200" }
];

const CategorySelection = () => {
  return (
    <section className="container mx-auto py-16">
      <h3 className="text-2xl font-bold text-center">Editor's Pick</h3>
      <p className="text-gray-500 text-center mt-2">Problems trying to resolve the conflict.</p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img src={category.image} alt={category.name} className="w-40 h-40 rounded-lg shadow-md" />
            <p className="mt-2 font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySelection;
