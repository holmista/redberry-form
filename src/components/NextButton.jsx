import React from "react";

export default function NextButton({ link }) {
  return (
    <button
      className="bg-myBlack w-32 h-[53px] rounded-lg font-openSans text-[#ffffff] font-normal text-twenty
      flex items-center justify-evenly
      outline-offset-0 hover:outline hover:outline-4 hover:outline-myPurple"
      type="button"
    >
      <span>Next</span>
      <img src="../src/assets/buttonArrow.png" alt="" />
    </button>
  );
}
