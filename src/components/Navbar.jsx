import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/images/strakins_logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "text-cyan-400 bg-cyan-400/10"
        : "text-gray-300 hover:text-white hover:bg-white/5"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Logo" className="w-9 h-9" />
          <div>
            <h4 className="text-xl font-bold text-white">
              Blessing<span className="text-cyan-400">.</span>
            </h4>
            <p className="text-xs text-gray-400">Full-Stack Developer</p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="ml-4 bg-gradient-to-r from-cyan-600 to-blue-600 
            text-white px-5 py-2.5 rounded-lg font-semibold text-sm 
            hover:from-cyan-700 hover:to-blue-700 transition shadow"
          >
            Start Project
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-gray-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed mt-96 inset-0 z-[998] transition ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        />

        {/* Card */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 
          w-[90%] max-w-sm bg-gray-900 border border-gray-800 
          rounded-2xl shadow-2xl transform transition-all duration-300
          ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Close */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="px-6 pb-6 space-y-4 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-xl font-semibold transition ${
                    isActive
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 
              text-white py-3 rounded-xl font-semibold shadow"
            >
              Start Project
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
