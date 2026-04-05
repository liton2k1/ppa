"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="relative w-full bg-black/95 backdrop-blur-md text-white z-50">
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide shrink-0">PPA</h1>

        {/* Center Menu — desktop */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-sm text-gray-300">
          {["Overview", "Curriculum", "Testimonials", "Pricing"].map((item) => (
            <li
              key={item}
              className="hover:text-white cursor-pointer transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right Side — desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-800 rounded-full p-1">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${darkMode ? "bg-gray-700 text-white" : "text-gray-400"}`}
            >
              <FiMoon size={14} />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${!darkMode ? "bg-gray-200 text-black" : "text-gray-400"}`}
            >
              <FiSun size={14} />
            </button>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2 rounded-xl text-sm font-medium shadow-lg shadow-blue-600/30">
            Enroll now
          </button>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 flex flex-col gap-4 border-t border-white/5">
          {["Overview", "Curriculum", "Testimonials", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center bg-gray-800 rounded-full p-1">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition ${darkMode ? "bg-gray-700 text-white" : "text-gray-400"}`}
              >
                <FiMoon size={14} />
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition ${!darkMode ? "bg-gray-200 text-black" : "text-gray-400"}`}
              >
                <FiSun size={14} />
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2 rounded-xl text-sm font-medium shadow-lg shadow-blue-600/30">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
