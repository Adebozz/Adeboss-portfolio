"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          MyPortfolio
        </h1>
        <ul className="flex gap-6">
          {links.map((link) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
