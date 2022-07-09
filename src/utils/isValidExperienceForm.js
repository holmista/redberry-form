const isValidKnowledgeLevel = (knowledgeLevel) => {
  if (knowledgeLevel === "level of knowledge *") return { message: "invalid knowledge", body: "please select knowledge level" };
  return { message: "valid" };
};

const isValidCharacter = (character) => {
  if (character === "Choose your character *") return { message: "invalid character", body: "please select a character" };
  return { message: "valid" };
};

const isValidParticipated = (participated) => {
  if (participated) return { message: "valid" };
  return { message: "invalid selection", body: "please select participation status" };
};

export default function isValidExperienceForm(inputs) {
  const validations = [
    isValidKnowledgeLevel(inputs.knowledgeLevel),
    isValidCharacter(inputs.character),
    isValidParticipated(inputs.participated),
  ];
  return validations.filter(({ message }) => message !== "valid");
}
