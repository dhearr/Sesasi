import axios from "axios";

export const login = (data) => {
  axios
    .post("https://62.72.13.124/api/login", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
