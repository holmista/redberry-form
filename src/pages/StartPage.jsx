import React from "react";
import ImageHeader from "../components/ImageHeader";
import BlackButton from "../components/BlackButton";

export default function StartPage() {
  return (
    <div className="flex overflow-hidden h-screen">
      <div>
        <ImageHeader />
        <img
          className="w-[923px] h-[1196px] top-[84px] left-0"
          src="../src/assets/Landing page- scrolling photo.png"
          alt="chess figure"
        />
      </div>
      <div className="bg-myOrange w-[997px] h-[1280px]">
        <h1 className="text-eighty font-nunito text-[#ffffff] font-black ml-[85px] mt-[265px] h-[256px]">
          <div className="flex items-center mb-[16px]">
            <span>CHESS SAYS</span>
            <span className="text-twenty text-myBlack font-bold ml-[26px]">
              A LOT ABOUT
            </span>
          </div>
          WHO WE ARE
        </h1>
        <BlackButton text="Get Started" link="/personalInfo" />
      </div>
    </div>
  );
}
