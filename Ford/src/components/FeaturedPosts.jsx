import React from 'react';

const posts = [
  { id: 1, title: "Loudest in a Medison #1", category: "Fashion", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Loudest in a Medison #2", category: "Lifestyle", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Loudest in a Medison #3", category: "Business", image: "https://via.placeholder.com/300" }
];

const FeaturedPosts = () => {
  return (
    <section className="container mx-auto py-16">
      <h3 className="text-2xl font-bold text-center">Featured Posts</h3>
      <p className="text-gray-500 text-center mt-2">Problems trying to resolve the conflict.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{post.category}</p>
              <h4 className="mt-2 text-lg font-semibold">{post.title}</h4>
              <button className="mt-4 text-blue-600 font-semibold">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
