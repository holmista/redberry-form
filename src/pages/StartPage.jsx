import React from "react";
import ImageHeader from "../components/ImageHeader";
import BlackButton from "../components/BlackButton";
import landingUrl from "../assets/Landing page- scrolling photo.png";

export default function StartPage() {
  return (
    <div className="flex overflow-hidden h-screen">
      <div className="image relative hidden w-[600px] lg:block xl:w-auto overflow-hidden">
        <ImageHeader />
        <div className="w-[923px]">
          <img
            src={landingUrl}
            alt="chess figure"
          />
        </div>
      </div>
      <div className="bg-myOrange w-[997px] h-[1280px]">
        <h1 className="text-eighty font-nunito text-[#ffffff] font-black ml-[85px] mt-[265px] h-[256px]">
          <div className="flex items-center mb-[16px]">
            <span>CHESS SAYS</span>
            <span className="text-twenty text-myBlack font-bold ml-[26px]">
              A LOT ABOUT
            </span>
          </div>
          <div>
            <span>WHO WE ARE</span>
          </div>
        </h1>
        <div>
          <BlackButton text="Get Started" link="/personalInfo" />
        </div>
      </div>
    </div>
  );
}
