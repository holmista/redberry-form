import React from "react";

export default function PersonalInfoInput({ placeholder, type, set, value }) {
  const handleChange = (e) => {
    set(e.target.value);
  };

  return (
    <input
      className="bg-[#F5F5F5] px-4 py-2 border-b-2 rounded outline-none"
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}
