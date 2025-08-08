const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 px-4"
    >
      <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-6">
        Projects
      </h2>
      <p className="max-w-2xl text-gray-700 dark:text-gray-300 text-center mb-8">
        Here are some of my projects showcasing my skills in web development,
        UI design, and problem-solving.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        {/* Example Project */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-sky-500">E-commerce Website</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            A fully functional online store built with React and Stripe
            integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
