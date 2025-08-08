import React from 'react';

// Swiper.js modulları üçün importlar
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper.js stil fayllarını daxil edin
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  // Slayder məlumatları
  const slides = [
    {
      title: 'Beauty Inspired by Real Life',
      subtitle: 'ESSENTIAL ITEMS',
      description: 'Made using clean, non-toxic ingredients, our products are designed for everyone.',
      buttonText: 'Shop Now',
      backgroundImageUrl: 'https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-01.jpg'
    },
    {
      title: 'Effortless Radiance',
      subtitle: 'NEW ARRIVALS',
      description: 'Discover our latest collection of skincare essentials for a natural glow.',
      buttonText: 'Discover More',
      backgroundImageUrl: 'https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-02.jpg'
    },
    {
      title: 'Your Skin, Your Story',
      subtitle: 'CLEAN BEAUTY',
      description: 'We believe in products that are good for you and the planet. Shop our eco-friendly line.',
      buttonText: 'Learn More',
      backgroundImageUrl: 'https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-03.jpg'
    },
  ];

  return (
    <div
      className="relative w-full h-screen"
    >
      
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #22c55e !important; /* Tailwind'də yeşil rəng */
            opacity: 1 !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #16a34a !important; /* Daha tünd yaşıl */
          }
        `}
      </style>

      <Swiper
        // Swiper konfiqurasiyası
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative z-10 w-full h-full flex items-center justify-center md:justify-start text-black p-8 md:p-16 lg:p-24 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.backgroundImageUrl})` }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start w-full">
                {/* Sol tərəf: Mətn hissəsi */}
                <div className="text-center md:text-left max-w-xl md:max-w-2xl mb-8 md:mb-0">
                  <h3 className="text-sm md:text-md font-semibold uppercase tracking-widest mb-2 text-black">
                    {slide.subtitle}
                  </h3>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl font-light mb-8 max-w-md">
                    {slide.description}
                  </p>
                  <button className="bg-black bg-opacity-70 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out border border-white">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;




