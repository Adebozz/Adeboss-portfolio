"use client";
import React, { useState } from "react";
import { FaBars, FaYoutube } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(true);
  const handleOffClick = () => setMenuOpen(false);

  return (
    <div>
      <header className="flex flex-row justify-between pt-5 absolute bg-gray-400 w-full px-5">
        <div className="p-1 font-bold text-lg">
          ADE <span className="bg-white text-black px-1">BOSS</span>
        </div>

        <ul className="hidden md:flex flex-row justify-evenly pt-1 space-x-4">
          <li><a href="#home" className="hover:underline">HOME</a></li>
          <li><a href="#about" className="hover:underline">ABOUT</a></li>
          <li><a href="#skills" className="hover:underline">SKILLS</a></li>
          <li><a href="#projects" className="hover:underline">PROJECTS</a></li>
          <li><a href="#contact" className="hover:underline">CONTACT</a></li>
        </ul>

        <div className="md:hidden">
          {!menuOpen ? (
            <label onClick={handleClick} className="cursor-pointer">
              <FaBars className="text-xl" />
            </label>
          ) : (
            <label onClick={handleOffClick} className="cursor-pointer">
              <FaYoutube className="text-xl text-red-600" />
            </label>
          )}
        </div>
      </header>

      {/* Optional: Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-300 p-5 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
