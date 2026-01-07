const Hero = () => {
  return (
    <section className="pt-28 min-h-screen flex items-center bg-gradient-to-r from-[#0b1c3d] to-[#102a6b]">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transforming Dental <br />
            Practices into Local <br />
            Power Brands
          </h1>

          <p className="text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
            We help dentists attract, convert, and retain more patients through
            strategic digital marketing. From websites to SEO, ads, and social
            media — we make your practice the #1 choice in your city.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
              Book Free Strategy Call
            </button>

            <button className="border-2 border-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
              View Services
            </button>
          </div>

          {/* Rating */}
          <div className="mt-5 text-yellow-400 text-sm">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-300 ml-2">
              5.0 Google Rating (23k+ Reviews)
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2620/2620971.png"
            alt="Dental Marketing"
            className="w-[420px] opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
