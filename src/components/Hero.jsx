import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import hero1 from "../assets/img/img-1.jpg";
import hero2 from "../assets/img/img-2.jpg";
import hero3 from "../assets/img/img-3.jpg";

const bgImages = [hero1, hero2, hero3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Smart Digital Solutions <br />
            for Doctors & <br />
            Healthcare Professionals
          </h1>

          <p className="mb-8 text-lg sm:text-base leading-relaxed tracking-wide">
            Bheema Infotech provides customized website and digital marketing
            solutions for doctors who want to build a strong online identity.
            We combine technology, design, and strategy to help your practice
            stand out and succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/contact">
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-bold transition">
                Book Free Strategy Call
              </button>
            </Link>

            <Link to="/services">
              <button className="border-2 border-blue-400 px-6 py-4 rounded-lg font-semibold hover:bg-blue-500 transition">
                View Services
              </button>
            </Link>
          </div>

          <div className="mt-5 text-yellow-400 text-sm">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-200 ml-2">
              5.0 Google Rating (23k+ Reviews)
            </span>
          </div>
        </div>

         </div>
    </section>
  );
};

export default Hero;
