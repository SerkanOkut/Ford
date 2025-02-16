import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative bg-blue-600 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold uppercase">New Collection</h2>
          <p className="mt-4 text-lg">We know how large objects will act, but things on a small scale.</p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="https://via.placeholder.com/400" alt="Hero Banner" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
