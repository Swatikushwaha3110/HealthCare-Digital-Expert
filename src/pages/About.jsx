import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import digimg from "../assets/img/digimg.jpg";
import dogimg from "../assets/img/docimg.jpg";

const About = () => {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGES */}
        <div className="relative flex flex-col items-center lg:items-start">

          {/* Image Box 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-2">
            <img
              src={dogimg}
              alt="Healthcare Practice"
              className="w-[280px] sm:w-[320px] md:w-[420px] md:h-[420px] object-cover rounded-xl"
            />
          </div>

          {/* Image Box 2 (Overlap only on md+) */}
          <div className="bg-white rounded-2xl shadow-xl p-2 mt-6 md:mt-0 md:absolute md:bottom-[-60px] md:right-[-30px]">
            <img
              src={digimg}
              alt="Marketing Growth"
              className="w-[280px] sm:w-[320px] md:w-[300px] md:h-[320px] object-cover rounded-xl"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left py-10">
          <p className="text-blue-600 font-bold mb-4 text-xl">
            About Us
          </p>

          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Smart Digital Growth <br />
            for Doctors & Healthcare Brands
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 text-base">
            HealthCare Digital Expert helps doctors, clinics, and healthcare
            professionals build a strong online presence that attracts patients
            and builds trust. From high-converting websites to result-driven
            digital marketing strategies, we empower healthcare brands to grow
            consistently in the digital world.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
            {[
              "Industry-Specific Healthcare Expertise",
              "Transparent Reporting & Growth Tracking",
              "Proven Strategies That Attract Patients",
              "100% Customized Marketing Plans",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="text-blue-600 mt-1" />
                <p className="text-gray-800 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/" className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition">
              Get Your Free Marketing Audit
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;
