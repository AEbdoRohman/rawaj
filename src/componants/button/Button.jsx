/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({ buttonText, color, hoverBg, hoverColor, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={path}>
      <button
        className="flex items-center gap-3 text-xl font-bold rounded-full border border-gray-400 hover:text-main_text   transition-all duration-700 ease-in-out"
        style={{
          color: isHovered ? hoverColor : color,
          backgroundColor: isHovered ? hoverBg : "transparent",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className=" py-2 px-3 ">{buttonText}</span>
        <span className="bg-secondary py-2 px-2 mx-1 rounded-full  arrow-animation">
          <FaArrowLeft className="text-white" />
        </span>
      </button>
    </Link>
  );
};

export default Button;
