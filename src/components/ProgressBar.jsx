import React from "react";

export default function ProgressBar({ status }) {
  return (
    <img
      className="ml-10 mt-[60px]"
      src={`../src/assets/${status}.png`}
      alt=""
    />
  );
}
