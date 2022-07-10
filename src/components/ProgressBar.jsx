import React from "react";
import PropTypes from "prop-types";
import defaultUrl from "../assets/default.png";
import activeUrl from "../assets/active.png";
import successUrl from "../assets/success.png";

export default function ProgressBar({ status }) {
  if (status === "default") {
    return (
      <img
        className="ml-10 mt-[60px]"
        src={defaultUrl}
        alt=""
      />
    );
  }
  if (status === "active") {
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
      src={successUrl}
      alt=""
    />
  );
}

ProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
};
