import axios from "axios";

const post = async (url) => {
  try {
    const body = {
      name: sessionStorage.getItem("name"),
      email: sessionStorage.getItem("email"),
      phone: sessionStorage.getItem("phone"),
      date_of_birth: new Date(sessionStorage.getItem("date")).toLocaleDateString().toString(),
      experience_level: sessionStorage.getItem("knowledgeLevel"),
      already_participated: sessionStorage.getItem("participated") !== "No",
      character_id: sessionStorage.getItem("character_id"),
    };
    const res = await axios.post(url, body, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.status === 201) {
      return "success";
    }
    return "fail";
  } catch (err) {
    // console.log(err);
    return "fail";
  }
};

export default post;
