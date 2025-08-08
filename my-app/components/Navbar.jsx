"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-2xl font-bold">My Portfolio</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-white dark:bg-gray-900 py-4">
          <Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      )}
    </nav>
  );
}
