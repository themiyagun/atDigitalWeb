import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className= " bottom-0 text-white pt-10 px-20 flex flex-col gap-10  bg-primary h-[266px] w-screen">
      <div className="flex justify-between ">
        <div className="w-6/12 flex flex-col  ">
          <img src={Logo} alt="logo" className="h-[49.62px] w-[226px]" />
          <div className="w-6/12 mt-4   ">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </div>
        </div>
        <div className="flex w-6/12 justify-between ">
          <div className="w-1/2">
            <h4>Our Technologies</h4>
            <ul>
              <li>ReactJs</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h4>Our Services</h4>
            <ul>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-center">
          <hr className="w-1/2 text-center" />
        </div>
        <div className="w-full flex justify-center">
          Privacy Policy | Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default Footer;
