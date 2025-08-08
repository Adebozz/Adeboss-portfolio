"use client";
import ThemeToggle from "./ThemeToggle";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-center px-4"
    >
      {/* Navbar placeholder */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Content */}
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        I am a web developer passionate about creating beautiful and functional
        websites.
      </p>

      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
