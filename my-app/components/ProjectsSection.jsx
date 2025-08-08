"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const projects = [
    { title: "E-Commerce Website", desc: "Full-stack shopping platform" },
    { title: "Portfolio Website", desc: "Personal portfolio with animations" },
    { title: "Chat App", desc: "Real-time messaging app" },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{proj.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
