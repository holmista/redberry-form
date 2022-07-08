/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo, useEffect } from "react";
import ImageHeader from "../components/ImageHeader";
import ExperienceInfoHeader from "../components/ExperienceInfoHeader";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import ExperienceSelect from "../components/ExperienceSelect";
import CharacterSelect from "../components/CharacterSelect";
import KnowledgeDropDown from "../components/KnowledgeDropDown";
import CharacterDropDown from "../components/CharacterDropDown";
import ExperienceProgressBar from "../components/ExperienceProgressBar";
import InvalidInformationMessage from "../components/InvalidInformationMessage";
import { knowledgeContext, characterContext } from "../utils/contexts";
import isValidExperienceForm from "../utils/isValidExperienceForm";

export default function ExperiencePage() {
  const [showKnowledge, setShowKnowledge] = useState(false);
  const [knowledgeLevel, setknowledgeLevel] = useState(sessionStorage.getItem("knowledgeLevel") || "level of knowledge *");
  const [rotateKnowledge, setRotateKnowledge] = useState("rotate-0");
  const [showCharacter, setShowCharacter] = useState(false);
  const [character, setCharacter] = useState(sessionStorage.getItem("character") || "Choose your character *");
  const [rotateCharacter, setRotateCharacter] = useState("rotate-0");
  const [participated, setParticipated] = useState(sessionStorage.getItem("participated") || null);
  const [status, setStatus] = useState("experienceDefault");
  const [errors, setErrors] = useState([]);
  const [showError, setShowError] = useState(false);
  const [timer, setTimer] = useState(null);

  const knowledgeValues = useMemo(
    () => ({ setShowKnowledge, setknowledgeLevel, setRotateKnowledge }),
    [showKnowledge, knowledgeLevel, rotateKnowledge],
  );

  const characterValues = useMemo(
    () => ({ setShowCharacter, setCharacter, setRotateCharacter }),
    [showCharacter, character, rotateCharacter],
  );

  const handleNextClick = () => {
    const errs = isValidExperienceForm({
      knowledgeLevel, character, participated,
    });
    console.log(errs.length);
    if (errs.length) setShowError(true);
    setTimer(
      setTimeout(() => {
        setShowError(false);
      }, 3000),
    );
    setErrors(errs);
  };

  useEffect(() => {
    sessionStorage.setItem("knowledgeLevel", knowledgeLevel);
    sessionStorage.setItem("character", character);
    sessionStorage.setItem("participated", participated);
    const valid = knowledgeLevel && character && participated;
    if (
      valid
    ) { setStatus("experienceActive"); }
    if ((knowledgeLevel !== "level of knowledge *" || character !== "Choose your character *"
     || participated) && !valid) { setStatus("experienceActive"); }
    return () => { clearTimeout(timer); };
  }, [knowledgeLevel, character, participated]);

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
          <ExperienceProgressBar status={status} />
          {showError === true && (
            <InvalidInformationMessage
              message={errors[0].message}
              body={errors[0].body}
              show={setShowError}
            />
          )}
        </div>
        <div className={`ml-10 ${showError ? "mt-[11px]" : "mt-[115px]"}`}>
          <p className="text-[#000000] text-[32px] font-semibold">Chess experience</p>
          <p className="text-[#95939A] text-[14px] font-semibold">
            This is basic informaton fields
          </p>
        </div>
        <div className="inputs ml-10 mt-[95px]">
          <div className="selections flex flex-wrap gap-[23px]">
            <div>
              <knowledgeContext.Provider value={knowledgeValues}>
                <ExperienceSelect
                  text={knowledgeLevel}
                  rotateKnowledge={rotateKnowledge}
                />
                {showKnowledge && <KnowledgeDropDown />}
              </knowledgeContext.Provider>
            </div>
            <div>
              <characterContext.Provider value={characterValues}>
                <CharacterSelect
                  text={character}
                  rotateCharacter={rotateCharacter}
                />
                {showCharacter && <CharacterDropDown />}
              </characterContext.Provider>
            </div>
          </div>
          <p className="py-2 pl-4 mt-[88px]">Have you participated in the Redberry Championship? *</p>
          <div className="radios flex pl-4">
            <div>
              <input type="radio" id="Yes" name="champ" checked={participated === "Yes"} onChange={() => setParticipated("Yes")} />
              <label className="pl-[10px]">Yes</label>
            </div>
            <div className="pl-4">
              <input type="radio" id="No" name="champ" checked={participated === "No"} onChange={() => setParticipated("No")} />
              <label className="pl-[10px]">No</label>
            </div>
          </div>
        </div>
        <div className="buttons flex justify-between w-11/12 max-w-[775px] mt-[88px]  px-[48px]">
          <BackButton />
          <NextButton onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
}
