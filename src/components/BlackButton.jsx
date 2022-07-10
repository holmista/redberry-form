import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import buttonArrowUrl from "../assets/buttonArrow.png";

export default function BlackButton({ text, link }) {
  return (
    <Link to={link}>
      <button
        className="bg-myBlack w-[191px] h-[53px] rounded-lg font-openSans text-[#ffffff] font-normal text-twenty
          flex items-center justify-evenly  ml-[85px] mt-[102px]  outline-offset-0 hover:outline hover:outline-4 hover:outline-myPurple"
        type="button"
      >
        <span>{text}</span>
        <img src={buttonArrowUrl} alt="" />
      </button>
    </Link>
  );
}

BlackButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
