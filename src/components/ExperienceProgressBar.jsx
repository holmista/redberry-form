import React from "react";
import PropTypes from "prop-types";
import activeUrl from "../assets/experienceActive.png";
import defaultUrl from "../assets/experienceDefault.png";

export default function ExperienceProgressBar({ status }) { // experienceDefault
  if (status === "experienceActive") {
    return (
      <img
        className="ml-10 mt-[60px]"
        src={activeUrl}
        alt=""
      />
    );
  }
  return (
    <img
      className="ml-10 mt-[60px]"
      src={defaultUrl}
      alt=""
    />
  );
}

ExperienceProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
};
