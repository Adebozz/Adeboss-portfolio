"use client";
import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <HomeSection />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <AboutSection />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <ProjectsSection />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
