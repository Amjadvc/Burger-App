import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../imges/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  let [open, setOpen] = useState(false);

  // To Make A Page Scroll To Top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="shadow-md w-full fixed top-0 left-0  bg-primary z-20">
      <div className="container pl-4 pr-4 ml-auto mr-auto   xl:w-contanerxl  lg:w-contanerlg md:w-contanermd">
        <div className="sm:flex items-center justify-between bg-primary py-4 sm:px-10 px-7">
          <div className="logo w-32 cursor-pointer flex items-center ">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="max-w-full sm:w-28 mr-1 pt-2"
              />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-16 cursor-pointer sm:hidden text-secondary"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </div>
          <ul
            className={`sm:flex sm:items-center  sm:pb-0 pb-12 absolute sm:static  bg-primary  sm:z-auto z-[-1] 
          left-0 w-full sm:w-auto sm:pl-0  pl-9 transition-all  duration-500 ease-in
           [&>*]:text-white [&>*:hover]:text-secondary [&>*:hover]:duration-200 
            [&>*]:text-xl [&>*]:sm:my-0 [&>*]:my-7 [&>*]:text-left  ${
              open ? "top-36 " : "top-[-490px]"
            }`}
          >
            <li className="sm:ml-8">
              <Link to="/" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li className="sm:ml-8 cursor-pointer">
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </li>
            <li className="sm:ml-8 cursor-pointer">
              <ScrollLink to="services" smooth={true} duration={500}>
                Services
              </ScrollLink>
            </li>
            <li className="sm:ml-8">
              <Link to="/menu" onClick={scrollToTop}>
                Menu
              </Link>
            </li>
            <li className=" sm:ml-4 md:ml-8">
              <Link to="/cart" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="cart-length m-1 text-sm font-bold align-super">
                  {cart.length === 0 ? "" : cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
