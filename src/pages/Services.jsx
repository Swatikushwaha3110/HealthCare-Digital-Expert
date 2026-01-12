import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/servicesData";

const Services = () => {
  return (
    <section className="py-25 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-blue-500 font-bold mb-3 text-xl">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Smart Digital Solutions for Healthcare Growth
          </h2>

          <p className="text-slate-500 text-base">
            We help doctors, clinics, and healthcare brands grow online through
            performance-driven digital marketing strategies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
