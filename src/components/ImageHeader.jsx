import React from "react";
import KnightCupLogoUrl from "../assets/Khight cup logo.png";

export default function ImageHeader() {
  return (
    <div>
      <div className="h-[84px] w-[923px] bg-myViolet flex items-center">
        <img className="ml-[60px]" src={KnightCupLogoUrl} alt="crown" />
      </div>
    </div>
  );
}
