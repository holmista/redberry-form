import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  isValidDate,
} from "../utils/isValidPeForm";

export default function PersonalInfoPage() {
  const [name, setName] = useState(sessionStorage.getItem("name") || "");
  const [email, setEmail] = useState(sessionStorage.getItem("email") || "");
  const [phone, setPhone] = useState(sessionStorage.getItem("phone") || "");
  const [date, setDate] = useState(sessionStorage.getItem("date") || "");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState("default");
  const [showError, setShowError] = useState(false);
  const [timer, setTimer] = useState(null);

  const navigate = useNavigate();

  const handleNextClick = () => {
    const errs = isValidPeForm({
      name, email, phone, date,
    });
    if (errs.length) {
      setShowError(true);
      setTimer(
        setTimeout(() => {
          setShowError(false);
        }, 3000),
      );
      setErrors(errs);
    } else {
      navigate("/experienceInfo");
    }
  };

  useEffect(() => {
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("date", date);
    const valid = isValidPeForm({
      name, email, phone, date,
    }).length === 0;
    if (
      valid
    ) { setStatus("success"); }
    if ((name || email || phone || date) && !valid) setStatus("active");

    return () => {
      clearTimeout(timer);
    };
  }, [name, email, phone, date]);

  return (
    <div className="h-screen overflow-y-hidden flex font-openSans">
      <div className="image relative hidden w-[600px] lg:block xl:w-auto overflow-hidden">
        <ImageHeader />
        <PersonalInfoHeader />
        <div className="w-[923px]">
          <img src="../src/assets/chessFigures2.png" alt=" chess figures" />
        </div>
      </div>
      <div className="info w-[997px] relative">
        <div className="h-[84px] flex items-center ml-10 font-openSans font-semibold text-base">
          <p>Start creating your account</p>
        </div>
        <div className="wizard">
          <ProgressBar status={status} />
        </div>
        {showError === true && (
        <InvalidInformationMessage
          message={errors[0].message}
          body={errors[0].body}
          show={setShowError}
        />
        )}
        <div
          className="perosnalInfo font-openSans font-semibold ml-10 mt-[115px]"
        >
          <p className="text-[#000000] text-[32px]">Personal information</p>
          <p className="text-[#95939A] text-[14px]">
            This is basic informaton fields
          </p>
        </div>
        <div
          className="input ml-10 mt-[85px] flex flex-col w-11/12 max-w-[775px] gap-y-10
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
        <div className="buttons flex justify-between w-11/12 max-w-[775px] mt-[88px]  px-[48px]">
          <BackButton link="/" />
          <NextButton onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
}
