"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/Logo (1).png";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

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
    <nav className="relative w-full bg-black text-white z-50 lg:py-2">
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Image src={logo} alt="PPA Logo" width={100} height={50} />

        <ul className="hidden lg:flex items-center gap-8 lg:gap-10 text-sm text-gray-300">
          {["Overview", "Curriculum", "Testimonials", "Pricing"].map((item) => (
            <li
              key={item}
              className="hover:text-white cursor-pointer transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-gray-800 rounded-full p-1">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                darkMode ? "bg-gray-700 text-white" : "text-gray-400"
              }`}
            >
              <FaMoon size={16} className="text-white" />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                !darkMode ? "bg-gray-700 text-white" : "text-gray-400"
              }`}
            >
              <IoMdSunny size={16} className="text-white" />
            </button>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-xl font-medium">
            Enroll now
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center bg-gray-800 rounded-full p-1">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                darkMode ? "bg-gray-700 text-white" : "text-gray-400"
              }`}
            >
              <FaMoon size={14} className="text-white" />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                !darkMode ? "bg-gray-700 text-white" : "text-gray-400"
              }`}
            >
              <IoMdSunny size={14} className="text-white" />
            </button>
          </div>

          <button
            className="p-2 rounded-lg text-gray-300 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
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
                className={`p-2 rounded-full transition ${
                  darkMode ? "bg-gray-700 text-white" : "text-gray-400"
                }`}
              >
                <FaMoon size={14} className="text-white" />
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition ${
                  !darkMode ? "bg-gray-700 text-white" : "text-gray-400"
                }`}
              >
                <IoMdSunny size={14} className="text-white" />
              </button>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-xl font-medium">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
