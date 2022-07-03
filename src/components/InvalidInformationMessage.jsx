import React from "react";

export default function InvalidInformationMessage({ message, body }) {
  return (
    <div
      className="w-[350px] h-[87px] bg-[rgba(255, 255, 255, 0.85)] grid grid-cols-1 divide-y font-openSans
    border-solid border-[1px] border-[rgba(0, 0, 0, 0.1)] rounded shadow-xl
    mt-3.5 ml-[608px]"
    >
      <div className="message flex flex-row items-center">
        <div className="pl-3 pr-2 py-[9.5px]">
          <img src="../src/assets/alert.png" alt="" />
        </div>
        <div className="text-[#DC3545] w-[271px] font-semibold text-sm">
          {message}
        </div>
        <div className="pl-[14.47px]">
          <img src="../src/assets/cross.png" alt="" />
        </div>
      </div>
      <div className="body h-12 flex items-center font-normal text-[#212529] text-base">
        <div className="pl-3 ">{body}</div>
      </div>
    </div>
  );
}
