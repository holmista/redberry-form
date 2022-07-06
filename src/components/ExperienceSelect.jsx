import React from "react";
import PropTypes from "prop-types";

export default function ExperienceSelect({ text }) {
  return (
    <div className="input flex items-center justify-between bg-[#FFFFFF] w-[392px] h-[46px] border-b-2 rounded outline-none">
      <p className="py-2 pl-4">{text}</p>
      <button type="button" className="pr-[19px] py-[19px]">
        <img src="../src/assets/dropdown.png" alt="" />
      </button>
    </div>
  );
}

ExperienceSelect.propTypes = {
  text: PropTypes.string.isRequired,
};
