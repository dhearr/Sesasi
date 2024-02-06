import axios from "axios";

export const api = axios.create({
  baseURL: "http://62.72.13.124/api/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
