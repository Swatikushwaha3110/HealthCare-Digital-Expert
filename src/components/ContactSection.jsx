const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Get in Touch
      </h2>

      <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
        <input className="w-full border p-3 rounded" placeholder="Your Name" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea className="w-full border p-3 rounded h-32" placeholder="Message"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
