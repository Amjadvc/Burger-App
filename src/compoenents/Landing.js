import landingImage from "../imges/landingImage.png";
import MyButton from "./MyButton";

function Landing() {
  return (
    // Landing Section

    <section className="Landing pt-48 pb-24  bg-primary md:pt-80 ">
      <div className="contanir pl-4 pr-4 ml-auto mr-auto  xl:w-contanerxl  lg:max-w-6xl md:w-contanermd  ">
        <div
          className=" w-60  md:w-auto   mx-auto grid grid-cols-1 md:grid-cols-2  md:items-center 
          gap-y-10 bg-primary  xl:px-28 lg:gap-x-8  md:gap-x-9 "
        >
          <div className=" text-center lg:text-left lg:mt-16 xl:mt-28">
            <h1 className="text-5xl  md:text-6xl lg:text-6xl font-bold text-secondary pb-5 lg:pb-10">
              Full Website
            </h1>

            <p className="text-white  font-bold pb-8 lg:pb-10 text-xl lg:text-3xl  ">
              Foods the most precious things
            </p>
            <MyButton title="Order Now" />
          </div>
          <div className="imge ">
            <img src={landingImage} alt="Landing " className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Landing;
