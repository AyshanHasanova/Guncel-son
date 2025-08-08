import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <>
            <section className="discount py-3 px-4 md:px-8 lg:px-16" data-aos="fade-up">
                <div className="container flex flex-col md:flex-row gap-4 mx-auto">
                    {/* Birinci endirim kartı */}
                    <div className="relative w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                        <img
                            src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/banner-01.jpg"
                            alt="Yeni kolleksiya"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-black">
                            <h6 className="text-sm md:text-base font-medium tracking-wide">NEW COLLECTION</h6>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mt-2 mb-4">
                                Intensive Glow C+ <br /> Serum
                            </h3>
                            <Link to="#" className="inline-block text-white bg-black hover:bg-transparent border border-black hover:text-black transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2 mt-2">
                                Explore More
                            </Link>
                        </div>
                    </div>

                    {/* İkinci endirim kartı */}
                    <div className="relative w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                        <img
                            src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/banner-02.jpg"
                            alt="25% Endirim"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-black">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
                                25% off Everything
                            </h3>
                            <p className="text-sm md:text-base font-normal">
                                Makeup with extended range in <br /> colors for every human.
                            </p>
                            <Link to="#" className="inline-block text-white bg-black hover:bg-transparent border border-black hover:text-black transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2 mt-2">
                                Explore More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Discount;