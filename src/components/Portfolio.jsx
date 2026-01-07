const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Our Work</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {["Dental Website", "Clinic Website", "Hospital Website"].map(
          (item, i) => (
            <div
              key={i}
              className="border p-6 rounded-lg shadow text-center"
            >
              {item}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
