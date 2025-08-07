import React from 'react';

const Projects = () => {
  return (
    <div className="homepage px-6 py-12 bg-white dark:bg-gray-900" id="projects">
      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-white">PROJECTS</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        These are some of my projects, consisting of web applications, graphic designs, and user interfaces.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="sk1 p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800">
          <h5 className="text-xl font-semibold mb-2">E-commerce Website</h5>
          <p className="text-gray-700 dark:text-gray-300">
            This is an e-commerce site built with Next.js, Tailwind CSS, React.js, and PostgreSQL.
          </p>
        </div>

        <div className="sk1 p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800">
          <h5 className="text-xl font-semibold mb-2">PDF Converter</h5>
          <p className="text-gray-700 dark:text-gray-300">
            A PDF file converter that converts files to PDF and vice versa. Built with React.js, Tailwind CSS, and MongoDB for file storage.
          </p>
        </div>

        <div className="sk1 p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800">
          <h5 className="text-xl font-semibold mb-2">Food Delivery App</h5>
          <p className="text-gray-700 dark:text-gray-300">
            A food delivery site where users can order meals online for home delivery. Built using React.js, Tailwind CSS, REST API, and MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
