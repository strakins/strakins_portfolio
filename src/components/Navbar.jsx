import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LOGO from '../assets/images/strakins_logo.png'

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-1 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 ${
      isActive
        ? "text-white after:w-full"
        : "text-slate-400 hover:text-white after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-800 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20"
            : "bg-slate-700"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <NavLink
            to="/"
            aria-label="Blessing Akinola - Home"
            className="group flex items-center gap-1"
          >
            <img src={LOGO} className="h-10 w-10" alt="" />
            <div className="leading-tight">
              <p className="text-white font-bold text-sm tracking-tight">Blessing Akinola</p>
              <p className="text-slate-300 text-[10px] tracking-widest uppercase">Web & Mobile Dev</p>
            </div>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-300 text-slate-50 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105"
            >
              Hire Me
            </NavLink>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open mobile menu"
              className="md:hidden flex flex-col gap-1.5 p-1"
            >
              <span className="block w-5 h-0.5 bg-white rounded" />
              <span className="block w-4 h-0.5 bg-white rounded" />
              <span className="block w-5 h-0.5 bg-white rounded" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-4 top-4 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <p className="text-white font-bold text-sm">Menu</p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-slate-400 hover:text-white transition-colors text-lg leading-none"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-400/10 text-blue-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-blue-400 hover:bg-blue-300 text-slate-50 px-4 py-3 rounded-lg text-sm font-bold text-center transition-colors"
            >
              Hire Me
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
