import React from "react";
import ImageHeader from "../components/ImageHeader";

export default function CompletedPage() {
  return (
    <div className="h-screen overflow-hidden flex font-openSans">
      <div className="image relative hidden w-[600px] lg:block xl:w-auto overflow-hidden">
        <ImageHeader />
        <div className="w-[923px]">
          <img src="../src/assets/chessFigures4.png" alt=" chess figures" />
        </div>
      </div>
      <div className="flex justify-center items-center grow">
        <img className="h-[260px] w-[402px]" src="../src/assets/OnboardingCompleted.png" alt="Onboarding Completed" />
      </div>
    </div>
  );
}
