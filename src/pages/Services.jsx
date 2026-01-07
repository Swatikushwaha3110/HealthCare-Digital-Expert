const services = [
  {
    title: "Doctor & Clinic Website Design",
    desc: "Professional, responsive websites designed specifically for doctors and healthcare clinics."
  },
  {
    title: "SEO for Doctors",
    desc: "Improve your clinic’s visibility on Google and attract more patients organically."
  },
  {
    title: "Google My Business Setup",
    desc: "Optimize your clinic profile to get more local patient leads."
  },
  {
    title: "Appointment Booking System",
    desc: "Easy-to-use online appointment booking for better patient experience."
  },
  {
    title: "Social Media Marketing",
    desc: "Build trust and awareness for your clinic on social media platforms."
  },
  {
    title: "Website Maintenance",
    desc: "Regular updates, security checks, and performance optimization."
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
