"use client";
import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <html lang="en" className={theme}>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-700"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {children}
      </body>
    </html>
  );
}
