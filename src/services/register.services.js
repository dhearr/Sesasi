import axios from "axios";

export const register = (user) => {
  axios
    .post("https://62.72.13.124/api/register", user)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
