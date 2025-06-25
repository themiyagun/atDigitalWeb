import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";
import Menu from "../assets/menu.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-primary px-6 lg:px-[80px]">
        <div className="flex justify-between items-center h-[101.62px]">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-[49.62px] w-[226px]" />
          </Link>

          {/* For Desktop  */}
          <ul className="hidden md:flex gap-5 lg:gap-10 font-medium text-sm text-white">
            <Link to="/services">SERVICES</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/contact">CONTACT US</Link>
            <Link to="/careers">CAREERS</Link>
          </ul>

          {/* for mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <div>X</div> : <img src={Menu} alt="menu icon" />}
          </button>
        </div>
      </div>
      {/* mobile Menu */}
      {isOpen && (
        <div className="md:hidden  w-full h-screen flex flex-col gap-4 p-4 text-dark bg-white font-medium text-sm">
          <Link
            to="/"
            className=" hover:bg-accent1 py-2"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/services"
            className=" hover:bg-accent1 py-2"
            onClick={() => setIsOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            to="/about"
            className=" hover:bg-accent1 py-2"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className=" hover:bg-accent1 py-2"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </Link>
          <Link
            to="/careers"
            className=" hover:bg-accent1 py-2"
            onClick={() => setIsOpen(false)}
          >
            CAREERS
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
