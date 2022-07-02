import React from "react";
import { Link } from "react-router-dom";

export default function BlackButton({ text, link }) {
  return (
    <button
      className="bg-myBlack w-[191px] h-[53px] rounded-lg font-openSans text-[#ffffff] font-normal text-twenty
          flex items-center justify-evenly  ml-[85px] mt-[102px]  outline-offset-0 hover:outline hover:outline-4 hover:outline-myPurple"
      type="button"
    >
      <Link to={link}>
        <span>{text}</span>
      </Link>

      <img src="../src/assets/buttonArrow.png" alt="" />
    </button>
  );
}
