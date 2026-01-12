import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#071a3a] to-[#030e24] text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* LEFT - ABOUT */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Healthcare <span className="text-blue-400">Digital Expert</span>
          </h2>

          <p className="text-sm leading-relaxed text-slate-400">
            We help doctors, clinics, and healthcare businesses grow through
            result-driven digital strategies. Our focus is on increasing online
            visibility, generating quality patient leads, and building long-term
            trust through healthcare-focused digital solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* CENTER - SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Our Healthcare Services
          </h3>

          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <p>Healthcare Website Design</p>
            <p>Healthcare SEO Services</p>
            <p>Google Ads & PPC Marketing</p>
            <p>Social Media Marketing</p>
            <p>Email Marketing Automation</p>
            <p>Healthcare Growth Consulting</p>
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Contact Us
          </h3>

          <div className="flex items-start gap-3 mb-4">
            <MapPin size={18} className="text-blue-400 mt-1" />
            <p className="text-sm">India | Serving Healthcare Clients Globally</p>
          </div>

          <div className="flex items-start gap-3">
            <Mail size={18} className="text-blue-400 mt-1" />
            <p className="text-sm">info@healthcaredigitalexpert.com</p>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-700 mt-14 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Healthcare Digital Expert. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
