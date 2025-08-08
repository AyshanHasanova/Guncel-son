import React from 'react'

const Discover  = () => {
  return (
    <section className="discover text-center py-16 px-4 md:px-8 bg-white overflow-hidden">
      {/* Başlıq və mətn hissəsi */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">More to Discover</h2>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Our bundles were designed to conveniently package your tanning <br className="hidden md:block" /> essentials while saving you money.
      </p>

      {/* Mağaza kartları hissəsi */}
      <div className="shops flex flex-col md:flex-row justify-center max-w-7xl mx-auto gap-12">
        {/* İlk kart - Summer Collection */}
        <div className="shop1 relative w-full md:w-1/2 overflow-hidden cursor-pointer group">
          <img
            src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/image-box-10.jpg"
            alt="Summer Collection"
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* Mətn hissəsi şəkilin altında */}
          <div className="shop-text p-8 text-left text-gray-800">
            <h3 className="text-2xl font-semibold mb-2">Summer Collection</h3>
            <a href="#" className="flex items-center text-gray-800 hover:text-black transition-colors duration-300">
              <span className="text-lg mr-2">Shop Now</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* İkinci kart - From Our Blog */}
        <div className="shop1 relative w-full md:w-1/2 overflow-hidden cursor-pointer group">
          <img
            src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/image-box-11-1.jpg"
            alt="From Our Blog"
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* Mətn hissəsi şəkilin altında */}
          <div className="shop-text p-8 text-left text-gray-800">
            <h3 className="text-2xl font-semibold mb-2">From Our Blog</h3>
            <a href="#" className="flex items-center text-gray-800 hover:text-black transition-colors duration-300">
              <span className="text-lg mr-2">Read More</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;