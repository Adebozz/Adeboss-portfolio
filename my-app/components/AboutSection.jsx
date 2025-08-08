const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-sky-600 dark:text-sky-400">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 max-w-xl text-gray-700 dark:text-gray-300">
        I’m a passionate developer creating beautiful, functional, and
        user-friendly web applications.
      </p>
    </section>
  );
};

export default HomeSection;
