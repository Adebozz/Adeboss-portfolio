"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomeSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-gray-900 dark:text-white"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-gray-700 dark:text-gray-300"
      >
        Crafting beautiful and functional web experiences.
      </motion.p>
    </section>
  );
}
