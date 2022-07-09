import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function BackButton({ link }) {
  return (
    <Link to={link}>
      <button
        className="w-[93px] h-[53px] px-6 py-[13px] text-[#212529]
       border-[1px] border-[#212529] rounded-lg text-openSans
       hover:bg-[#B9B4C3] hover:border-hidden outline-offset-0 hover:outline hover:outline-1 hover:outline-myPurple"
        type="button"
      >
        <span>Back</span>
      </button>
    </Link>
  );
}

BackButton.propTypes = {
  link: PropTypes.string.isRequired,
};
