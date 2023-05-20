import aboutImage from "../imges/aboutImage.png";
import MyButton from "./MyButton";
function About() {
  return (
    // About Section
    <section
      id="about"
      name="about"
      className="about pt-24 pb-24 bg-primary  md:pt-80"
    >
      <div className="contanir pl-4 pr-4 ml-auto mr-auto  xl:w-contanerxl  lg:max-w-6xl md:w-contanermd">
        <div className=" w-60  md:w-auto mx-auto grid grid-cols-1 md:grid-cols-2  md:items-center   gap-y-10 bg-primary  xl:px-28 lg:gap-x-8  md:gap-x-9 ">
          <div className="imges grid">
            <img src={aboutImage} alt="How to use" />
            <div />
          </div>
          <div className="text">
            <h4 className="text-lg  pb-2 font-bold text-secondary ">
              About use
            </h4>
            <h2 className="text-xl lg:text-4xl text-white font-bold mb-4">
              We speake the good food langauge
            </h2>
            <p className="text-gray-300 mb-10 ">
              {`  There are many variations of lorem ipsum available,byt the
                majority have sufflored atteration in form,but injected humour
                randomised words which don't look even slightly believable`}
            </p>
            <MyButton title="Order Now" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
