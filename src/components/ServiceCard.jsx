const ServiceCard = ({ title, desc, image, highlight }) => {
  return (
 <div
  className={`p-6 rounded-3xl transition-all duration-300 shadow
    hover:shadow-xl hover:-translate-y-2 hover:bg-gray-100
    min-h-[400px] text-center
    ${highlight ? "bg-green-50" : "bg-white"}
  `}
>
  <img
    src={image}
    alt={title}
    className="w-35 h-35 object-contain mx-auto mb-6 drop-shadow-md"
  />

  <h3 className="text-xl font-semibold mb-3">{title}</h3>
  <p className="text-slate-600 text-sm">{desc}</p>
</div>

  );
};

export default ServiceCard;
