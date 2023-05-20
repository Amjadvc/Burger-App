import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import FooterLinks from "./FooterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  // To Make A Page Scroll To Top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="Footer w-full  bg-primary  py-12 md:felx">
      <div className="contact   xl:w-contanerxl xl:mx-auto   pb-4 pt-44 bg-primary text-left grid grid-rows-2  mh:grid-cols-1 mh:grid-rows-3 gap-y-6 md:flex md:justify-between md:flex-1 pl-10 pr-10 md:text-left  ">
        <div className="card  col-start-1 row-start-1">
          <h3 className="  text-white text-2xl md:text-4xl pb-10  relative after:absolute  after:content-[''] md:after:top-12 after:top-10 after:left-0 after:w-20 after:h-1 after:bg-secondary">
            Menu Links
          </h3>
          <ul className="text-slate-500  text-lg">
            <li>
              <Link className=" hover:text-white" to="/" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className=" hover:text-white cursor-pointer"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <Link
                className=" hover:text-white"
                to="/menu"
                onClick={scrollToTop}
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                className=" hover:text-white"
                to="/cart"
                onClick={scrollToTop}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="card col-start-2 row-start-1  mh:row-start-2 mh:col-start-1">
          <h3
            className="  text-white text-2xl md:text-4xl pb-10  relative after:absolute
            after:content-[''] md:after:top-12 after:top-10 after:left-0 after:w-20 after:h-1 after:bg-secondary"
          >
            Our Services
          </h3>
          <ul className="text-slate-500  text-lg">
            <li>
              <FooterLinks
                links={"/"}
                content={"About Us"}
                styles="hover:text-white"
              />
            </li>
            <li>
              <FooterLinks
                links={"/"}
                content={"Delivery Information"}
                styles="hover:text-white"
              />
            </li>
            <li>
              <FooterLinks
                links={"/"}
                content={"Privacy Policy"}
                styles="hover:text-white"
              />
            </li>
            <li>
              <FooterLinks
                links={"/"}
                content={"Terms & Conditions"}
                styles="hover:text-white"
              />
            </li>
          </ul>
        </div>
        <div className="card col-start-1 row-start-2  mh:col-start-1 mh:row-start-3">
          <h3
            className=" text-white text-2xl md:text-4xl pb-10  relative after:absolute 
           after:content-[''] md:after:top-12 after:top-10 after:left-0 after:w-20 after:h-1 after:bg-secondary"
          >
            Contact Us
          </h3>
          <div>
            <FooterLinks
              content={<FontAwesomeIcon icon={faFacebook} />}
              links={"https://www.facebook.com"}
              target={"_blank"}
              styles={" hover:text-secondary text-white p-2 text-3xl"}
            />
            <FooterLinks
              content={<FontAwesomeIcon icon={faTwitter} />}
              links={"https://twitter.com/"}
              target={"_blank"}
              styles={" hover:text-secondary text-white p-2 text-3xl"}
            />
            <FooterLinks
              content={<FontAwesomeIcon icon={faInstagram} />}
              links={"https://www.instagram.com/"}
              target={"_blank"}
              styles={" hover:text-secondary text-white p-2 text-3xl"}
            />
            <FooterLinks
              content={<FontAwesomeIcon icon={faYoutube} />}
              links={"https://www.youtube.com/"}
              target={"_blank"}
              styles={" hover:text-secondary text-white p-2 text-3xl"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
