"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col justify-center p-8 bg-white dark:bg-gray-800"
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">About Me</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl">
        I’m a passionate web developer with a focus on modern, responsive, and user-friendly designs.
      </p>
    </motion.section>
  );
}
