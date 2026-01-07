const About = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">
        About HealthCare Digital Expert
      </h1>

      <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
        HealthCare Digital Expert is a healthcare-focused digital marketing and
        website solution agency helping doctors and clinics grow their online
        presence. We specialize in building modern, patient-friendly websites
        and result-driven digital marketing strategies.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower healthcare professionals with strong
            digital tools that help them attract more patients and build trust
            online.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become a trusted digital partner for doctors and clinics by
            delivering affordable, high-quality healthcare digital solutions.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Founder</h3>
          <p className="font-bold text-blue-600">Swati Kushwaha</p>
          <p className="text-gray-600 mt-2">
            Healthcare Website & Digital Marketing Specialist with experience in
            creating modern, responsive and SEO-friendly websites for medical
            professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
