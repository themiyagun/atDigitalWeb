import React from "react";
import Button from "./Button";
import HERO_IMG from "../assets/heroimg.jpg";
import COMP_IMG from "../assets/comp.png";
import SEARCH_IMG from "../assets/search.png";
import Accordian from "./Accordian";
import { faqData } from "../utills/constants";


const Home = () => {
  

  return (
    <div>
      {/* hero section */}
      <div>
        <img src={HERO_IMG} alt="heroimg" className="h-[700px] w-full" />
      </div>
      <div className="absolute left-20 bottom-0 w-[630px] h-[306px] bg-gradient-to-r from-darkColor2 to-analogousColor2">
        <h1 className="text-5xl font-bold text-white px-10 pt-6">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <div className="px-10 py-6 ">
          <Button btnName={"Get free consultation"}></Button>
        </div>
      </div>
      {/* ---------- */}

      <div className="px-[188px] pt-[80px]">
        {/* Section-1 */}
        <div className="flex items-center">
          <div className="w-5/12">
            <img src={COMP_IMG} alt="compimg" />
          </div>
          <div className="w-7/12">
            <div className="text-justify pl-28">
              <h3 className="font-bold text-2xl text-primary">
                Web & Mobile App Development
              </h3>
              <p className="text-[16px] my-5">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <Button btnName={"Learn More"}></Button>
            </div>
          </div>
        </div>

        {/* ---------------- */}
        {/* Section 2 */}

        <div className="flex items-center">
          <div className="w-7/12">
            <div className="text-justify pr-28">
              <h3 className="font-bold text-2xl text-primary">
                Web & Mobile App Development
              </h3>
              <p className="text-[16px] my-5">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <Button btnName={"Learn More"}></Button>
            </div>
          </div>
          <div className="w-5/12">
            <img src={SEARCH_IMG} alt="compimg" />
          </div>
        </div>

        {/* ------------------ */}
        {/* Accordian */}
        <div className="max-w-8/12 mx-auto px-4 py-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">
            Frequently asked questions
          </h3>
          {faqData.map((item, index) => (
            <Accordian
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
