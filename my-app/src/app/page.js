"use client";
import React from "react";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import ProjectsSection from "../../components/ProjectsSection";
import ContactSection from "../../components/ContactSection";


export default function Page() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    

      {/* Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center text-blue">
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

     
    </main>
  );
}
