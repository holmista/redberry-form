/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import ImageHeader from "../components/ImageHeader";
import ExperienceInfoHeader from "../components/ExperienceInfoHeader";
import ProgressBar from "../components/ProgressBar";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import ExperienceSelect from "../components/ExperienceSelect";

export default function ExperiencePage() {
  return (
    <div className="h-screen overflow-hidden flex font-openSans">
      <div className="image relative hidden w-[600px] lg:block xl:w-auto overflow-hidden">
        <ImageHeader />
        <ExperienceInfoHeader />
        <div className="w-[923px]">
          <img src="../src/assets/chessFigures3.png" alt=" chess figures" />
        </div>
      </div>
      <div className="info w-[997px]">
        <div className="h-[84px] flex items-center ml-10 font-openSans font-semibold text-base">
          <p>First step is done, continue to finish onboarding</p>
        </div>
        <div className="wizard">
          <ProgressBar status="active" />
        </div>
        <div className="ml-10 mt-[115px]">
          <p className="text-[#000000] text-[32px] font-semibold">Chess experience</p>
          <p className="text-[#95939A] text-[14px] font-semibold">
            This is basic informaton fields
          </p>
        </div>
        <div className="inputs ml-10 mt-[95px]">
          <div className="selections flex flex-wrap gap-[23px]">
            <ExperienceSelect text="level of knowledge *" />
            <ExperienceSelect text="Choose your character *" />
          </div>
          <p className="py-2 pl-4 mt-[88px]">Have you participated in the Redberry Championship? *</p>
          <div className="radios flex pl-4">
            <div>
              <input type="radio" id="Yes" name="champ" />
              <label className="pl-[10px]">Yes</label>
            </div>
            <div className="pl-4">
              <input type="radio" id="No" name="champ" />
              <label className="pl-[10px]">No</label>
            </div>
          </div>
        </div>
        <div className="buttons flex justify-between w-11/12 max-w-[775px] mt-[88px]  px-[48px]">
          <BackButton />
          <NextButton onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
