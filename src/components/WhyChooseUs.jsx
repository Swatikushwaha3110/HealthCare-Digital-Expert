import { Link } from "react-router-dom";
import digi1 from "../assets/img/digital1.jpg"
import digi2 from "../assets/img/digital2.jpg"
import digi3 from "../assets/img/digital3.jpg"
const WhyChooseUs = () => {
  return (
    <section className="bg-[#f2f7fd] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 font-bold mb-4 text-xl">
            Why Choose Our Healthcare Digital Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Digital Growth Solutions for Healthcare Businesses
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6 text-base">
            In today’s digital-first world, a strong online presence is essential
            for healthcare businesses. Patients search online before choosing
            doctors, clinics, or healthcare services, making digital visibility
            more important than ever.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            At Bheema Infotech, we specialize in healthcare-focused digital
            solutions that help clinics, doctors, and healthcare brands grow
            online. We manage your complete digital strategy so you can focus on
            delivering quality patient care.
          </p>

          {/* CHECK POINTS */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-slate-800 font-medium">
              <span className="text-blue-600 text-xl">✓</span>
              Conversion-focused healthcare websites
            </li>
            <li className="flex items-center gap-3 text-slate-800 font-medium">
              <span className="text-blue-600 text-xl">✓</span>
              Strong online visibility & brand presence
            </li>
            <li className="flex items-center gap-3 text-slate-800 font-medium">
              <span className="text-blue-600 text-xl">✓</span>
              Targeted digital marketing & lead generation
            </li>
          </ul>

          {/* CTA BUTTON */}
         <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition">
            Get Your Free Digital Consultation
          </button>
         </Link>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 rounded-3xl overflow-hidden shadow-lg">
            <img
              src={digi1}
              alt="Healthcare Digital Marketing"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={digi2}
              alt="Healthcare Service"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={digi3}
              alt="Patient Care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
