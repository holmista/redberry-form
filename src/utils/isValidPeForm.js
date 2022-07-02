export default function isValidPeForm(inputs) {
  const validations = [
    isValidName(inputs.name),
    isValidEmail(inputs.email),
    isValidPhone(inputs.phone)
  ];
  return validations.filter(({ message }) => message !== "valid");
}

const isValidName = (name) => {
  if (name.length >= 2) return { message: "valid" };
  return {
    message: "invalid name",
    body: "name must be at least 2 characters"
  };
};

const isValidEmail = (email) => {
  const validEnding = "@redberry.ge";
  if (email.substr(email.length - validEnding.length) === validEnding)
    return { message: "valid" };
  return {
    message: "invalid email",
    body: "email must be with redberry domain"
  };
};

const isValidPhone = (phone) => {
  const num = Number(phone);
  if (Number.isInteger(num) && phone.length === 9 && num > 0)
    return { message: "valid" };
  return { message: "invalid phone", body: "phone must contain 9 digits" };
};
