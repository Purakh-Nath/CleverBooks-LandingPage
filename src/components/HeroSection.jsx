import React, { useState, useEffect } from 'react';
import logo from '../assets/cleverlogo.png'
const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <section className="bg-black text-white py-10  ">
      <div className={`fixed top-0 left-0 h-20  w-full bg-black text-white transition-transform duration-300 z-50 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="container mx-auto px-4  ">
          <nav className="flex justify-between items-center mb-10  ">
            <div className="text-2xl font-bold">
              <img src={logo} alt="CleverBooks Logo" className="w-48 mt-1" />
            </div>
            <div className="hidden md:flex space-x-24 items-center mb-16">
              <a href="#" className="text-white hover:text-purple-500">Product</a>
              <a href="#" className="text-white hover:text-purple-500">Pricing</a>
              <a href="#" className="text-white hover:text-purple-500">Industry</a>
              <a href="#" className="text-white hover:text-purple-500">Customer Stories</a>
              <a href="#" className="text-white hover:text-purple-500">About</a>
              <a href="#" className="text-white hover:text-purple-500">Blog</a>
              <a href="#" className="text-white hover:text-purple-500">Login</a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-full text-white">Talk to Us</button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </nav>
          {isMobileMenuOpen && (
            <div className="md:hidden space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white">Product</a>
              <a href="#" className="block text-gray-400 hover:text-white">Pricing</a>
              <a href="#" className="block text-gray-400 hover:text-white">Industry</a>
              <a href="#" className="block text-gray-400 hover:text-white">Customer Stories</a>
              <a href="#" className="block text-gray-400 hover:text-white">About</a>
              <a href="#" className="block text-gray-400 hover:text-white">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white">Login</a>
              <button className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-full text-white">Talk to Us</button>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-24"> {/* Adjust the margin top to account for the fixed navbar */}
        <div className="flex flex-col md:flex-row items-center mt-10 md:mt-0">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Every order, <br />  fulfilled <span className="text-[#C87DBD]">on time.</span></h1>
            <p className="text-xl md:text-2xl mb-8">Eliminate overstocking and under-stocking with CleverBooks. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-full text-white ">Get started with CleverBooks</button>
            <div className="text-2xl font-bold">
              <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg' alt="CleverBooks Logo" className="ml-48" />
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg' alt="Hero" className="mx-auto md:ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


