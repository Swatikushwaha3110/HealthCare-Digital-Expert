const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 text-center">
        {[
          "Healthcare Industry Focus",
          "Lead Generating Websites",
          "Affordable Pricing",
          "Dedicated Support",
        ].map((item, i) => (
          <div key={i} className="bg-blue-500 p-6 rounded-lg">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
