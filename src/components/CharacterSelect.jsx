import React, { useContext } from "react";
import PropTypes from "prop-types";
import { characterContext } from "../utils/contexts";
import dropdownUrl from "../assets/dropdown.png";

export default function CharacterSelect({ text, rotateCharacter, bg }) {
  const context = useContext(characterContext);
  const { setShowCharacter, setRotateCharacter } = context;
  const handleClick = () => {
    setShowCharacter((prev) => !prev);
    setRotateCharacter((prev) => (prev === "rotate-180" ? "rotate-0" : "rotate-180"));
  };

  return (
    <div className={`input flex items-center justify-between ${bg} w-[392px] h-[46px] border-b-2 rounded outline-none`}>
      <p className="py-2 pl-4">{text}</p>
      <button onClick={handleClick} type="button" className="pr-[19px] py-[19px]">
        <img src={dropdownUrl} alt="" className={`${rotateCharacter} transition-all duration-500`} />
      </button>
    </div>
  );
}

CharacterSelect.propTypes = {
  text: PropTypes.string.isRequired,
  rotateCharacter: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
