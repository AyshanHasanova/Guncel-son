import React from 'react';

const ContactForm = () => {
  return (
    // Üst və alt tərəfdən böyük boşluq, arxa fonu ağ rəngdə
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Başlıq hissəsi */}
        <div className="text-center mb-12">
          {/* Başlığın şrift ölçüsü, qalınlığı və rəngi */}
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Sent A Message</h2>
        </div>

        {/* Formanın konteyneri */}
        <form className="space-y-6">
          {/* Ad və E-mail üçün iki sütunlu flex layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Ad inputu */}
            <input 
              type="text" 
              placeholder="Name*" 
              // Fonu açıq boz (f5f5f5) rəngdədir.
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all bg-gray-100"
            />
            {/* E-mail inputu */}
            <input 
              type="email" 
              placeholder="Email*" 
              // Fonu açıq boz (f5f5f5) rəngdədir.
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all bg-gray-100"
            />
          </div>
          
          {/* Messenger textarea */}
          <textarea 
            placeholder="Messenger" 
            rows="6" 
            // Fonu açıq boz (f5f5f5) rəngdədir.
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none transition-all bg-gray-100"
          ></textarea>
          
          {/* Göndər düyməsi */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              // Düymənin fonu qara, mətni ağ rəngdədir.
              className="bg-black text-white font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;