import React, { useContext } from "react";
import PropTypes from "prop-types";
import { knowledgeContext } from "../utils/contexts";
import dropdownUrl from "../assets/dropdown.png";

export default function ExperienceSelect({ text, rotateKnowledge, bg }) {
  const context = useContext(knowledgeContext);
  const { setShowKnowledge } = context;
  const { setRotateKnowledge } = context;
  const handleClick = () => {
    setShowKnowledge((prev) => !prev);
    setRotateKnowledge((prev) => (prev === "rotate-180" ? "rotate-0" : "rotate-180"));
  };

  return (
    <div className={`input flex items-center justify-between ${bg} w-[392px] h-[46px] border-b-2 rounded outline-none`}>
      <p className="py-2 pl-4">{text}</p>
      <button onClick={handleClick} type="button" className="pr-[19px] py-[19px]">
        <img src={dropdownUrl} alt="" className={`${rotateKnowledge} transition-all duration-500`} />
      </button>
    </div>
  );
}

ExperienceSelect.propTypes = {
  text: PropTypes.string.isRequired,
  rotateKnowledge: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
