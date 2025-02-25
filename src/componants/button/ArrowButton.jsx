/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArrowButton = ({ color, hoverBg, hoverColor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className=" transition-all duration-700 ease-in-out mt-4"
      onClick={onClick}
    >
      <span
        className={` py-2 px-2 mx-1 rounded-full transition-all duration-500 ease-in-out  arrow-animation ${
          isHovered ? "bg-primary" : "bg-secondary"
        }`}
      >
        <FaArrowLeft
          style={{
            color: isHovered ? hoverColor : color,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </span>
    </button>
  );
};

export default ArrowButton;
