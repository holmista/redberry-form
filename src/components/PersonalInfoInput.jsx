import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function PersonalInfoInput({
  placeholder,
  type,
  set,
  value,
  isValid,
}) {
  const [bg, setBg] = useState("bg-[#F5F5F5]");
  const handleChange = (e) => {
    set(e.target.value);
  };

  useEffect(() => {
    if (!value) setBg("bg-[#F5F5F5]");
    else if (isValid(value).message !== "valid") setBg("bg-[#FFEFEF]");
  }, [value]);

  if (isValid(value).message === "valid") {
    return (
      <div
        className="bg-[#F5F5F5] px-4 py-2 border-b-2 rounded outline-none flex
      justify-between"
      >
        <input
          className="bg-[#F5F5F5] outline-none w-[743px]"
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
        <img
          className="pl-[3px]"
          src="../src/assets/inputCheckbox.png"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className={`${bg} px-4 py-2 border-b-2 rounded outline-none`}>
      <input
        className={`${bg} outline-none w-full`}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

PersonalInfoInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isValid: PropTypes.func.isRequired,
};
