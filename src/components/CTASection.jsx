import React from 'react';

const CTASection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#151218]">
      <div className="text-center px-2 py-36 bg-gradient-to-r from-purple-300 to-pink-300 rounded-md shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">You can grow faster than you think!</h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Plan with CleverBooks to fulfill your demand today, and <br /> dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg">Get started with CleverBooks</button>
      </div>
    </div>
  );
};

export default CTASection;
