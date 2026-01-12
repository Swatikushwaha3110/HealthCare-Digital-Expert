import React, { useState } from "react";
import contactImg from "../assets/img/contact.jpg"; // change image path if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center mt-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE – CONTACT FORM */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-12 border border-gray-300">
          <h1 className="text-4xl font-bold text-black text-center">
            Contact Us
          </h1>
          <p className="mb-4 text-gray-600 text-center text-lg">
            Fill the form below and we’ll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg shadow-sm
              text-black placeholder:text-black/50
              focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg shadow-sm
              text-black placeholder:text-black/50
              focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg shadow-sm
              text-black placeholder:text-black/50
              focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <textarea
              name="message"
              placeholder="Type your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-1 rounded-lg shadow-sm
              text-black placeholder:text-black/50
              focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <div className="flex gap-4 pt-1">
              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 transition
                text-white font-semibold py-3 rounded-lg"
              >
                Send Message
              </button>

              <button
                type="reset"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  })
                }
                className="w-full bg-gray-700 hover:bg-gray-800 transition
                text-white font-semibold py-3 rounded-lg"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="hidden md:block">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
