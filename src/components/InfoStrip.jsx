import { Phone, Clock, Mail } from "lucide-react";

const InfoStrip = () => {
  return (
    <section className="bg-[#050f4e]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 text-white gap-8">

        {/* Item 1 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left md:border-r border-blue-300/40 md:pr-8">
          <Phone size={44} className="text-white" />
          <div>
            <h4 className="text-lg font-semibold">
              Appointments Generated
            </h4>
            <p className="text-white text-sm">
              12,450+
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left md:border-r border-blue-300/40 md:px-8">
          <Clock size={44} className="text-white" />
          <div>
            <h4 className="text-lg font-semibold">
              Opening Hours
            </h4>
            <p className="text-white text-sm">
              Mon to Sat 08:00 – 20:00
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left md:pl-8">
          <Mail size={44} className="text-white" />
          <div>
            <h4 className="text-lg font-semibold">
              Email Us
            </h4>
            <p className="text-white text-sm break-all">
              contact@healthcaredigitalexpert.com
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoStrip;
