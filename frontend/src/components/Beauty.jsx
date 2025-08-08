import React from 'react';

const Beauty = () => {
  return (
    <section className="beauty py-12 px-4 md:px-8 lg:px-16">
      {/* Containerın max-w-7xl ilə daha mərkəzə yığılmasını təmin edir */}
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sol hissə - böyük şəkil */}
          <div className="products-left relative w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/banner-21.jpg" 
              alt="Empower Yourself" 
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" 
            />
            <div className="product-overlay absolute bottom-0 left-0 p-8 text-white z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Empower Yourself</h3>
              <p className="text-base md:text-lg font-light mb-4">
                Get the skin you want to feel
              </p>
              {/* Sizin Link komponentinizin yerinə sadə bir düymə əlavə etdim */}
              <a href="#" className="inline-block px-6 py-3 border border-white text-white font-medium rounded-full transition-colors duration-300 hover:bg-white hover:text-black">
                Explore More
              </a>
            </div>
          </div>

          {/* Sağ hissə - məhsul kartları */}
          <div className="products-right w-full md:w-1/2 grid grid-cols-2 gap-4">
            {/* Hər bir məhsul kartı */}
            {[
              { 
                price: "$10.00 – $20.00", 
                name: "Shield Conditioner", 
                img1: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-11-3-400x533.jpg", 
                img2: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-11-1-1-400x533.jpg",
                discount: "-17%"
              },
              { 
                price: "$20.00", 
                name: "Perfecting Facial Oil", 
                img1: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-13-4-400x533.jpg", 
                img2: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-13-1-1-400x533.jpg"
              },
              { 
                price: "$23.00", 
                name: "Enriched Hand & Body Wash", 
                img1: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-10-3-400x533.jpg", 
                img2: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-10-1-1-400x533.jpg",
                discount: "-8%"
              },
              { 
                price: "$45.00", 
                name: "Shield Shampoo", 
                img1: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-12-3-400x533.jpg", 
                img2: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-12-1-1-400x533.jpg"
              },
              { 
                price: "$90.00", 
                name: "Enriched Hand Wash", 
                img1: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-08-04-400x533.jpg", 
                img2: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-08-1-1-400x533.jpg"
              },
              { 
                price: "$18.00 - $90.00", 
                name: "Enriched Duo", 
                img1: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-07-04-400x533.jpg", 
                img2: "https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-07-1-1-400x533.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="beauty-card relative group">
                <div className="card relative overflow-hidden rounded-lg shadow-sm">
                  {/* Normal və hover şəkli */}
                  <div className="card-image relative">
                    <img src={product.img1} alt={product.name} className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:opacity-0" />
                    <img src={product.img2} alt={product.name} className="w-full h-full object-cover rounded-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  {/* Endirim etiketi */}
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      {product.discount}
                    </span>
                  )}
                  {/* Üstünə gəldikdə görünən ikonlar */}
                  <div className="icons-overlay absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-0 bg-green-500 bg-opacity-50">
                    <i className="fa-solid fa-bag-shopping text-white text-2xl mb-4 cursor-pointer hover:text-gray-300"></i>
                    <i className="fa-solid fa-eye text-white text-2xl mb-4 cursor-pointer hover:text-gray-300"></i>
                    <i className="fa-solid fa-star text-white text-2xl mb-4 cursor-pointer hover:text-gray-300"></i>
                    <i className="fa-brands fa-nfc-directional text-white text-2xl cursor-pointer hover:text-gray-300"></i>
                  </div>
                </div>
                {/* Məhsul məlumatı */}
                <div className="card-title text-center mt-4">
                  <div className="card-text text-gray-500 text-sm font-medium">{product.price}</div>
                  <div className="card-name text-gray-800 font-semibold">{product.name}</div>
                  <div className="rate text-yellow-400 text-sm mt-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beauty;
