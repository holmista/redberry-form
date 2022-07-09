import React, { useContext } from "react";
import PropTypes from "prop-types";
import { characterContext } from "../utils/contexts";

export default function CharacterSelection({ name, url }) {
  const { setShowCharacter, setCharacter, setRotateCharacter } = useContext(characterContext);

  const handleClick = () => {
    setCharacter(name);
    setRotateCharacter((prev) => (prev === "rotate-180" ? "rotate-0" : "rotate-180"));
    setShowCharacter(false);
  };

  return (
    <div className="flex justify-between mt-4 items-center cursor-pointer hover:bg-[#F7F7F9]" onClick={handleClick}>
      <p className="font-normal text-twenty pl-[28px]">
        {name}
      </p>
      <div className="pr-[11px]">
        <img className="float-left w-[100px] h-[72px] object-cover rounded" src={`https://chess-tournament-api.devtest.ge${url}`} alt={`${name}`} />
      </div>
    </div>
  );
}

CharacterSelection.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
