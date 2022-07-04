import React, { useState, useEffect } from "react";
import ImageHeader from "../components/ImageHeader";
import PersonalInfoInput from "../components/PersonalInfoInput";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import PersonalInfoHeader from "../components/PersonalInfoHeader";
import InvalidInformationMessage from "../components/InvalidInformationMessage";
import ProgressBar from "../components/ProgressBar";
import {
  isValidPeForm,
  isValidName,
  isValidEmail,
  isValidPhone,
  isValidDate
} from "../utils/isValidPeForm";

export default function PersonalInfoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState("default");
  const [showError, setShowError] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleNextClick = () => {
    let errors = isValidPeForm({ name, email, phone, date });
    if (errors.length) setShowError(true);
    setTimer(
      setTimeout(() => {
        setShowError(false);
      }, 3000)
    );
    setErrors(errors);
  };

  useEffect(() => {
    if (name || email || phone || date) setStatus("active");
    if (
      status === "active" &&
      isValidPeForm({ name, email, phone, date }).length === 0
    )
      setStatus("success");
    return () => {
      clearTimeout(timer);
    };
  }, [name, email, phone, date]);

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
          <ProgressBar status={status} />
          {showError === true && (
            <InvalidInformationMessage
              message={errors[0].message}
              body={errors[0].body}
            />
          )}
        </div>
        <div
          className={`perosnalInfo font-openSans font-semibold ml-10 ${
            showError ? "mt-[11px]" : "mt-[115px]"
          }`}
        >
          <p className="text-[#000000] text-[32px]">Personal information</p>
          <p className="text-[#95939A] text-[14px]">
            This is basic informaton fields
          </p>
        </div>
        <div
          className="input ml-10 mt-[85px] flex flex-col w-[775px] gap-y-10
         text-openSans text-base font-normal text-[#212529] bg-[#F5F5F5]"
        >
          <PersonalInfoInput
            placeholder="Name *"
            type="text"
            set={setName}
            value={name}
            isValid={isValidName}
          />
          <PersonalInfoInput
            placeholder="Email address *"
            type="text"
            set={setEmail}
            value={email}
            isValid={isValidEmail}
          />
          <PersonalInfoInput
            placeholder="Phone number *"
            type="text"
            set={setPhone}
            value={phone}
            isValid={isValidPhone}
          />
          <PersonalInfoInput
            placeholder="Date of birth *"
            type="date"
            set={setDate}
            value={date}
            isValid={isValidDate}
          />
        </div>
        <div className="buttons flex justify-between w-[775px] mt-[88px] ml-10 ">
          <BackButton />
          <NextButton onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
}
