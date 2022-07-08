import React, { useContext } from "react";
import PropTypes from "prop-types";
import { knowledgeContext } from "../utils/contexts";

export default function KnowledgeSelection({ text }) {
  const { setShowKnowledge, setknowledgeLevel, setRotateKnowledge } = useContext(knowledgeContext);

  const handleClick = () => {
    setShowKnowledge((prev) => !prev);
    setknowledgeLevel(text);
    setRotateKnowledge((prev) => (prev === "rotate-180" ? "rotate-0" : "rotate-180"));
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className="bg-[#FFFFFF] text-[#000000] text-[20px] font-normal
      hover:bg-[#F7F7F9] hover:font-semibold h-[45px] px-2 pl-5 text-left"
    >
      {text}
    </button>
  );
}

KnowledgeSelection.propTypes = {
  text: PropTypes.string.isRequired,
};
