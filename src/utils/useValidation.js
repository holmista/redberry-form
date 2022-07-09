import { isValidPeForm } from "./isValidPeForm";
import isValidExperienceForm from "./isValidExperienceForm";

export default function useValidation() {
  const pePageValues = {
    name: sessionStorage.getItem("name") || "",
    email: sessionStorage.getItem("email") || "",
    phone: sessionStorage.getItem("phone") || "",
    date: sessionStorage.getItem("date") || "",
  };

  const expPageValues = {
    knowledgeLevel: sessionStorage.getItem("knowledgeLevel") || "level of knowledge *",
    character: sessionStorage.getItem("character") || "Choose your character *",
    participated: sessionStorage.getItem("participated") || null,
  };
  return { peValid: !(isValidPeForm(pePageValues).length > 0), expValid: !(isValidExperienceForm(expPageValues).length > 0) };
}
