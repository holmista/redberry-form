import React from "react";

export default function BackButton({ link }) {
  return (
    <button
      className="w-[93px] h-[53px] px-6 py-[13px] text-[#212529]
       border-[1px] border-[#212529] rounded-lg text-openSans
       hover:bg-[#B9B4C3] hover:border-hidden"
      type="button"
    >
      Back
    </button>
  );
}
