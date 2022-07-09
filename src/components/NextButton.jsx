import React from "react";
import PropTypes from "prop-types";

export default function NextButton({ onClick, text }) {
  return (
    <button
      className="bg-myBlack w-32 h-[53px] rounded-lg font-openSans text-[#ffffff] font-normal text-twenty
      flex items-center justify-evenly
      outline-offset-0 hover:outline hover:outline-4 hover:outline-myPurple"
      type="button"
      onClick={onClick}
    >
      <span>{text}</span>
      {text === "Next" && <img src="../src/assets/buttonArrow.png" alt="" />}
    </button>
  );
}

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

NextButton.defaultProps = {
  text: "Next",
};
