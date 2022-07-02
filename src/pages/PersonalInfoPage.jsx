import React, { useState, useEffect } from "react";
import ImageHeader from "../components/ImageHeader";
import PersonalInfoInput from "../components/PersonalInfoInput";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import PersonalInfoHeader from "../components/PersonalInfoHeader";

export default function PersonalInfoPage() {
  return (
    <div className="flex">
      <div className="image relative">
        <ImageHeader />
        <PersonalInfoHeader />
        <img src="../src/assets/chessFigures2.png" alt=" chess figures" />
      </div>
      <div className="info w-[997px] bg-[#F5F5F5]">
        <div className="h-[84px] flex items-center ml-10 font-openSans font-semibold text-base">
          <p>Start creating your account</p>
        </div>
        <div className="wizard">
          <img
            className="ml-10 mt-[60px]"
            src="../src/assets/wizard.png"
            alt="wizard"
          />
        </div>
        <div className="perosnalInfo font-openSans font-semibold ml-10 mt-[115px]">
          <p className="text-[#000000] text-[32px]">Personal information</p>
          <p className="text-[#95939A] text-[14px]">
            This is basic informaton fields
          </p>
        </div>
        <div
          className="input ml-10 mt-[85px] flex flex-col w-[775px] gap-y-10
         text-openSans text-base font-normal text-[#212529] bg-[#F5F5F5]"
        >
          <PersonalInfoInput placeholder="Name *" type="text" />
          <PersonalInfoInput placeholder="Email address *" type="text" />
          <PersonalInfoInput placeholder="Phone number *" type="text" />
          <PersonalInfoInput placeholder="Date of birth *" type="date" />
        </div>
        <div className="buttons flex justify-between w-[775px] mt-[88px] ml-10 ">
          <BackButton />
          <NextButton />
        </div>
      </div>
    </div>
  );
}
