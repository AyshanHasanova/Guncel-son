

import React from 'react';

const Touch = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Başlıq və təsvir hissəsi */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Keep In Touch with Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We’re talking about clean beauty gift sets, of course – and we’ve got a <br className="hidden md:block"/> bouquet of beauties for yourself or someone you love.
          </p>
        </div>

        {/* Məlumat blokları hissəsi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-12">
          {/* Ünvan bloku */}
          <div className="flex flex-col items-center md:items-start p-6 rounded-lg">
            <div className="flex items-start">
              <i className="fa-solid fa-location-dot text-2xl text-green-500 mr-4 mt-1"></i>
              <div>
                <h6 className="font-bold text-lg mb-2">Address</h6>
                <p className="text-gray-700">3245 Abbot Kinney BLVD - <br/> PH Venice, CA 124</p>
                <p className="text-gray-700 mt-2">76 East Houston Street <br/> New York City</p>
                <a href="#" className="mt-4 text-green-500 font-medium hover:underline block">Get Direction</a>
              </div>
            </div>
          </div>
          
          {/* Kontakt bloku */}
          <div className="flex flex-col items-center md:items-start p-6 rounded-lg">
            <div className="flex items-start">
              <i className="fa-solid fa-phone text-2xl text-green-500 mr-4 mt-1"></i>
              <div>
                <h6 className="font-bold text-lg mb-2">Contact</h6>
                <p className="text-gray-700">Mobile: <span className="font-medium text-black">068 26589 996</span></p>
                <p className="text-gray-700">Hotline: <span className="font-medium text-black">1900 26886</span></p>
                <p className="text-gray-700">E-mail: hello@grace.com</p>
              </div>
            </div>
          </div>
          
          {/* İş saatları bloku */}
          <div className="flex flex-col items-center md:items-start p-6 rounded-lg">
            <div className="flex items-start">
              <i className="fa-regular fa-clock text-2xl text-green-500 mr-4 mt-1"></i>
              <div>
                <h6 className="font-bold text-lg mb-2">Hour of operation</h6>
                <p className="text-gray-700"><span className="font-medium text-black">Mon - Fri:</span> 08:30 - 20:00</p>
                <p className="text-gray-700"><span className="font-medium text-black">Sat & Sun:</span> 09:30 - 21:30</p>
              </div>
            </div>
          </div>
        </div>

        {/* Xəritə bloku */}
        <div className="map mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560302.0769742727!2d7.630400641725654!3d51.19521574211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf689c35aee9%3A0x3a735e4f87bc8b68!2sGlowing%20Rooms%203D%20Schwarzlicht%20Minigolf%20Dresden!5e0!3m2!1saz!2saz!4v1738772702289!5m2!1saz!2saz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Touch;