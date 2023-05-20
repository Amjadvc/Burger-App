import serv1 from "../imges/serv1.png";
import serv2 from "../imges/serv2.png";
import serv3 from "../imges/serv3.png";
import ServicesCard from "./ServicesCard";
function Services() {
  return (
    // Services Section
    <section
      id="services"
      name="services"
      className="sevices pt-24 pb-20  lg:pb-28 bg-primary md:pt-72"
    >
      <div className="container pl-4 pr-4 ml-auto mr-auto  xl:w-contanerxl  lg:w-contanerlg md:w-contanermd ">
        <div className="mx-auto ">
          <div className="text">
            <h4 className="text-lg  pb-2 font-bold text-secondary ">
              services
            </h4>
            <h2 className="text-xl lg:text-4xl text-white font-bold mb-4">
              We speake the good food langauge
            </h2>
          </div>
          {/* Services Cards Container  */}
          <div className="cards pt-16 pb-10 grid grid-cols-3 gap-x-6 justify-center justify-items-center mi:grid-cols-1 gap-y-12  ">
            <ServicesCard title="order" src={serv1} />
            <ServicesCard title="Shopping" src={serv2} />
            <ServicesCard title="Delivered" src={serv3} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
