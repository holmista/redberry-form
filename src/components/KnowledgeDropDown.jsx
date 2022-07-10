import React from "react";
import KnowledgeSelection from "./KnowledgeSelection";

export default function KnowledgeDropDown() {
  return (
    <div className="w-[392px] py-5 border-[1px] border-solid border-[rgba(185, 180, 195, 0.3)] shadow-sm flex flex-col absolute bg-[#FFFFFF]">
      <KnowledgeSelection text="beginner" />
      <KnowledgeSelection text="intermediate" />
      <KnowledgeSelection text="professional" />
    </div>
  );
}
