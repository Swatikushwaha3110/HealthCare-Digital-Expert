const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Have a question or want to grow your clinic online?  
        Fill out the form below and we’ll get back to you soon.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            📞 Phone: +91 XXXXXXXXXX
          </p>
          <p className="text-gray-600 mb-4">
            📧 Email: info@healthcaredigitalexpert.com
          </p>
          <p className="text-gray-600">
            📍 Location: India
          </p>
        </div>

        <form className="bg-white p-8 rounded-xl shadow space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Clinic / Hospital Name"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded h-32"
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
