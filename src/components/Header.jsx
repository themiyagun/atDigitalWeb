import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[101.62px] bg-primary px-[80px]">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="h-[49.62px] w-[226px]" />
      </Link>
      <div>
        <ul className="flex gap-10 font-medium text-sm text-white">
          <li>SERVICES</li>
          <Link to={"/about"}>ABOUT US</Link>
          <Link to={"/contact"}>CONTACT US</Link>
          <li>CAREERS</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
