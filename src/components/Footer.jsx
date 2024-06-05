import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#151218] text-white p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">CleverBooks</h2>
            <p>CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning, and more. This helps them have the right amount of stock, optimize space, and fulfill every order.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Explore</h3>
            <ul>
              <li><a href="#" className="hover:underline">Product</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Customer Stories</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Learn</h3>
            <ul>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
            <h3 className="text-xl font-bold mb-2 mt-4">Contact CleverBooks</h3>
            <p>Email: <a href="mailto:sales@getCleverBooks.ai" className="hover:underline">sales@getCleverBooks.ai</a></p>
            <p>Registered Office: 1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</p>
            <p>Corporate Office: 291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center">Copyright 2024 CleverBooks</p>
          <p className="text-center">Conifer Innovations Private Limited CIN: U72900KA2022PTC163144</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
