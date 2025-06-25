import React, { useState } from "react";

const Accordian = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#FAF8FF] p-6 mt-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-xl font-medium ${isOpen && "text-primary"}`}>
          {question}
        </h3>
        <button className="text-2xl font-bold focus:outline-none">
          {isOpen ? "−" : "+"}
        </button>
      </div>
      {isOpen && (
        <p className="mt-2 text-[#6F6C90] text-lg transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Accordian;
