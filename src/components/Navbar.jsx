import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // 🔥 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎨 Dynamic navbar background
  const navbarBg =
    isHome && !isScrolled
      ? "bg-gradient-to-r from-[#0b1c3d] to-[#102a6b]"
      : "bg-white shadow-md";

  const textColor =
    isHome && !isScrolled ? "text-white" : "text-gray-800";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${navbarBg}`}
    >
   <div className="max-w-7xl mx-auto px-2 md:px-0 py-5 flex items-center justify-between">
        {/* Logo */}
    <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <h1 className={`text-xl font-bold tracking-wide md:text-4xl ${textColor}`}>
    HealthCare <span className="text-blue-500">Digital Expert</span>
  </h1>
</Link>


        {/* Desktop Menu */}
        <nav className={`hidden md:flex gap-8 font-medium text-xl ${textColor}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
     <Link to="/contact">
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-bold">
          Book Appointment
        </button>
     </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${textColor}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-gray-800 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-blue-500"
              >
                {link.name}
              </NavLink>
            ))}
          <Link to="/contact">
            <button className="mt-3 bg-blue-500 py-2 rounded-lg text-white font-semibold px-2">
              Book Appointment
            </button>
          </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
