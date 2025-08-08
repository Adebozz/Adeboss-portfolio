export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a passionate web developer who loves crafting interactive,
          responsive, and accessible applications. With a strong focus on
          performance and user experience, I strive to bring ideas to life
          using modern tools like <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>, and{" "}
          <span className="font-semibold">React</span>.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          In addition to development, I’m always exploring new technologies,
          contributing to open-source projects, and continuously improving my
          skills to stay ahead in the fast-evolving tech world.
        </p>
      </div>
    </section>
  );
}
