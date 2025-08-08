import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Add padding-top to prevent navbar overlap */}
      <section className="pt-20">
        <HomeSection />
      </section>
    </main>
  );
}
