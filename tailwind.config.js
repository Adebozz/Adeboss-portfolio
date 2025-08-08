"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    if (localStorage.theme === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      {/* Logo */}
      <div className="border p-2 text-2xl font-bold dark:text-white">
        ADE <span className="bg-gray-400 text-white px-1">BOSS</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-xl text-black dark:text-white"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black dark:text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 right-6 bg-gray-200 dark:bg-gray-800 rounded-lg p-4 flex flex-col gap-4 md:hidden">
          {["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-black dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
