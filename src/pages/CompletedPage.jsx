import React, { useEffect } from "react";
import ImageHeader from "../components/ImageHeader";
import chessFigures4 from "../assets/chessFigures4.png";
import onboardingCompletedUrl from "../assets/OnboardingCompleted.png";

export default function CompletedPage() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <div className="h-screen overflow-hidden flex font-openSans">
      <div className="image relative hidden w-[600px] lg:block xl:w-auto overflow-hidden">
        <ImageHeader />
        <div className="w-[923px]">
          <img src={chessFigures4} alt=" chess figures" />
        </div>
      </div>
      <div className="flex justify-center items-center grow">
        <img className="h-[260px] w-[402px]" src={onboardingCompletedUrl} alt="Onboarding Completed" />
      </div>
    </div>
  );
}
