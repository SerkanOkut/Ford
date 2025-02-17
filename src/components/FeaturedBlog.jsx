import React from "react";

const blogPosts = [
  {
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    category: ["Google", "Trending", "New"],
    image: "/images/blog1.jpg",
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    category: ["Google", "Trending", "New"],
    image: "/images/blog2.jpg",
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    category: ["Google", "Trending", "New"],
    image: "/images/blog3.jpg",
  },
];

const FeaturedBlog = () => {
  return (
    <section className="container mx-auto py-16 px-6">
      {/* Başlık */}
      <p className="text-blue-500 uppercase text-center font-semibold">Practice Advice</p>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">Featured Products</h2>
      <p className="text-gray-600 max-w-md mx-auto text-center mt-2">
        Problems trying to resolve the conflict between the two major
      </p>
      
      {/* Blog Kartları */}
      <div className="flex flex-col gap-8 mt-10">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={post.image} alt={post.title} className="w-full h-auto" />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-lg font-semibold">
                NEW
              </span>
            </div>
            <div className="p-5">
              <p className="text-gray-500 text-xs flex space-x-2">
                {post.category.map((cat, i) => (
                  <span key={i} className="text-blue-500 font-medium">{cat}</span>
                ))}
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <div className="flex items-center justify-between text-gray-400 text-xs mt-4">
                <span>📅 {post.date}</span>
                <span>📊 {post.comments}</span>
              </div>
              <a href="#" className="text-blue-500 font-semibold text-sm mt-4 inline-block">
                Learn More ➝
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlog;
