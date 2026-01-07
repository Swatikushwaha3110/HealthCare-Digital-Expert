const services = [
  "Doctor & Clinic Website Design",
  "SEO for Doctors",
  "Google My Business Setup",
  "Appointment Booking System",
  "Social Media Marketing",
  "Website Maintenance",
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
