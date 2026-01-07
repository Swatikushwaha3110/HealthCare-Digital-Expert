const Specialties = () => {
  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Specialties We Serve
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6 text-center">
        {[
          "Dental Clinics",
          "Skin & Hair Clinics",
          "Orthopedic Doctors",
          "Gynecologists",
          "Eye Clinics",
          "Multi-Speciality Hospitals",
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
