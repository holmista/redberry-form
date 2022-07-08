import React from "react";
import PropTypes from "prop-types";

export default function ExperienceProgressBar({ status }) {
  return (
    <img
      className="ml-10 mt-[60px]"
      src={`../src/assets/${status}.png`}
      alt=""
    />
  );
}

ExperienceProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
};
