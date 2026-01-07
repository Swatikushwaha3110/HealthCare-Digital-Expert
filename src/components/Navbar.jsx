import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0b1c3d] to-[#102a6b]">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
<h1 className="text-white text-2xl font-bold tracking-wide">
  HealthCare <span className="text-blue-400">Digital Expert</span>
</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-400"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold">
          Book Appointment
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b1c3d] px-6 pb-6">
          <nav className="flex flex-col gap-4 text-white font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-blue-400"
              >
                {link.name}
              </NavLink>
            ))}
            <button className="mt-3 bg-blue-500 py-2 rounded-lg font-semibold">
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
