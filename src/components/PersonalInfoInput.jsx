import React from "react";

export default function PersonalInfoInput({ placeholder, type }) {
  return (
    <input
      className="bg-[#F5F5F5] px-4 py-2 border-b-2 rounded outline-none"
      type={type}
      placeholder={placeholder}
    />
  );
}
