const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4"
    >
      <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-6">
        Contact Me
      </h2>
      <p className="max-w-xl text-gray-700 dark:text-gray-300 text-center mb-6">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent"
        ></textarea>
        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
